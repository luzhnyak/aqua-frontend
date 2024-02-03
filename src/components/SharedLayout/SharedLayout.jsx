import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
// import Footer from 'components/Footer/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SharedLayout = () => {
  return (
    <>
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
      {/* <Footer /> */}
    </>
  );
};
