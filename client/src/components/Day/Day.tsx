import type { optionData } from "../Main/Book/BookPage";
import classes from './Day.module.css'; 
import Hour from './Hour';

export default function Day({ 
  whichDay, 
  selectedHour, 
  onSelectHour,
  today,
  dayDate,
  bookings,
  userLogin
}:{
  whichDay:number, 
  selectedHour?:string, 
  onSelectHour:(hour:string)=>void,
  today:Date,
  dayDate:Date,
  bookings: optionData[],
  userLogin:string | null
}) {
  const dayNames = ['pon','wtr','śrd','czw','pią','sob'];
  const StartHours = [9,9,9,9,9,9.5];
  const EndHours = [16.5,17,17,17,17,16];

  const hours:string[] = [];
  for (let h = StartHours[whichDay]; h < EndHours[whichDay]; h += 0.5) {
    const hourNum = Math.floor(h);
    const minutes = h % 1 === 0 ? "00" : "30";
    const hourStr = `${hourNum}:${minutes}`;

    const hourDate = new Date(dayDate);
    hourDate.setHours(hourNum, minutes==="00"?0:30,0,0);

    if (hourDate < today) continue; 
    hours.push(hourStr);
  }

  const isBooked = (hour:string) => {
    return bookings.some(b => {
      const bookedDate = new Date(b.date);
      return bookedDate.toDateString() === dayDate.toDateString() && b.time === hour;
    });
  };

  const hasUserBooking = bookings.some(b => b.login === userLogin);

  return (
    <div className={classes.div}>
      <h3>{dayNames[whichDay]}</h3>
      <h4 className={classes.h4}>{dayDate.getDate()} paź</h4>

      {hours.map(hour => {
        const booked = isBooked(hour);
        const userBooking = bookings.some(b => 
          b.login === userLogin &&
          new Date(b.date).toDateString() === dayDate.toDateString() &&
          b.time === hour
        );

        return (
          <Hour 
            key={hour} 
            hour={hour} 
            selected={selectedHour === hour}
            onSelect={() => {
              if (userBooking) {
                console.log(`Masz już rezerwację na ten czas: ${hour}`);
                return;
              }
              if (hasUserBooking && !userBooking) {
                return;
              }
              if (booked && !userBooking) return;
              
              onSelectHour(hour);
            }}
            disabled={booked && !userBooking} 
            userBooking={userBooking}      
          />
        );
      })}
    </div>
  );
}
