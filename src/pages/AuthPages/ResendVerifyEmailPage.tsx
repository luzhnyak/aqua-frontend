import FormSendEmail from "../../components/FormSendEmail/FormSendEmail";
import css from "./AuthPage.module.css";
import { resendVerifyToken } from "../../services/waterApi";
import { toast } from "react-toastify";

import Loader from "../../components/Loader/Loader";
import { useState } from "react";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";

interface Values {
  email: string;
  language: string;
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
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.mainstr}>
          <FormSendEmail
            title={t("resendVerifyEmail.title")}
            onSubmit={handleSubmit}
          />
          {loader && <Loader />}
        </div>
      </div>
    </section>
  );
};

export default ResendVerifyEmailPage;
