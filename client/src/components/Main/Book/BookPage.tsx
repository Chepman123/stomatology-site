import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../../utils/cookies";
import classes from './BookPage.module.css';
import { servicesList } from "../../../data/services";
import Day from "../../Day/Day";

interface optionData{
    id:number,
    date:Date,
    time:string,
    login:string
}

export default function BookPage(){
    const navigator = useNavigate();
    useEffect(()=>{
        if(getCookie('user')==null) navigator('/login');
    },[navigator]);

    const [selected, setSelected] = useState<{date:Date, hour:string} | null>(null);
    const [selectedService, setSelectedService] = useState<string>(servicesList[0]);
    const [weekOffset, setWeekOffset] = useState(0);

    const today = new Date();
    const todayIndex = today.getDay() === 0 ? 0 : today.getDay()-1;

    const handleSelectHour = (date:Date, hour:string) => {
        setSelected({date, hour});
    };

    const getWeekDays = () => {
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - todayIndex + weekOffset*7);
        return [0,1,2,3,4,5].map(i => {
            const d = new Date(startOfWeek);
            d.setHours(0,0,0,0);
            d.setDate(startOfWeek.getDate() + i);
            return d;
        });
    };
    const [bookings, setBookings] = useState<optionData[]>([]);
    async function getData() {
        const response = await fetch('https://stomatology-site.onrender.com/book');
        const data:optionData[] = await response.json();
        setBookings(data);

    }
    useEffect(()=>{
        getData();
    },[]);
    const weekDays = getWeekDays();

    const userLogin = getCookie('user');

    return <main className={classes.main}>
        <h1 className={classes.h1}>Umów wizytę</h1>

        <select 
            className={classes.select} 
            value={selectedService} 
            onChange={(e) => setSelectedService(e.target.value)}
        >
            {servicesList.map(service => (
                <option key={service} value={service}>{service}</option>
            ))}
        </select>

        <div className={classes.div}>
            <button 
                className={classes.pageButton} 
                disabled={weekOffset === 0} 
                onClick={() => setWeekOffset(prev => Math.max(prev-1, 0))}
            >
                {'<'}
            </button>

            {weekDays.map((date,i) => (
            <Day
             key={i}
              whichDay={i}
              dayDate={date}
              selectedHour={selected?.date.getTime() === date.getTime() ? selected.hour : undefined}
                onSelectHour={(hour) => handleSelectHour(date, hour)}
                today={today}
                bookings={bookings} 
                userLogin={userLogin} 
  />
))}


            <button 
                className={classes.pageButton} 
                onClick={() => setWeekOffset(prev => prev+1)}
            >
                {'>'}
            </button>
        </div>

        <button 
            className={classes.button}
            onClick={() => {
                if(selected) console.log(
                    "Wybrany czas:", selected.hour, 
                    "Data:", selected.date.toLocaleDateString(),
                    "Usługa:", selectedService
                );
                fetch('https://stomatology-site.onrender.com/book',{
                    method:'POST',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify({
                        data:selected?.date,
                        hour:selected?.hour,
                        service:selectedService,
                        login:getCookie('user')
                    })
                });
                navigator('/');
             }}
        >
            Umów się
        </button>
    </main>
}
