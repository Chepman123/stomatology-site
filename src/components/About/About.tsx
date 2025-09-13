import classes from './About.module.css'

export default function About(){
    return(
        <div id='About' className={classes.div}>
            <h1 className={classes.h1}>O nas</h1>
            <p className={classes.p}>Jesteśmy młodym ambitnym zespołem.   Szanując czas naszych pacjentów, przyjęcia w klinice zostały tak zorganizowane, aby pacjenci byli zawsze przyjmowani punktualnie o wyznaczonej godzinie, a wszystkie wizyty są potwierdzane z jednodniowym wyprzedzeniem</p>
        </div>
    )
}