import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  setToken,
  clearToken,
  requestUserSignUp,
  requestUserLogin,
  requestUserLogout,
  refreshCurrentUser,
} from 'services/waterApi';

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
