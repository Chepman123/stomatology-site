
import { useNavigate } from 'react-router-dom';
import classes from './Hour.module.css';

export default function Hour({
    hour,
    selected,
    onSelect,
    disabled,
    isUserBooking,
    login,
    phone,
    id
}: {
    hour: string;
    selected?: boolean;
    onSelect?: () => void;
    disabled?: boolean;
    isUserBooking?: boolean;
    login:string;
    phone:string;
    id:number
})
{
  const navigator = useNavigate();
   function DeleteButton(){
      fetch('http://localhost:5000/book',{
        method:'DELETE',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({id:id})
      })
      
      navigator('/');
      
   }
    const buttonClass = `
        ${classes.button} 
        ${selected ? classes.selected : ''} 
        ${isUserBooking ? classes.userBooking : ''} 
        ${!isUserBooking && disabled ? classes.booked : ''}
    `;

    return (
        <button
            className={buttonClass}
            onClick={isUserBooking?DeleteButton:onSelect}
            disabled={disabled && !isUserBooking}
        >
          <strong className={classes.strong}>X </strong>
            {hour}
        </button>
    );
}
