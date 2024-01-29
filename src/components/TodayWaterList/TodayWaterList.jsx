
import { useSelector } from 'react-redux';
import { ReactComponent as Plus } from '../../images/icons/plus-small.svg';
import TodayWaterItem from './TodayWaterItem';
import css from './TodayWaterList.module.css'
import { selectWatersToday } from '../../redux/waterConsumption/selectors';

export const TodayWaterList = () => {
const entries = useSelector(selectWatersToday)

    return(
<div className={css.entryList}>
    <h2 className={css.title}>Today</h2>
<ul >
    {entries.length !== 0 && entries.map(entry=>
        (<TodayWaterItem id={entry.id} key={entry.id}/>)
    )}
    
   </ul>
   <button className={css['btn-add']}> <Plus className={css.plus}/> Add water</button>
</div>
    )
}