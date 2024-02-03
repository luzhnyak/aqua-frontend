import { useEffect, useRef, useState } from "react";

import css from "./Header.module.css";
import { ReactComponent as IconChevron } from "../../images/icons/chevron-double-up.svg";
import UserLogoModal from "./UserLogoModal";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import Modal from "../../components/Modal/Modal";
import SettingModal from "../../components/SettingModal/SettingModal";
import UserLogoutModal from "./UserLogoutModal";

const UserLogo = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isOpenUserInfoModal, setOpenUserInfoModal] = useState(false);
  const [isOpenUserLogoutModal, setOpenUserLogoutModal] = useState(false);

  const user = useSelector(selectUser);
  const { name, email, avatarURL } = user;

  const modalRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const onCloseMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen, setMenuOpen]);

  const closeUserInfoModal = () => {
    setOpenUserInfoModal(false);
    document.body.classList.remove("body-scroll-lock");
  };

  const closeUserLogoutModal = () => {
    setOpenUserLogoutModal(false);
  };

  const openUserInfoModal = () => {
    setOpenUserInfoModal(true);
    document.body.classList.add("body-scroll-lock");
  };

  const openUserLogoutModal = () => {
    setOpenUserLogoutModal(true);
  };

  return (
    <>
      <div ref={modalRef}>
        {user && (
          <div className={css.dropDownMenu} onClick={toggleMenu}>
            {" "}
            // зробити через кнопку
            <p className={css.userNameText}>{name ? name : ""}</p>
            {avatarURL ? (
              <img src={avatarURL} className={css.avatar} alt="userAvatar" />
            ) : (
              <div className={css.noAvatar}>
                <span>
                  {name
                    ? name.charAt(0).toUpperCase()
                    : email?.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
            <IconChevron className={css.IconChevron} />
          </div>
        )}
        {isMenuOpen && (
          <UserLogoModal
            openUserInfoModal={openUserInfoModal}
            openUserLogoutModal={openUserLogoutModal}
            // onClose={onCloseMenu}
          />
        )}
      </div>

      {/* Модальне вікно для settings */}
      {isOpenUserInfoModal && !isOpenUserLogoutModal && (
        <Modal title="Setting" onClose={closeUserInfoModal}>
          <SettingModal onClose={closeUserInfoModal} />
        </Modal>
      )}

      {/* Модальне вікно для logout */}
      {isOpenUserLogoutModal && !isOpenUserInfoModal && (
        <Modal title="Logout" onClose={closeUserLogoutModal}>
          <UserLogoutModal onClose={closeUserLogoutModal} />
        </Modal>
      )}
    </>
  );
};

export default UserLogo;
