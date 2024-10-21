import React, { useState } from 'react';
import axios from 'axios';

interface RegistrationProps {
  onRegister: () => void;
}

const Registration: React.FC<RegistrationProps> = ({ onRegister }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5002/api/auth/register', { username, password });
      setMessage('Registration successful! Please login.');
      onRegister(); // Redirect to login after registration
    } catch (error) {
      setMessage('Error during registration. Please try again.');
    }
  };

  return (
    <div>
      {message && <div>{message}</div>}
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
