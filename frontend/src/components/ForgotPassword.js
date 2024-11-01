// frontend/src/components/ForgotPassword.js

import React, { useState } from 'react';
import authService from 'D:\\MLOps\\Full-Stack-Microservices-Application-on-Minikube\\frontend\\src\\services\\authService';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.forgotPassword(email);
      alert('Password reset link sent!');
      console.log(response.data);
    } catch (error) {
      alert('Failed to send reset link: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleForgotPassword}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
