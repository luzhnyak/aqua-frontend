import React, { useState, useEffect } from 'react';
import css from './AddWaterModal.module.css';

import { Formik, Form, Field } from 'formik';
// import { object, number, date } from 'yup';

import { ReactComponent as IconPlus } from '../../images/icons/plus-small.svg';
import { ReactComponent as IconMinus } from '../../images/icons/minus-small.svg';

const AddWaterModal = ({ isAddWater, isEditWater }) => {
  const [cleanStatus, setCleanStatus] = useState({
    isAddWater: true,
    isEditWater: true,
  });

  const [waterValue, setWaterValue] = useState(0);
  const [time, setTime] = useState(0);

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = Math.floor(now.getMinutes());
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${hours}:${formattedMinutes}`;
  };

  useEffect(() => {
    const now = getCurrentTime();
    setTime(now);
  }, [setTime, time]);

  const generateTimeOptions = () => {
    const options = [];

    for (let hours = 0; hours < 24; hours++) {
      for (let minutes = 0; minutes < 60; minutes += 5) {
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        options.push({
          value: `${formattedHours}:${formattedMinutes}`,
          label: `${formattedHours}:${formattedMinutes}`,
        });
      }
    }
    return options;
  };

  const initialValues = {
    waterValue: 0,
    // recordingTime: time,
    waterUsed: 0,
  };

  const handleSubmit = () => {
    setCleanStatus({
      isAddWater: !cleanStatus.isAddWater,
      isEditWater: !cleanStatus.isEditWater,
    });
  };

  const setPreviousAmount = e => {
    const trimmedValue = e.target.value.trim();
    if (trimmedValue === '') {
      setWaterValue(waterValue);
    }
  };

  const addAmountOfWater = () => {
    setWaterValue(Number.parseInt(waterValue) + 1);
  };

  const minusAmountOfWater = () => {
    if (waterValue > 0) {
      setWaterValue(Number.parseInt(waterValue) - 1);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ handleBlur, setFieldValue, values }) => (
        <Form autoComplete="off">
          {isAddWater && <h2 className={css.headlines}>Choose a value:</h2>}
          <p className={css.paragraphs}>Amount of water:</p>
          <div>
            <button type="button" onClick={minusAmountOfWater}>
              <IconMinus />
            </button>
            <Field
              min="0"
              type="number"
              name="waterValue"
              onBlur={handleBlur}
              value={waterValue}
              readOnly
            />
            <button type="button" onClick={addAmountOfWater}>
              <IconPlus />
            </button>
          </div>
          <div>
            <p className={css.paragraphs}>Recording time:</p>
            <div>
              {time}
              {/* {generateTimeOptions().map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))} */}
            </div>
          </div>
          <h2 className={css.headlines}>Enter the value of the water used:</h2>
          <Field
            min="0"
            type="number"
            name="waterEditValue"
            onBlur={setPreviousAmount}
            value={waterValue}
            onChange={e => {
              const newValue = e.target.value;
              setWaterValue(newValue);
            }}
            onClick={e => {
              const newValue = e.target.value === '0' ? '' : e.target.value;
              if (newValue >= 0) {
                setFieldValue('waterValue', newValue);
                setWaterValue(newValue);
              }
            }}
          />
          <button type="submit">Save</button>
        </Form>
      )}
    </Formik>
  );
};

export default AddWaterModal;

// {isEditWater && (
//   <div>
//     <div>
//       <span>Value</span>
//       <span>Time</span>
//     </div>
//     <h2 className={css.headlines}>Correct entered data:</h2>
//   </div>
// )}
