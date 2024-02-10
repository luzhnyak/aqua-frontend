import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import css from "./Header.module.css";

import { selectIsRefreshing, selectUser } from "../../redux/auth/selectors";
import { AppDispatch } from "../../redux/store";
import { logoutThunk } from "../../redux/auth/operations";
import { clearWater } from "../../redux/waterConsumption/slice";

import { ReactComponent as IconChevron } from "../../images/icons/chevron-double-up.svg";

import Modal from "../../components/Modal/Modal";
import SettingModal from "../../components/SettingModal/SettingModal";
import ModalConfirm from "../Modal/ModalConfirm";
import Loader from "../Loader/Loader";
import UserLogoModal from "./UserLogoModal";

const UserLogo: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isOpenUserInfoModal, setOpenUserInfoModal] = useState(false);
  const [isOpenUserLogoutModal, setOpenUserLogoutModal] = useState(false);

  const user = useSelector(selectUser);
  const loader = useSelector(selectIsRefreshing);

  const { name, email, avatarURL } = user;

  const modalRef = useRef<HTMLDivElement | null>(null);

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
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

  const handleLogout = async () => {
    dispatch(logoutThunk());
    dispatch(clearWater());
    setOpenUserLogoutModal(true);
  };

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
          <button
            type="button"
            className={css.dropDownMenu}
            onClick={toggleMenu}
          >
            <p className={css.userNameText}>{name ? name : ""}</p>
            {avatarURL ? (
              <div className={css.cover}>
                <img src={avatarURL} className={css.avatar} alt="userAvatar" />
              </div>
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
          </button>
        )}
        {isMenuOpen && (
          <UserLogoModal
            openUserInfoModal={openUserInfoModal}
            openUserLogoutModal={openUserLogoutModal}
          />
        )}
      </div>
      <div className={css.lngBtns}>
        <button
          className={`${css.lngBtn} ${
            i18n.language === "en" ? `${css.active}` : ""
          }`}
          type="button"
          onClick={() => changeLanguage("en")}
        >
          EN
        </button>
        <button
          className={`${css.lngBtn} ${
            i18n.language === "ua" ? `${css.active}` : ""
          }`}
          type="button"
          onClick={() => changeLanguage("ua")}
        >
          UA
        </button>
      </div>
      {/* Модальне вікно для settings */}
      {isOpenUserInfoModal && !isOpenUserLogoutModal && (
        <Modal title={t("userLogoModal.setting")} onClose={closeUserInfoModal}>
          <SettingModal onClose={closeUserInfoModal} />
        </Modal>
      )}
      {/* Модальне вікно для logout */}
      {isOpenUserLogoutModal && !isOpenUserInfoModal && (
        <ModalConfirm
          title={t("userLogoModal.logout")}
          text={t("logOutModal.title")}
          buttonTextOk={t("logOutModal.logout")}
          buttonTextCancel={t("logOutModal.cancel")}
          onOk={handleLogout}
          onClose={closeUserLogoutModal}
        />
      )}
      {loader && <Loader />}
    </>
  );
};

export default UserLogo;
