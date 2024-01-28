import React from 'react';
import css from './UserLogout.module.css';
import { useDispatch } from 'react-redux';
import { logoutThunk } from '../../redux/auth/operations';

const UserLogoutModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutThunk());
    onClose(false);
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
    </div>
  );
};

export default UserLogoutModal;
