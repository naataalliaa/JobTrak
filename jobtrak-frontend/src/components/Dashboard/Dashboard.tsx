import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import './Dashboard.css';
import { IInterview } from '../types/interviewTypes';
import moment from 'moment-timezone'

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
        console.log('Fetched interviews:', response.data);
        setInterviews(response.data);
      } catch (error) {
        console.error('Error fetching interviews:', error);
      }
    };
    fetchInterviews();
  }, [currentUser]);

  // Set the default value for interviewDate to today's date in the correct format (YYYY-MM-DD)
  useEffect(() => {
    const today = moment().tz('America/Chicago').format('YYYY-MM-DD');
    //const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    setFormData((prevData) => ({
      ...prevData,
      interviewDate: today,  // Set today's date as the default
    }));
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'interviewDate' && value ? value : value, // Keep interviewDate as string
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Submit button clicked!');
    
    if (!formData.companyName || !formData.interviewDate || !formData.status) {
      console.error('Required fields are missing');
      return;
    }
  
    try {
      //const interviewDate = new Date(formData.interviewDate).toISOString();
      const interviewDate = moment(formData.interviewDate, 'YYYY-MM-DD').toISOString();
    
      const formattedFormData = {
        ...formData,
        interviewDate,  // Convert date to ISO format
        user: currentUser,  // Add user from props
      };

      console.log('Sending data to backend:', formattedFormData);

      const companyName = encodeURIComponent(formData.companyName.trim());

      // Ensure companyName is not empty
      if (!companyName) {
        console.error('Company name is required');
        return;
      }

      // POST request to backend
      const url = `http://localhost:5002/api/find/${currentUser}/${companyName}`;
      console.log('Making POST request to:', url);
  
      await axios.post(url, formattedFormData);

  
     // await axios.post('http://localhost:5002/api/find/' + currentUser + '/' + formData.companyName, formattedFormData);
    
      setFormData({
        companyName: '',
        interviewDate: new Date().toISOString().split('T')[0],
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
      <div className="form-column">
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
          placeholder="Company Name"
          required
        />
      </div>
      <div className="form-column">
        <input
          type="date"
          name="interviewDate"
          value={formData.interviewDate}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-column">
        <input
          type="text"
          name="applicationLink"
          value={formData.applicationLink}
          onChange={handleInputChange}
          placeholder="Application Link"
        />
      </div>
      <div className="form-column">
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
      </div>
    </div>

    <textarea
      name="notes"
      value={formData.notes}
      onChange={handleInputChange}
      placeholder="Notes"
    ></textarea>

    <button type="submit">Add Application</button>
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {interviews.map((interview) => {
              // Convert interviewDate to Louisiana time
              const interviewDate = interview.interviewDate
                ? moment(interview.interviewDate).tz('America/Chicago').format('MM/DD/YYYY')
                : '';
              
              return (
                <tr key={interview._id}>
                  <td>{interview.companyName}</td>
                  <td>{interviewDate}</td> {/* Render the converted date */}
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
              );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
