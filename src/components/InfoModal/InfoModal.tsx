import { useState} from "react";
import Modal from "./Modal";
import classes from './InfoModal.module.css'

export default function InfoModal(){
    const [modal,setModal] = useState<boolean>(false);
    function showModal():void{
         setModal(!modal);
    }
   
    return(
        <div>
        <button onClick={showModal}>Click</button>
        <Modal open={modal} onClick={()=>setModal(false)}>
            <h3>Lara top</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur magni, numquam dicta saepe modi magnam aspernatur nostrum, ab explicabo delectus nesciunt perferendis. Quos veniam ab veritatis, nam fugiat iure quod.</p>
        </Modal>
        </div>
    )
}