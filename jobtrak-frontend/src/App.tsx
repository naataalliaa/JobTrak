import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import InterviewForm from './components/InterviewForm';
import InterviewList from './components/InterviewList';
import Dashboard from './components/Dashboard/Dashboard'; 
import Login from './components/Login';
import Registration from './components/Registration';
import './App.css';
import axios from 'axios';
import { IInterview } from './components/types/interviewTypes';
import { addInterview, fetchInterviews } from './api/interviewAPI';
import { AuthProvider } from './components/AuthContent';
import Home from './components/Home/Home';
import Interview from './components/Interview/Interview';
import Amazon from './components/Interview/Companies/Amazon';
import Google from './components/Interview/Companies/Google';
import Apple from './components/Interview/Companies/Apple';
import Netflix from './components/Interview/Companies/Netflix';
import Spotify from './components/Interview/Companies/Spotify';
import GitHub from './components/Interview/Companies/GitHub';



const API_URL = "http://localhost:5002/api"; 

const App: React.FC = () => {
  const [interviews, setInterviews] = useState<IInterview[]>([]);
  const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'light');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<'login' | 'register' | null>(null);

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

  const handleLogin = (token: string) => {
    setIsAuthenticated(true);
    localStorage.setItem('token', token);
    setAuthMode(null);
  };

  const handleRegister = () => {
    setAuthMode('login'); // Switch to login after registering
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('token');
    setAuthMode(null); // Close any open authentication forms
  };

  return (
    <AuthProvider>
      <Router>
        <div>
          <header className="header">
            <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h1>Jobtrak</h1>
            </Link>
            <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3>Dashboard</h3>
            </Link>
            <Link to="/interview" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3>Interview</h3>
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
                  <Login onLogin={handleLogin} />
                  <p>
                    Don't have an account?{' '}
                    <span
                      onClick={() => setAuthMode('register')}
                      style={{ cursor: 'pointer', color: 'blue' }}
                    >
                      Register
                    </span>
                  </p>
                </>
              )}
              {authMode === 'register' && (
                <>
                  <Registration onRegister={handleRegister} />
                  <p>
                    Already have an account?{' '}
                    <span
                      onClick={() => setAuthMode('login')}
                      style={{ cursor: 'pointer', color: 'blue' }}
                    >
                      Log in
                    </span>
                  </p>
                </>
              )}
              <button onClick={() => setAuthMode(null)}>Close</button>
            </div>
          )}

          <Routes>
          {/* Home Page */}
          <Route
            path="/home"
            element={<Home />}
          />
            
          {/* Interview */}
          <Route
            path="/interview"
            element={
              isAuthenticated ? (
                <Interview />
              ) : (
                <Navigate to= "/login" />
              )
            }
          />
          <Route path="/amazon" element={<Amazon />} />
          <Route path="/google" element={<Google />} />
          <Route path="/apple" element={<Apple />} />
          <Route path="/netflix" element={<Netflix />} />
          <Route path="/spotify" element={<Spotify />} />
          <Route path="/github" element={<GitHub />} />


          {/* Landing Page */}
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/dashboard" /> : (
                <Navigate to="/home"/>
          )}
          />

            {/* Dashboard and Interview Pages */}
            <Route
              path="/dashboard"
              element={
                isAuthenticated ? (
                  <Dashboard />
                ) : (
                  <Navigate to="/login" />
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
            <Route
              path="/add-interview"
              element={
                isAuthenticated ? (
                  <InterviewForm onAdd={handleAddInterview} />
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