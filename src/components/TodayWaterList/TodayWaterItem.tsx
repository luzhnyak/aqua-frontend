import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import css from "./TodayWaterItem.module.css";

import { AppDispatch } from "../../redux/store";
import { deleteWaterThunk } from "../../redux/waterConsumption/operations";

import { ReactComponent as EditTool } from "../../images/icons/pencil-square.svg";
import { ReactComponent as Trash } from "../../images/icons/trash.svg";
import { ReactComponent as Glass } from "../../images/icons/glass.svg";

import Modal from "../../components/Modal/Modal";
import AddWaterModal from "../../components/AddWaterModal/AddWaterModal";
import ModalConfirm from "../Modal/ModalConfirm";

interface IProps {
  id: string | undefined;
  amount: number;
  time: string;
}

const TodayWaterItem: FC<IProps> = ({ id, amount, time }) => {
  const { t } = useTranslation();

  const [isModalDelete, setIsModalDelete] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);

  const dispatch: AppDispatch = useDispatch();

  const openModalEdit = () => {
    setIsModalEdit(true);
  };

  const closeModalEdit = () => {
    setIsModalEdit(false);
  };

  const openModalDelete = () => {
    setIsModalDelete(true);
  };

  const handleDelete = () => {
    if (id) {
      dispatch(deleteWaterThunk(id));
    }
  };

  const handleCloseModalDelete = () => {
    setIsModalDelete(false);
  };

  return (
    <li className={css["entry-item"]}>
      <div className={css["entry-info"]}>
        <Glass className={css.glass} />
        <p className={css.amount}>
          {amount} {t("todayWaterItem.ml")}
        </p>
        <p className={css.time}>{time}</p>
      </div>
      <div className={css.icons}>
        <button className={css.edit} onClick={openModalEdit}>
          <EditTool className={css.edit} />
        </button>
        <button className={css.delete} onClick={openModalDelete}>
          <Trash className={css.delete} />
        </button>
      </div>

      {isModalEdit && (
        <Modal
          title={t("todayWaterItem.titleAddWaterModal")}
          onClose={closeModalEdit}
        >
          <AddWaterModal
            isEditWater={true}
            id={id}
            previousAmount={amount.toString()}
            previousTime={time}
            onClose={closeModalEdit}
          />
        </Modal>
      )}
      {isModalDelete && (
        <ModalConfirm
          title={t("todayWaterItem.titleConfirmDeleteModal")}
          text={t("confirmDeleteModal.title")}
          buttonTextOk={t("confirmDeleteModal.delete")}
          buttonTextCancel={t("confirmDeleteModal.cancel")}
          onOk={handleDelete}
          onClose={handleCloseModalDelete}
        />
        // <ConfirmDeleteModal id={id} onClose={closeModalDelete} />
      )}
      {/* {isModalDelete && (
        <Modal
          title={t("todayWaterItem.titleConfirmDeleteModal")}
          onClose={closeModalDelete}
          confirm
        >
          <ConfirmDeleteModal id={id} onClose={closeModalDelete} />
        </Modal>
      )} */}
    </li>
  );
};
export default TodayWaterItem;
