import SocIcon from '../SocIcon/SocIcon';
import classes from './Footer.module.css';


export default function Footer(){
    return(
        <footer id='Contact'>
            <h1 className={classes.h1}>Kontakt</h1>
           <div className={classes.socialIcons}>
              <SocIcon icon="instagram"/>
              <SocIcon icon="youtube"/>
              <SocIcon icon="facebook"/>
              <SocIcon icon="tiktok"/>
              <SocIcon icon="phone"/>
              <SocIcon icon="email"/>
           </div>
        </footer>
    );
}