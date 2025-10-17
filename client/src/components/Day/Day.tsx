// Day.tsx
import { useEffect, useMemo} from "react";
import Hour from "./Hour";
import classes from "./Day.module.css";
import {type optionData } from "../Main/Book/BookPage";
import { getCookie } from "../../utils/cookies";

export default function Day({
    whichDay,
    selectedHour,
    onSelectHour,
    today,
    dayDate,
    bookings,
    userLogin
}: {
    whichDay: number;
    selectedHour?: string;
    onSelectHour: (hour: string) => void;
    today: Date;
    dayDate: Date;
    bookings: optionData[];
    userLogin: string | null;
}) {
    const dayNames = ["pon", "wtr", "śrd", "czw", "pią", "sob"];
    const StartHours = [9, 9, 9, 9, 9, 9.5];
    const EndHours = [16.5, 17, 17, 17, 17, 16];

    const hours = useMemo(() => {
        const result: string[] = [];
        for (let h = StartHours[whichDay]; h < EndHours[whichDay]; h += 0.5) {
            const hourNum = Math.floor(h);
            const minutes = h % 1 === 0 ? "00" : "30";
            const hourStr = `${hourNum.toString().padStart(2, "0")}:${minutes}`;
            const hourDate = new Date(dayDate);
            hourDate.setHours(hourNum, minutes === "00" ? 0 : 30, 0, 0);
            if (hourDate < today) continue;
            result.push(hourStr);
        }
        return result;
    }, [dayDate, today, whichDay]);

    useEffect(() => {
        const filtered = bookings.filter(b => {
            const bookingDate = new Date(b.date);
            return bookingDate.getFullYear() === dayDate.getFullYear()
                && bookingDate.getMonth() === dayDate.getMonth()
                && bookingDate.getDate() === dayDate.getDate();
        });
        
    }, [bookings, dayDate]);

    const findBooking = (hour: string)=>{
      if(bookings.length==0)return;
      hour+=':00';
      for(let i=0;i<bookings.length;i++){
        if(bookings[i].time==hour && dateIsSame(bookings[i].date,dayDate.toString())){
          return true
        }
      }
      return false;
    };
    const isUserBooked = (hour:string)=>{
       if(bookings.length==0)return;
      hour+=':00';
      for(let i=0;i<bookings.length;i++){
        
        if(bookings[i].time==hour && bookings[i].login==getCookie('user') && dateIsSame(bookings[i].date,dayDate.toString())){
          return true
        }
      }
      return false;
    }
    function getId(hour:string):number{
       if(bookings.length==0)return 0;
      
      hour+=':00';
      for(let i=0;i<bookings.length;i++){
        
        if(bookings[i].time==hour && dateIsSame(bookings[i].date,dayDate.toString())){
          console.log(`${hour}:${bookings[i].login}`);
          return i;
        }
      }
      return -1;
    }
    const dateIsSame = (first:string,second:string)=>{
      const bookingDate = new Date(first);
      const paneleDate = new Date(second);

      return bookingDate.getDate() == (paneleDate.getDate()-1);
    }
    return (
        <div className={classes.div}>
            <h3>{dayNames[whichDay]}</h3>
            <h4 className={classes.h4}>{dayDate.getDate()} paź</h4>
 
            {hours.map(hour => {
    const id = getId(hour); // один раз
    const bookingExists = id !== -1 && bookings[id] !== undefined;

    const isUserBooking = isUserBooked(hour);
    const isBooked = bookingExists;

    return (
        <Hour
            key={hour}
            hour={hour}
            selected={selectedHour === hour}
            disabled={isBooked}
            isUserBooking={isUserBooking}
            onSelect={() => onSelectHour(hour)}
            phone={bookingExists ? bookings[id].phone : ''}
            login={bookingExists ? bookings[id].login : ''}
            id={bookingExists ? bookings[id].id : -1}
        />
    );
})}

        </div>
    );
}
