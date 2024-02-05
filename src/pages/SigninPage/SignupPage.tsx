import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";

import AuthForm from "../../components/AuthForm/AuthForm";
import { signUpThunk } from "../../redux/auth/operations";
import css from "./SigninPage.module.css";
import { AppDispatch } from "../../redux/store";
import { useTranslation } from "react-i18next";

const SignupPage = () => {
  const { t } = useTranslation();

  const dispatch: AppDispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const signUpHandler = (values: any, { resetForm }: any) => {
    const { repeatPassword, ...newObject } = values;
    setLoader(true);
    try {
      dispatch(signUpThunk(newObject));
      resetForm();
      setRedirect(true);
    } catch (error) {
      setLoader(false);
      toast.error(`${t("authorization.notification.errorReg")}`);
    } finally {
      setLoader(false);
    }
  };

  if (redirect) {
    return <Navigate to="/signin" />;
  }

  return (
    <section>
      <div className={css.container}>
        <div className={css.mainstr}>
          <AuthForm
            formTitle={t("authorization.register")}
            onSubmit={signUpHandler}
          />
          {loader && <Loader />}
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
