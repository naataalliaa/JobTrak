import mongoose, { Schema, Document } from "mongoose";
import { v4 as uuidv4 } from 'uuid'; // Import UUID for random user ID

export interface Interview extends Document {
  _id: string;
    companyName: string;
    interviewDate: Date;
    status: string;
    applicationLink: string;
    notes: string;
    user: string;
  }

// Define the schema for the interview
const interviewSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  interviewDate: { type: Date, required: true },
  applicationLink: { type: String },
  notes: { type: String }, // Make notes optional here as well
  user: { type: String, default: () => uuidv4(), required: true }, // Use UUID to generate user field
  status: { type: String, required: true },
});

// Create and export the Interview model
export const Interview = mongoose.model<Interview>('Interview', interviewSchema);
