import axios from 'axios';

axios.defaults.baseURL = 'https://aqua-backend-ieu7.onrender.com';

export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

//==========================Authorization

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
  await axios.post('/users/logout');
};

export const refreshCurrentUser = async () => {
  const { data } = await axios.get('/users/current');
  return data;
};

export const updateUserAvatar = async newAvatar => {
  const formData = new FormData();
  formData.append('avatar', newAvatar);
  const { data } = await axios.patch('users/avatar', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data.avatarURL;
};

export const updateUserInfo = async formData => {
  const { data } = await axios.patch('/users/update-user', formData);
  return data;
};

export const updateWaterNorma = async newWaterRate => {
  const { data } = await axios.put('/users/water-rate', newWaterRate);
  return data;
};

//==========================WaterData

export const addWater = async newWater => {
  const { data } = await axios.post('/water', newWater);
  return data;
};

export const deleteWaterById = async entryId => {
  const { data } = await axios.delete(`/contacts/${entryId}`);
  return data;
};
