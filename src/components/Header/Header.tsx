import { Link } from "react-router-dom";
import "./Header.css";

export default function Header(){

    return (
        <header>
            <Link to="/"><h2>DANTWAY stomatologia</h2></Link>
            <ul>
                <li><Link to="/services">Usługi i Cennik</Link></li>
                <li><Link to="/#About">O nas</Link></li>
                <li><Link to="/#Contact">Kontakt</Link></li>
            </ul>
        </header>
    )
}

