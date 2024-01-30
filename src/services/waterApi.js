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

//==========================Update User Data

export const updateUserAvatar = async newAvatar => {
  const formData = new FormData();
  formData.append('avatar', newAvatar);
  const { data } = await axios.patch('users/avatar', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data.avatarURL;
};

export const updateUserInfo = async formData => {
  const { data } = await axios.put('/users/update-user', formData);
  return data.user;
};

export const updateWaterNorma = async newWaterRate => {
  const dataWaterRate = {
    waterRate: newWaterRate,
  };
  const { data } = await axios.patch('/users/water-rate', dataWaterRate);
  return data.waterRate;
};

//==========================WaterData

export const addWater = async newWater => {
  const { data } = await axios.post('/water', newWater);
  return data;
};

export const deleteWaterById = async (dayId, entryId) => {
  const { data } = await axios.delete(`/water/${dayId}/${entryId}`);
  return data;
};

export const getAllWaterForToday = async () => {
  const { data } = await axios.get(`/water`);
  return data;
};

export const updateWaterById = async (dayId, entryId, body) => {
  const { data } = await axios.put(`/water/${dayId}/${entryId}`, body);
  return data;
};

//========================= Verify email
//TODO: add to slice
export const sendVerify = async token => {
  const { data } = await axios.get(`/users/verify/${token}`);
  return data;
};

//========================= Send email forgot password
//TODO: add to slice
export const sendMailForgotPass = async body => {
  const { data } = await axios.post(`/users/forgot-password`, body);
  return data;
};

//========================= Send update password
//TODO: add to slice
export const sendUpdatePass = async (token, body) => {
  const { data } = await axios.post(`/users/forgot-password/${token}`, {
    newPassword: body,
  });
  return data;
};

//========================= Resend verify email

export const resendVerifyToken = async body => {
  const { data } = await axios.post(`/users/verify`, body);
  return data;
};
