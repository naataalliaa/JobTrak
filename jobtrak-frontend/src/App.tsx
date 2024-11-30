// App.tsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import InterviewList from './components/InterviewList';
import Dashboard from './components/Dashboard/Dashboard'; 
import Login from './components/Login';
import Registration from './components/Registration';
import './App.css';
import axios from 'axios';
import { IInterview, OmitInterview } from './components/types/interviewTypes';
import { addInterview, fetchInterviews } from './api/interviewAPI';
import { AuthProvider } from './components/AuthContent';
import Interview from './components/Interview/Interview';
import Amazon from './components/Interview/Companies/Amazon';
import Google from './components/Interview/Companies/Google';
import Apple from './components/Interview/Companies/Apple';
import Netflix from './components/Interview/Companies/Netflix';
import Spotify from './components/Interview/Companies/Spotify';
import GitHub from './components/Interview/Companies/GitHub';
import Microsoft from './components/Interview/Companies/Microsoft';
import Uber from './components/Interview/Companies/Uber';
import Nvidia from './components/Interview/Companies/Nvidia';
import Meta from './components/Interview/Companies/Meta';
import Tesla from './components/Interview/Companies/Tesla';
import Paypal from './components/Interview/Companies/Paypal';
import Oracle from './components/Interview/Companies/Oracle';
import PaloAlto from './components/Interview/Companies/PaloAlto';
import Micron from './components/Interview/Companies/Micron';
import Intel from './components/Interview/Companies/Intel';
import Qualcomm from './components/Interview/Companies/Qualcomm';
import Cisco from './components/Interview/Companies/Cisco';


const API_URL = "http://localhost:5002/api"; 

const App: React.FC = () => {
  const [interviews, setInterviews] = useState<IInterview[]>([]);
  const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'light');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<'login' | 'register' | null>(null);
  const [currentUser, setCurrentUser] = useState<string>(localStorage.getItem('currentUser') || '');

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
      prevInterviews.filter((interview) =>
        !(interview.user === user && interview.companyName === company)
      )
    );
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleLogin = (token: string, user: string) => {
    setIsAuthenticated(true);
    localStorage.setItem('token', token);
    localStorage.setItem('currentUser', user);
    setAuthMode(null);
  };

  const handleRegister = () => {
    setAuthMode('login'); // Switch to login after registering
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    setAuthMode(null); // Close any open authentication forms
  };

  return (
    <AuthProvider>
      <Router>
        <div>
          <header className="header">
              <h1>JobTrak</h1>
            <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3>DASHBOARD</h3>
            </Link>
            <Link to="/interview" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3>INTERVIEW</h3>
            </Link>
            {isAuthenticated ? (
              <h2 onClick={handleLogout} style={{ cursor: 'pointer' }}>
                Log out
              </h2>
            ) : (
              <h2
                onClick={() => setAuthMode(prev => (prev ? null : 'login'))}
                style={{ cursor: 'pointer' }}
              >
                Log in
              </h2>
            )}

            {/* Theme Switcher */}
            <div className="theme-switcher">
              <label
                className={`light ${theme === 'light' ? 'active' : ''}`}
                title="Light Theme"
              >
                <input
                  name="theme"
                  type="radio"
                  value="light"
                  checked={theme === 'light'}
                  onChange={() => setTheme('light')}
                />
                Light
              </label>
              <label
                className={`dark ${theme === 'dark' ? 'active' : ''}`}
                title="Dark Theme"
              >
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

          {/* Authentication Form */}
          {authMode && !isAuthenticated && (
            <div className="auth-form">
              {authMode === 'login' && (
                <>
                  <Login onLogin={handleLogin} setAuthMode={setAuthMode} />
                </>
              )}
              {authMode === 'register' && (
                <>
                  <Registration onRegister={handleRegister} setAuthMode={setAuthMode}/>
                </>
              )}
            </div>
          )}

          <Routes>
            {/* Interview */}
            <Route
              path="/interview"
              element={
                isAuthenticated ? (
                  <Interview />
                ) : (
                  <Navigate to= "/" />
                )
              }
            />
            
            {/* Company-specific Routes */}
            <Route path="/amazon" element={isAuthenticated ? <Amazon /> : <Navigate to="/login" />} />
            <Route path="/google" element={isAuthenticated ? <Google /> : <Navigate to="/login" />} />
            <Route path="/apple" element={isAuthenticated ? <Apple /> : <Navigate to="/login" />} />
            <Route path="/netflix" element={isAuthenticated ? <Netflix /> : <Navigate to="/login" />} />
            <Route path="/spotify" element={isAuthenticated ? <Spotify /> : <Navigate to="/login" />} />
            <Route path="/github" element={isAuthenticated ? <GitHub /> : <Navigate to="/login" />} />
            <Route path="/microsoft" element={isAuthenticated ? <Microsoft /> : <Navigate to="/login" />} />
            <Route path="/uber" element={isAuthenticated ? <Uber /> : <Navigate to="/login" />} />
            <Route path="/nvidia" element={isAuthenticated ? <Nvidia /> : <Navigate to="/login" />} />
            <Route path="/meta" element={isAuthenticated ? <Meta /> : <Navigate to="/login" />} />
            <Route path="/tesla" element={isAuthenticated ? <Tesla /> : <Navigate to="/login" />} />
            <Route path="/paypal" element={isAuthenticated ? <Paypal /> : <Navigate to="/login" />} />
            <Route path="/oracle" element={isAuthenticated ? <Oracle /> : <Navigate to="/login" />} />
            <Route path="/palo-alto" element={isAuthenticated ? <PaloAlto /> : <Navigate to="/login" />} />
            <Route path="/micron" element={isAuthenticated ? <Micron /> : <Navigate to="/login" />} />
            <Route path="/intel" element={isAuthenticated ? <Intel /> : <Navigate to="/login" />} />
            <Route path="/qualcomm" element={isAuthenticated ? <Qualcomm /> : <Navigate to="/login" />} />
            <Route path="/cisco" element={isAuthenticated ? <Cisco /> : <Navigate to="/login" />} />

            {/* Landing Page */}
            <Route
              path="/"
              element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/"/>}
            />

            {/* Dashboard and Interview Pages */}
            <Route
  path="/dashboard"
  element={isAuthenticated ? (
  
      <Dashboard handleAddInterview={handleAddInterview} currentUser={currentUser} />
    ) : (
      <Navigate to="/" />
    )
  }
/>
            <Route
              path="/interview"
              element={
                isAuthenticated ? (
                  <InterviewList interviews={interviews} onDelete={deleteInterview} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
