import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";

import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import Footer from "../../components/Footer/Footer";

import css from "./SharedLayout.module.css";
import "react-toastify/dist/ReactToastify.css";

export const SharedLayout = () => {
  return (
    <div className={css.layout}>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        // theme="colored"
      />
      <Suspense
        fallback={
          <div className={css.container}>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>

      <Footer />
    </div>
  );
};
