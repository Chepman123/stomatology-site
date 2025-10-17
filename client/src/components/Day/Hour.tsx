import classes from './Hour.module.css';

export default function Hour({
  hour,
  selected,
  onSelect,
  disabled,
  userBooking
}:{
  hour:string,
  selected?:boolean,
  onSelect?:()=>void,
  disabled?:boolean,
  userBooking?:boolean
}) {
  return (
    <button 
      className={`${classes.button} 
                  ${selected ? classes.selected : ''} 
                  ${disabled ? classes.disabled : ''} 
                  ${userBooking ? classes.userBooking : ''}`}
      onClick={onSelect}
      disabled={disabled}
    >
      {hour}
    </button>
  );
}
