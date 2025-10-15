import { useState } from 'react';
import classes from './RegLog.module.css';
import { useNavigate } from 'react-router-dom';
import { setCookie } from '../../../utils/cookies';

export default function Registration() {
  const [login, setLogin] = useState('');
  const [status,setStatus] = useState<boolean>(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');

    const navigate = useNavigate(); 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setStatus(true);
      return;
    }

   const response = await fetch('https://stomatology-site-6.onrender.com/registration',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({login:login,password:password,phone:phone})
   })
   const result:boolean = await response.json();
   setStatus(result);
   if(result){
     setCookie('user',login);
     navigate('/book');
   } 
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <h1 className={classes.h1}>Zarejestruj się</h1>
      <input
        type="text"
        placeholder="login"
        value={login}
        onChange={e => setLogin(e.target.value)}
        required
      />
      <input
  type="password"
  placeholder="hasło"
  value={password}
  onChange={e => setPassword(e.target.value)}
  pattern="^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$"
  title="Hasło musi mieć min. 8 znaków, 1 dużą literę i 1 cyfrę"
  required
/>
      <input
        type="password"
        placeholder="powtórz hasło"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        pattern="^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$"
  title="Hasło musi mieć min. 8 znaków, 1 dużą literę i 1 cyfrę"
        required
      />
      <input
        type="tel"
        id="phone"
        name="patient_phone"
        placeholder="+48 600 123 456"
        pattern="^\+?[0-9\s\-]{9,20}$"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        required
      />
      {status&&
        <h2 className={classes.h2}>Coś jest nie tak</h2>}
      <button type='button' className={classes.button} onClick={handleSubmit}>Stwórz Konto</button>
    </form>
  );
}
