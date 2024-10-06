import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import interviewRoutes from "./routes/interviewRoutes";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI!)
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err));

app.use('/api', interviewRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

app.get('/', (req, res) => {
    res.send('Hello World from the backend!');
  });

export const myApp = app
