import React, { useState } from "react";
import Modal from "../Modal/Modal";
import DailyNormaModal from "./DailyNormaModal";
import css from "./DailyNorma.module.css";
import { useSelector } from "react-redux";
import { selectWaterRate } from "../../redux/auth/selectors";

const DailyNorma = () => {
  const [visible, setVisible] = useState(false);

  const waterRateMG = useSelector(selectWaterRate);
  let waterRate = (waterRateMG && waterRateMG / 1000) || 2.0;

  const toggleModal: () => void = () => {
    setVisible(!visible);
  };

  const handleWaterAmountSave = (amount: number) => {
    waterRate = amount;
  };

  return (
    <div className={css.dailyNormaBlock}>
      <h3 className={css.normaTitle}>My daily norma</h3>

      <div className={css.secondLineBlock}>
        <p className={css.normaLiters}>{waterRate} L</p>

        {visible && (
          <Modal title="My daily norma" onClose={toggleModal}>
            <DailyNormaModal
              setVisible={setVisible}
              onWaterAmountSave={handleWaterAmountSave}
            />
          </Modal>
        )}
        <button className={css.editButton} type="button" onClick={toggleModal}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default DailyNorma;
