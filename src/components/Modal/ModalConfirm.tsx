import { FC } from "react";
import css from "./ModalConfirm.module.css";
import Modal from "./Modal";

interface IProps {
  title: string;
  text: string;
  buttonTextOk: string;
  buttonTextCancel: string;
  onOk: () => void;
  onClose: (value: boolean) => void;
}

const ModalConfirm: FC<IProps> = ({
  title,
  text,
  onOk,
  onClose,
  buttonTextOk,
  buttonTextCancel,
}) => {
  return (
    <Modal title={title} onClose={onClose}>
      <div className={css.container}>
        <h4 className={css.title}>{text}</h4>
        <div className={css.buttons}>
          <button className={css.logoutBtn} type="button" onClick={onOk}>
            {buttonTextOk}
          </button>
          <button
            className={css.cancelBtn}
            type="button"
            onClick={() => onClose(true)}
          >
            {buttonTextCancel}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalConfirm;
