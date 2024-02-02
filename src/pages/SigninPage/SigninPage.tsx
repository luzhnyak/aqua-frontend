import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";
import Backdrop from "../../components/Backdrop/Backdrop";
import { loginThunk } from "../../redux/auth/operations";
import AuthForm, { SubmitValues } from "../../components/AuthForm/AuthForm";
import css from "./SigninPage.module.css";
import { AppDispatch } from "../../redux/store";

const SignInPage = () => {
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
      toast.error("Sign in is failed. Please try again.");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className={css.container}>
      <div className={css.mainstr}>
        <div className={css.hidden}></div>
        <AuthForm formTitle="Sign In" onSubmit={signInHandler} />
        {loader && (
          <Backdrop>
            <Loader />
          </Backdrop>
        )}
      </div>
    </div>
  );
};

export default SignInPage;
