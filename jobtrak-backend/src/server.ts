import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import interviewRoutes from "./routes/interviewRoutes";
import auth from "./routes/auth";
import User from "./models/user";


dotenv.config();

const app = express();
// app.use(cors());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI!)
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err));

app.use('/api', interviewRoutes);
app.use("/api/auth", auth);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

app.get('/', (req, res) => {
  res.send('Hello World from the backend!');
});

app.get('/api/:username', async (req, res) => {
  const { username } = req.params;

  try {
    // Fetch user from the database by username
    const user = await User.findOne({ username });

    // Check if user exists
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Send the user data as a response
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

export const myApp = app
