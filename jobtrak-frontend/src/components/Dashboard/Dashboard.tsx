import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import './Dashboard.css';

interface Interview {
  _id: string;
  companyname: string;
  interviewDate: string;
  status: string;
  applicationLink?: string;
  notes?: string;
}

interface FormData {
  companyname: string;
  interviewDate: string;
  status: string;
  applicationLink: string;
  notes: string;
}

const Dashboard: React.FC = () => {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [formData, setFormData] = useState<FormData>({
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

      {/* Form for adding new interviews */}
      <form onSubmit={handleSubmit}>
  <div className="form-row">
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
    <select
      name="status"
      value={formData.status}
      onChange={handleInputChange}
      required
    >
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

  <button type="submit" className="submit">Add Interview</button>
</form>
      {/* Table of interviews */}
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
                <td>{interview.companyname}</td>
                <td>{interview.interviewDate}</td>
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
                  <button className="delete" onClick={() => handleDelete(interview._id)}>X</button>
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