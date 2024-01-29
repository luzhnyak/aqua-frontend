import { useState } from 'react';
import css from './DailyNormaModal.module.css';
import { useDispatch } from 'react-redux';
import { updateWaterNormaThunk } from '../../redux/auth/operations';

const DailyNormaModal = ({ setVisible, onWaterAmountSave }) => {
    const dispatch = useDispatch();


  const [userData, setUserData] = useState({
    gender: 'female',
    weight: '',
    activityTime: '',
    waterAmount: '',
  });

  const [neededWaterAmount, setNeededWaterAmount] = useState(2.0);

  const calculateWaterAmount = (gender, weight, activityTime) => {
    if (gender === 'female') {
      return (weight * 0.03 + activityTime * 0.4).toFixed(1);
    } else {
      return (weight * 0.03 + activityTime * 0.6).toFixed(1);
    }
  };

  const onChange = event => {
    const { name, value } = event.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'weight' || name === 'activityTime') {
      const calculatedWaterAmount = calculateWaterAmount(
        userData.gender,
        name === 'weight' ? value : userData.weight,
        name === 'activityTime' ? value : userData.activityTime,
      );
      setNeededWaterAmount(calculatedWaterAmount);
      
    }

   
  };

  const onSubmit = event => {
    event.preventDefault();

    setUserData(prevData => ({
      ...prevData,
      waterAmount: event.target.elements.waterAmount.value,
    }));

    const waterAmount = event.target.elements.waterAmount.value;

    const calculatedWaterAmount = calculateWaterAmount(
      userData.gender,
      userData.weight,
      userData.activityTime
    );

    setNeededWaterAmount(calculatedWaterAmount);

    // Dispatch the action to update the water rate in Redux
    dispatch(updateWaterNormaThunk(parseFloat(waterAmount)));

    onWaterAmountSave(parseFloat(waterAmount));

    dispatch(updateWaterNormaThunk(waterAmount));

    setVisible(false);
  };
  return (
    <div className={css.container}>
      <div className={css.formTitle}>
        <p className={css.forField}>
          For girl:{' '}
          <span className={css.formulaField}>V=(M*0,03) + (T*0,4)</span>
        </p>
        <p className={css.forField}>
          For man:{' '}
          <span className={css.formulaField}>V=(M*0,04) + (T*0,6)</span>
        </p>
      </div>

      <div className={css.formulaDescContainer}>
        <p className={css.formulaDesc}>
          <span className={css.formulaDescSymbol}>*</span>V is the volume of the
          water norm in liters per day, M is your body weight, T is the time of
          active sports, or another type of activity commensurate in terms of
          loads (in the absence of these, you must set 0)
        </p>
      </div>

      <form action="" onSubmit={onSubmit}>
        <h3 className={css.formName}>Calculate your rate:</h3>
        <div className={css.chooseGender}>
          <label className={css.radioLabel}>
            <input
              className={css.formRadioInput}
              type="radio"
              name="gender"
              value="female"
              defaultChecked
            />
            For woman
          </label>

          <label className={css.radioLabel}>
            <input
              className={css.formRadioInput}
              type="radio"
              name="gender"
              value="male"
            />
            For man
          </label>
        </div>

        <div className={css.questionContainer}>
          <label className={css.questionLabel}>
            <span className={css.questionText}>Your weight in kilograms:</span>
            <input
              className={css.questionInput}
              type="text"
              name="weight"
              onChange={onChange}
            />
          </label>

          <label className={css.questionLabel}>
            <span className={css.questionText}>
              The time of active participation in sports or other activities
              with a high physical. load in hours:
            </span>
            <input
              className={css.questionInput}
              type="text"
              name="activityTime"
              onChange={onChange}
            />
          </label>
        </div>

        <div className={css.requiredAmountContainer}>
          <p className={css.requiredAmountText}>
            The required amount of water in liters per day:
          </p>
          <p id="neededWaterAmount" className={css.requiredAmountValue}>
            {neededWaterAmount} L
          </p>
        </div>

        <label className={css.questionLabel}>
          <span className={css.howMuchText}>
            Write down how much water you will drink:
          </span>
          <input className={css.questionInput} type="text" name="waterAmount" />
        </label>

        <button className={css.submitButton}>Save</button>
      </form>
    </div>
  );
};

export default DailyNormaModal;
