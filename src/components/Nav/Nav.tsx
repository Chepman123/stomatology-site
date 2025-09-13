import Button from '../Button/Button'
import classes from './Nav.module.css'

export default function Nav(){
    return (
    <nav>
        <div className={classes.div}>
        <div className={classes.slogan}>
            <h1>Twój uśmiech</h1>
            <h1>jest naszym <strong className={classes.strong}>priorytetem</strong></h1>
        </div>
        <span className={classes.banner}>
        <h2>Stomatologia</h2>
        <div className={classes.borderDiv}/>
        <h1>DANTWAY</h1>
        </span>
        </div>
        <aside className={classes.aside}>
            <h1>Zapisz się na seans</h1>
            <div>
            <Button>Umów się na wizytę</Button>
            <Button>Sprawdź Adres</Button>
            </div>
        </aside>
    </nav>
    )
}