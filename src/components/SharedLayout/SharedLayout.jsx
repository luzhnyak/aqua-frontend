import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  const location = useLocation();
  const home = location.pathname.includes('/home');
  const welcome = location.pathname.includes('/welcome');

  return (
    <div
      className={`${css.container} ${home ? css.backgroundHomePage : ''} ${
        welcome ? css.backgroundWelcomePage : ''
      }`}
    >
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
