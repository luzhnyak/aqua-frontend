import React from "react";
import css from "./WelcomePage.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const WelcomePage = () => {
  const { t } = useTranslation();

  return (
    <section className={css.background}>
      <div className={css.container}>
        <div className={css.benefitsBlock}>
          <h1 className={css.title}>{t("welcomePage.title")}</h1>
          <h2 className={css.subtitle}>{t("welcomePage.subtitle")}</h2>

          <h3 className={css.benefitsTitle}>
            {t("welcomePage.benefitsTitle")}
          </h3>
          <ul className={css.benefilsList}>
            <li className={css.benefitsItem}>
              <img
                src={require("../../images/icons/calendar-days.svg").default}
                alt="Habit drive icon"
                width="32"
                height="32"
              />
              {t("welcomePage.benefitsHabit")}
            </li>
            <li className={css.benefitsItem}>
              <img
                src={
                  require("../../images/icons/presentation-chart-bar.svg")
                    .default
                }
                alt="Habit drive icon"
                width="32"
                height="32"
              />
              {t("welcomePage.benefitsView")}
            </li>
            <li className={css.benefitsItem}>
              <img
                src={
                  require("../../images/icons/wrench-screwdriver.svg").default
                }
                alt="Habit drive icon"
                width="32"
                height="32"
              />
              {t("welcomePage.benefitsPersonal")}
            </li>
          </ul>
          <Link to="/signup" className={css.link}>
            <p className={css.tryTrackerBtn}>
              {t("welcomePage.tryTrackerBtn")}
            </p>
          </Link>
        </div>
        <div className={css.whyBlockWrapper}>
          <div className={css.whyBlock}>
            <h3 className={css.whyTitle}>{t("welcomePage.whyTitle")}</h3>
            <ul className={css.whyList}>
              <li className={css.whyItem}>{t("welcomePage.whyItemSupply")}</li>
              <li className={css.whyItem}>
                {t("welcomePage.whyItemProviding")}
              </li>
              <li className={css.whyItem}>{t("welcomePage.whyItemHeart")}</li>
              <li className={css.whyItem}>{t("welcomePage.whyItemRelease")}</li>
              <li className={css.whyItem}>
                {t("welcomePage.whyItemEnsuring")}
              </li>
              <li className={css.whyItem}>
                {t("welcomePage.whyItemTemperature")}
              </li>
              <li className={css.whyItem}>{t("welcomePage.whyItemDisease")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomePage;
