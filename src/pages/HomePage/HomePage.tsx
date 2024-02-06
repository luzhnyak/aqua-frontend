import { FC, useEffect } from "react";
import css from "./HomePage.module.css";

import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import { useSelector } from "react-redux";
import {
  selectWaterError,
} from "../../redux/waterConsumption/selectors";
import { IError } from "../../services/handleApiError";

import { TodayWaterList } from "../../components/TodayWaterList/TodayWaterList";
import { MonthStatsTable } from "../../components/MonthStatsTable/MonthStatsTable";
import WaterRatioPanel from "../../components/WaterRatioPanel/WaterRatioPanel";
import DailyNorma from "../../components/DailyNorma/DailyNorma";

const HomePage: FC = () => {
  const { t } = useTranslation();
  
  const error: IError | null = useSelector(selectWaterError);
  
    useEffect(() => {
    if (error?.errorCode === 400) {
      toast.error(`${t("400 Bad request. Invalid data")}`);
      return;
    } else if (error?.errorCode === 401) {
      toast.error(`${t("Not authorized. Please log in!")}`);
      return;
    }else if (error?.errorCode === 500) {
      toast.error(`${t("Server error")}`);
      return;
    }
  }, [error, t]);


  return (
    <section className={css.section}>
      <div className={css.background}>
        <div className={css.container}>
          <div className={css.firstSection}>
            <DailyNorma />
            <WaterRatioPanel />
          </div>

          <div className={css.containerProgressWrapper}>
            <div className={css["container-progress"]}>
              <TodayWaterList />
              <MonthStatsTable />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
