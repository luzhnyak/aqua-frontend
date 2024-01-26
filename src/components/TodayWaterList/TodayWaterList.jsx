import { TodayWaterItem } from './TodayWaterItem'
import css from './TodayWaterList.module.css'

export const TodayWaterList = () => {
    return(
<div>
    <h2 className={css.title}>Today</h2>
<ul>
    <TodayWaterItem/>
   </ul>
</div>
    )
}