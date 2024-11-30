import express, { Request, Response } from "express";
import User from "../models/user";
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/login", async (req: Request, res: Response) => {
  const { username, password }: { username: string; password: string } = req.body;

  const user = await User.findOne({ username });

  if (!user) return res.status(400).send("Invalid username.");

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) return res.status(400).send("Invalid password.");

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string); // Use 'as string' for type assertion

  res.send({ token });
});

router.post("/register", async (req: Request, res: Response) => {
  try {
    const { username, password }: { username: string; password: string } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      username,
      password: hashedPassword,
    });

    const savedUser = await user.save();
    res.json({
      message: "User registered successfully",
      userId: savedUser._id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
