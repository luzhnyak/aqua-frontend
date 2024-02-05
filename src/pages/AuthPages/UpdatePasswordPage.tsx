import { useParams } from "react-router-dom";
import { sendUpdatePass } from "../../services/waterApi";
import css from "./AuthPage.module.css";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";
import { useState } from "react";
import UpdatetPassword from "../../components/UpdatePassword/UpdatePassword";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";

interface Values {
  newPassword: string;
  repeatNewPassword: string;
}

const UpdatetPasswordPage = () => {
  const { t } = useTranslation();

  const { token } = useParams();
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (
    values: Values,
    { resetForm }: FormikHelpers<Values>
  ) => {
    const { newPassword, repeatNewPassword } = values;

    if (newPassword !== repeatNewPassword) {
      return;
    }
    setLoader(true);
    try {
      if (!token) return;
      await sendUpdatePass(token, { newPassword: repeatNewPassword });
      toast.success(`${t("authorization.notification.successPass")}`);

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
    <div className={css.container}>
      <UpdatetPassword onSubmit={handleSubmit} />
      {loader && <Loader />}
    </div>
  );
};

export default UpdatetPasswordPage;
