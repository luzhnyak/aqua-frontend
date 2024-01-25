import React from 'react';
import css from './HomePage.module.css'
import { TodayWaterList } from 'components/TodayWaterList/TodayWaterList';
import { MonthStatsTable } from 'components/MonthStatsTable/MonthStatsTable';

const HomePage = () => {
  return <div>HomePage
    <div className={css['container-progress']}>
   <TodayWaterList/>
   <MonthStatsTable/>
    </div>
  </div>;
};

export default HomePage;
