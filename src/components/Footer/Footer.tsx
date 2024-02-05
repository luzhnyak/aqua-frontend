import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import css from "./Footer.module.css";
import TeamMembers from "./TeamMembers";
import { useTranslation } from "react-i18next";
import "./style.css";

const Footer = () => {
  const [isOpen, setTeamModalOpen] = useState(false);
  const { t } = useTranslation();

  const openModal = () => {
    setTeamModalOpen(true);
    document.body.classList.add("body-scroll-lock");
  };

  const closeModal = () => {
    setTeamModalOpen(false);
    document.body.classList.remove("body-scroll-lock");
  };

  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p className={css["footer-text"]}>
          <span className={css.showOnSmallScreen}></span> Copyright &copy; 2024
        </p>
        <div className={css.vr}></div>
        <button type="button" className={css["footer-btn"]} onClick={openModal}>
          by GOIT.STUDENTS
        </button>
      </div>
      {isOpen && (
        <Modal title={t("team.title")} onClose={closeModal}>
          <TeamMembers />
        </Modal>
      )}
    </footer>
  );
};

export default Footer;
