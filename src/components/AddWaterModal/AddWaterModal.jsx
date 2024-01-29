import React from 'react';

const AddWaterModal = ({ isAddWater, isEditWater }) => {
  return (
    <div>
      {isEditWater && (
        <div>
          <div>
            <span>Value</span>
            <span>Time</span>
          </div>
          <h2>Correct entered data:</h2>
        </div>
      )}
      {isAddWater && <h2>Choose a value:</h2>}
      <p>Amount of water:</p>
      <button>Minus</button>
      <div>Value</div>
      <button>Add</button>
      <p>Recording time:</p>
      <input type="time" />

      <h2>Enter the value of the water used:</h2>
      <input type="number" />
      <div>value</div>
      <button>Save</button>
    </div>
  );
};

export default AddWaterModal;
