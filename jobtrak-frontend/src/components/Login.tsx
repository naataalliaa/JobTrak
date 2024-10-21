import React, { useState } from 'react';
import axios from 'axios';

interface LoginProps {
  onLogin: (token: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5002/api/auth/login', { username, password });
        console.log('Response:', response.data); // Log to check the response
        onLogin(response.data.token); // Call the login function
        localStorage.setItem('token', response.data.token); // Store the token
      } catch (error) {
        setErrorMessage('Invalid credentials. Please try again.');
      }
    };

  return (
    <div>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
