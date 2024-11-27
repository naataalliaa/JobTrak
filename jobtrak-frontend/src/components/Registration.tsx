import React, { useState } from 'react';
import axios from 'axios';
import './Registration.css';

interface RegistrationProps {
  onRegister: () => void;
  setAuthMode: React.Dispatch<React.SetStateAction<'login' | 'register' | null>>;
}

const Registration: React.FC<RegistrationProps> = ({ onRegister, setAuthMode }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>(''); // Added confirm password state
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5002/api/auth/register', { username, password });
      
      if (response.data.token && response.data.user) {
        localStorage.setItem('token', response.data.token); // Store the token
        localStorage.setItem('currentUser', response.data.user); // Store the username
  
      setMessage('Registration successful! Please login.');
      setAuthMode('login'); // Switch to login after successful registration
    } else {
      setMessage('Error during registration. Please try again.');
    }
  } catch (error) {
    setMessage('Error during registration. Please try again.');
  }
};

  return (
    <div className="registration-container">
      <h1 className="job-application-title">
        Job Application Tracker: A Smart Website to Manage Job Applications, Interview Questions, and Offers
      </h1>

      {message && <div className="message">{message}</div>} {/* Display the message */}
      
      <form onSubmit={handleSubmit} className="registration-form">
        <input 
          className="input-field" 
          type="text" 
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
        
        <input 
          className="input-field" 
          type="password"  // Ensure this is of type 'password'
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          placeholder="Confirm Password" 
          required 
        />
        
        <button type="submit">Register</button>
      </form>

      <div className="register-link">
        <p>
          Already have an account?{' '}
          <span 
            onClick={() => setAuthMode('login')}
            className="login-link"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Registration;
