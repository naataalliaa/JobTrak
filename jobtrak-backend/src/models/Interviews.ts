import mongoose, { Schema, Document } from "mongoose";

export interface Interview extends Document {
  // _id: string;
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
  user: { type: String, required: true }, 
  status: { type: String, required: true },
});

// Create and export the Interview model
export const Interview = mongoose.model<Interview>('Interview', interviewSchema);
