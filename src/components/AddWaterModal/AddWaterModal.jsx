import React, { useState, useEffect } from 'react';
import css from './AddWaterModal.module.css';
import { useDispatch } from 'react-redux';

import { ReactComponent as IconPlus } from '../../images/icons/plus-small.svg';
import { ReactComponent as IconMinus } from '../../images/icons/minus-small.svg';
import { addWaterThunk } from '../../redux/waterConsumption/operations';

const AddWaterModal = ({ isAddWater, isEditWater }) => {
  const [cleanStatus, setCleanStatus] = useState({
    isAddWater: true,
    isEditWater: true,
  });

  const [waterVolume, setWaterVolume] = useState(50);
  const [finalValue, setFinalValue] = useState(50);

  const [time, setTime] = useState('');

  const dispatch = useDispatch();

  const handleBlur = e => {
    setFinalValue(waterVolume);
    if (e.target.value.trim() === '') {
      setWaterVolume(0);
      setFinalValue(0);
    }
  };

  const handleChange = e => {
    setWaterVolume(e.target.value);

    if (e.target.value.trim() === '') {
      setFinalValue(0);
    }
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = Math.floor(now.getMinutes() / 5) * 5;
    const formattedMinutes = minutes.toString().padStart(2, '0');
    console.log(`this is formattedMinutes ${formattedMinutes}`);
    return `${hours}:${formattedMinutes}`;
  };

  useEffect(() => {
    const now = getCurrentTime();
    setTime(now);
  }, [setTime]);

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
    dispatch(addWaterThunk({ time, waterVolume }));

    setCleanStatus({
      isAddWater: !cleanStatus.isAddWater,
      isEditWater: !cleanStatus.isEditWater,
    });
  };

  const addAmountOfWater = () => {
    setWaterVolume(Number.parseInt(waterVolume) + 50);
    setFinalValue(Number.parseInt(waterVolume) + 50);
  };

  const minusAmountOfWater = () => {
    if (waterVolume > 0) {
      setWaterVolume(Number.parseInt(waterVolume) - 50);
      setFinalValue(Number.parseInt(waterVolume) - 50);
    }
  };

  return (
    <>
      {isEditWater && (
        <div>
          <div>
            <span>Value</span>
            <span>Time</span>
          </div>
          <h2 className={css.headlines}>Correct entered data:</h2>
        </div>
      )}
      <div>
        {isAddWater && <h2 className={css.headlines}>Choose a value:</h2>}
        <p className={css.paragraphs}>Amount of water:</p>
        <button
          type="button"
          onClick={minusAmountOfWater}
          className={css.counterButtons}
        >
          <IconMinus />
        </button>
        <input
          min="0"
          type="number"
          value={finalValue}
          readOnly
          onBlur={handleBlur}
        />
        <button
          type="button"
          onClick={addAmountOfWater}
          className={css.counterButtons}
        >
          <IconPlus />
        </button>
      </div>

      <form autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <p className={css.paragraphs}>Recording time:</p>
          <div>
            <select
              name="recordingTime"
              value={time}
              onChange={event => {
                console.log(event.target.value);
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
          value={waterVolume}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <div>
          <span>{finalValue}</span>
          <button type="submit">Save</button>
        </div>
      </form>
    </>
  );
};

export default AddWaterModal;
