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

import { ReactComponent as IconChart } from "../../images/icons/chart.svg";

export const MonthStatsTable: FC = () => {
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();

  const user = useSelector(selectUser);
  const waterPerMonth = useSelector(selectWatersPerMonth);
  const waterToday = useSelector(selectWatersToday);

  const creationDate = user.createdAt ? new Date(user.createdAt) : new Date();
  const currentUserYear = creationDate.getFullYear();
  const currentUserMonth = creationDate.getMonth();
  const currentUserDay = creationDate.getDate();

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
    if (!waterToday) return;

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
      if (month === currentUserMonth + 1 && year === currentUserYear) {
        setsDisabledForUser(true);
      }
    };

    disabled();
  }, [sDate, waterToday, dispatch, currentUserMonth, currentUserYear]);

  const findMonthDays = (y: number, m: number) => {
    return new Date(y, m + 1, 0).getDate();
  };

  const changeToPrevMonth = () => {
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

    setsDay(day);
  };

  const handleCloseClick = () => {
    setsPopup(false);
  };

  const parseDayFromDate = (date: string) => {
    const dateForMonth = new Date(date);

    return Number(
      dateForMonth.toLocaleString("en-US", {
        day: "numeric",
      })
    );
  };

  const showCalendar = () => {
    const y = sDate.getFullYear();
    const m = sDate.getMonth();
    const mDays = findMonthDays(y, m);

    const allDays = [];

    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();

    for (let d = 1; d <= mDays; d += 1) {
      const date = new Date(y, m, d);

      labels.push(d);

      const waterDay = waterPerMonth.find(
        (day) => parseDayFromDate(day.date) === d
      );

      if (waterDay) {
        allDays.push({
          day: d,
          date: new Date(waterDay.date),
          value: Number.parseInt(waterDay.progress),
          disabled: false,
          norm: waterDay.waterRate,
          dailyEntry: waterDay.dailyEntries,
        });
      } else {
        allDays.push({
          day: d,
          date: date,
          value: 0,
          disabled:
            (d >= currentDay && m === currentMonth) ||
            (d < currentDay && m !== currentMonth)
              ? true
              : false,
          norm: 0,
          dailyEntry: 0,
        });
      }
    }

    if (m === currentUserMonth && y === currentUserYear) {
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
          <h2 className={css.title}>{t("monthStatsTable.title")}</h2>
          <button
            className={css["btn-chart"]}
            onClick={openModal}
            title={t("monthStatsTable.btnChart")}
          >
            <IconChart />
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
            ${sDate.toLocaleString(`${t("monthStatsTable.en")}`, {
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
                      sDate={item.date}
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
        <Modal title={t("monthStatsTable.statistic")} onClose={closeModal}>
          <WaterMonthChart label={labels} monthlyData={dataPerDay} />
        </Modal>
      )}
    </div>
  );
};
