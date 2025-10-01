import Button from '../Button/Button'
import InfoModal from '../InfoModal/InfoModal'
import Modal from '../InfoModal/Modal'
import classes from './Nav.module.css'

export default function Nav(){
    return (
    <nav>
        <div className={classes.div}>
            <h1 className={classes.mobileSlogan}>DANTWAY</h1>
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
            <h1>Umów się na wizytę</h1>
            <div>
            <InfoModal>Sprawdź Adres</InfoModal>
            </div>
        </aside>
    </nav>
    )
}