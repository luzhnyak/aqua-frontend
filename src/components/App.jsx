import { PrivateRoute } from 'HOCs/PrivateRoute';
import { PublicRoute } from 'HOCs/PublicRoute';
import { SigninPage } from 'pages/SigninPage/SigninPage';
import { SignupPage } from 'pages/SignUpPage/SignupPage';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { WelcomePage } from './WelcomePage';

export const App = () => {
  return (

    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route path="welcome" element={<WelcomePage />}></Route>

          <Route path="signup" element={<SignupPage />}></Route>
          <Route path="signin" element={<SigninPage />}></Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>

  );
};
