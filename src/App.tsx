import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store";
import "./i18n/config";

import { refreshCurrentUserThunk } from "./redux/auth/operations";
// import ResendVerifyEmailPage from "./pages/ResendVerifyEmailPage/ResendVerifyEmailPage";

import { SharedLayout } from "./components/SharedLayout/SharedLayout";
// import { AuthRoute } from "./pages/AuthRoute";
import { PrivateRoute } from "./pages/PrivateRoute";
import { RestrictedRoute } from "./pages/RestrictedRoute";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const WelcomePage = lazy(() => import("./pages/WelcomePage/WelcomePage"));
const SigninPage = lazy(() => import("./pages/SigninPage/SigninPage"));
const SignupPage = lazy(() => import("./pages/SignupPage/SignupPage"));
// const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const RedirectVerifyPage = lazy(
  () => import("./pages/RedirectVerifyPage/RedirectVerifyPage")
);
const ForgotPasswordPage = lazy(
  () => import("./pages/ForgotPasswordPage/ForgotPasswordPage")
);
const UpdatetPasswordPage = lazy(
  () => import("./pages/UpdatePasswordPage/UpdatePasswordPage")
);
const ResendVerifyEmailPage = lazy(
  () => import("./pages/ResendVerifyEmailPage/ResendVerifyEmailPage")
);

const App = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUserThunk());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Navigate to="welcome" />}></Route>
          <Route
            path="home"
            element={
              <PrivateRoute component={<HomePage />} redirectTo="/signin" />
            }
          />

          <Route
            path="welcome"
            element={
              <RestrictedRoute component={<WelcomePage />} redirectTo="/home" />
            }
          ></Route>

          <Route
            path="signup"
            element={
              <RestrictedRoute component={<SignupPage />} redirectTo="/home" />
            }
          ></Route>

          <Route
            path="signin"
            element={
              <RestrictedRoute component={<SigninPage />} redirectTo="/home" />
            }
          ></Route>

          {/* <Route
            path="auth"
            element={
              <AuthRoute
                component={<RedirectVerifyPage />}
                redirectTo="/home"
              />
            }
          /> */}

          <Route path="verify/:token" element={<RedirectVerifyPage />} />

          <Route path="forgot-password" element={<ForgotPasswordPage />} />

          <Route
            path="update-password/:token"
            element={<UpdatetPasswordPage />}
          />

          <Route
            path="resend-verify-email"
            element={<ResendVerifyEmailPage />}
          />

          {/* <Route path="*" element={<Navigate to="welcome" />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
