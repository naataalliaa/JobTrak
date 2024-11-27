import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

interface LoginProps {
  onLogin: (token: string) => void;
  setAuthMode: (mode: 'login' | 'register') => void; // Include setAuthMode as a prop
}

const Login: React.FC<LoginProps> = ({ onLogin, setAuthMode }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5002/api/auth/login', { username, password });

      // Log the response data to inspect the returned object
      console.log('Response:', response.data); 

      // Ensure the response has the token and store it in localStorage
      if (response.data.token) {
        // On successful login, store the token and username
        onLogin(response.data.token); // Call the login function
        localStorage.setItem('token', response.data.token); // Store the token
        localStorage.setItem('username', username); // Store the username (important for form submission)
        
        // Optionally, redirect or perform further actions (like navigating to a dashboard)
        // window.location.href = '/dashboard'; // Example redirect (uncomment if needed)
      } else {
        setErrorMessage('Invalid credentials. Please try again.');
      }

    } catch (error: any) {
      // Check if error.response exists to provide more specific error message
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
          className="input-field" // Added the shared class
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          className="input-field" // Added the shared class
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      <div className="register-link">
        <p>
          Don't have an account?{' '}
          <span
            onClick={() => setAuthMode('register')}
            className="register-button"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
