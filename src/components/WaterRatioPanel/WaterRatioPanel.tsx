import { useState, useEffect, useMemo } from "react";
import css from "./WaterRatioPanel.module.css";

import { useSelector } from "react-redux";
import { selectWatersToday } from "../../redux/waterConsumption/selectors";
import AddWaterModal from "../../components/AddWaterModal/AddWaterModal";
import Modal from "../../components/Modal/Modal";
import { useTranslation } from "react-i18next";

const WaterRatioPanel = () => {
  const { t } = useTranslation();

  const waterToday = useSelector(selectWatersToday) || 0;
  const progressValue = useMemo(() => {
    if (waterToday) {
      return Number(parseInt(waterToday?.progress));
    }
    return 0;
  }, [waterToday]);
  const [isOpen, setAddWaterModalOpen] = useState(false);
  // const [isAddWater, setIsAddWater] = useState(false);

  const openModal = () => {
    setAddWaterModalOpen(true);
    document.body.classList.add("body-scroll-lock");
  };

  const closeModal = () => {
    setAddWaterModalOpen(false);
    document.body.classList.remove("body-scroll-lock");
  };

  // const toggleIsAddWaterState = () => {
  //   setIsAddWater(!isAddWater);
  // };

  useEffect(() => {
    const rangeThumb = document.getElementById("range-thumb");
    const rangeInput = document.getElementById("range-input");

    // const thumbPosition = rangeInput.value / rangeInput.max;
    const thumbPosition = progressValue / 100;

    const changeThumbPosition = () => {
      if (rangeThumb && rangeInput) {
        const space = rangeInput.offsetWidth - rangeThumb.offsetWidth;
        const thumbPositionX = thumbPosition * space;
        rangeThumb.style.left = `${thumbPositionX}px`;
      }
    };

    changeThumbPosition();

    const updateProgressBarColor = () => {
      if (rangeThumb && rangeInput) {
        const space = rangeInput.offsetWidth - 7;
        const thumbPositionX = thumbPosition * space;
        rangeInput.style.background = `linear-gradient(to right, var(--secondary-color-blue-3) 0%, var(--secondary-color-blue-3) ${thumbPositionX}px, var(--secondary-color-blue-2) ${thumbPositionX}px, var(--secondary-color-blue-2) 100%)`;
      }
    };
    updateProgressBarColor();
  }, [waterToday, progressValue]);

  return (
    <div>
      <h2 className={css.today}>{t("waterRatioPanel.today")}</h2>
      <div className={css.mainContainer}>
        <div className={css.panel}>
          <div className={css.range}>
            <div className={css.rangeContent}>
              <div className={css.rangeSlider}>
                <div className={css.rangeSliderLine} id="range-line"></div>
              </div>

              <input
                type="range"
                className={css.rangeInput}
                id="range-input"
                min="0"
                max="100"
                value={progressValue}
                step="1"
                readOnly
              />
              <div className={css.rangeThumb} id="range-thumb"></div>
            </div>
          </div>

          <div className={css.decorativeLines}>
            <div className={css.line}></div>
            <div className={css.line}></div>
            <div className={css.line}></div>
          </div>

          <div className={css.percentages}>
            <span className={css.number1}>0%</span>
            <span className={css.number2}>50%</span>
            <span className={css.number3}>100%</span>
          </div>
        </div>
        <button type="button" className={css.addButton} onClick={openModal}>
          <img
            className={css.plusCircle}
            src={require("../../images/icons/progressbar-plus.svg").default}
            alt="plus-circle.svg"
            width="24"
            height="24"
          />
          <span className={css.addButtonText}>
            {t("waterRatioPanel.title")}
          </span>
        </button>
      </div>
      {isOpen && (
        <Modal title={t("waterRatioPanel.title")} onClose={closeModal}>
          <AddWaterModal isAddWater={true} onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default WaterRatioPanel;
