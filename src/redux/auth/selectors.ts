import { RootState } from "../store";

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export const selectUser = (state: RootState) => state.auth.user;

export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;

export const selectToken = (state: RootState) => state.auth.token;

export const selectAuthError = (state: RootState) => state.auth.error;

export const selectWaterRate = (state: RootState) => state.auth.user.waterRate;
