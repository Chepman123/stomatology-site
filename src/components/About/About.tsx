import classes from './About.module.css'

export default function About(){
    return(
        <article id='About' className={classes.article}>
            <div className={classes.left}>
            <h1 className={classes.h1}>Dlaczego warto wybrać DANTWAY?</h1>
            <p className={classes.p}>Tworzymy atmosferę, w której każdy pacjent czuje się swobodnie i bezpiecznie. Z myślą o rosnącej liczbie osób odwiedzających Trójmiasto, także turystów i gości biznesowych, rozszerzyliśmy obsługę o dodatkowe języki. Dzięki temu wizyty w naszym gabinecie są możliwe również w języku ukraińskim, rosyjskim i angielskim</p>
            </div>
            <div className={classes.right}>
            <h1 className={classes.h1}>O nas</h1>
            <p className={classes.p}>Stomatologia DANTWAY powstała z pasji i zaangażowania w stomatologię. Naszą misją jest troska o zdrowie i dobro pacjentów, a także o ich uśmiech – bo uśmiech to najlepsza wizytówka każdego człowieka</p>
            </div>
        </article>
    )
}