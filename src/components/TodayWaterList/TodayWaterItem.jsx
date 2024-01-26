import { cardActionAreaClasses } from '@mui/material'
import css from './TodayWaterItem.module.css'

export const TodayWaterItem = ({entry}) => {

    // const handleEdit= () => dispatch(editEntry(entry))
    // const handleDelete = () => dispatch(deleteEntry(entry.id));

    return (
        <li>
            <p className={css.amount}></p>
            <p className={css.time}></p>
            <button className={css.edit}></button>
            <button className={css.delete}></button>
        </li>
    )
}