import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie, setCookie} from "../../../utils/cookies";
import classes from './BookPage.module.css';
import { servicesList } from "../../../data/services";
import Day from "../../Day/Day";

export interface optionData {
    id: number;
    date: string;
    time: string;
    phone:string;
    login: string;
    service:string;
}

export default function BookPage() {
    const navigator = useNavigate();

    useEffect(() => {
        if (!getCookie('user')) navigator('/login');
        setCookie('booked','0');
    }, [navigator]);

    const [selected, setSelected] = useState<{ date: Date, hour: string } | null>(null);
    const [selectedService, setSelectedService] = useState<string>(servicesList[0]);
    const [weekOffset, setWeekOffset] = useState(0);
    const [bookings, setBookings] = useState<optionData[]>([]);

    const today = new Date();
    const todayIndex = today.getDay() === 0 ? 0 : today.getDay() - 1;

    const handleSelectHour = (date: Date, hour: string) => {
        setSelected({ date, hour });
    };

    const getWeekDays = () => {
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - todayIndex + weekOffset * 7);
        return [0, 1, 2, 3, 4, 5].map(i => {
            const d = new Date(startOfWeek);
            d.setHours(0, 0, 0, 0);
            d.setDate(startOfWeek.getDate() + i);
            return d;
        });
    };
    useEffect(() => {
        async function fetchBookings() {
            const res = await fetch("https://stomatology-site.onrender.com/book");
            const data = await res.json();
         
            setBookings(data);
        }
        fetchBookings();
    }, []);

    const weekDays = getWeekDays();
    const userLogin = getCookie('user');

    const handleBooking = async () => {
        if (!selected) return;
        const res = await fetch('https://stomatology-site.onrender.com/book', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                data: selected.date,
                hour: selected.hour,
                service: selectedService,
                login: userLogin
            })
        });

        if (res.ok) {
            setBookings(prev => [
                ...prev,
                { id: Date.now(), date: selected.date.toISOString(), time: selected.hour + ":00", login: userLogin!,phone:'',service:selectedService}
            ]);
            setSelected(null);
        } else {
            alert("❌ Не вдалося забронювати");
        }
        navigator('/');
    };

    return (
        <main className={classes.main}>
            <h1 className={classes.h1}>Umów wizytę</h1>

            <select
                className={classes.select}
                value={selectedService}
                onChange={e => setSelectedService(e.target.value)}
            >
                {servicesList.map(service => (
                    <option key={service} value={service}>{service}</option>
                ))}
            </select>

            <div className={classes.div}>
                <button
                    className={classes.pageButton}
                    disabled={weekOffset === 0}
                    onClick={() => setWeekOffset(prev => Math.max(prev - 1, 0))}
                >
                    {'<'}
                </button>

                {weekDays.map((date, i) => (
                    <Day
                        key={i}
                        whichDay={i}
                        dayDate={date}
                        selectedHour={selected?.date.getTime() === date.getTime() ? selected.hour : undefined}
                        onSelectHour={hour => handleSelectHour(date, hour)}
                        today={today}
                        bookings={bookings}
                        userLogin={userLogin}
                    />
                ))}

                <button
                    className={classes.pageButton}
                    onClick={() => setWeekOffset(prev => prev + 1)}
                >
                    {'>'}
                </button>
            </div>

            <button
                className={classes.button}
                onClick={handleBooking}
            >
                Umów się
            </button>
        </main>
    );
}
