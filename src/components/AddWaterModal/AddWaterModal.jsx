import React, { useState } from 'react';
import css from './AddWaterModal.module.css';

import { Formik, Form, Field } from 'formik';
import { object, number, date } from 'yup';

import { ReactComponent as IconPlus } from '../../images/icons/plus-small.svg';
import { ReactComponent as IconMinus } from '../../images/icons/minus-small.svg';

import { TimeOptionsModal } from './TimeOptionsModal';

const AddWaterModal = ({ isAddWater, isEditWater }) => {
  const [cleanStatus, setCleanStatus] = useState({
    isAddWater: true,
    isEditWater: true,
  });

  const [waterValue, setWaterValue] = useState(0);
  const [previousValue, setPreviousValue] = useState(
    waterValue ? waterValue : 0
  );

  let userSchema = object({
    waterValue: number().required().positive().integer(),
    recordingTime: date()
      .required()
      .default(() => new Date()),
    waterUsed: number().positive().integer(),
  });

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = Math.floor(now.getMinutes());
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${hours}:${formattedMinutes}`;
  };

  const initialValues = {
    waterValue: 0,
    recordingTime: getCurrentTime(),
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
      setWaterValue(previousValue);
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
            <Field type="select" name="recordingTime" />
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
              // if (newValue >= 0) {
              // setFieldValue('waterValue', newValue);
              setWaterValue(newValue);
              // }
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

// <button type="button">Minus</button>
// <Field type="number" name="waterValue" />
// <button type="button">Add</button>

// <div>value</div>
