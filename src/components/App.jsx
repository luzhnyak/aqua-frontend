// import { PrivateRoute } from 'HOCs/PrivateRoute';
// import { PublicRoute } from 'HOCs/PublicRoute';

import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

import HomePage from 'pages/HomePage/HomePage';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import SigninPage from 'pages/SigninPage/SigninPage';
import SignupPage from 'pages/SignUpPage/SignupPage';
import NotFound from './NotFound/NotFound';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="welcome" element={<WelcomePage />}></Route>

          <Route path="signup" element={<SignupPage />}></Route>
          <Route path="signin" element={<SigninPage />}></Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
