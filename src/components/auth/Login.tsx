import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  onLogin: (user: { username: string }) => void;
}

export function Login({ onLogin }: LoginProps) {
  const [creds, setCreds] = useState<{ username?: string; password?: string }>({});
  const navigate = useNavigate();

  function handleLogin() {
    // For demonstration purposes only.
    if(creds.username === 'admin' && creds.password === '123') {
      onLogin({ username: creds.username });
      navigate('/stats');
    }
  }

  return (
    <div style={{ padding: 10 }}>
      <span>Username:</span><br/>
      <input 
        type="text" 
        onChange={(e) => setCreds({...creds, username: e.target.value})}
      /><br/>
      <span>Password:</span><br/>
      <input 
        type="password" 
        onChange={(e) => setCreds({...creds, password: e.target.value})}
      /><br/><br/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}