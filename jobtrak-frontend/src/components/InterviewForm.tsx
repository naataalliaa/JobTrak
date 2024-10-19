import { useState } from 'react';
import { IInterview } from './types/interviewTypes';

interface InterviewFormProps {
  onAdd: (interview: Omit<IInterview, '_id'>) => void;
}

const InterviewForm: React.FC<InterviewFormProps> = ({ onAdd }) => {
  const [formData, setFormData] = useState<Omit<IInterview, '_id'>>({
    companyName: '',
    interviewDate: new Date(),
    status: '', 
    applicationLink: '',
    notes: '',
    user: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const interviewDate = formData.interviewDate;

    onAdd({ ...formData, interviewDate });

    // Reset form fields
    setFormData({
      companyName: '',
      interviewDate: new Date(),
      status: '',
      applicationLink: '',
      notes: '',
      user: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        placeholder="Company Name"
        required
      />
      <input
        type="text"
        name="interviewDate"
        value={formData.interviewDate.toDateString()}
        onChange={handleChange}
        placeholder="Interview Date (MM/DD/YYYY)"
        required
      />
      
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
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
        onChange={handleChange}
        placeholder="Application Link"
      />
      <textarea
        name="notes"
        value={formData.notes}
        onChange={handleChange}
        placeholder="Notes"
      />
      <button type="submit">Add Interview</button>
    </form>
  );
};

export default InterviewForm;
