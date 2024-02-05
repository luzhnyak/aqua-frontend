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
import { useSelector } from "react-redux";
import {
  selectAuthError,
  selectIsRefreshing,
} from "../../redux/auth/selectors";
import { IError } from "../../services/handleApiError";

const SignupPage = () => {
  const { t } = useTranslation();

  const dispatch: AppDispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);

  const loader = useSelector(selectIsRefreshing);
  const error: IError | null = useSelector(selectAuthError);

  const signUpHandler = async (values: any, { resetForm }: any) => {
    const { repeatPassword, ...newObject } = values;

    await dispatch(signUpThunk(newObject));

    if (error) {
      toast.error(`${t("authorization.notification.errorReg")}`);
      return;
    }

    resetForm();
    setRedirect(true);
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
