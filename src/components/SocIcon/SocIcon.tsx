import classes from './SocIcon.module.css';

interface icon{
  type:string,
  link:string,
  iconClass:string,
  styleClass:string,
}
const icons:icon[]=[
    {
        type:"instagram",
        link:"https://instagram.com",
        iconClass:"fab fa-instagram",
        styleClass:classes.instagram
    },
    {
        type:"facebook",
        link:"https://facebook.com",
        iconClass:"fab fa-facebook",
        styleClass:classes.facebook
    },
    {
        type:"youtube",
        link:"https://youtube.com",
        iconClass:"fab fa-youtube",
        styleClass:classes.youtube
    },
    {
        type:"tiktok",
        link:"https://tiktok.com",
        iconClass:"fab fa-tiktok",
        styleClass:classes.tiktok
    },
    {
        type:"phone",
        link:"+48 606 591 391",
        iconClass:"fas fa-phone",
        styleClass:classes.phone
    },
    {
        type:"email",
        link:"Dantwaystomatologia@gmail.com",
        iconClass:"fas fa-envelope",
        styleClass:classes.email
    }
]

export default function SocIcon({icon}:{icon:string}){
    const selectedIcon = icons.find((i) => i.type === icon);
    return(
        <div className={classes.div}>
        <a href={selectedIcon?.link} target="_blank" rel="noreferrer" className={`${classes.icon} ${selectedIcon?.styleClass}`}>
          <i className={selectedIcon?.iconClass}></i>
        </a>
        <div className={classes.info}><p className={classes.p}>{selectedIcon?.link}</p></div>
        </div>
    );
}