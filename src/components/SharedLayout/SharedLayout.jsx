import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';

import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';

import css from './SharedLayout.module.css';
import clsx from 'clsx';

export const SharedLayout = () => {
  const location = useLocation();
  const home = location.pathname.includes('/home');
  const welcome = location.pathname.includes('/welcome');
  const signin = location.pathname.includes('/signin');
  const signup = location.pathname.includes('/signup');

  return (
    <div
      className={clsx(
        css.container,
        { [css.backgroundHomePage]: home },
        { [css.backgroundWelcomePage]: welcome },
        { [css.backgroundSigninPage]: signin },
        { [css.backgroundSignupPage]: signup }
      )}
    >
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
