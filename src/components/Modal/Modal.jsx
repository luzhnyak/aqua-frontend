import React, { useEffect } from 'react';
import css from './Modal.module.css';
import closeIcon from '../../images/icons/x-mark.svg';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#root-modal');

const Modal = ({ title, children, onClose }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleClose = event => {
    onClose(false);
  };

  return createPortal(
    <div onClick={handleClose} className={css.backdrop}>
      <div className={css.modal} onClick={event => event.stopPropagation()}>
        {title && <h3 className={css.title}>{title}</h3>}
        <button className={css.btnClose} onClick={handleClose}>
          <img src={closeIcon} width={24} alt="Close" />
        </button>
        <div className={css.content}>{children}</div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
