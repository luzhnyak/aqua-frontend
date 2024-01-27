import React from 'react';
import css from './MonthStatsTable.module.css';
import { ReactComponent as IconClose } from '../../images/icons/x-mark-outline.svg';

const PopUpDay = ({ sDate, handleCloseClick }) => {
  return (
    <div className={css.popUp}>
      <div className={css['popup-header']}>
        <p className={css['popup-date']}>
          {`${sDate.toLocaleDateString('en-US', {
            day: 'numeric',
          })},  
           ${sDate.toLocaleDateString('en-US', {
             month: 'long',
           })}`}
        </p>
        <IconClose className={css['popup-close']} onClick={handleCloseClick} />
      </div>
      <p>Daily norma:</p>
      <p>Fulfillment of the daily norm:</p>
      <p>How many servings of water:</p>
    </div>
  );
};

export default PopUpDay;
