import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  const location = useLocation();

  return (
    <div
      className={`${css.container} ${
        location.pathname.includes('/home') ? css.backgroundHomePage : ''
      }`}
    >
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
