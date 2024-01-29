import css from './TodayWaterItem.module.css';
import { ReactComponent as EditTool } from '../../images/icons/pencil-square.svg';
import { ReactComponent as Trash } from '../../images/icons/trash.svg';
import { ReactComponent as Glass } from '../../images/icons/glass.svg';
export const TodayWaterItem = ({ entry }) => {
  // const handleEdit= () => dispatch(editEntry(entry))
  // const handleDelete = () => dispatch(deleteEntry(entry.id));

  return (
    <li className={css['entry-item']}>
      <div>
        <Glass className={css.glass} />
        <p className={css.amount}></p>
        <p className={css.time}></p>
      </div>
      <div className={css.icons}>
        <EditTool className={css.edit} />
        <Trash className={css.delete} />
      </div>
    </li>
  );
};
