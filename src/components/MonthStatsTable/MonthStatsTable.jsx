import css from './MonthStatsTable.module.css';
import { useEffect, useState } from 'react';
import PopUpDay from './PopUpDay';
import { useDispatch, useSelector } from 'react-redux';
import { selectWatersPerMonth } from '../../redux/waterConsumption/selectors';
import { getAllWaterForMonthThunk } from '../../redux/waterConsumption/operations';

export const MonthStatsTable = ({ popUpOpen }) => {
  const dispatch = useDispatch();

  const waterPerMonth = useSelector(selectWatersPerMonth);
  const [sDate, setsDate] = useState(new Date());
  const [sDay, setsDay] = useState(null);
  const [popUp, setsPopup] = useState(false);
  const [disabledYear, setsDisabledYear] = useState(false);
  const previous = '\u003C';
  const next = '\u003E';

  useEffect(() => {
    const getMonthWater = () => {
      const y = sDate.getFullYear();
      const m = sDate.getMonth();
      const chosenMonth = { year: y, month: m };
      dispatch(getAllWaterForMonthThunk(chosenMonth));
    };
    getMonthWater();

    const disabled = () => {
      const currentDate = new Date();
      const month = Number(
        sDate.toLocaleString('en-US', {
          month: 'numeric',
        })
      );
      const year = Number(
        sDate.toLocaleString('en-US', {
          year: 'numeric',
        })
      );
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1;
      if (month === currentMonth && year === currentYear) {
        setsDisabledYear(true);
      }
    };

    disabled();

    if (popUpOpen) {
      handleCloseClick();
    }
  }, [popUpOpen, sDate, dispatch]);

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
    setsPopup(false);
  };

  const changeToNextMonth = () => {
    setsDate(pDate => {
      const nMonth = pDate.getMonth() + 1;
      const nYear = pDate.getFullYear();
      return new Date(nYear, nMonth);
    });
    setsPopup(false);
  };

  const handleDateClick = (day, date) => {
    if (!popUp) {
      setsPopup(true);
    }
    if (popUp && date.getDate() === sDate.getDate()) {
      setsPopup(false);
    }

    if (popUp && date.getDate() !== sDate.getDate()) {
      setsPopup(false);
      setsPopup(true);
    }

    setsDate(date);
    setsDay(day);
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
    const currentMonth = currentDate.getMonth();
    // Show actual days
    let progress = 0
    let waterNorm
    let quantity

    for (let d = 1; d <= mDays; d += 1) {
      const date = new Date(y, m, d);
      let dayInMonth = []
      waterPerMonth.map(day=>{
       const dateFormonth = new Date(day.date)
       dayInMonth.push(Number(dateFormonth.toLocaleString('en-US', {
               day: 'numeric',
             })))
return day
     })

const percent = waterPerMonth.map(day=>day.progress)

for(let i=0; i<dayInMonth.length; i+=1){
  if(d===dayInMonth[i]){
    progress = percent[i]
  }
}

  if (m === currentMonth) {
    if (d <= currentDay) {
      allDays.push({ day: d, date: date, value: progress, disabled: false });
    } else {
      allDays.push({ day: d, date: date, value: progress, disabled: true });
    }
  } else {
    allDays.push({ day: d, date: date, value: progress, disabled: false, norma: waterNorm, quantity});
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
                <div className={css['day-cell']}>
                  <button
                    className={css.day}
                    onClick={() => handleDateClick(item.day, item.date)}
                  >
                    {item.day}
                  </button>
                  <p className={css.percent}> {item.value}%</p>

                  {popUp && sDay === item.day && (
                    <PopUpDay
                      dayId={item.id}
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
