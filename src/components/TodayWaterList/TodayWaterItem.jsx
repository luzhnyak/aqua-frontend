import css from './TodayWaterItem.module.css';
import { ReactComponent as EditTool } from '../../images/icons/pencil-square.svg';
import { ReactComponent as Trash } from '../../images/icons/trash.svg';
import { ReactComponent as Glass } from '../../images/icons/glass.svg';
import { useState } from 'react';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import Modal from 'components/Modal/Modal';
import AddWaterModal from 'components/AddWaterModal/AddWaterModal';


const TodayWaterItem = ({ id }) => {
const [isModalDelete, setIsModalDelete] = useState(false)
const [isModalEdit, setIsModalEdit] = useState(false)

const openModalDelete = () =>{
  setIsModalDelete(true)
}
const closeModalDelete = () =>{
  setIsModalDelete(false)
}
const openModalEdit = () =>{
  setIsModalEdit(true)
}
const closeModalEdit = () =>{
  setIsModalEdit(false)
}

  return (
    <li className={css['entry-item']}>
      <div>
        <Glass className={css.glass} />
        <p className={css.amount}></p>
        <p className={css.time}></p>
      </div>
      <div className={css.icons}>
        <EditTool className={css.edit} onClick={openModalEdit}/>
        <Trash className={css.delete} onClick={openModalDelete}/>
      </div>

{
  isModalEdit && (
    <Modal title="Edit the entered amount of water" onClose={closeModalEdit}>
      <AddWaterModal isEditWater={true} />
    </Modal>
  )
}
      {isModalDelete && <Modal title="Delete entry" onClose={closeModalDelete}>
        <ConfirmDeleteModal id={id}/>
      </Modal>}
      
    </li>
  );
};
export default TodayWaterItem
