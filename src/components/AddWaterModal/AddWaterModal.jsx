import React, { useState, useEffect } from 'react';
import css from './AddWaterModal.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as Glass } from '../../images/icons/glass.svg';

import { ReactComponent as IconPlus } from '../../images/icons/plus-small.svg';
import { ReactComponent as IconMinus } from '../../images/icons/minus-small.svg';
import { addWaterThunk } from '../../redux/waterConsumption/operations';
import { updateWaterByIdThunk } from '../../redux/waterConsumption/operations';
import { selectWatersToday } from '../../redux/waterConsumption/selectors';

const AddWaterModal = ({
  isAddWater,
  isEditWater,
  onClose,
  id,
  previousAmount,
  previousTime,
}) => {
  const waterToday = useSelector(selectWatersToday);

  const getPreviousEntry = () => {
    const lastEntry =
      waterToday.dailyEntries[waterToday.dailyEntries.length - 1];
    const length = waterToday.dailyEntries.length;

    if (length === 0) {
      return 0;
    }

    return lastEntry.waterVolume;
  };

  const [cleanStatus, setCleanStatus] = useState({
    isAddWater: true,
    isEditWater: true,
  });

  const [waterVolume, setWaterVolume] = useState(
    isEditWater ? previousAmount : getPreviousEntry()
  );
  const [finalValue, setFinalValue] = useState(
    isEditWater ? previousAmount : getPreviousEntry()
  );

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
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = Math.floor(now.getMinutes() / 5) * 5;
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${hours}:${formattedMinutes}`;
  };

  useEffect(() => {
    const now = getCurrentTime();

    if (isEditWater) {
      setTime(previousTime);
    } else if (isAddWater) {
      setTime(now);
    }
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

    if (isEditWater) {
      dispatch(
        updateWaterByIdThunk({
          entryId: id,
          body: { time, waterVolume },
        })
      );
    } else if (isAddWater) {
      dispatch(addWaterThunk({ time, waterVolume }));
    }

    setCleanStatus({
      isAddWater: !cleanStatus.isAddWater,
      isEditWater: !cleanStatus.isEditWater,
    });

    onClose();
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
        <div className={css.editContentDiv}>
          <div className={css.previousGlassDiv}>
            <Glass className={css.glass} />
            <span className={css.editNumber}>{previousAmount} ml</span>
            <span className={css.editTime}>{previousTime}</span>
          </div>
          <h2 className={css.headlineEdit}>Correct entered data:</h2>
        </div>
      )}
      <div>
        {isAddWater && <h2 className={css.headlines}>Choose a value:</h2>}
        <p className={css.paragraphs}>Amount of water:</p>
        <div className={css.counterLayout}>
          <button
            type="button"
            onClick={minusAmountOfWater}
            className={css.counterButtons}
          >
            <IconMinus width={24} height={24} />
          </button>
          <div className={css.valuePlusMinus} id="plusMinusDisplay">
            <input
              className={css.hidden}
              min="0"
              type="number"
              value={finalValue}
              readOnly
              onBlur={handleBlur}
            />
            <span>{finalValue}ml</span>
          </div>
          <button
            type="button"
            onClick={addAmountOfWater}
            className={css.counterButtons}
          >
            <IconPlus width={24} height={24} />
          </button>
        </div>
      </div>

      <form autoComplete="off" onSubmit={handleSubmit}>
        <p className={css.paragraphs}>Recording time:</p>
        <select
          className={css.inputStyle}
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
        <h2 className={css.headlines}>Enter the value of the water used:</h2>
        <input
          className={css.inputStyle}
          min="0"
          type="number"
          name="waterValue"
          value={waterVolume <= 10000 ? waterVolume : ''}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <div className={css.saveAreaLayout}>
          <span className={css.finalValue}>{finalValue} ml</span>
          <button type="submit" className={css.saveButton}>
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default AddWaterModal;
