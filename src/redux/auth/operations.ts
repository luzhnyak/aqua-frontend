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
  refreshTokensApi,
} from "../../services/waterApi";
import { RootState } from "../store";
import { IRegisterUser, IUpdateUser } from "../../types";
import { handleApiError } from "../../services/handleApiError";


export const signUpThunk = createAsyncThunk(
  "auth/register",
  async (formData: IRegisterUser, thunkApi) => {
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
  "auth/login",
  async (formData: IRegisterUser, thunkApi) => {
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
  "auth/logout",
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

export const refreshTokensThunk = createAsyncThunk(
  'auth/refreshTokens',
 async (_, thunkApi) => {
   try {
     const currentState:any = thunkApi.getState() as RootState;
     const oldRefreshToken = currentState.auth.refreshToken
     
     if (oldRefreshToken !== null) {
       const response = await refreshTokensApi(oldRefreshToken)
       const { token} = response

      setToken(token);
    return response
    }
  
   } catch (error) {
     const errorObj = handleApiError(error);
      return thunkApi.rejectWithValue(errorObj);
    
   }
   
  },

  
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
      const errorObj = handleApiError(error);
      return thunkApi.rejectWithValue(errorObj);
    }
  },

  {
    condition: (_, thunkApi) => {
      const state = thunkApi.getState() as RootState;
      const token = state.auth.token;
      if (!token) {
        // const errorObj = {
        //   errorMessage: "Unable to fetch user",
        //   errorCode: 401,
        // };
        // return thunkApi.rejectWithValue(errorObj);
        return false;
      }
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
      const errorObj = handleApiError(error);
      return thunkApi.rejectWithValue(errorObj);
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
      const errorObj = handleApiError(error);
      return thunkApi.rejectWithValue(errorObj);
    }
  }
);

export const updateWaterNormaThunk = createAsyncThunk(
  "auth/updateWaterRate",
  async (newWaterRate: string, thunkApi) => {
    try {
      const response = await updateWaterNorma(newWaterRate);
      return response;
    } catch (error) {
      const errorObj = handleApiError(error);
      return thunkApi.rejectWithValue(errorObj);
    }
  }
);
