import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Create Axios instance
const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add any authentication tokens here if needed
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.message);
    return Promise.reject(error);
  }
);

// ============ API Endpoints ============

// Health Check
export const healthCheck = () => api.get('/health');

// Users API
export const getUsers = () => api.get('/api/users');

export const getUserById = (id) => api.get(`/api/users/${id}`);

export const createUser = (userData) => api.post('/api/users', userData);

export const updateUser = (id, userData) => api.put(`/api/users/${id}`, userData);

export const deleteUser = (id) => api.delete(`/api/users/${id}`);

// ============ Utility Functions ============

export const isApiHealthy = async () => {
  try {
    await healthCheck();
    return true;
  } catch (error) {
    console.error('API is not healthy:', error);
    return false;
  }
};

export default api;
