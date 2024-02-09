import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import css from "./AuthPage.module.css";

import { loginThunk } from "../../redux/auth/operations";
import { AppDispatch } from "../../redux/store";
import {
  selectAuthError,
  selectIsRefreshing,
} from "../../redux/auth/selectors";
import { IError } from "../../services/handleApiError";

import Loader from "../../components/Loader/Loader";
import AuthForm, { SubmitValues } from "../../components/AuthForm/AuthForm";
import ModalConfirm from "../../components/Modal/ModalConfirm";

const SignInPage = () => {
  const { t } = useTranslation();

  const dispatch: AppDispatch = useDispatch();
  const [showVerifyModal, setShowVerifyModal] = useState(false);

  const loader = useSelector(selectIsRefreshing);
  const error: IError | null = useSelector(selectAuthError);
  const isMounted = useRef(false);

  const signInHandler = async (
    values: SubmitValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    await dispatch(loginThunk(values));

    resetForm();
  };

  useEffect(() => {
    if (error && isMounted.current) {
      if (error.errorCode === 403) {
        setShowVerifyModal(true);
      } else {
        toast.error(`${t("authorization.errors.signIn")}`);
      }
    }

    isMounted.current = true;
  }, [error, t]);

  const navigate = useNavigate();

  const handleResend = async () => {
    setShowVerifyModal(false);
    navigate("/resend-verify-email");
  };

  const handleCloseVerifyModal = () => {
    setShowVerifyModal(false);
  };

  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.mainstr}>
          <div className={css.hidden}></div>

          <AuthForm
            formTitle={t("authorization.login")}
            onSubmit={signInHandler}
          />
          {showVerifyModal && (
            <ModalConfirm
              title="Verify"
              text={t("verifyModal.title")}
              buttonTextOk={t("verifyModal.resend")}
              buttonTextCancel={t("verifyModal.cancel")}
              onOk={handleResend}
              onClose={handleCloseVerifyModal}
            />
          )}

          {loader && <Loader />}
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
