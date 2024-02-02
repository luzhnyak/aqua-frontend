import React from "react";
import css from "./WelcomePage.module.css";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className={css.container}>
      <div className={css.dataContainer}>
        <div className={css.benefitsBlock}>
          <h1 className={css.title}>Water consumption tracker</h1>
          <h2 className={css.subtitle}>Record daily water intake and track</h2>

          <h3 className={css.benefitsTitle}>Tracker Benefits</h3>
          <ul className={css.benefilsList}>
            <li className={css.benefitsItem}>
              <img
                src={require("../../images/icons/calendar-days.svg").default}
                alt="Habit drive icon"
                width="32"
                height="32"
              />
              Habit drive
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
              View statistics
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
              Personal rate setting
            </li>
          </ul>
          <Link to="/signup" className={css.link}>
            <p className={css.tryTrackerBtn}>Try tracker</p>
          </Link>
        </div>

        <div className={css.whyBlock}>
          <h3 className={css.whyTitle}>Why drink water</h3>
          <ul className={css.whyList}>
            <li className={css.whyItem}>Supply of nutrients to all organs</li>
            <li className={css.whyItem}>Providing oxygen to the lungs</li>
            <li className={css.whyItem}>Maintaining the work of the heart</li>
            <li className={css.whyItem}>Release of processed substances</li>
            <li className={css.whyItem}>
              Ensuring the stability of the internal environment
            </li>
            <li className={css.whyItem}>
              Maintaining within the normal temperature
            </li>
            <li className={css.whyItem}>
              Maintaining an immune system capable of resisting disease
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
