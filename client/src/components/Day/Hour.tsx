
import { useNavigate } from 'react-router-dom';
import classes from './Hour.module.css';
import { useEffect} from 'react';
import { getCookie, setCookie } from '../../utils/cookies';

export default function Hour({
    hour,
    selected,
    service,
    onSelect,
    disabled,
    isUserBooking,
    login,
    phone,
    id
}: {
    hour: string;
    selected?: boolean;
    service:string
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
      fetch('https://stomatology-site.onrender.com/book',{
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
    useEffect(()=>{
        setCookie('booked','1');
    },[isUserBooking])
    return (
        <div>
        <button
            className={buttonClass}
            onClick={isUserBooking?DeleteButton:getCookie('booked')=='0'?onSelect:()=>{}}
            disabled={disabled && !isUserBooking}
        >
          <strong className={classes.strong}>X </strong>
            {hour}
        </button>
        <div className={classes.panel}  style={{ display: getCookie('user') === 'admin' ? 'block' : 'none' }}>
            <h4 className={classes.h4}>{login}</h4>
            <h4 className={classes.h4}>{phone}</h4>
            <h4 className={classes.h4}>{service}</h4>
        </div>
        </div>
    );
}
