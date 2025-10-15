import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../../utils/cookies";

export default function BookPage(){
    const navigator = useNavigate();
    useEffect(()=>{
        
        if(getCookie('user')==null) navigator('/login');
    },[navigator])
    return <></>
}