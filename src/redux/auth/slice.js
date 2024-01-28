import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  signUpThunk,
  loginThunk,
  logoutThunk,
  refreshCurrentUserThunk,
  updateAvatarThunk,
  updateUserInfoThunk,
  updateWaterNormaThunk,
} from './operations';

const authInitialState = {
  token: null,
  user: {
    name: null,
    email: null,
    avatarURL: null,
    waterRate: null,
    gender: null,
  },
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const handlePending = state => {
  state.isRefreshing = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isRefreshing = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,

  reducers: {
    setToken(state, action) {
      return (state = { ...state, token: action.payload });
    },
  },

  extraReducers: builder =>
    builder
      .addCase(signUpThunk.fulfilled, () => {
        return authInitialState;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(logoutThunk.fulfilled, () => {
        return authInitialState;
      })
      .addCase(refreshCurrentUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
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
      ),
});

export const { setToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
