import WaterRatioPanel from 'components/WaterRatioPanel/WaterRatioPanel';
import React from 'react';
import css from './HomePage.module.css';
import { TodayWaterList } from 'components/TodayWaterList/TodayWaterList';
import { MonthStatsTable } from 'components/MonthStatsTable/MonthStatsTable';
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
      <div className={css['container-progress']}>
        <TodayWaterList />
        <MonthStatsTable />
      </div>
    </main>
  );
};

export default HomePage;
