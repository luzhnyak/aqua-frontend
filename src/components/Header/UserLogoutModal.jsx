import React from 'react';
import css from './UserLogout.module.css';

const UserLogoutModal = () => {
  return (
    <div>
      <h4 className={css.title}>Do you really want to leave?</h4>
      <div className={css.buttons}>
        <button className={css.logoutBtn} type="button">
          Log out
        </button>
        <button className={css.cancelBtn} type="button">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UserLogoutModal;
