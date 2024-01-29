import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import DailyNormaModal from './DailyNormaModal';
import css from './DailyNorma.module.css';
import { useSelector } from 'react-redux';
import { selectWaterRate } from '../../redux/auth/selectors';

const DailyNorma = () => {
  const [visible, setVisible] = useState(false);
//   const [waterAmount, setWaterAmount] = useState(2.0); 
//   const dispatch = useDispatch();

  let waterRate = useSelector(selectWaterRate) || 2.0;


  const toggleModal = () => {
    setVisible(!visible);
  };


  const handleWaterAmountSave = (amount) => {
    // Update the state with the waterAmount value
    // setWaterAmount(amount);
    waterRate = amount;
  };

  return (
    <div className={css.dailyNormaBlock}>
      <h3 className={css.normaTitle}>My daily norma</h3>

      <div className={css.secondLineBlock}>
      <p className={css.normaLiters}>{waterRate} L</p>


        {visible && (
          <Modal setVisible={toggleModal} title="My daily norma" onClose={toggleModal}>
            <DailyNormaModal setVisible={setVisible} onWaterAmountSave={handleWaterAmountSave}/>
          </Modal>
        )}
        <button className={css.editButton} type="button" onClick={toggleModal}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default DailyNorma;
