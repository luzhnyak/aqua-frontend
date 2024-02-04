import { FC, useState } from "react";
import css from "./VerifyModal.module.css";
import Backdrop from "../../components/Backdrop/Backdrop";
import Loader from "../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface IProps {
  onClose: (value: boolean) => void;
}

const VerifyModal: FC<IProps> = ({ onClose }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);

  const handleResend = async () => {
    try {
      setLoader(true);
      onClose(false);
      navigate("/resend-verify-email");
    } catch (error) {
      console.error(error);
    } finally {
      setLoader(false);
    }
  };

  const handleClose = () => {
    onClose(false);
  };

  return (
    <div>
      <h4 className={css.title}>{t("verifyModal.title")}</h4>
      <div className={css.buttons}>
        <button className={css.emailtBtn} type="button" onClick={handleResend}>
          {t("verifyModal.resend")}
        </button>
        <button className={css.cancelBtn} type="button" onClick={handleClose}>
          {t("verifyModal.cancel")}
        </button>
      </div>
      {loader && (
        <Backdrop>
          <Loader />
        </Backdrop>
      )}
    </div>
  );
};

export default VerifyModal;
