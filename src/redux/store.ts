import { combineReducers, configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer, resetToken } from "./auth/slice";
import { waterReducer } from "./waterConsumption/slice";
import { refreshTokensThunk } from "./auth/operations";
import axios from "axios";

const authConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "refreshToken"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authConfig, authReducer),
  water: waterReducer,
});

const ignoredPersistenceActions = [
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ignoredPersistenceActions,
      },
    }),
});

axios.interceptors.response.use(
  function (response): any {
    return response;
  },
  async function (error) {
    if (error.response.status === 401) {
      try {
        const isRefreshTokenFail = await store.dispatch(refreshTokensThunk());

        if (isRefreshTokenFail.payload.errorCode === 500) {
          store.dispatch(resetToken(store.getState()));
          return;
        }

        if (isRefreshTokenFail.type === "auth/refreshTokens/rejected") {
          // console.error("Refresh token Error");

          return;
        }

        const newToken = store.getState().auth.token;
        error.config.headers.Authorization = `Bearer ${newToken}`;

        return axios(error.config);
      } catch (refreshError) {
        return refreshError;
      }
    }

    return Promise.reject(error);
  }
);

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
