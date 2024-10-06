import './Dashboard.css';
import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface Interview {
  _id: string;
  companyname: string;
  interviewDate: string;
  applicationLink?: string;
  notes?: string;
}

const Dashboard: React.FC = () => {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [formData, setFormData] = useState({
    companyname: '',
    interviewDate: '',
    applicationLink: '',
    notes: '',
  });

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const response = await axios.get<Interview[]>('http://localhost:5002/');
        setInterviews(response.data);
      } catch (error) {
        console.error('Error fetching interviews:', error);
      }
    };

    fetchInterviews();
  }, []); // Empty dependency array means this runs once on component mount

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post<Interview>('http://localhost:5002', formData);
      setInterviews((prevInterviews) => [...prevInterviews, response.data]);
      setFormData({
        companyname: '',
        interviewDate: '',
        applicationLink: '',
        notes: '',
      });
    } catch (error) {
      console.error('Error adding interview:', error);
    }
  };

  return (
    <div className="dashboard">
      <h1>Interview Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="companyname" 
          value={formData.companyname} 
          onChange={handleInputChange} 
          placeholder="Company Name" 
          required 
        />
        <input 
          type="date" 
          name="interviewDate" 
          value={formData.interviewDate} 
          onChange={handleInputChange} 
          required 
        />
        <input 
          type="text" 
          name="applicationLink" 
          value={formData.applicationLink} 
          onChange={handleInputChange} 
          placeholder="Application Link" 
        />
        <textarea 
          name="notes" 
          value={formData.notes} 
          onChange={handleInputChange} 
          placeholder="Notes" 
        />
        <button type="submit">Add Interview</button>
      </form>
      <ul>
        {interviews.map(interview => (
          <li key={interview._id}>
            <h2>{interview.companyname}</h2>
            <p>Date: {interview.interviewDate}</p>
            {interview.applicationLink && <p>Link: <a href={interview.applicationLink}>{interview.applicationLink}</a></p>}
            {interview.notes && <p>Notes: {interview.notes}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
