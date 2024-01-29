import css from './TodayWaterItem.module.css';
import { ReactComponent as EditTool } from '../../images/icons/pencil-square.svg';
import { ReactComponent as Trash } from '../../images/icons/trash.svg';
import { ReactComponent as Glass } from '../../images/icons/glass.svg';
import { useState } from 'react';
import ConfirmDeleteModal from './ConfirmDeleteModal';


const TodayWaterItem = ({ id  }) => {
const [isModal, setIsModal] = useState(false)

const openModal = () =>{
  setIsModal(true)
}
const closeModal = () =>{
  setIsModal(false)
}

  return (
    <li className={css['entry-item']}>
      <div>
        <Glass className={css.glass} />
        <p className={css.amount}></p>
        <p className={css.time}></p>
      </div>
      <div className={css.icons}>
        <EditTool className={css.edit} />
        <Trash className={css.delete} onClick={openModal}/>
      </div>
      {isModal && <ConfirmDeleteModal onClose={closeModal} id={id}/>}
    </li>
  );
};
export default TodayWaterItem
