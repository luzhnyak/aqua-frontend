import React, { useState, useEffect } from 'react';
import css from './AddWaterModal.module.css';
import { useDispatch } from 'react-redux';

// import { Formik, Form, Field } from 'formik';
// import { object, number, date } from 'yup';

import { ReactComponent as IconPlus } from '../../images/icons/plus-small.svg';
import { ReactComponent as IconMinus } from '../../images/icons/minus-small.svg';
import { addWaterThunk } from '../../redux/waterConsumption/operations';

const AddWaterModal = ({ isAddWater, isEditWater }) => {
  const [cleanStatus, setCleanStatus] = useState({
    isAddWater: true,
    isEditWater: true,
  });

  const [waterVolume, setWaterVolume] = useState(0);
  const [time, setTime] = useState(0);

  const dispatch = useDispatch();

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = Math.floor(now.getMinutes() / 5) * 5;
    const formattedMinutes = minutes.toString().padStart(2, '0');
    console.log(formattedMinutes);
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

  const handleSubmit = event => {
    event.preventDefault();
    console.log('time', time);
    dispatch(addWaterThunk({ time, waterVolume }));

    setCleanStatus({
      isAddWater: !cleanStatus.isAddWater,
      isEditWater: !cleanStatus.isEditWater,
    });
  };

  // const setPreviousAmount = e => {
  //   const trimmedValue = e.target.value.trim();
  //   if (trimmedValue === '') {
  //     setWaterVolume(waterVolume);
  //   }
  // };

  const addAmountOfWater = () => {
    setWaterVolume(Number.parseInt(waterVolume) + 1);
  };

  const minusAmountOfWater = () => {
    if (waterVolume > 0) {
      setWaterVolume(Number.parseInt(waterVolume) - 1);
    }
  };

  return (
    <>
      <p className={css.paragraphs}>Amount of water:</p>
      <div>
        <button type="button" onClick={minusAmountOfWater}>
          <IconMinus />
        </button>
        <input min="0" type="number" value={waterVolume} readOnly />
        <button type="button" onClick={addAmountOfWater}>
          <IconPlus />
        </button>
      </div>

      <form autoComplete="off" onSubmit={handleSubmit}>
        {isAddWater && <h2 className={css.headlines}>Choose a value:</h2>}

        <div>
          <p className={css.paragraphs}>Recording time:</p>
          <div>
            {time}
            {/* {generateTimeOptions().map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))} */}
            <select
              name="recordingTime"
              value={time}
              onChange={event => {
                setTime(event.target.value);
              }}
            >
              {generateTimeOptions().map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <h2 className={css.headlines}>Enter the value of the water used:</h2>
        <input
          min="0"
          type="number"
          name="waterValue"
          // onBlur={setPreviousAmount}
          value={waterVolume}
          onChange={e => {
            setWaterVolume(e.target.value);
          }}
        />
        <button type="submit">Save</button>
      </form>
    </>
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
