import classes from './Hour.module.css'

export default function Hour({hour, selected, onSelect, disabled}:{hour:string, selected?:boolean, onSelect?:()=>void, disabled?:boolean}){
    return <button 
        className={`${classes.button} ${selected ? classes.selected : ''}`}
        onClick={onSelect}
        disabled={disabled}
    >
        {hour}
    </button>
}
