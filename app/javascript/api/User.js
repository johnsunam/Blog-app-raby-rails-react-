import axios from 'axios';

export const register = data => {
  return axios.post('/api/users/register', data);
}

export const login = data => {
  console.log('login', data);
  return axios.post('/api/login', data);
} 