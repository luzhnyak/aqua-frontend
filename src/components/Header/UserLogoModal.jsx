import React, { useState } from 'react';
import { ReactComponent as IconSettings } from '../../images/icons/cog-6-tooth.svg';
import { ReactComponent as IconLogout } from '../../images/icons/arrow-right-on-rectangle.svg';

import css from './Header.module.css';
import SettingModal from '../SettingModal/SettingModal';
import UserLogoutModal from './UserLogoutModal';
import Modal from 'components/Modal/Modal';

const UserLogoModal = () => {
  const [isOpenUserInfoModal, setOpenUserInfoModal] = useState(false);
  const [isOpenUserLogoutModal, setOpenUserLogoutModal] = useState(false);

  const openUserInfoModal = () => {
    setOpenUserInfoModal(true);
    document.body.classList.add('body-scroll-lock');
  };

  const openUserLogoutModal = () => {
    setOpenUserLogoutModal(true);
  };

  const closeUserInfoModal = () => {
    setOpenUserInfoModal(false);
    document.body.classList.remove('body-scroll-lock');
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
      {isOpenUserInfoModal && !isOpenUserLogoutModal && (
        <Modal title="Setting" onClose={closeUserInfoModal}>
          <SettingModal />
        </Modal>
      )}

      {/* Модальне вікно для logout */}
      {isOpenUserLogoutModal && !isOpenUserInfoModal && (
        <Modal title="Logout" onClose={closeUserLogoutModal}>
          <UserLogoutModal />
        </Modal>
      )}
    </>
  );
};

export default UserLogoModal;
