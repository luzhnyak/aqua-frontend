// import { PrivateRoute } from 'HOCs/PrivateRoute';
// import { PublicRoute } from 'HOCs/PublicRoute';

import { AuthRoute } from '../pages/AuthRoute';

import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { SharedLayout } from './SharedLayout/SharedLayout';
import { refreshCurrentUserThunk } from '../redux/auth/operations';
import ResendVerifyEmailPage from 'pages/ResendVerifyEmailPage/ResendVerifyEmailPage';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const SigninPage = lazy(() => import('../pages/SigninPage/SigninPage'));
const SignupPage = lazy(() => import('../pages/SignupPage/SignupPage'));
const NotFound = lazy(() => import('./NotFound/NotFound'));
const RedirectVerifyPage = lazy(() =>
  import('../pages/RedirectVerifyPage/RedirectVerifyPage')
);
const ForgotPasswordPage = lazy(() =>
  import('../pages/ForgotPasswordPage/ForgotPasswordPage')
);
const UpdatetPasswordPage = lazy(() =>
  import('../pages/UpdatePasswordPage/UpdatePasswordPage')
);

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUserThunk());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomePage />}></Route>
          <Route path="home" element={<HomePage />} />

          <Route path="welcome" element={<WelcomePage />}></Route>

          <Route path="signup" element={<SignupPage />}></Route>

          <Route path="signin" element={<SigninPage />}></Route>

          <Route
            path="auth"
            element={
              <AuthRoute
                component={<RedirectVerifyPage />}
                redirectTo="/home"
              />
            }
          />

          <Route path="verify/:token" element={<RedirectVerifyPage />} />

          <Route path="forgot-password" element={<ForgotPasswordPage />} />

          <Route
            path="update-password/:token"
            element={<UpdatetPasswordPage />}
          />

          <Route path="resend-verify-email" element={<ResendVerifyEmailPage />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
