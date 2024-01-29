
import { useSelector } from 'react-redux';
import { ReactComponent as Plus } from '../../images/icons/plus-small.svg';
import TodayWaterItem from './TodayWaterItem';
import css from './TodayWaterList.module.css'
import { selectWatersToday } from '../../redux/waterConsumption/selectors';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import AddWaterModal from 'components/AddWaterModal/AddWaterModal';

export const TodayWaterList = () => {
const entries = useSelector(selectWatersToday)
const [isOpen, setAddWaterModalOpen] = useState(false);

const openModal = () => {
  setAddWaterModalOpen(true);
};

const closeModal = () => {
  setAddWaterModalOpen(false);
};
    return(
<div className={css.entryList}>
    <h2 className={css.title}>Today</h2>
<ul >
    {entries.length !== 0 && entries.map(entry=>
        (<TodayWaterItem id={entry.id} key={entry.id}/>)
    )}
    
   </ul>
   <button className={css['btn-add']} onClick={openModal}> <Plus className={css.plus}/> Add water</button>
   {isOpen && (
        <Modal title="Add Water" onClose={closeModal}>
          <AddWaterModal isAddWater={true} />
        </Modal>
      )}
</div>
    )
}