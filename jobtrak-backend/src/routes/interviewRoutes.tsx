import { Router, Request, Response } from 'express';
import { Interview } from '../models/Interviews'; // Adjust the import path as needed
import user from '../models/user';
const mongoose = require('mongoose');

const router = Router();

// GET /api/ - Retrieve all interviews
router.get('/', async (req: Request, res: Response) => {
    try {
        const interviews = await Interview.find(); // Fetch all interviews from the database
        res.status(200).json(interviews);
    } catch (err: any) {
        console.error('Error fetching interviews:', err.message);
        res.status(500).json({ error: 'Failed to fetch interviews.' });
    }
});

router.post('/', async (req: Request, res: Response) => {
  console.log('POST request received at /api'); // Log the request
  try {
      const { companyName, interviewDate, applicationLink, notes, status } = req.body;

      // Log the request body
      console.log('Request body:', req.body);

      if (!companyName || !interviewDate || !status) {
          return res.status(400).json({
              error: 'Missing required fields: companyName, interviewDate, and status are required.',
          });
      }

      // Process the request here (e.g., save to DB, etc.)
      // Simulate saving the data (replace with actual DB logic)
      res.status(201).json({ message: 'Interview data received successfully' });

  } catch (err: any) {
      console.error('Error processing POST request:', err.message);
      res.status(500).json({ error: 'Failed to process the request' });
  }
});

// Define the type for the params in the URL
interface UserParams {
  username: string;  // Declare that the 'user' parameter is a string
}

// GET /api/:user - Retrieve interviews for a specific user
router.get('/:username', async (req: Request<{ username: string }>, res: Response) => {
  try {
      const { username } = req.params;  // Get the user from the URL parameter

      // Fetch interviews for the specified user
      const userInterviews = await Interview.find({ user: username });

      if (userInterviews.length === 0) {
          return res.status(404).json({ message: `No interviews found for ${username}` });
      }

      res.status(200).json(userInterviews);  // Return the user's interviews
  } catch (err: any) {
      //console.error(`Error fetching interviews for ${username}:`, err.message);
      res.status(500).json({ error: 'Failed to fetch interviews for the specified user.' });
  }
});

// POST /api/ - Create a new interview
router.post('/find/:user/:company', async (req: Request, res: Response) => {
  try {
      const { companyName, interviewDate, applicationLink, notes, status } = req.body;
      const { user, company } = req.params;  // Extract user and company from URL parameters

      // Validate required fields
      if (!companyName || !interviewDate || !user || !status) {
          return res.status(400).json({
              error: 'Missing required fields: companyName, interviewDate, user, and status are required.',
          });
      }

      console.log('Creating new interview:', { user, companyName, interviewDate, status });

      // Create a new interview document
      const newInterview = new Interview({
          companyName,
          interviewDate,
          applicationLink,
          notes,
          user,
          status,
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

        // Find the interview by user and companyName
        const interviewObj = await Interview.findOne({ user, companyName: company });

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

// DELETE /api/delete/:user/:company - Delete a specific interview
router.delete('/find/:user/:company/:id', async (req: Request, res: Response) => {
  try {
      const { user, company, id } = req.params;  // Extract user, company, and interview ID from URL parameters

      // Find and delete the interview document
      const interviewToDelete = await Interview.findOneAndDelete({ _id: id, user, company });

      if (!interviewToDelete) {
          return res.status(404).json({ error: 'Interview not found.' });
      }

      res.status(200).json({ message: 'Interview deleted successfully' });
  } catch (err: any) {
      console.error('Error deleting interview:', err.message);
      res.status(500).json({ error: 'Failed to delete interview.' });
  }
});
export default router;
