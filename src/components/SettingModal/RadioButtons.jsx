import React, { useState } from 'react';
import css from './RadioButtons.module.css';
import { ReactComponent as IconRadioButton } from '../../images/icons/radio-button.svg';
import { ReactComponent as IconRadioButtonCircle } from '../../images/icons/radio-button-circle.svg';
import { Field } from 'formik';

const RadioButtons = () => {
  const [selectedGender, setSelectedGender] = useState('female');

  const handleOptionChange = event => {
    setSelectedGender(event.target.value);
  };

  return (
    <div>
      <h4 className={css.title}>Your gender identity</h4>
      <div className={css.radioButtons}>
        <label>
          <Field
            className={css.radiobutton}
            type="radio"
            value="female"
            checked={selectedGender === 'female'}
            onChange={handleOptionChange}
          />
          {!(selectedGender === 'female') ? (
            <IconRadioButtonCircle className={css.radioDotLeft} />
          ) : (
            <IconRadioButton className={css.customRadioButtonLeft} />
          )}
          <span className={css.labelName}>Woman</span>
        </label>

        <label>
          <Field
            className={css.radiobutton}
            type="radio"
            value="male"
            checked={selectedGender === 'male'}
            onChange={handleOptionChange}
          />
          {!(selectedGender === 'male') ? (
            <IconRadioButtonCircle className={css.radioDotRight} />
          ) : (
            <IconRadioButton className={css.customRadioButtonRight} />
          )}
          <span className={css.labelName}>Man</span>
        </label>
      </div>
    </div>
  );
};

export default RadioButtons;
