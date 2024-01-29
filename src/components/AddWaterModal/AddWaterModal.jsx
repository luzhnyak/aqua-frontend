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

  const toggleStatus = () => {
    setCleanStatus({
      isAddWater: !cleanStatus.isAddWater,
      isEditWater: !cleanStatus.isEditWater,
    });
  };

  const initialValues = isAddWater
    ? { waterValue: 50, recordingTime: new Date(), waterUsed: 0 }
    : { correctedValue: '', correctedTime: '', waterUsed: '' };

  const handleSubmit = () => {
    console.log(initialValues.waterValue);
    console.log(initialValues.recordingTime);
    console.log(initialValues.waterUsed);
  };

  const addAmountOfWater = () => {};
  const minusAmountOfWater = () => {};

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, actions }) => (
        <Form autoComplete="off">
          {isAddWater && <h2 className={css.headlines}>Choose a value:</h2>}
          <p className={css.paragraphs}>Amount of water:</p>
          <div>
            <button type="button" onClick={addAmountOfWater}>
              <IconMinus />
            </button>
            <Field type="number" name="waterValue" />
            <button type="button" onClick={minusAmountOfWater}>
              <IconPlus />
            </button>
          </div>
          <button type="submit" toggleStatus={toggleStatus}>
            Save
          </button>
        </Form>

        //   {isEditWater && (
        //     <div>
        //       <div>
        //         <span>Value</span>
        //         <span>Time</span>
        //       </div>
        //       <h2 className={css.headlines}>Correct entered data:</h2>
        //     </div>
        //   )}
        //
        //   <button type="button">Minus</button>
        //   <Field type="number" name="waterValue" />
        //   <button type="button">Add</button>
        //   <p className={css.paragraphs}>Recording time:</p>
        //   <Field type="time" name="recordingTime" />

        //   <h2 className={css.headlines}>Enter the value of the water used:</h2>
        //   <Field type="number" name="waterValue" />
        //   <div>value</div>
      )}
    </Formik>
  );
};

export default AddWaterModal;
