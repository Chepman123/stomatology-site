import classes from './Service.module.css'
export default function Service(){
    return(
        <div className={classes.div}>
            <h3>Konsultacja</h3>
            <div className={classes.border}/>
            <div className={classes.price}>200zł</div>
        </div>
    )
}