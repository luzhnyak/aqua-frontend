import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import DailyNormaModal from './DailyNormaModal';
import css from './DailyNorma.module.css';

const DailyNorma = () => {
  const [visible, setVisible] = useState(false);
  const [waterAmount, setWaterAmount] = useState(2.0); 

  const toggleModal = () => {
    setVisible(!visible);
  };


  const handleWaterAmountSave = (amount) => {
    // Update the state with the waterAmount value
    setWaterAmount(amount);
  };

  return (
    <div className={css.dailyNormaBlock}>
      <h3 className={css.normaTitle}>My daily norma</h3>

      <div className={css.secondLineBlock}>
      <p className={css.normaLiters}>{waterAmount} L</p>


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
