import css from './MonthStatsTable.module.css';
import { useEffect, useState } from 'react';
import PopUpDay from './PopUpDay';
import clsx from 'clsx';

export const MonthStatsTable = () => {
  const [sDate, setsDate] = useState(new Date());
  const [sDay, setsDay] = useState(null);
  const [popUp, setsPopup] = useState(false);
  const [disabledYear, setsDisabledYear] = useState(false);
  const [disabledDay, setsDisabledDay] = useState(false)
  const previous = '\u003C';
  const next = '\u003E';
  
const disabled = () =>{
  const date = Number(sDate.toLocaleString('en-US', {
    month: 'numeric',
  }))
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth() + 1
if(date===currentMonth){
setsDisabledYear(true)
}
}
useEffect(()=>{
  disabled()
})

  const findMonthDays = (y, m) => {
    return new Date(y, m + 1, 0).getDate();
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

  const handleDateClick = (day, date) => {
    setsDate(date);
    setsDay(day);
    setsPopup(true);
  };
  const handleCloseClick = () => {
    setsPopup(false);
  };

  const showCalendar = () => {
    const y = sDate.getFullYear();
    const m = sDate.getMonth();
    const mDays = findMonthDays(y, m);
    const allDays = [];

    // Show actual days
    for (let d = 1; d <= mDays; d += 1) {
      const date = new Date(y, m, d);

      allDays.push({ day: d, date: date, value: 100 });

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

          {disabledYear?<button className={css['btn-arrow']} disabled>{next}</button> :<button className={css['btn-arrow']} onClick={changeToNextMonth}>
          
            {next}
          </button>}
        </div>
      </div>
      <div className={css['calendar-table']}>
        {showCalendar().map(item => {
          return (
            <div className={css['day-cell']} key={`d-${item.day}`}>
              <button
                className={css.day}
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
