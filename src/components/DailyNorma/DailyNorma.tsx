import React, { useState } from "react";
import Modal from "../Modal/Modal";
import DailyNormaModal from "./DailyNormaModal";
import css from "./DailyNorma.module.css";
import { useSelector } from "react-redux";
import { selectWaterRate } from "../../redux/auth/selectors";
import { useTranslation } from "react-i18next";

const DailyNorma = () => {
  const { t } = useTranslation();

  const [visible, setVisible] = useState(false);

  const waterRateMG = useSelector(selectWaterRate);
  let waterRate = (waterRateMG && waterRateMG / 1000) || 2.0;

  const toggleModal: () => void = () => {
    setVisible(!visible);
    if (!visible) {
      document.body.classList.add("body-scroll-lock");
    } else {
      document.body.classList.remove("body-scroll-lock");
    }
  };

  const handleWaterAmountSave = (amount: number) => {
    waterRate = amount;
  };

  return (
    <div className={css.dailyNormaBlock}>
      <h3 className={css.normaTitle}>{t("dailyNorma.normaTitle")}</h3>

      <div className={css.secondLineBlock}>
        <p className={css.normaLiters}>
          {waterRate} {t("dailyNorma.l")}
        </p>

        {visible && (
          <Modal title={t("dailyNorma.normaTitle")} onClose={toggleModal}>
            <DailyNormaModal
              setVisible={setVisible}
              onWaterAmountSave={handleWaterAmountSave}
            />
          </Modal>
        )}
        <button className={css.editButton} type="button" onClick={toggleModal}>
          {t("dailyNorma.edit")}
        </button>
      </div>
    </div>
  );
};

export default DailyNorma;
