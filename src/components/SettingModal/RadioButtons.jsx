import React from 'react';
import css from './RadioButtons.module.css';

import { ErrorMessage, Field } from 'formik';

const RadioButtons = ({ values, handleOptionChange }) => {
  // const onChange = e => {
  //   const { name } = e.target;
  //   console.log('clicked  ==>', name);
  // };
  return (
    <div>
      <h4 className={css.title}>Your gender identity</h4>
      <div className={css.radioButtons}>
        <label>
          <Field
            type="radio"
            name="gender"
            value="female"
            className={css.radiobutton}
          />

          <span className={css.labelName}>Woman</span>
        </label>
        <label>
          <Field
            type="radio"
            name="gender"
            value="male"
            className={css.radiobutton}
          />

          <span className={css.labelName}>Man</span>
        </label>
        <ErrorMessage name="gender" component="div" />
      </div>
    </div>
  );
};

export default RadioButtons;
