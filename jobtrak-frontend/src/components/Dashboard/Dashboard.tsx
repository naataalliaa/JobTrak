import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import './Dashboard.css';
import { IInterview } from '../types/interviewTypes';

// Define interview interface
interface Interview {
  _id: string;
  companyName: string;
  interviewDate: Date | null;
  status: string;
  applicationLink?: string;
  notes?: string;
  user: string;
}

// Define form data interface
interface FormData {
  companyName: string;
  interviewDate: string;  // Keep this as a string for the form input
  status: string;
  applicationLink: string;
  notes: string;
}

interface DashboardProps {
  handleAddInterview: (interview: Omit<IInterview, '_id'>) => Promise<void>;
  currentUser: string;
}

const Dashboard: React.FC<DashboardProps> = ({ handleAddInterview, currentUser }) => {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    interviewDate: '',  // Initialize as empty string
    status: '',
    applicationLink: '',
    notes: '',
  });

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const response = await axios.get<Interview[]>(`http://localhost:5002/api/${currentUser}`);
        setInterviews(response.data);
      } catch (error) {
        console.error('Error fetching interviews:', error);
      }
    };
    fetchInterviews();
  }, [currentUser]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'interviewDate' && value ? value : value, // Keep interviewDate as string
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.companyName || !formData.interviewDate || !formData.status) {
      console.error('Required fields are missing');
      return;
    }
  
    try {
      const interviewDate = new Date(formData.interviewDate).toISOString();
  
      const formattedFormData = {
        ...formData,
        interviewDate,  // Convert date to ISO format
        user: currentUser,  // Add user from props
      };
  
      await axios.post('http://localhost:5002/api/find/' + currentUser + '/' + formData.companyName, formattedFormData);
    
      setFormData({
        companyName: '',
        interviewDate: '',
        status: '',
        applicationLink: '',
        notes: '',
      });
    
      const response = await axios.get<Interview[]>(`http://localhost:5002/api/${currentUser}`);
      setInterviews(response.data);
    } catch (error) {
      console.error('Error adding interview:', error);
    }
  };
  
  const handleDelete = async (interviewId: string) => {
    try {
      await axios.delete(`http://localhost:5002/api/find/${currentUser}/${interviewId}`);
      setInterviews((prevInterviews) =>
        prevInterviews.filter((interview) => interview._id !== interviewId)
      );
    } catch (error) {
      console.error('Error deleting interview:', error);
    }
  };

  return (
    <div className="dashboard">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
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
          <select
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="Applied">Applied</option>
            <option value="Rejected">Rejected</option>
          </select>
          <input
            type="text"
            name="applicationLink"
            value={formData.applicationLink}
            onChange={handleInputChange}
            placeholder="Application Link"
          />
        </div>

        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          placeholder="Notes"
        />

        <button type="submit" className="submit">Add Application</button>
      </form>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Interview Date</th>
              <th>Status</th>
              <th>Application Link</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {interviews.map((interview) => (
              <tr key={interview._id}>
                <td>{interview.companyName}</td>
                <td>{interview.interviewDate ? new Date(interview.interviewDate).toLocaleDateString('en-US') : ''}</td> {/* Format the date */}
                <td>{interview.status}</td>
                <td>
                  {interview.applicationLink && (
                    <a href={interview.applicationLink} target="_blank" rel="noopener noreferrer">
                      {interview.applicationLink}
                    </a>
                  )}
                </td>
                <td>{interview.notes}</td>
                <td>
                  <button
                    className="delete"
                    onClick={() => handleDelete(interview._id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
