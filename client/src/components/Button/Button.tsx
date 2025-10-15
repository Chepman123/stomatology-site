import classes from './Button.module.css';

export default function Button({children}:{children:string}){
    return <button className={classes.button}>{children}</button>
}