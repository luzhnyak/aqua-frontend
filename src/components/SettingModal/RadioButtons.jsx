import React, { useState } from 'react';
import css from './RadioButtons.module.css';
import { ReactComponent as IconRadioButton } from '../../images/icons/radio-button.svg';
import { ReactComponent as IconRadioButtonCircle } from '../../images/icons/radio-button-circle.svg';

const RadioButtons = () => {
  const [selectedGender, setSelectedGender] = useState('Woman');

  const handleOptionChange = event => {
    setSelectedGender(event.target.value);
  };

  return (
    <div>
      <h4 className={css.title}>Your gender identity</h4>
      <div className={css.radioButtons}>
        <label>
          <input
            className={css.radiobutton}
            type="radio"
            value="Woman"
            checked={selectedGender === 'Woman'}
            onChange={handleOptionChange}
          />
          {!(selectedGender === 'Woman') ? (
            <IconRadioButtonCircle className={css.radioDotLeft} />
          ) : (
            <IconRadioButton className={css.customRadioButtonLeft} />
          )}
          <span className={css.labelName}>Woman</span>
        </label>

        <label>
          <input
            className={css.radiobutton}
            type="radio"
            value="Man"
            checked={selectedGender === 'Man'}
            onChange={handleOptionChange}
          />
          {!(selectedGender === 'Man') ? (
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
