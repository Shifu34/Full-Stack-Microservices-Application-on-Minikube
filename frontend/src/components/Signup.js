// frontend/src/components/Signup.js

import React, { useState } from 'react';
import authService from 'D:\\MLOps\\Full-Stack-Microservices-Application-on-Minikube\\frontend\\src\\services\\authService';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.signup(email, password);
      alert('Signup successful!');
      console.log(response.data);  // Handle response (e.g., store token)
    } catch (error) {
      alert('Signup failed: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
