// frontend/src/services/authService.js

import axios from 'axios';

const API_URL = 'http://localhost:5000';  // Update the URL as needed based on backend config

const login = (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};

const signup = (email, password) => {
  return axios.post(`${API_URL}/signup`, { email, password });
};

const forgotPassword = (email) => {
  return axios.post(`${API_URL}/forgot-password`, { email });
};

export default {
  login,
  signup,
  forgotPassword,
};
