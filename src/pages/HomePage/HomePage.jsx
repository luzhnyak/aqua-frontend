import React, { useState } from 'react';
import css from './HomePage.module.css';

import { TodayWaterList } from 'components/TodayWaterList/TodayWaterList';
import { MonthStatsTable } from 'components/MonthStatsTable/MonthStatsTable';
import WaterRatioPanel from 'components/WaterRatioPanel/WaterRatioPanel';
import DailyNorma from 'components/DailyNorma/DailyNorma';

const HomePage = () => {
const [isPopUp, setIsPopUp] = useState(false)
  const handleClick = e => {
 
    if (e.target.nodeName !== 'BUTTON' || e.code === 'Escape') {
      setIsPopUp(true)
    }
    else setIsPopUp(false)
  }

  return (
    <main className={css.container} onClick={handleClick}>
      <section className={css.firstSection}>
        <div className={css.bottleField}>
          <DailyNorma />
        </div>

        <WaterRatioPanel />
      </section>
      <section className={css['container-progress']}>
        <TodayWaterList />
        <MonthStatsTable popUpOpen={isPopUp}/>
      </section>
    </main>
  );
};

export default HomePage;
