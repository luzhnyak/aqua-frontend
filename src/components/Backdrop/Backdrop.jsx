import { createPortal } from 'react-dom';
import css from './Backdrop.module.css'

const Backdrop = ({ children }) => {
    const modalRoot = document.querySelector('#root-modal');
  
    return createPortal(
      <div className={css.backdrop}>
        {children}
      </div>,
      modalRoot
    );
  };
  
  export default Backdrop;
  