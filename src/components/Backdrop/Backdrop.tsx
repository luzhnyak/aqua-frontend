import { createPortal } from 'react-dom';
import css from './Backdrop.module.css'
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode
}

const Backdrop: React.FC<IProps> = ({ children }) => {
    const modalRoot = document.querySelector('#root-modal') as HTMLDivElement;
  
    return createPortal(
      <div className={css.backdrop}>
        {children}
      </div>,
      modalRoot
    );
  };
  
  export default Backdrop;
  