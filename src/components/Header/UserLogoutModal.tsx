import { FC, useState } from "react";
import css from "./UserLogout.module.css";
import { useDispatch } from "react-redux";
import { logoutThunk } from "../../redux/auth/operations";
import Backdrop from "../../components/Backdrop/Backdrop";
import Loader from "../../components/Loader/Loader";
import { AppDispatch } from "../../redux/store";
import { useTranslation } from "react-i18next";

interface IProps {
  onClose: (value: boolean) => void;
}

const UserLogoutModal: FC<IProps> = ({ onClose }) => {
  const { t } = useTranslation();

  const [loader, setLoader] = useState(false);

  const dispatch: AppDispatch = useDispatch();

  const handleLogout = async () => {
    try {
      setLoader(true);
      dispatch(logoutThunk());
      onClose(false);
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
      <h4 className={css.title}>{t("logOutModal.title")}</h4>
      <div className={css.buttons}>
        <button className={css.logoutBtn} type="button" onClick={handleLogout}>
          {t("logOutModal.logout")}
        </button>
        <button className={css.cancelBtn} type="button" onClick={handleClose}>
          {t("logOutModal.cancel")}
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

export default UserLogoutModal;
