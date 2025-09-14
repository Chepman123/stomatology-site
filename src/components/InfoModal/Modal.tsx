import { useRef, type ReactNode,useEffect } from "react";
import { createPortal } from "react-dom";
import classes from './InfoModal.module.css'

export default function Modal({children,open,onClick}:{children?:ReactNode,open:boolean,onClick:()=>void}){
   const modal = useRef<HTMLDialogElement>(null);
 
    useEffect(()=>{
        if(open) modal.current?.showModal();
        else modal.current?.close();
    },[open]);   

    return createPortal(
        <dialog ref={modal} className={classes.dialog}>{children}
        <button onClick={onClick}>Close</button>
        </dialog>,
        document.getElementById("rootModal")!
    )
}