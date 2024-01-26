import React, { useState } from 'react';
import { ReactComponent as IconSettings } from '../../images/icons/cog-6-tooth.svg';
import { ReactComponent as IconLogout } from '../../images/icons/arrow-right-on-rectangle.svg';

import css from './Header.module.css';
import SettingModal from './SettingModal';
import UserLogoutModal from './UserLogoutModal';

const UserLogoModal = () => {
  const [isOpenUserInfoModal, setOpenUserInfoModal] = useState(false);
  const [isOpenUserLogoutModal, setOpenUserLogoutModal] = useState(false);

  const openUserInfoModal = () => {
    setOpenUserInfoModal(true);
  };

  const openUserLogoutModal = () => {
    setOpenUserLogoutModal(true);
  };

  const closeUserInfoModal = () => {
    setOpenUserInfoModal(false);
  };

  const closeUserLogoutModal = () => {
    setOpenUserLogoutModal(false);
  };

  return (
    <>
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

      {/* Модальне вікно для settings */}
      {isOpenUserInfoModal ?? <SettingModal onClose={closeUserInfoModal} />}

      {/* Модальне вікно для logout */}
      {isOpenUserLogoutModal ?? (
        <UserLogoutModal onClose={closeUserLogoutModal} />
      )}
    </>
  );
};

export default UserLogoModal;
