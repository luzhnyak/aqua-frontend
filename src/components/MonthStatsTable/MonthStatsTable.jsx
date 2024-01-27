import css from './MonthStatsTable.module.css';
import { ReactComponent as IconClose } from '../../images/icons/x-mark-outline.svg';
import { useState } from 'react';

export const MonthStatsTable = () => {
  const [sDate, setsDate] = useState(new Date());
  const [popUp, setsPopup] = useState(false);
  
  const previous = '\u003C';
  const next = '\u003E';
  const findMonthDays = (y, m) => {
    return new Date(y, m + 1, 0).getDate();
  };

  // const findFirstDay = (y, m) => {
  //   return new Date(y, m, 1).getDay();
  // };
//   const showPopup = () => {
//     const showPopUp = []
// showPopUp.push(
// <div>
//  <div className={css.popUp}>
// {`${sDate.toLocaleDateString('en-US', {
//         day: 'numeric',
//       })},  
//        ${sDate.toLocaleDateString('en-US', {
//         month: 'long',
//       })}`}
//       <button className={css['popup-close']} onClick={handleCloseClick}></button>
//       <p>Daily norma:</p>
//       <p>Fulfillment of the daily norm:</p>
//       <p>How many servings of water:</p>
//     </div>
//     </div>
//  )
//  return showPopUp
//   }

  const changeToPrevMonth = () => {
    setsDate(pDate => {
      const pMonth = pDate.getMonth() - 1;
      const pYear = pDate.getFullYear();
      return new Date(pYear, pMonth);
    });
  };

  const changeToNextMonth = () => {
    setsDate(pDate => {
      const nMonth = pDate.getMonth() + 1;
      const nYear = pDate.getFullYear();
      return new Date(nYear, nMonth);
    });
  };

  const handleDateClick = date => {
    setsDate(date);
    setsPopup(true);

  };
  const handleCloseClick = () => {
setsPopup(false)
  }

  const showCalendar = () => {
    // const currDate = new Date();
    const y = sDate.getFullYear();
    const m = sDate.getMonth();
    const mDays = findMonthDays(y, m);
    // const fDay = findFirstDay(y, m);
    const allDays = [];

    // For empty cells
    // for (let p = 0; p < fDay; p++) {
    //   allDays.push(<div key={`em-${p}`} className="box empty"></div>);
    // }

    // Show actual days
    for (let d = 1; d <= mDays; d += 1) {
      const date = new Date(y, m, d);
      // const isSelected = sDate && date.toDateString() === sDate.toDateString();

      allDays.push(
        <div key={`d-${d}`}>
          <div
            className={css.day}
            //   className={`box ${isSelected ? 'selected' : ''}`}
            onClick={() => handleDateClick(date)}
          
          >
            {d}
          </div>
          <p className={css.percent}> 100%</p>
        </div>
      );
    }

    return allDays;
  };

  return (
    <div className={css['calendar-container']}>
      <div className={css['calendar-header']}>
        <h2 className={css.title}>Month</h2>
        <div className={css.monthPicker}>
          <button className={css['btn-arrow']} onClick={changeToPrevMonth}>
            {previous}
          </button>
          <h2 className={css['title-month']}>
{            `${sDate.toLocaleString('en-US', {
              month: 'long',
            })}, 
            ${sDate.toLocaleString('en-US', {
              year: 'numeric',
            })}`}
          </h2>
          <button className={css['btn-arrow']} onClick={changeToNextMonth}>
            {' '}
            {next}{' '}
          </button>
        </div>
      </div>
      <div className={css['calendar-table']}>
      {popUp && (
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
<IconClose className={css['popup-close']} onClick={handleCloseClick}/>
</div>
          <p>Daily norma:</p>
          <p>Fulfillment of the daily norm:</p>
          <p>How many servings of water:</p>
        </div>
      )}
         {showCalendar()} </div>
      
    </div>
  );
};
