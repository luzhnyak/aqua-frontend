import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:3000';

export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

//-----authorization-----

export const requestUserSignUp = async formData => {
  const { data } = await axios.post('/users/register', formData);
  setToken(data.token);
  return data;
};

export const requestUserLogin = async formData => {
  const { data } = await axios.post('/users/login', formData);
  setToken(data.token);
  return data;
};

export const requestUserLogout = async () => {
  const { data } = await axios.post('/users/logout');
  return data;
};

export const refreshCurrentUser = async () => {
  const { data } = await axios.get('/users/current');
  return data;
};

//--------waterData---------
