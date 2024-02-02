import { createAsyncThunk } from "@reduxjs/toolkit";

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
} from "../../services/waterApi";
import { RootState } from "../store";
import { IRegisterUser, IUpdateUser } from "../../types";

//TODO: add notifications

export const signUpThunk = createAsyncThunk(
  "auth/register",
  async (formData: IRegisterUser, thunkApi) => {
    try {
      const response = await requestUserSignUp(formData);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (formData: IRegisterUser, thunkApi) => {
    try {
      const response = await requestUserLogin(formData);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      await requestUserLogout();
      clearToken();
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const refreshCurrentUserThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const state = thunkApi.getState() as RootState;
    const token = state.auth.token;

    try {
      token && setToken(token);
      const response = await refreshCurrentUser();
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },

  {
    condition: (_, thunkApi) => {
      // const state = <RootState>thunkApi.getState();
      // const token = state.auth.token;
      // if (!token) {
      //   return thunkApi.rejectWithValue("Unable to fetch user");
      // }
      return true;
    },
  }
);

export const updateAvatarThunk = createAsyncThunk(
  "auth/avatar",
  async (newPhoto: Blob, thunkApi) => {
    try {
      const avatarURL = await updateUserAvatar(newPhoto);
      return avatarURL;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const updateUserInfoThunk = createAsyncThunk(
  "auth/edituserinfo",
  async (formData: IUpdateUser, thunkApi) => {
    try {
      const response = await updateUserInfo(formData);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const updateWaterNormaThunk = createAsyncThunk(
  "auth/updateWaterRate",
  async (newWaterRate: { waterRate: string }, thunkApi) => {
    try {
      const response = await updateWaterNorma(newWaterRate);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
