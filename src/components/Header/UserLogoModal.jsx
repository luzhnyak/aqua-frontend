import React from 'react';
import { ReactComponent as IconSettings } from '../../images/icons/cog-6-tooth.svg';
import { ReactComponent as IconLogout } from '../../images/icons/arrow-right-on-rectangle.svg';

import css from './Header.module.css';

const UserLogoModal = ({ openUserInfoModal, openUserLogoutModal }) => {
  return (
    <div className={css.dropDownMenuContent}>
      <button className={css.settingsBtn} onClick={openUserInfoModal}>
        <IconSettings className={css.iconSettings} />
        Settings
      </button>
      <button className={css.logoutBtn} onClick={openUserLogoutModal}>
        <IconLogout className={css.iconLogout} />
        Logout
      </button>
    </div>
  );
};

export default UserLogoModal;
