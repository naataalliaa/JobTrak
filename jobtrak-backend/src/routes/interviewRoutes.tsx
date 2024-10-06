import {Router, Request, Response} from 'express';
import {IInterview, Interview} from '../models/Interviews';


const router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
       const { companyName, interviewDate, applicationLink, notes, user} = req.body;
        const interviewObj = await Interview.collection.insertOne({ companyName: companyName, interviewDate: interviewDate, applicationLink: applicationLink, notes: notes, user: user });
        res.status(201).json(interviewObj);
    } catch (err: any) {
        res.status(500).json({error: err.message});
    } 
});

// this is example of what you should use in address, i.e. http://localhost:3000/find/Natalia/googleInterview
router.get('/find/:user/:company', async (req: Request, res: Response) => {
    try {
        const { user, company } = req.params;
        const interviewObjFromDataBase = await Interview.findOne({ user: user, companyName: company});
        res.json(interviewObjFromDataBase);
    } catch (err: any) {
        res.status(500).json({error: err.message});
    }  
});

// this is example of what you should use in address, i.e. http://localhost:3000/delete/Natalia/googleInterview
router.delete('/delete/:user/:company', async (req: Request, res: Response) => {
    try {
        const { user, company } = req.params;
        const interviewObjFromDataBase  = await Interview.findOneAndDelete({ user: user, companyName: company});
       res.json({message: 'Interview deleted successfully'});
    //    res.json(interviewObjFromDataBase);
    } catch (err: any) {
        res.status(500).json({error: err.message});
    }
});

export default router;