import Loader from "../../components/Loader/Loader";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { sendVerify } from "../../services/waterApi";
import css from "./AuthPage.module.css";
import { toast } from "react-toastify";

const RedirectVerifyPage = () => {
  const { token } = useParams();

  useEffect(() => {
    if (token) {
      getRequest(token);
    }
  }, [token]);

  const getRequest = async (token: string) => {
    try {
      await sendVerify(token);
      return window.location.replace("/aqua-frontend/signin");
    } catch (error) {
      toast.error("Something went wrong, try again");
      setTimeout(() => {
        return window.location.replace("/aqua-frontend/resend-verify-email");
      }, 3000);
    }
  };

  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.mainstr}>
          <Loader />
        </div>
      </div>
    </section>
  );
};

export default RedirectVerifyPage;
