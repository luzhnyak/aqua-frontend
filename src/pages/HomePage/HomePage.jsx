import WaterRatioPanel from 'components/WaterRatioPanel/WaterRatioPanel';
import React from 'react';
import css from './HomePage.module.css'
import { TodayWaterList } from 'components/TodayWaterList/TodayWaterList';
import { MonthStatsTable } from 'components/MonthStatsTable/MonthStatsTable';

const HomePage = () => {
  return <div className={css.container}>
    HomePage
    <div></div>
   <div className={css['container-progress']}>
   <TodayWaterList/>
   <MonthStatsTable/>
    </div>
<WaterRatioPanel />
  </div>;
};

export default HomePage;
