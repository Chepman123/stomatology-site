import Button from '../Button/Button'
import classes from './Offer.module.css'

export default function Offer(){
    return(
        <div className={classes.div}>
        <article className={classes.article}>
         <h1 className={classes.h1}>Nasza oferta</h1>
         <p className={classes.p}>Zajmujemy się nie tylko leczeniem zębów – pomagamy odzyskać komfort, pewność siebie i lepszą jakość życia. Oferujemy pełną opiekę stomatologiczną w zakresie:</p>
         <ul className={classes.ul}>
            <li>stomatologii zachowawczej</li>
            <li>chirurgii stomatologicznej</li>
            <li>protetyki</li>
            <li>stomatologii estetycznej</li>
            <li>implantologii.</li>
         </ul>
         <Button>Dowiedź się więcej</Button>
        </article>
        <img className={classes.img} src='/image1.jpg'/>
        </div>
    )
}