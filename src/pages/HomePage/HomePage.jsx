import React from 'react';
import css from './HomePage.module.css';

import { TodayWaterList } from 'components/TodayWaterList/TodayWaterList';
import { MonthStatsTable } from 'components/MonthStatsTable/MonthStatsTable';
import WaterRatioPanel from 'components/WaterRatioPanel/WaterRatioPanel';
import DailyNorma from 'components/DailyNorma/DailyNorma';

const HomePage = () => {
  return (
    <main className={css.container}>
      <section className={css.firstSection}>
        <div className={css.bottleField}>
          <DailyNorma />
        </div>

        <WaterRatioPanel />
      </section>
      <section className={css['container-progress']}>
        <TodayWaterList />
        <MonthStatsTable />
      </section>
    </main>
  );
};

export default HomePage;
