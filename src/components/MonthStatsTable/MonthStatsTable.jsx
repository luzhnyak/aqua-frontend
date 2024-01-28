import css from './MonthStatsTable.module.css';
import { useEffect, useState } from 'react';
import PopUpDay from './PopUpDay';


export const MonthStatsTable = () => {
  const [sDate, setsDate] = useState(new Date());
  const [sDay, setsDay] = useState(null);
  const [popUp, setsPopup] = useState(false);
  const [disabledYear, setsDisabledYear] = useState(false);
  const previous = '\u003C';
  const next = '\u003E';

  const disabled = () => {
    const currentDate = new Date();
    const month = Number(
      sDate.toLocaleString('en-US', {
        month: 'numeric',
      })
    );

    const currentMonth = currentDate.getMonth() + 1;

    if (month === currentMonth) {
      setsDisabledYear(true);
    }
  };
  useEffect(() => {
    disabled();
  });

  const findMonthDays = (y, m) => {
    return new Date(y, m + 1, 0).getDate();
  };

  const changeToPrevMonth = () => {
    setsDate(pDate => {
      const pMonth = pDate.getMonth() - 1;
      const pYear = pDate.getFullYear();
      return new Date(pYear, pMonth);
    });
    setsDisabledYear(false);
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

    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth()
    // Show actual days
    for (let d = 1; d <= mDays; d += 1) {
      const date = new Date(y, m, d);

if(m === currentMonth){
  if (d <= currentDay) {
    allDays.push({ day: d, date: date, value: 100, disabled: false });
  } else {
    allDays.push({ day: d, date: date, value: 100, disabled: true });
  }
}
else{
  allDays.push({ day: d, date: date, value: 100, disabled: false });
}
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

          {disabledYear ? (
            <button className={css['btn-arrow']} disabled>
              {next}
            </button>
          ) : (
            <button className={css['btn-arrow']} onClick={changeToNextMonth}>
              {next}
            </button>
          )}
        </div>
      </div>
      <div className={css['calendar-table']}>
        {showCalendar().map(item => {
          return (
            <div key={`d-${item.day}`}>
              {!item.disabled ? (
                <div className={css['day-cell']} >

                    <button
                      className={css.day}
                      onClick={() => handleDateClick(item.day, item.date)}
                    >
                      {item.day}
                    </button>
                    <p className={css.percent}> 100%</p>

                  {popUp && sDay === item.day && (
                    <PopUpDay
                      handleCloseClick={handleCloseClick}
                      sDate={sDate}
                    />
                  )}
                </div>
              ) : (
                <button className={css['disabled-day']} disabled>
                  {item.day}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
