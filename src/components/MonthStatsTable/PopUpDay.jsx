import React from 'react';
import css from './MonthStatsTable.module.css';
import clsx from 'clsx';
import { ReactComponent as IconClose } from '../../images/icons/x-mark-outline.svg';


const PopUpDay = ({ sDate, handleCloseClick, dailyEntries, progress, waterRate  }) => {

  const day = Number(
    sDate.toLocaleDateString('en-US', {
      day: 'numeric',
    })
  );

  const numberForX = [1, 2, 3, 4, 11, 12, 13, 14, 21, 22, 23, 24, 31];

  return (
    <div
      className={clsx(css.popUp, {
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
      <p>Daily norma: {waterRate}</p>
      <p>Fulfillment of the daily norm: {progress}%</p>
      <p>How many servings of water: {dailyEntries}</p>
    </div>
  );
};

export default PopUpDay;
