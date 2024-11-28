import { Router, Request, Response } from 'express';
//import { Interview } from '../models/Interviews'; // Adjust the import path as needed
import user from '../models/user';
import { Interview } from '../models/Interviews';
const mongoose = require('mongoose');

const router = Router();

// GET /api/ - Retrieve all interviews
router.get('/', async (req: Request, res: Response) => {
  try {
    const interviews = await Interview.find().select('-_id'); // Exclude _id from the result
    res.status(200).json(interviews);
  } catch (err: any) {
    console.error('Error fetching interviews:', err.message);
    res.status(500).json({ error: 'Failed to fetch interviews.' });
  }
});

router.post('/', async (req, res) => {
  console.log('POST request received at /api');
  console.log('Request Body:', req.body);

  try {
    const { companyName, interviewDate, status, user, applicationLink, notes } = req.body;

    // Validate required fields
    if (!companyName || !interviewDate || !status || !user) {
      return res.status(400).json({
        error: 'Missing required fields: companyName, interviewDate, status, and user are required.',
      });
    }

    // Convert interviewDate from MM/DD/YYYY to a valid Date object
    const dateParts = interviewDate.split('/');
    if (dateParts.length !== 3) {
      return res.status(400).json({ error: 'Invalid date format. Please use MM/DD/YYYY.' });
    }

    const formattedDate = new Date(`${dateParts[2]}-${dateParts[0]}-${dateParts[1]}`); // Convert to YYYY-MM-DD

    // Check if the formattedDate is valid
    if (isNaN(formattedDate.getTime())) {
      return res.status(400).json({ error: 'Invalid date format for interviewDate' });
    }

    console.log('Parsed Date:', formattedDate);

    // Create a new interview document
    const newInterview = new Interview({
      companyName,
      interviewDate: formattedDate,
      status,
      user,
      applicationLink,
      notes,
    });

    console.log('New Interview Object:', newInterview);

    const savedInterview = await newInterview.save();
    console.log('Interview saved:', savedInterview);

    const { _id, ...savedInterviewWithoutId } = savedInterview.toObject();

    res.status(201).json({ message: 'Interview added successfully', savedInterviewWithoutId });
  } catch (err: any) {
    console.error('Error processing POST request:', err.message);
    res.status(500).json({ error: 'Failed to save interview.' });
  }
});

// Define the type for the params in the URL
interface UserParams {
  username: string;  // Declare that the 'user' parameter is a string
}

// GET /api/:user - Retrieve interviews for a specific user
router.get("/:username", async (req: Request, res: Response) => {
  const { username } = req.params;

  try {
      // Fetch interviews for the given username
      const interviews = await Interview.find({ user: username });

      if (!interviews) {
          return res.status(404).json({ message: "No interviews found for this user" });
      }

      res.status(200).json(interviews);
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
  }
});

// POST /api/ - Create a new interview
router.post('/find/:user/:company', async (req: Request, res: Response) => {
  const { user, company } = req.params; // Extract user and company from URL parameters
  const { interviewDate, status, applicationLink, notes } = req.body;

  if (!interviewDate || !status || !user) {
    return res.status(400).json({
      error: 'Missing required fields: interviewDate, status, and user are required.',
    });
  }

  try {
    // Convert interviewDate to Date format
    const formattedDate = new Date(interviewDate);
    if (isNaN(formattedDate.getTime())) {
      return res.status(400).json({ error: 'Invalid date format for interviewDate' });
    }

    // Create a new interview document
    const newInterview = new Interview({
      companyName: company,
      interviewDate: formattedDate,
      status,
      user,
      applicationLink,
      notes,
    });

    await newInterview.save();
    res.status(201).json({ message: 'Application added' });
  } catch (err: any) {
    console.error('Error creating interview:', err.message);
    res.status(500).json({ error: 'Failed to create interview.' });
  }
});


// GET /api/find/:user/:company - Retrieve a specific interview
router.get('/find/:user/:company', async (req: Request, res: Response) => {
  try {
    const { user, company } = req.params;

    const interviewObj = await Interview.findOne({ user, companyName: company }).select('-_id');  // Exclude _id

    if (interviewObj) {
      res.status(200).json(interviewObj);
    } else {
      res.status(404).json({ message: 'Interview not found' });
    }
  } catch (err: any) {
    console.error('Error fetching interview:', err.message);
    res.status(500).json({ error: 'Failed to fetch interview.' });
  }
});



// DELETE /api/find/:user/:id - Delete a specific interview by ID
router.delete('/find/:user/:id', async (req: Request, res: Response) => {
  try {
    const { user, id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid interview ID.' });
    }

    const interviewToDelete = await Interview.findOneAndDelete({ _id: id, user });
    if (!interviewToDelete) {
      return res.status(404).json({ error: 'Interview not found.' });
    }

    const { _id, ...deletedInterviewWithoutId } = interviewToDelete.toObject(); // Exclude _id
    res.status(200).json({ message: 'Interview deleted successfully', deletedInterviewWithoutId });
  } catch (err: any) {
    console.error('Error deleting interview:', err.message);
    res.status(500).json({ error: 'Failed to delete interview.' });
  }
});


export default router;
