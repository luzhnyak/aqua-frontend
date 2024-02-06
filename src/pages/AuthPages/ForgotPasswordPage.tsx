import { sendMailForgotPass } from "../../services/waterApi";
import css from "./AuthPage.module.css";
import FormSendEmail from "../../components/FormSendEmail/FormSendEmail";
import { toast } from "react-toastify";
import { useState } from "react";
import Loader from "../../components/Loader/Loader";

import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";

interface Values {
  email: string;
}

const ForgotPasswordPage = () => {
  const { t } = useTranslation();

  const [loader, setLoader] = useState(false);

  const handleSubmit = async (
    values: Values,
    { resetForm }: FormikHelpers<Values>
  ) => {
    setLoader(true);
    try {
      await sendMailForgotPass(values);
      toast.success(`${t("authorization.notification.success")}`);
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
        <div className={css.container}>
          <FormSendEmail
            title={t("authorization.forgot")}
            onSubmit={handleSubmit}
          />
          {loader && <Loader />}
        </div>
      </div>
    </section>
  );
};

export default ForgotPasswordPage;
