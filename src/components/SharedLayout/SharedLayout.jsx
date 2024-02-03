import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';

import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import Footer from 'components/Footer/Footer';

import css from './SharedLayout.module.css';
import clsx from 'clsx';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';

export const SharedLayout = () => {
  const location = useLocation();
  const home = location.pathname.includes('/home');
  const welcome = location.pathname.includes('/welcome');
  const signin = location.pathname.includes('/signin');
  const signup = location.pathname.includes('/signup');

  return (
    <>
      <div
        className={clsx(
          css.container,
          { [css.backgroundHomePage]: home },
          { [css.backgroundWelcomePage]: welcome },
          { [css.backgroundSigninPage]: signin },
          { [css.backgroundSigninPage]: signup },
          { [css.backgroundSigninPage]: !(home || welcome || signup) }
        )}
      >
        <Header />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={true}
          theme="colored"
        />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </>
  );
};
