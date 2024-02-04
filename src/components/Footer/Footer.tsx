import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import css from "./Footer.module.css";
// import { ReactComponent as Iconlogo } from "../../images/logo.svg";
import TeamMembers from "./TeamMembers";

const Footer = () => {
  const [isOpen, setTeamModalOpen] = useState(false);

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
        {/* <div className={css["footer-icon-wrapper"]}>
          <Iconlogo className={css.footerIcon} />
          <p className={`${css["footer-text"]} ${css.showOnSmallScreen}`}>
            Tracker of water
          </p>
        </div> */}
        <p className={css["footer-text"]}>
          <span className={css.showOnSmallScreen}></span> Copyright &copy; 2024
        </p>
        <div className={css.vr}></div>
        <button type="button" className={css["footer-btn"]} onClick={openModal}>
          by GOIT.STUDENTS
        </button>
      </div>
      {isOpen && (
        <Modal title="Our team" onClose={closeModal}>
          <TeamMembers />
        </Modal>
      )}
    </footer>
  );
};

export default Footer;
