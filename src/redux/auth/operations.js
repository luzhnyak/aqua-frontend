import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  setToken,
  clearToken,
  requestUserSignUp,
  requestUserLogin,
  requestUserLogout,
  refreshCurrentUser,
} from 'services/waterApi';

//TODO: add notifications

export const signUpThunk = createAsyncThunk(
  'auth/register',
  async (formData, thunkApi) => {
    try {
      const response = await requestUserSignUp(formData);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
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
      return thunkApi.rejectWithValue(error.message);
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
      return thunkApi.rejectWithValue(error.message);
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
      return thunkApi.rejectWithValue(error.message);
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
