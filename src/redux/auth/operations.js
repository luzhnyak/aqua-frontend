import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  setToken,
  clearToken,
  requestUserSignUp,
  requestUserLogin,
  requestUserLogout,
  refreshCurrentUser,
  updateUserAvatar,
  updateUserInfo,
  updateWaterNorma,
} from 'services/waterApi';
import { handleApiError } from 'services/handleApiError';

export const signUpThunk = createAsyncThunk(
  'auth/register',
  async (formData, thunkApi) => {
    try {
      const response = await requestUserSignUp(formData);
      return response;
    } catch (error) {
      const errorObj = handleApiError(error);
      return thunkApi.rejectWithValue(errorObj);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (formData, thunkApi) => {
    try {
      const response = await requestUserLogin(formData);
      return response;
    } catch (error) {
      const errorObj = handleApiError(error);
      return thunkApi.rejectWithValue(errorObj);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      await requestUserLogout();
      clearToken();
    } catch (error) {
      const errorObj = handleApiError(error);
      return thunkApi.rejectWithValue(errorObj);
    }
  }
);

export const refreshCurrentUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;

    try {
      setToken(token);
      const response = await refreshCurrentUser();
      return response;
    } catch (error) {
      const errorObj = handleApiError(error);
      return thunkApi.rejectWithValue(errorObj);
    }
  },

  {
    condition: (_, thunkApi) => {
      const state = thunkApi.getState();
      const token = state.auth.token;
      if (!token) {
        return thunkApi.rejectWithValue('Unable to fetch user');
      }
      return true;
    },
  }
);

export const updateAvatarThunk = createAsyncThunk(
  'auth/avatar',
  async (newPhoto, thunkApi) => {
    try {
      const avatarURL = await updateUserAvatar(newPhoto);
      return avatarURL;
    } catch (error) {
      const errorObj = handleApiError(error);
      return thunkApi.rejectWithValue(errorObj);
    }
  }
);

export const updateUserInfoThunk = createAsyncThunk(
  'auth/edituserinfo',
  async (formData, thunkApi) => {
    try {
      const response = await updateUserInfo(formData);
      return response;
    } catch (error) {
      const errorObj = handleApiError(error);
      return thunkApi.rejectWithValue(errorObj);
    }
  }
);

export const updateWaterNormaThunk = createAsyncThunk(
  'auth/updateWaterRate',
  async (newWaterRate, thunkApi) => {
    try {
      const response = await updateWaterNorma(newWaterRate);
      return response;
    } catch (error) {
      const errorObj = handleApiError(error);
      return thunkApi.rejectWithValue(errorObj);
    }
  }
);
