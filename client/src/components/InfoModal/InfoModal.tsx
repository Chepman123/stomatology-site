import { useState} from "react";
import Modal from "./Modal";
import classes from './InfoModal.module.css'

export default function InfoModal({children}:{children:any}){
    const [modal,setModal] = useState<boolean>(false);
    function showModal():void{
         setModal(!modal);
    }
   
    return(
        <div>
        <button onClick={showModal}>{children}</button>
        <Modal open={modal} onClick={()=>setModal(false)}>
            <h1 className={classes.h1}>Serdecznie zapraszamy do naszej stomatologii</h1>
            <h3>Adres: Gdynia, Legionów 107N/3</h3>
            <h3>Zadzwoń do nas: 606 - 591 - 391</h3>
            <h3>Email Address: Dantwaystomatologia@gmail.com</h3>
            <div className={classes.div}><img className={classes.img} src="/adres.jpg"/></div>
            <h4 className={classes.h4}>Ważne</h4>
            <p>Umawianie wizyt telefonicznie, od poniedziałku do piątku w godzinach 9-18 pod podanym numerem telefonu. W razie braku możliwości odebrania telefonu oddzwaniamy osobiście pod wyświetlony numer telefonu</p>
        </Modal>
        </div>
    )
}