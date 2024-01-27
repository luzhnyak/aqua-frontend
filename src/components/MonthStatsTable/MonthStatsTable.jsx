import css from './MonthStatsTable.module.css';
// import { ReactComponent as IconClose } from '../../images/icons/x-mark-outline.svg';
import { useState } from 'react';
import PopUpDay from './PopUpDay';

export const MonthStatsTable = () => {
  const [sDate, setsDate] = useState(new Date());
  const [sDay, setsDay] = useState(null);
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

  const handleDateClick = (day, date) => {
    setsDate(date);
    setsDay(day);
    setsPopup(true);
  };
  const handleCloseClick = () => {
    setsPopup(false);
  };

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

      allDays.push({ day: d, date: date, value: 100 });

      // allDays.push(
      //   <div className={css['day-cell']} key={`d-${d}`}>
      //     <button
      //       className={css.day}
      //       //   className={`box ${isSelected ? 'selected' : ''}`}
      //       onClick={() => handleDateClick(date)}
      //     >
      //       {d}
      //     </button>
      //     <p className={css.percent}> 100%</p>
      //   </div>
      // );
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
            {`${sDate.toLocaleString('en-US', {
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
        {showCalendar().map(item => {
          return (
            <div className={css['day-cell']} key={`d-${item.day}`}>
              <button
                className={css.day}
                //   className={`box ${isSelected ? 'selected' : ''}`}
                onClick={() => handleDateClick(item.day, item.date)}
              >
                {item.day}
              </button>
              <p className={css.percent}> 100%</p>
              {popUp && sDay === item.day && (
                <PopUpDay handleCloseClick={handleCloseClick} sDate={sDate} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
