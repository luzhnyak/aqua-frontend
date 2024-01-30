import React, { useState } from 'react';
import css from './AddWaterModal.module.css';
import { Formik, Form, Field } from 'formik';

import { ReactComponent as IconPlus } from '../../images/icons/plus-small.svg';
import { ReactComponent as IconMinus } from '../../images/icons/minus-small.svg';

const AddWaterModal = ({ isAddWater, isEditWater }) => {
  const [cleanStatus, setCleanStatus] = useState({
    isAddWater: true,
    isEditWater: true,
  });

  const [waterValue, setWaterValue] = useState(0);

  const initialValues = {
    waterValue: 0,
    recordingTime: new Date(),
    waterUsed: 0,
  };

  const handleSubmit = () => {
    setCleanStatus({
      isAddWater: !cleanStatus.isAddWater,
      isEditWater: !cleanStatus.isEditWater,
    });
  };

  const addAmountOfWater = () => {
    setWaterValue(waterValue + 1);
  };

  const minusAmountOfWater = () => {
    if (waterValue > 0) {
      setWaterValue(waterValue - 1);
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
              type="number"
              name="waterValue"
              onBlur={handleBlur}
              value={waterValue}
              onChange={e => setWaterValue(e.target.value)}
            />
            <button type="button" onClick={addAmountOfWater}>
              <IconPlus />
            </button>
          </div>

          <h2 className={css.headlines}>Enter the value of the water used:</h2>
          <Field
            type="number"
            name="waterEditValue"
            onBlur={handleBlur}
            value={waterValue}
            onChange={e => setWaterValue(e.target.value)}
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
// <p className={css.paragraphs}>Recording time:</p>
// <Field type="time" name="recordingTime" />

// <div>value</div>
