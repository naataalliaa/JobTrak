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
  user: string; // Added user field
}

// Define form data interface
interface FormData {
  companyName: string;
  interviewDate: Date | null;
  status: string;
  applicationLink: string;
  notes: string;
  user: string; // Added user field
}

// Define props interface
interface DashboardProps {
  handleAddInterview: (interview: Omit<IInterview, '_id'>) => Promise<void>;
  currentUser: string;
}

const handleAddInterview = async (formData: FormData) => {
  const { user, companyName, interviewDate, status, applicationLink, notes } = formData; // Ensure all fields are extracted

  // Ensure the required fields are included in the request
  if (!user || !companyName || !interviewDate || !status) {
    throw new Error('Missing required fields: user, companyName, interviewDate, or status.');
  }

  const url = `http://localhost:5002/api/find/${user}/${companyName}`;
  
  try {
    await axios.post(url, {
      companyName,
      interviewDate,
      status,
      applicationLink,
      notes,
    });
  } catch (error) {
    console.error('Error adding interview:', error);
    throw error; // Re-throw the error to be handled in the component
  }
};


const Dashboard: React.FC<DashboardProps> = ({ handleAddInterview, currentUser }) => {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    interviewDate: null,
    status: '',
    applicationLink: '',
    notes: '',
    user: currentUser, // Set the user dynamically based on logged-in user
  });

  // Fetch interviews from the API
  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const response = await axios.get<Interview[]>(`http://localhost:5002/api/${currentUser}`);
        // Convert interviewDate to a Date object
        const interviewsWithDates = response.data.map((interview) => ({
          ...interview,
          interviewDate: interview.interviewDate ? new Date(interview.interviewDate) : null,
        }));
        setInterviews(interviewsWithDates);
      } catch (error) {
        console.error('Error fetching interviews:', error);
      }
    };
    fetchInterviews();
  }, [currentUser]);
  
  // Handle input changes in the form
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
  
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        name === 'interviewDate' && value
          ? new Date(value).toLocaleDateString('en-US')
          : value,
    }));
  };
  

  
// Handle form submission for adding a new interview
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
    if (!formData.interviewDate) {
      throw new Error('Interview date is required');
    }

   // Convert `interviewDate` to ISO string if it's a Date
   const formattedFormData = {
    ...formData,
    interviewDate:
      typeof formData.interviewDate === 'string'
        ? formData.interviewDate
        : formData.interviewDate.toISOString(),
  };

    setFormData({
      companyName: '',
      interviewDate: null, // Reset to `null` instead of an empty string
      status: '',
      applicationLink: '',
      notes: '',
      user: currentUser, // Reset user dynamically
    });

    // Refresh interview list after successful addition
    const response = await axios.get<Interview[]>(`http://localhost:5002/api/${currentUser}`);
    setInterviews(response.data);
  } catch (error) {
    console.error('Error adding interview:', error);
  }
};


// Handle deleting an interview
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
    {/* Form for adding new interviews */}
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
  value={
    formData.interviewDate
      ? new Date(formData.interviewDate).toISOString().split('T')[0]
      : ''
  }
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

    {/* Table of applications */}
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
      <td>
  {interview.interviewDate
    ? new Date(interview.interviewDate).toLocaleDateString('en-US')
    : 'N/A'}
</td>
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