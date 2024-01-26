import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:3000';

export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

//==========================Authorization

export const requestUserSignUp = async formData => {
  const { data } = await axios.post('/users/signup', formData);
  setToken(data.token);
  return data;
};

export const requestUserLogin = async formData => {
  const { data } = await axios.post('/users/login', formData);
  setToken(data.token);
  return data;
};

export const requestUserLogout = async () => {
  await axios.post('/users/logout');
};

export const refreshCurrentUser = async () => {
  const { data } = await axios.get('/users/current');
  return data;
};

export const updateUserAvatar = async newAvatar => {
  const formData = new FormData();
  formData.append('avatar', newAvatar);
  const { data } = await axios.patch('users/avatars', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data.avatarURL;
};

//==========================WaterData
