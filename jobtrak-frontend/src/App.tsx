import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import InterviewForm from './components/InterviewForm';
import InterviewList from './components/InterviewList';
import { IInterview } from './components/types/interviewTypes';
import { addInterview, fetchInterviews } from './api/interviewAPI';
import axios from 'axios';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css'; 


const API_URL = "http://localhost:5002/api";

const App: React.FC = () => {
  const [interviews, setInterviews] = useState<IInterview[]>([]);
  const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'light');

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
        !(interview.user === user && interview.companyName === company)
      )
    );
  };

  // Update theme in the document and localStorage
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <Router>
      <div>
        <header className="header">
          <h1>JobTrak</h1>
          <h3>Dashboard</h3>
          <h2>Interview</h2>
          <h2>Log in</h2>
          
         {/* Theme Switcher */}
<div className="theme-switcher">
  <label className={`light ${theme === 'light' ? 'active' : ''}`} title="Light Theme">
    <input
      name="theme"
      type="radio"
      value="light"
      checked={theme === 'light'}
      onChange={() => setTheme('light')}
    />
    Light
  </label>

  <label className={`dark ${theme === 'dark' ? 'active' : ''}`} title="Dark Theme">
    <input
      name="theme"
      type="radio"
      value="dark"
      checked={theme === 'dark'}
      onChange={() => setTheme('dark')}
    />
    Dark
  </label>
</div>

        </header>

        
        {/* <InterviewForm onAdd={handleAddInterview} /> */}


        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/interview" element={<InterviewList interviews={interviews} onDelete={deleteInterview} />} />
          <Route path="/add-interview" element={<InterviewForm onAdd={handleAddInterview} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
