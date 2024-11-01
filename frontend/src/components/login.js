// frontend/src/components/Login.js

import React, { useState } from 'react';
import authService from 'D:\\MLOps\\Full-Stack-Microservices-Application-on-Minikube\\frontend\\src\\services\\authService';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.login(email, password);
      alert('Login successful!');
      console.log(response.data);  // Handle response (e.g., store token)
    } catch (error) {
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
