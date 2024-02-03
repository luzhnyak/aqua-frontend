import css from "./TodayWaterItem.module.css";
import { ReactComponent as EditTool } from "../../images/icons/pencil-square.svg";
import { ReactComponent as Trash } from "../../images/icons/trash.svg";
import { ReactComponent as Glass } from "../../images/icons/glass.svg";
import { FC, useState } from "react";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import Modal from "../../components/Modal/Modal";
import AddWaterModal from "../../components/AddWaterModal/AddWaterModal";

interface IProps {
  id: string | undefined;
  amount: number;
  time: string;
}

const TodayWaterItem: FC<IProps> = ({ id, amount, time }) => {
  const [isModalDelete, setIsModalDelete] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);

  const openModalDelete = () => {
    setIsModalDelete(true);
  };
  const closeModalDelete = () => {
    setIsModalDelete(false);
  };
  const openModalEdit = () => {
    setIsModalEdit(true);
  };
  const closeModalEdit = () => {
    setIsModalEdit(false);
  };

  return (
    <li className={css["entry-item"]}>
      <div className={css["entry-info"]}>
        <Glass className={css.glass} />
        <p className={css.amount}>{amount} ml</p>
        <p className={css.time}>{time}</p>
      </div>
      <div className={css.icons}>
        <button className={css.edit} onClick={openModalEdit}>
          <EditTool className={css.edit} />
        </button>
        <button className={css.delete} onClick={openModalDelete}>
          {" "}
          <Trash className={css.delete} />
        </button>
      </div>

      {isModalEdit && (
        <Modal
          title="Edit the entered amount of water"
          onClose={closeModalEdit}
        >
          {/* <AddWaterModal
            isEditWater={true}
            id={id}
            previousAmount={amount}
            previousTime={time}
            onClose={closeModalEdit}
          /> */}
        </Modal>
      )}
      {isModalDelete && (
        <Modal title="Delete entry" onClose={closeModalDelete}>
          <ConfirmDeleteModal id={id} onClose={closeModalDelete} />
        </Modal>
      )}
    </li>
  );
};
export default TodayWaterItem;
