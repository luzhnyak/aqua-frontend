import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";
import Backdrop from "../../components/Backdrop/Backdrop";
import { loginThunk } from "../../redux/auth/operations";
import AuthForm, { SubmitValues } from "../../components/AuthForm/AuthForm";
import css from "./SigninPage.module.css";
import { AppDispatch } from "../../redux/store";
import { useTranslation } from "react-i18next";

const SignInPage = () => {
  const { t } = useTranslation();

  const dispatch: AppDispatch = useDispatch();
  const [loader, setLoader] = useState(false);

  const signInHandler = (
    values: SubmitValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    setLoader(true);
    try {
      dispatch(loginThunk(values));
      resetForm();
    } catch (error) {
      setLoader(false);
      toast.error(`${t("signIn.error")}`);
    } finally {
      setLoader(false);
    }
  };

  return (
    <section>
      <div className={css.MainContainer}>
        <div className={css.mainstr}>
          <div className={css.hidden}></div>
          <AuthForm formTitle={t("signIn.login")} onSubmit={signInHandler} />
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

export default SignInPage;
