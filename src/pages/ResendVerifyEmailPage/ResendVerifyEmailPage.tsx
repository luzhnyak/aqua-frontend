import FormSendEmail from "../../components/FormSendEmail/FormSendEmail";
import css from "./ResendVerifyEmailPage.module.css";
import { resendVerifyToken } from "../../services/waterApi";
import { toast } from "react-toastify";
import Backdrop from "../../components/Backdrop/Backdrop";
import Loader from "../../components/Loader/Loader";
import { useState } from "react";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";

interface Values {
  email: string;
}

const ResendVerifyEmailPage = () => {
  const { t } = useTranslation();

  const [loader, setLoader] = useState(false);

  const handleSubmit = async (
    values: Values,
    { resetForm }: FormikHelpers<Values>
  ) => {
    setLoader(true);
    try {
      await resendVerifyToken(values);
      toast.success(`${t("authorization.notification.success")}`);

      setTimeout(() => {
        return window.location.replace("/aqua-frontend/signin");
      }, 3000);
    } catch (error) {
      setLoader(false);
      toast.error(`${t("authorization.notification.error")}`);
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
            title={t("resendVerifyEmail.title")}
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
