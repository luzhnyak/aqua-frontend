import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";
import { loginThunk } from "../../redux/auth/operations";
import AuthForm, { SubmitValues } from "../../components/AuthForm/AuthForm";
import Modal from "../../components/Modal/Modal";
import VerifyModal from "../../components/AuthForm/VerifyModal";
import css from "./AuthPage.module.css";
import { AppDispatch } from "../../redux/store";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  selectAuthError,
  selectIsRefreshing,
} from "../../redux/auth/selectors";
import { IError } from "../../services/handleApiError";

const SignInPage = () => {
  const { t } = useTranslation();

  const dispatch: AppDispatch = useDispatch();
  const [showVerifyModal, setShowVerifyModal] = useState(false);

  const loader = useSelector(selectIsRefreshing);
  const error: IError | null = useSelector(selectAuthError);

  const closeVerifyModal = () => {
    setShowVerifyModal(false);
  };

  const signInHandler = async (
    values: SubmitValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    await dispatch(loginThunk(values));

    resetForm();
  };

  useEffect(() => {
    if (error) {
      if (error.errorCode === 403) {
        setShowVerifyModal(true);
      } else {
        toast.error(`${t("authorization.errors.signIn")}`);
      }
    }
  }, [error, t]);

  return (
    <section>
      <div className={css.container}>
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

          {loader && <Loader />}
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
