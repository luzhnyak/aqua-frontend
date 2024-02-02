import React, { useEffect, useRef } from 'react';
import css from './Modal.module.css';
import closeIcon from '../../images/icons/x-mark.svg';
import { createPortal } from 'react-dom';
import AnimatedComponent from 'components/AnimatedComponent/AnimatedComponent';

const modalRoot = document.querySelector('#root-modal');

const Modal = ({ title, children, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose(false);
      }
    };

    const handleClose = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClose);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClose);
    };
  }, [onClose]);

  return createPortal(
    <AnimatedComponent css={css.backdrop}>
      <div
        ref={modalRef}
        className={`${css.modal} ${
          title === 'Setting' ? css.settingModal : css.modal
        }`}
        onClick={event => event.stopPropagation()}
      >
        {title && <h3 className={css.title}>{title}</h3>}
        <button className={css.btnClose} onClick={() => onClose(false)}>
          <img src={closeIcon} width={24} alt="Close" />
        </button>
        <div className={css.content}>{children}</div>
      </div>
    </AnimatedComponent>,
    modalRoot
  );
};

export default Modal;
