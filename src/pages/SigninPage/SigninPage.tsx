import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";
import Backdrop from "../../components/Backdrop/Backdrop";
import { loginThunk } from "../../redux/auth/operations";
import AuthForm, { SubmitValues } from "../../components/AuthForm/AuthForm";
import Modal from "../../components/Modal/Modal";
import VerifyModal from "../../components/AuthForm/VerifyModal";
import css from "./SigninPage.module.css";
import { AppDispatch } from "../../redux/store";
import { useTranslation } from "react-i18next";
import { unwrapResult } from "@reduxjs/toolkit";

const SignInPage = () => {
  const { t } = useTranslation();

  const dispatch: AppDispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);

  const closeVerifyModal = () => {
    setShowVerifyModal(false);
  };

  const signInHandler = async (
    values: SubmitValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    setLoader(true);
    try {
      const resultAction = await dispatch(loginThunk(values));
      const result = unwrapResult(resultAction);
      resetForm();
    } catch (error: any) {
      setLoader(false);

      if (error.errorCode === 403) {
        setShowVerifyModal(true);
      } else {
        toast.error(`${t("authorization.errors.signIn")}`);
      }
    } finally {
      setLoader(false);
    }
  };

  return (
    <section>
      <div className={css.MainContainer}>
        <div className={css.mainstr}>
          <div className={css.hidden}></div>

          <AuthForm
            formTitle={t("authorization.login")}
            onSubmit={signInHandler}
          />
          {showVerifyModal && (
            <Modal title="Verify" onClose={closeVerifyModal}>
              <VerifyModal onClose={closeVerifyModal} />
            </Modal>
          )}

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
