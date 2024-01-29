import { deleteWaterThunk } from '../../redux/waterConsumption/operations';
import css from './ConfirmDeleteModal.module.css'
import { useDispatch } from 'react-redux';



const ConfirmDeleteModal = ({onClose, id}) => {
    const dispatch = useDispatch()


const handleDelete = () => dispatch(deleteWaterThunk(id))

  
    const handleClose = () => {
      onClose(false);
    };
  
    return (
        <div>
          <h4 className={css.title}>Do you really want to leave?</h4>
          <div className={css.buttons}>
            <button className={css.logoutBtn} type="button" onClick={handleDelete}>
              Log out
            </button>
            <button className={css.cancelBtn} type="button" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </div>
      );    
}

export default ConfirmDeleteModal


