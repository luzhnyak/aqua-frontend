import WaterRatioPanel from 'components/WaterRatioPanel/WaterRatioPanel';
import React from 'react';
import css from './HomePage.module.css';
import { TodayWaterList } from 'components/TodayWaterList/TodayWaterList';
import { MonthStatsTable } from 'components/MonthStatsTable/MonthStatsTable';

const HomePage = () => {
  return (
    <main className={css.container}>
      <section className={css.firstSection}>
        <div className={css.bottleField}>
          <span className={css.onlyToCheck}>My daily norma</span>
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
