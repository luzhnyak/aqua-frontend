import css from './MonthStatsTable.module.css';
import { useState } from 'react';

export const MonthStatsTable = () => {
  const [sDate, setsDate] = useState(new Date());
  const previous = '\u003C'
  const next = '\u003E'
  const findMonthDays = (y, m) => {
    return new Date(y, m + 1, 0).getDate();
  };

  const findFirstDay = (y, m) => {
    return new Date(y, m, 1).getDay();
  };

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
  };

  const showCalendar = () => {
    const currDate = new Date();
    const y = sDate.getFullYear();
    const m = sDate.getMonth();
    const mDays = findMonthDays(y, m);
    const fDay = findFirstDay(y, m);
    const allDays = [];

    // For empty cells
    // for (let p = 0; p < fDay; p++) {
    //   allDays.push(<div key={`em-${p}`} className="box empty"></div>);
    // }

    // Show actual days
    for (let d = 1; d <= mDays; d++) {
      const date = new Date(y, m, d);
      const isSelected = sDate && date.toDateString() === sDate.toDateString();

      allDays.push(
        <div
          key={`d-${d}`}
          className={css.day}
        //   className={`box ${isSelected ? 'selected' : ''}`}
          onClick={() => handleDateClick(date)}
        >
          {d}
        </div>
      );
    }

    return allDays;
  };

  return (
    <div className={css['calendar-container']}>
      <div className={css['calendar-header']}>
        <h2>Month</h2>
        <div className={css.monthPicker}>
          <button className={css['btn-previous']} onClick={changeToPrevMonth}> {previous} </button>
          <h2>
            {sDate.toLocaleString('default', {
              month: 'long',
              year: 'numeric',
            })}
          </h2>
          <button className={css['btn-next']} onClick={changeToNextMonth}> {next} </button>
        </div>
      </div>
      <div className={css['calendar-table']}>{showCalendar()} </div>
      {sDate && <div>Selected Date: {sDate.toLocaleDateString()}</div>}
    </div>
  );

};