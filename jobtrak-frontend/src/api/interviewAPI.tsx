import axios from 'axios';
import { IInterview } from '../components/types/interviewTypes';



const API_URL = "http://localhost:5002/api";

export const fetchInterviews = async (): Promise<IInterview[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addInterview = async (interview: Omit<IInterview, '_id'>): Promise<IInterview> => {
  const res = await axios.post(`${API_URL}/`, interview);
  return res.data;
};

export const deleteInterview = async (user: string, company: string): Promise<void> => {
  await axios.delete(`${API_URL}/delete/${user}/${company}`);
};