import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Dashboard.css'

const Dashboard: React.FC = () => {
  const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'light');
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const Dashboard_Page = () => {
    navigate('/Dashboard_Page'); 
  };

  return (
    <header className="header">
      <h1>JobTrak</h1>
    </header>
  );
};

export default Dashboard;