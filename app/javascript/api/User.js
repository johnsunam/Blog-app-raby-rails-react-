import axios from 'axios';

export const register = data => {
  return axios.post('/api/users/register', data);
}

export const login = data => {
  return axios.post('/api/login', data);
}

export const logout = () => {
  return axios.delete('/api/logout');
}
