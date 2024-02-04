import { sendMailForgotPass } from "../../services/waterApi";
import css from "./ForgotPasswordPage.module.css";
import FormSendEmail from "../../components/FormSendEmail/FormSendEmail";
import { toast } from "react-toastify";
import { useState } from "react";
import Loader from "../../components/Loader/Loader";
import Backdrop from "../../components/Backdrop/Backdrop";
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
      toast.success("The operation was successful, check your email");
    } catch (error) {
      setLoader(false);
      toast.error("Something went wrong, try again");
    } finally {
      setLoader(false);
    }

    resetForm();
  };

  return (
    <div className={css.container}>
      <FormSendEmail title={t("signIn.forgot")} onSubmit={handleSubmit} />
      {loader && (
        <Backdrop>
          <Loader />
        </Backdrop>
      )}
    </div>
  );
};

export default ForgotPasswordPage;
