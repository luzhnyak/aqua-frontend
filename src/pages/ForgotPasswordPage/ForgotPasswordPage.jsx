import { sendMailForgotPass } from "services/waterApi";
import css from "./ForgotPasswordPage.module.css";
import FormSendEmail from "components/FormSendEmail/FormSendEmail";
import { toast } from "react-toastify";
import { useState } from "react";
import Loader from "components/Loader/Loader";
import Backdrop from "components/Backdrop/Backdrop";
import { useTranslation } from "react-i18next";

const ForgotPasswordPage = () => {
  const { t } = useTranslation();

  const [loader, setLoader] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
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
    <div className={css.container}>
      <FormSendEmail
        title={t("authorization.forgot")}
        onSubmit={handleSubmit}
      />
      {loader && (
        <Backdrop>
          <Loader />
        </Backdrop>
      )}
    </div>
  );
};

export default ForgotPasswordPage;
