import axios from 'axios';
import { IInterview } from '../components/types/interviewTypes';

const API_URL = "http://localhost:5002/api";

export const fetchInterviews = async (): Promise<IInterview[]> => {
  const res = await axios.get(`${API_URL}/`);
  return res.data;
};

export const addInterview = async (interview: Omit<IInterview, '_id'>): Promise<IInterview> => {
  const { user, companyName, ...rest } = interview;

  // Debug log to ensure data integrity
  console.log('Adding interview with data:', { user, companyName, ...rest });

  if (!user || !companyName || !rest.interviewDate || !rest.status) {
    throw new Error('Missing required fields: user, companyName, interviewDate, or status.');
  }

  const res = await axios.post(`${API_URL}/find/${user}/${companyName}`, rest);
  return res.data;
};


export const deleteInterview = async (user: string, company: string, id: string): Promise<void> => {
  await axios.delete(`${API_URL}/find/${user}/${company}/${id}`); // Fix: Include id in the URL
};