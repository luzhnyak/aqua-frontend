import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import css from './Fotter.module.css';

const Footer = () => {
  const [isOpen, setTeamModalOpen] = useState(false);

  const openModal = () => {
    setTeamModalOpen(true);
  };

  const closeModal = () => {
    setTeamModalOpen(false);
  };

  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p className={css['footer-text']}>Tracker of water &copy; 2024 by</p>
        <span className={css['footer-span']} onClick={openModal}>
          GoIT.STUDENTS
        </span>
      </div>
      {isOpen && <Modal title="Our team" onClose={closeModal}></Modal>}
    </footer>
  );
};

export default Footer;
