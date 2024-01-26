import React, { useState } from 'react';
import css from './WaterRatioPanel.module.css';

const WaterRatioPanel = () => {
  return (
    <>
      <h2 className={css.today}>Today</h2>
      <div className={css.mainContainer}>
        <div className={css.panel}>
          <div className={css.range}>
            <div className={css.rangeContent}>
              <div className={css.rangeSlider}>
                <div className={css.rangeSliderLine} id="rangeLine"></div>
              </div>
              <div className={css.rangeThumb} id="range-thumb"></div>

              <input
                type="range"
                className={css.rangeInput}
                id="rangeInput"
                min="0"
                max="100"
                value="0"
                step="1"
              />
            </div>
          </div>

          <div className={css.decorativeLines}>
            <div className={css.line}></div>
            <div className={css.line}></div>
            <div className={css.line}></div>
          </div>

          <div className={css.percentages}>
            <span className={css.number1}>0%</span>
            <span className={css.number2}>50%</span>
            <span className={css.number3}>100%</span>
          </div>
        </div>
        <button type="button" className={css.addButton}>
          <img
            className={css.plusCircle}
            src={require('../../images/icons/progressbar-plus.svg').default}
            alt="plus-circle.svg"
            width="24"
            height="24"
          />
          <span className={css.addButtonText}>Add Water</span>
        </button>
      </div>
    </>
  );
};

export default WaterRatioPanel;
