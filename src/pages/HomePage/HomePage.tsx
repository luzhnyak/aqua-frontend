import React, { FC, useState } from "react";
import css from "./HomePage.module.css";

import { TodayWaterList } from "../../components/TodayWaterList/TodayWaterList";
import { MonthStatsTable } from "../../components/MonthStatsTable/MonthStatsTable";
import WaterRatioPanel from "../../components/WaterRatioPanel/WaterRatioPanel";
import DailyNorma from "../../components/DailyNorma/DailyNorma";

const HomePage: FC = () => {
  const [isPopUp, setIsPopUp] = useState(false);
  // const handleClick = (e: KeyboardEvent) => {
  //   if (e.target.nodeName !== "BUTTON" || e.code === "Escape") {
  //     setIsPopUp(true);
  //   } else setIsPopUp(false);
  // };

  return (
    <section className={css.background}>
      {/* <div className={css.container} onClick={handleClick}> */}
      <div className={css.container}>
        <div className={css.firstSection}>
          {/* <DailyNorma />
          <WaterRatioPanel /> */}
        </div>

        <div className={css.containerProgressWrapper}>
          <div className={css["container-progress"]}>
            <TodayWaterList />
            <MonthStatsTable popUpOpen={isPopUp} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
