import css from "./MonthStatsTable.module.css";
import { FC, useEffect, useState } from "react";
import PopUpDay from "./PopUpDay";
import { useDispatch, useSelector } from "react-redux";
import {
  selectWatersPerMonth,
  selectWatersToday,
} from "../../redux/waterConsumption/selectors";
import { getAllWaterForMonthThunk } from "../../redux/waterConsumption/operations";
import { selectUser } from "../../redux/auth/selectors";
import clsx from "clsx";
import WaterMonthChart from "../../components/WaterMonthChart/WaterMonthChart";
import Modal from "../../components/Modal/Modal";
import { AppDispatch } from "../../redux/store";
import { useTranslation } from "react-i18next";

export const MonthStatsTable: FC = () => {
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector(selectUser);
  const creationDate = user.createdAt ? new Date(user.createdAt) : new Date();
  const currentUserYear = creationDate.getFullYear();
  const currentUserMonth = creationDate.getMonth() + 1;
  const currentUserDay = creationDate.getDate();

  const waterPerMonth = useSelector(selectWatersPerMonth);
  const waterToday = useSelector(selectWatersToday);

  const [sDate, setsDate] = useState(new Date());
  const [sDay, setsDay] = useState<string | null>(null);
  const [popUp, setsPopup] = useState(false);
  const [disabledYear, setsDisabledYear] = useState(false);
  const [disabledForUser, setsDisabledForUser] = useState(false);
  const [isOpen, setMonthChartModal] = useState(false);
  const previous = "\u003C";
  const next = "\u003E";

  // for chart
  const labels: number[] = [];
  const dataPerDay: number[] = [];

  useEffect(() => {
    const getMonthWater = () => {
      const chosenMonth = {
        year: sDate.getFullYear().toString(),
        month: sDate.toLocaleString("en-US", {
          month: "long",
        }),
      };
      dispatch(getAllWaterForMonthThunk(chosenMonth));
    };
    getMonthWater();

    const disabled = () => {
      const currentDate = new Date();
      const month = Number(
        sDate.toLocaleString("en-US", {
          month: "numeric",
        })
      );
      const year = Number(
        sDate.toLocaleString("en-US", {
          year: "numeric",
        })
      );
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1;

      if (month === currentMonth && year === currentYear) {
        setsDisabledYear(true);
      }
    };

    disabled();
  }, [sDate, waterToday, dispatch]);

  const findMonthDays = (y: number, m: number) => {
    return new Date(y, m + 1, 0).getDate();
  };

  const changeToPrevMonth = () => {
    const month =
      Number(
        sDate.toLocaleString("en-US", {
          month: "numeric",
        })
      ) - 1;
    const year = Number(
      sDate.toLocaleString("en-US", {
        year: "numeric",
      })
    );

    if (month === currentUserMonth && year === currentUserYear) {
      setsDisabledForUser(true);
    }

    setsDate((pDate) => {
      const pMonth = pDate.getMonth() - 1;
      const pYear = pDate.getFullYear();
      return new Date(pYear, pMonth);
    });

    setsDisabledYear(false);
    setsPopup(false);
  };

  const changeToNextMonth = () => {
    setsDate((pDate) => {
      const nMonth = pDate.getMonth() + 1;
      const nYear = pDate.getFullYear();
      return new Date(nYear, nMonth);
    });
    setsPopup(false);
    setsDisabledForUser(false);
  };

  const handleDateClick = (day: string, date: Date) => {
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

    // setsDate(date);
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
    let progress = 0;
    let waterNorm = 0;
    let dailyEntries = null;

    for (let d = 1; d <= mDays; d += 1) {
      const date = new Date(y, m, d);
      labels.push(d);
      let dayInMonth: number[] = [];

      waterPerMonth.map((day) => {
        const dateFormonth = new Date(day.date);
        dayInMonth.push(
          Number(
            dateFormonth.toLocaleString("en-US", {
              day: "numeric",
            })
          )
        );
        return day;
      });

      const percent = waterPerMonth.map((day) => day.progress);
      const dailyNorm = waterPerMonth.map((day) => day.waterRate);
      const entries = waterPerMonth.map((day) => day.dailyEntries);

      for (let i = 0; i < dayInMonth.length; i += 1) {
        if (d === dayInMonth[i]) {
          progress = Math.round(Number(percent[i]));
          waterNorm = dailyNorm[i];
          dailyEntries = entries[i];
        }
      }

      if (m === currentMonth) {
        if (d <= currentDay) {
          allDays.push({
            day: d,
            date: date,
            value: progress,
            disabled: false,
            norm: waterNorm,
            dailyEntry: dailyEntries,
          });
        } else {
          allDays.push({ day: d, date: date, value: 0, disabled: true });
        }
      } else {
        allDays.push({
          day: d,
          date: date,
          value: progress,
          disabled: false,
          norm: waterNorm,
          dailyEntry: dailyEntries,
        });
      }
    }

    if (m + 1 === currentUserMonth && y === currentUserYear) {
      const inactive = allDays.filter((day) => day.day < currentUserDay);
      inactive.map((day) => (day.disabled = true));
    }
    allDays.map((day) => dataPerDay.push(day.value));
    return allDays;
  };
  const openModal = () => {
    setMonthChartModal(true);
    document.body.classList.add("body-scroll-lock");
  };

  const closeModal = () => {
    setMonthChartModal(false);
    document.body.classList.remove("body-scroll-lock");
  };

  return (
    <div className={css["calendar-container"]}>
      <div className={css["calendar-header"]}>
        <div className={css["title-chart"]}>
          {" "}
          <h2 className={css.title}>{t("monthStatsTable.title")}</h2>
          <button className={css["btn-chart"]} onClick={openModal}>
            {t("monthStatsTable.btnChart")}
          </button>
        </div>
        <div className={css.monthPicker}>
          {disabledForUser ? (
            <button className={css["btn-arrow"]} disabled>
              {previous}
            </button>
          ) : (
            <button className={css["btn-arrow"]} onClick={changeToPrevMonth}>
              {previous}
            </button>
          )}
          <h2 className={css["title-month"]}>
            {`${sDate.toLocaleString(`${t("monthStatsTable.en")}`, {
              month: "long",
            })}, 
            ${sDate.toLocaleString("en-US", {
              year: "numeric",
            })}`}
          </h2>

          {disabledYear ? (
            <button className={css["btn-arrow"]} disabled>
              {next}
            </button>
          ) : (
            <button className={css["btn-arrow"]} onClick={changeToNextMonth}>
              {next}
            </button>
          )}
        </div>
      </div>
      <div className={css["calendar-table"]}>
        {showCalendar().map((item) => {
          return (
            <div key={`d-${item.day}`}>
              {!item.disabled ? (
                <div className={css["day-cell"]}>
                  <button
                    className={clsx(css.day, {
                      [css["day-incomlete"]]: item.value < 100,
                    })}
                    onClick={() =>
                      handleDateClick(item.day.toString(), item.date)
                    }
                  >
                    {item.day}
                  </button>
                  <p className={css.percent}> {item.value}%</p>

                  {popUp && sDay === item.day.toString() && (
                    <PopUpDay
                      // dayId={item?.id}
                      handleCloseClick={handleCloseClick}
                      sDate={sDate}
                      waterRate={Number(item.norm)}
                      dailyEntries={Number(item.dailyEntry)}
                      progress={item.value}
                    />
                  )}
                </div>
              ) : (
                <div className={css["day-cell"]}>
                  <button className={css["disabled-day"]} disabled>
                    {item.day}
                  </button>
                  <p className={css.percent}> {item.value}%</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {isOpen && (
        <Modal title="Monthly statistic" onClose={closeModal}>
          <WaterMonthChart label={labels} monthlyData={dataPerDay} />
        </Modal>
      )}
    </div>
  );
};
