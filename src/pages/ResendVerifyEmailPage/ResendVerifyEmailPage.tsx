import FormSendEmail from "../../components/FormSendEmail/FormSendEmail";
import css from "./ResendVerifyEmailPage.module.css";
import { resendVerifyToken } from "../../services/waterApi";
import { toast } from "react-toastify";
import Backdrop from "../../components/Backdrop/Backdrop";
import Loader from "../../components/Loader/Loader";
import { useState } from "react";
import { FormikHelpers } from "formik";

interface Values {
  email: string;
}

const ResendVerifyEmailPage = () => {
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (
    values: Values,
    { resetForm }: FormikHelpers<Values>
  ) => {
    setLoader(true);
    try {
      await resendVerifyToken(values);
      toast.success("The operation was successful, check your email");

      setTimeout(() => {
        return window.location.replace("/aqua-frontend/signin");
      }, 3000);
    } catch (error) {
      setLoader(false);
      toast.error("Something went wrong, try again");
    } finally {
      setLoader(false);
    }

    resetForm();
  };

  return (
    <section>
      <div className={css.MainContainer}>
        <div className={css.mainstr}>
          <FormSendEmail
            title={"Resend verify email"}
            onSubmit={handleSubmit}
          />
          {loader && (
            <Backdrop>
              <Loader />
            </Backdrop>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResendVerifyEmailPage;