import './Dashboard.css';
import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface Interview {
  _id: string;
  companyname: string;
  interviewDate: string;
  status: string;
  applicationLink?: string;
  notes?: string;
}

const Dashboard: React.FC = () => {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [formData, setFormData] = useState({
    companyname: '',
    interviewDate: '',
    status: '',
    applicationLink: '',
    notes: '',
  });

  // Fetch interviews on component mount
  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const response = await axios.get<Interview[]>('http://localhost:5002/api');
        setInterviews(response.data);
      } catch (error) {
        console.error('Error fetching interviews:', error);
      }
    };
    fetchInterviews();
  }, []);

  // Handle form input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post<Interview>('http://localhost:5002/api', formData);
      setInterviews((prevInterviews) => [...prevInterviews, response.data]);
      setFormData({
        companyname: '',
        interviewDate: '',
        status: '',
        applicationLink: '',
        notes: '',
      });
    } catch (error) {
      console.error('Error adding interview:', error);
    }
  };

  // Handle deleting an interview
  const handleDelete = async (interviewId: string) => {
    try {
      await axios.delete(`http://localhost:5002/api/delete/${interviewId}`);
      setInterviews((prevInterviews) =>
        prevInterviews.filter(interview => interview._id !== interviewId)
      );
    } catch (error) {
      console.error('Error deleting interview:', error);
    }
  };

  return (
    <div className="dashboard">
      <h1>Interview Dashboard</h1>

      {/* Form for adding new interviews */}
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
          name="status" 
          value={formData.status} 
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

      {/* List of interviews */}
      <ul>
        {interviews.map(interview => (
          <li key={interview._id}>
            <h2>{interview.companyname}</h2>
            <p>Date: {interview.interviewDate}</p>
            <p>Status: {interview.status}</p>
            {interview.applicationLink && <p>Link: <a href={interview.applicationLink}>{interview.applicationLink}</a></p>}
            {interview.notes && <p>Notes: {interview.notes}</p>}
            <button onClick={() => handleDelete(interview._id)}>Delete Interview</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
