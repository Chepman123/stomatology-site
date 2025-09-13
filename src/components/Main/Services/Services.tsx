import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Service from "./Service/Service";
import classes from './Services.module.css'

export default function Services(){
    return(
        <main className={classes.main}>
          <Header/>
          <div className={classes.div}>
            <h1 className={classes.h1}>Cennik Usług Stomatologicznych</h1>
            <h2 className={classes.h2}>1. Higienizacja</h2>
            <Service/>
            <Service/>
            <Service/>
            <h2 className={classes.h2}>2. Higienizacja</h2>
            <Service/>
            <Service/>
            <Service/>
            <h2 className={classes.h2}>3. Higienizacja</h2>
            <Service/>
            <Service/>
            <Service/><div className={classes.br}/>
          </div>
          <Footer/>
        </main>
    )
}
