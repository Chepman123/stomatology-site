import classes from './About.module.css'

export default function About(){
    return(
        <article id='About' className={classes.article}>
            <div className={classes.left}>
            <div>
            <h1 className={classes.h1}>Dlaczego warto wybrać DANTWAY?</h1>
            <p className={classes.p}>Tworzymy atmosferę, w której każdy pacjent czuje się swobodnie i bezpiecznie. Z myślą o rosnącej liczbie osób odwiedzających Trójmiasto, także turystów i gości biznesowych, rozszerzyliśmy obsługę o dodatkowe języki. Dzięki temu wizyty w naszym gabinecie są możliwe również w języku ukraińskim, rosyjskim i angielskim</p>
           
           <img src="https://flagcdn.com/w40/pl.png" className={classes.flag} alt="PL"/>
           <img src="https://flagcdn.com/w40/ua.png" className={classes.flag} alt="UA"/>
           <img src="https://flagcdn.com/w40/gb.png" className={classes.flag} alt="UK"/>
           <img src="https://flagcdn.com/w40/ru.png" className={classes.flag} alt="RU"/>
           </div>
            <img className={classes.firstImg} src='/image3.jpg'/>
            </div>
            
            <div className={classes.right}>
                <img className={classes.firstImg} src='/image2.jpg'/>
            <div className={classes.second}>
            <h1 className={classes.h1}>O nas</h1>
            <p className={classes.p}>Stomatologia DANTWAY powstała z pasji i zaangażowania w stomatologię. Naszą misją jest troska o zdrowie i dobro pacjentów, a także o ich uśmiech – bo uśmiech to najlepsza wizytówka każdego człowieka</p>
           </div>
            </div>
        </article>
    )
}