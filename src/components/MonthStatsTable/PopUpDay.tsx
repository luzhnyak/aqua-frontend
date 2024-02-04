import { FC, useEffect, useRef } from "react";
import css from "./MonthStatsTable.module.css";
import clsx from "clsx";
import { ReactComponent as IconClose } from "../../images/icons/x-mark-outline.svg";
import AnimatedComponent from "../../components/AnimatedComponent/AnimatedComponent";
import { useTranslation } from "react-i18next";

interface IProps {
  sDate: Date;
  handleCloseClick: () => void;
  dailyEntries: number;
  progress: number;
  waterRate: number;
}

const PopUpDay: FC<IProps> = ({
  sDate,
  handleCloseClick,
  dailyEntries,
  progress,
  waterRate,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const { t } = useTranslation();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        handleCloseClick();
      }
    };

    const handleClose = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleCloseClick();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClose);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClose);
    };
  }, [handleCloseClick]);

  const day = Number(
    sDate.toLocaleDateString("en-US", {
      day: "numeric",
    })
  );

  const numberForX = [1, 2, 3, 4, 11, 12, 13, 14, 21, 22, 23, 24, 31];

  return (
    <AnimatedComponent
      css={clsx({
        [css.left]: numberForX.includes(day),
        [css.right]: !numberForX.includes(day),
        [css.secondRow]: day > 5,
        [css.thirdRow]: day > 10,
        [css.forthRow]: day > 15,
        [css.fifthRow]: day > 20,
        [css.sixthRow]: day > 25,
        [css.seventhRow]: day > 30,
      })}
    >
      <div ref={modalRef} className={css.popUp}>
        <div className={css["popup-header"]}>
          <p className={css["popup-date"]}>
            {`${sDate.toLocaleDateString("en-US", {
              day: "numeric",
            })},  
           ${sDate.toLocaleDateString("en-US", {
             month: "long",
           })}`}
          </p>
          <IconClose
            className={css["popup-close"]}
            onClick={handleCloseClick}
          />
        </div>
        <p>
          {t("popUpDay.norma")}: <span className={css.info}>{waterRate} L</span>
        </p>
        <p>
          {t("popUpDay.fulfillment")}:{" "}
          <span className={css.info}>{progress}%</span>
        </p>
        <p>
          {t("popUpDay.servings")}:{" "}
          <span className={css.info}>{dailyEntries}</span>
        </p>
      </div>
    </AnimatedComponent>
  );
};

export default PopUpDay;
