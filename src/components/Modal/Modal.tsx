import { FC, ReactNode, useEffect, useRef } from "react";
import css from "./Modal.module.css";
import closeIcon from "../../images/icons/x-mark.svg";
import { createPortal } from "react-dom";
import AnimatedComponent from "../../components/AnimatedComponent/AnimatedComponent";
import { useTranslation } from "react-i18next";

const modalRoot: Element | null = document.querySelector("#root-modal");

interface IProps {
  title: string;
  onClose: (value: boolean) => void;
  children: ReactNode;
}

const Modal: FC<IProps> = ({ title, children, onClose }) => {
  const { t } = useTranslation();

  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        onClose(false);
      }
    };

    const handleClose = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClose);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClose);
    };
  }, [onClose]);

  return modalRoot ? (
    createPortal(
      <AnimatedComponent css={css.backdrop}>
        <div className={css.container}>
          <div
            ref={modalRef}
            className={`${css.modal} ${
              title === `${t("userLogoModal.setting")}`
                ? css.settingModal
                : css.modal
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            {title && <h3 className={css.title}>{title}</h3>}
            <button className={css.btnClose} onClick={() => onClose(false)}>
              <img src={closeIcon} width={24} alt="Close" />
            </button>
            <div className={css.content}>{children}</div>
          </div>
        </div>
      </AnimatedComponent>,
      modalRoot
    )
  ) : (
    <AnimatedComponent css={css.backdrop}>
      <div className={css.container}>
        <div
          ref={modalRef}
          className={`${css.modal} ${
            title === `${t("userLogoModal.setting")}`
              ? css.settingModal
              : css.modal
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          {title && <h3 className={css.title}>{title}</h3>}
          <button className={css.btnClose} onClick={() => onClose(false)}>
            <img src={closeIcon} width={24} alt="Close" />
          </button>
          <div className={css.content}>{children}</div>
        </div>
      </div>
    </AnimatedComponent>
  );
};

export default Modal;
