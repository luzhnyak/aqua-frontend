import axios from "axios";
import { IDdailyEntry, IRegisterUser, IUpdateUser } from "../types";

axios.defaults.baseURL = "https://aqua-backend-ieu7.onrender.com";
// axios.defaults.baseURL = "http://127.0.0.1:3000";

export const setToken = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  axios.defaults.headers.common.Authorization = "";
};

//==========================Authorization

export const requestUserSignUp = async (formData: IRegisterUser) => {
  const { data } = await axios.post("/users/register", formData);
  setToken(data.token);
  return data;
};

export const requestUserLogin = async (formData: IRegisterUser) => {
  const { data } = await axios.post("/users/login", formData);
  setToken(data.token);
  return data;
};

export const requestUserLogout = async () => {
  await axios.post("/users/logout");
};

export const refreshCurrentUser = async () => {
  const { data } = await axios.get("/users/current");
  return data;
};

export const refreshTokensApi = async (oldRefreshToken: string) => {
  const { data } = await axios.post("/users/refresh", {
    refreshToken: oldRefreshToken,
  });
  return data;
};

//==========================Update User Data

export const updateUserAvatar = async (newAvatar: Blob) => {
  const formData = new FormData();
  formData.append("avatar", newAvatar);
  const { data } = await axios.patch("users/avatar", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data.avatarURL;
};

export const updateUserInfo = async (formData: IUpdateUser) => {
  const { data } = await axios.put("/users/update-user", formData);

  return data.user;
};

export const updateWaterNorma = async (newWaterRate: string) => {
  const dataWaterRate = {
    waterRate: newWaterRate,
  };
  const { data } = await axios.patch("/users/water-rate", dataWaterRate);
  return data.waterRate;
};

//==========================WaterData

export const addWater = async (newWater: {
  date: string;
  water: IDdailyEntry;
}) => {
  const { data } = await axios.post("/water", newWater);
  return data;
};

export const deleteWaterById = async (dayId: string, entryId: string) => {
  const { data } = await axios.delete(`/water/${dayId}/${entryId}`);
  return data;
};

export const getAllWaterForToday = async (date: string) => {
  const { data } = await axios.get(`/water/${date}`);
  return data;
};

export const getAllWaterForMonth = async (year: string, month: string) => {
  const { data } = await axios.get(`/water/month?year=${year}&month=${month}`);
  return data;
};

export const updateWaterById = async (
  dayId: string,
  entryId: string,
  body: IDdailyEntry
) => {
  const { data } = await axios.put(`/water/${dayId}/${entryId}`, body);
  return data;
};

//========================= Verify email

export const sendVerify = async (token: string) => {
  const { data } = await axios.get(`/users/verify/${token}`);
  return data;
};

//========================= Send email forgot password

export const sendMailForgotPass = async (body: { email: string }) => {
  const { data } = await axios.post(`/users/forgot-password`, body);
  return data;
};

//========================= Send update password

export const sendUpdatePass = async (
  token: string,
  body: { newPassword: string }
) => {
  const { data } = await axios.post(`/users/forgot-password/${token}`, body);
  return data;
};

//========================= Resend verify email

export const resendVerifyToken = async (body: { email: string }) => {
  const { data } = await axios.post(`/users/verify`, body);
  return data;
};
