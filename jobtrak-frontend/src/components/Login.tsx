import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

interface LoginProps {
  onLogin: (token: string, user: string) => void;
  setAuthMode: (mode: 'login' | 'register') => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, setAuthMode }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5002/api/auth/login', { username, password });

      console.log('Response:', response.data); 

      if (response.data.token) {
        onLogin(response.data.token, username);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', username);

        console.log('Logged in User:', { token: response.data.token, username });
      } else {
        setErrorMessage('Invalid credentials. Please try again.');
      }

    } catch (error: any) {
      if (error.response) {
        setErrorMessage(error.response.data.message || 'Invalid credentials. Please try again.');
      } else {
        setErrorMessage('Network error. Please try again later.');
      }
    }
  };

  return (
    <div>
      <h1 className="job-application-title">
        Job Application Tracker: A Smart Website to Manage Job Applications, Interview Questions, and Offers
      </h1>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <input
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          className="input-field"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>

      <p className="switch-auth-text">
        Don't have an account?{' '}
        <span className="auth-mode-switch" onClick={() => setAuthMode('register')}>
          Register here
        </span>
      </p>
    </div>
  );
};

export default Login;
