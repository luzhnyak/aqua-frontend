import { useDispatch, useSelector } from "react-redux";
// import { ReactComponent as Plus } from '../../images/icons/plus-small.svg';
import TodayWaterItem from "./TodayWaterItem";
import css from "./TodayWaterList.module.css";

import { selectWatersToday } from "../../redux/waterConsumption/selectors";
import { useEffect, useState } from "react";

import Modal from "../../components/Modal/Modal";
import AddWaterModal from "../../components/AddWaterModal/AddWaterModal";
import { getAllWaterForTodayThunk } from "../../redux/waterConsumption/operations";
import { AppDispatch } from "../../redux/store";
import { IDdailyEntry } from "../../types";

export const TodayWaterList = () => {
  const waterToday = useSelector(selectWatersToday);
  const entries: IDdailyEntry[] = [];
  if (waterToday !== null) {
    waterToday.dailyEntries.map((e) => entries.push(e));
  }

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllWaterForTodayThunk());
  }, [dispatch]);

  const [isOpen, setAddWaterModalOpen] = useState(false);

  const openModal = () => {
    setAddWaterModalOpen(true);
    document.body.classList.add("body-scroll-lock");
  };

  const closeModal = () => {
    setAddWaterModalOpen(false);
    document.body.classList.remove("body-scroll-lock");
  };
  return (
    <div className={css["entries-container"]}>
      <div className={css.entries}>
        <h2 className={css.title}>Today</h2>
        {entries.length === 0 && <p className={css.empty}>No notes yet</p>}
        <ul className={css["list-entry"]}>
          {entries.length !== 0 &&
            entries.map((entry) => (
              <TodayWaterItem
                id={entry._id}
                key={entry._id}
                amount={entry.waterVolume}
                time={entry.time}
              />
            ))}
        </ul>
      </div>
      <button className={css["btn-add"]} onClick={openModal}>
        <span className={css.plus}>+</span> Add water
      </button>
      {isOpen && (
        <Modal title="Add Water" onClose={closeModal}>
          <AddWaterModal isAddWater={true} onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
};
