import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Home.css'; 

const Home: React.FC = () => {
  const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'light');
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const goToVoiceControl = () => {
    navigate('/voice-control'); 
  };

  return (
    <header className="header">
      <h1>JobTrak</h1>
      
      <button onClick={() => navigate('/')}>Home</button> 
   
      <button onClick={goToVoiceControl}>Dashboard</button> 
      
      <button>Calendar</button>
    
      <button>Settings</button>
     
      <button>Interview</button>
      
      <div className="register">
        <button>LOG IN</button>
        <button>REGISTER</button>
      </div>

      <div className="theme-switcher">
        <label className="light" title="Light Theme">
          <input 
            name="theme" 
            type="radio" 
            value="light" 
            checked={theme === 'light'}
            onChange={() => setTheme('light')}
          />
          Light
        </label>

        <label className="dark" title="Dark Theme">
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
  );
};

export default Home;

