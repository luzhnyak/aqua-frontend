import { PayloadAction, createSlice, isAnyOf } from "@reduxjs/toolkit";

import {
  signUpThunk,
  loginThunk,
  logoutThunk,
  refreshCurrentUserThunk,
  updateAvatarThunk,
  updateUserInfoThunk,
  updateWaterNormaThunk,
  refreshTokensThunk,
} from "./operations";
import { IError } from "../../services/handleApiError";

export interface IAuthInitialState {
  token: string | null;
  refreshToken: string | null;
  user: {
    name: string | null;
    email: string | null;
    avatarURL: string | null;
    waterRate: number | null;
    gender: string | null;
    createdAt: string | null;
  };
  isLoggedIn: boolean;
  isRefreshing: boolean;
  error: IError | null;
}

const authInitialState: IAuthInitialState = {
  token: null,
  refreshToken: null,
  user: {
    name: null,
    email: null,
    avatarURL: null,
    waterRate: null,
    gender: null,
    createdAt: null,
  },
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const handlePending = (state: IAuthInitialState) => {
  state.isRefreshing = true;
  state.error = null;
};

const handleRejected = (
  state: IAuthInitialState,
  action: PayloadAction<any>
) => {
  state.isRefreshing = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,

  reducers: {
    setToken(state: IAuthInitialState, action) {
      return (state = { ...state, token: action.payload });
    },
    resetToken(state: IAuthInitialState, action) {
      return (state = { ...state, token: null, isLoggedIn: false });
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(signUpThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.error = null;
        state.isRefreshing = false;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(logoutThunk.fulfilled, () => {
        return authInitialState;
      })
      .addCase(refreshCurrentUserThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(updateAvatarThunk.fulfilled, (state, action) => {
        state.user.avatarURL = action.payload;
      })
      .addCase(updateUserInfoThunk.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
      })
      .addCase(updateWaterNormaThunk.fulfilled, (state, action) => {
        state.user.waterRate = action.payload;
      })
      .addCase(refreshTokensThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(refreshTokensThunk.rejected, (state) => {
        state.token = null;
        state.refreshToken = null;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          signUpThunk.pending,
          loginThunk.pending,
          logoutThunk.pending,
          refreshCurrentUserThunk.pending,
          updateAvatarThunk.pending,
          updateUserInfoThunk.pending,
          updateWaterNormaThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          signUpThunk.rejected,
          loginThunk.rejected,
          logoutThunk.rejected,
          refreshCurrentUserThunk.rejected,
          updateAvatarThunk.rejected,
          updateUserInfoThunk.rejected,
          updateWaterNormaThunk.rejected
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(
          signUpThunk.fulfilled,
          loginThunk.fulfilled,
          logoutThunk.fulfilled,
          refreshCurrentUserThunk.fulfilled,
          updateAvatarThunk.fulfilled,
          updateUserInfoThunk.fulfilled,
          updateWaterNormaThunk.fulfilled,
          refreshTokensThunk.fulfilled
        ),
        (state) => {
          state.isRefreshing = false;
          state.error = null;
        }
      ),
});

export const { setToken, resetToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
