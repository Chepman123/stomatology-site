import { Link, useNavigate } from 'react-router-dom';
import classes from './RegLog.module.css';
import { useState, type ChangeEvent } from 'react';
import { setCookie } from '../../../utils/cookies';

export default function Login(){
    const [status,setStatus] = useState<boolean>(false);
    const [password,setPassword] = useState<string>('');
    const [login,setLogin] = useState<string>('');
    const navigator = useNavigate();
    function getPassword(event:ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value);
    }
    function getLogin(event:ChangeEvent<HTMLInputElement>){
        setLogin(event.target.value);
    }

    async function Login(){
      const response = await fetch('http://localhost:5000/login',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({login:login,password:password})
      })
       if(await response.json()){ 
        setStatus(true);
        return;
       }
        setCookie('user',login);
        navigator('/books');
    }

    return<form className={classes.form}>
        <h1 className={classes.h1}>Zaloguj Się</h1>
        <input type="text" placeholder='login' value={login} onChange={getLogin} required/>
        <input type="password" placeholder='hasło' value={password} onChange={getPassword} required/>
        <Link to ='/registration'>Nie masz konta?</Link>
        {status&&
        <h2 className={classes.h2}>Hasło lub login nie zgadza się</h2>
        }
        <button type='button' className={classes.button} onClick={Login}>Zaloguj Się</button>
    </form>
}