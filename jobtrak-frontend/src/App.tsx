import { useEffect, useState } from 'react';
import InterviewForm from './components/InterviewForm';
import InterviewList from './components/InterviewList';
import { IInterview } from './components/types/interviewTypes';
import { addInterview, fetchInterviews } from './api/interviewAPI';
import axios from 'axios';

const API_URL = "http://localhost:5002/api";

const App: React.FC = () => {
  const [interviews, setInterviews] = useState<IInterview[]>([]);

  useEffect(() => {
    const loadInterviews = async () => {
      const data = await fetchInterviews();
      setInterviews(data);
    };
    loadInterviews();
  }, []);

  const handleAddInterview = async (interview: Omit<IInterview, '_id'>) => {
    const newInterview = await addInterview(interview);
    setInterviews((prev) => [...prev, newInterview]);
  };

  const deleteInterview = async (user: string, company: string): Promise<void> => {
    await axios.delete(`${API_URL}/delete/${user}/${company}`);
    
    setInterviews((prevInterviews) =>
      prevInterviews.filter(interview => 
        //interview._id !== user || interview.companyName !== company
      
        //interview.user !== user || interview.companyName !== company
        !(interview.user === user && interview.companyName === company)
      )
    );
  };

  return (
    <div>
      <h1>Interview Dashboard</h1>
      <InterviewForm onAdd={handleAddInterview} />
      <InterviewList interviews={interviews} onDelete={deleteInterview} />


    </div>
  );
};

export default App;
