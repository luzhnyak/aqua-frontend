import { FC } from "react";
import { deleteWaterThunk } from "../../redux/waterConsumption/operations";
import css from "./ConfirmDeleteModal.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

interface IProps {
  onClose: (value: boolean) => void;
  id: string | undefined;
}

const ConfirmDeleteModal: FC<IProps> = ({ onClose, id }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleDelete = () => {
    if (id) {
      dispatch(deleteWaterThunk(id));
    }
  };

  const handleClose = () => {
    onClose(false);
  };

  return (
    <div>
      <h4 className={css.title}>Are you sure you want to delete the entry?</h4>
      <div className={css.buttons}>
        <button className={css.cancelBtn} type="button" onClick={handleClose}>
          Cancel
        </button>
        <button className={css.logoutBtn} type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
