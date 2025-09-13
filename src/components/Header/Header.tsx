import { Link } from "react-router-dom";
import classes from "./Header.module.css";

export default function Header(){

    return (
        <header>
            <Link to="/"><h2>DANTWAY stomatologia</h2></Link>
            <ul>
                <li><Link to="/services">Usługi i Cennik</Link></li>
                <li><a href="#About">O nas</a></li>
                <li><a href="#Contact">Kontakt</a></li>
            </ul>
        </header>
    )
}

