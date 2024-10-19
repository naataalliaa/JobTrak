
import { Schema, model } from 'mongoose';

export interface IInterview {
    companyName: string;
    interviewDate: Date;
    status: string;
    applicationLink: string;
    notes?: string;
    user: string; 
    company: string;
}

export const interviewSchema = new Schema<IInterview>({
    companyName: { type: String, required: true },
    interviewDate: { type: Date, required: true },
    status: { type: String},
    applicationLink: { type: String },
    notes: { type: String },
    user: { type: String},
    company: { type: String},
});

export const Interview = model<IInterview>('Interview', interviewSchema);

