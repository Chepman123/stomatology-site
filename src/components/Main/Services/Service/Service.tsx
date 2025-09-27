import classes from './Service.module.css'
import type { serviceExample } from '/Dantway/stomatology-site/src/data/services';
export default function Service({serv}:{serv:serviceExample}){
    return(
        <div className={classes.div}>
            <h3>{serv.name}</h3>
            <div className={classes.border}/>
            <div className={classes.price}>{serv.price}zł</div>
        </div>
    )
}