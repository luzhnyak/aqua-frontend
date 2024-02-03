import { FC, useState } from "react";
import css from "./UserLogout.module.css";
import { useDispatch } from "react-redux";
import { logoutThunk } from "../../redux/auth/operations";
import Backdrop from "../../components/Backdrop/Backdrop";
import Loader from "../../components/Loader/Loader";
import { AppDispatch } from "../../redux/store";

interface IProps {
  onClose: (value: boolean) => void;
}

const UserLogoutModal: FC<IProps> = ({ onClose }) => {
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
      <h4 className={css.title}>Do you really want to leave?</h4>
      <div className={css.buttons}>
        <button className={css.logoutBtn} type="button" onClick={handleLogout}>
          Log out
        </button>
        <button className={css.cancelBtn} type="button" onClick={handleClose}>
          Cancel
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
