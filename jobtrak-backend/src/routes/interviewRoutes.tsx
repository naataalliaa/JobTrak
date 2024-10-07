import { Router, Request, Response } from 'express';
import { IInterview, Interview } from '../models/Interviews';

const router = Router();

// GET /api/ - Retrieve all interviews
router.get('/', async (req: Request, res: Response) => {
    try {
        const interviews = await Interview.find(); 
        res.status(200).json(interviews);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
});

// POST /api/ - Create a new interview
router.post('/', async (req: Request, res: Response) => {
    try {
        const { companyName, interviewDate, applicationLink, notes, user, status } = req.body;
        const interviewObj = await Interview.create({ companyName, interviewDate, applicationLink, notes, user, status });
        res.status(201).json(interviewObj);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/find/:user/:company', async (req: Request, res: Response) => {
    try {
        const { user, company } = req.params;
        const interviewObjFromDataBase = await Interview.findOne({ user: user, companyName: company });
        if (interviewObjFromDataBase) {
            res.json(interviewObjFromDataBase);
        } else {
            res.status(404).json({ message: 'Interview not found' });
        }
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE /api/delete/:user/:company - Delete a specific interview
router.delete('/delete/:user/:company', async (req: Request, res: Response) => {
    try {
        const { user, company } = req.params;
        const interviewObjFromDataBase = await Interview.findOneAndDelete({ user: user, companyName: company });
        if (interviewObjFromDataBase) {
            res.json({ message: 'Interview deleted successfully' });
        } else {
            res.status(404).json({ message: 'Interview not found' });
        }
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
