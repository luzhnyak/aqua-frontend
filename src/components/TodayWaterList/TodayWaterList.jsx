
import { ReactComponent as Plus } from '../../images/icons/plus-small.svg';
import TodayWaterItem from './TodayWaterItem';
import css from './TodayWaterList.module.css'

export const TodayWaterList = () => {
    return(
<div className={css.entryList}>
    <h2 className={css.title}>Today</h2>
<ul >
    <p></p>
    <TodayWaterItem/>
   </ul>
   <button className={css['btn-add']}> <Plus className={css.plus}/> Add water</button>
</div>
    )
}