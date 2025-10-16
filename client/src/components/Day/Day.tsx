import Hour from "./Hour";
import classes from './Day.module.css'

export default function Day({ 
    whichDay, 
    selectedHour, 
    onSelectHour,
    today,
    dayDate
}:{
    whichDay:number, 
    selectedHour?:string, 
    onSelectHour:(hour:string)=>void,
    today:Date,
    dayDate:Date
}) {
  const dayNames:string[]=['pon','wtr','śrd','czw','pią','sob'];
  const StartHours:number[]=[9,9,9,9,9,9.5];
  const EndHours:number[]=[16.5,17,17,17,17,16];

  const hours:string[] = [];
  for (let h = StartHours[whichDay]; h < EndHours[whichDay]; h += 0.5) {
    const hourNum = Math.floor(h);
    const minutes = h % 1 === 0 ? "00" : "30";
    const hourStr = `${hourNum}:${minutes}`;

    const hourDate = new Date(dayDate);
    hourDate.setHours(hourNum, minutes==="00"?0:30,0,0);

    if(hourDate < today) continue; 

    hours.push(hourStr);
  }

  return (
    <div className={classes.div}>
      <h3>{dayNames[whichDay]}</h3>
      <h4 className={classes.h4}>{dayDate.getDate()} paź</h4>
      {hours.map(hour => (
        <Hour 
          key={hour} 
          hour={hour} 
          selected={selectedHour === hour}
          onSelect={() => onSelectHour(hour)}
        />
      ))}
    </div>
  );
}
