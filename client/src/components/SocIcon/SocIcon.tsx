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
        link:"https://www.instagram.com/dantway.stomatologia?igsh=MWx5c2hnaXpibzF6&utm_source=qr",
        iconClass:"fab fa-instagram",
        styleClass:classes.instagram
    },
    {
        type:"facebook",
        link:"https://www.facebook.com/share/1BPxwDDouS/?mibextid=wwXIfr",
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
        link:"https://www.tiktok.com/@dantway.stomatologia?_t=ZN-9038jpVfWXG",
        iconClass:"fab fa-tiktok",
        styleClass:classes.tiktok
    }
]

export default function SocIcon({icon}:{icon:string}){
    const selectedIcon = icons.find((i) => i.type === icon);
    return(
        <div className={classes.div}>
        <a href={selectedIcon?.link} target="_blank" rel="noreferrer" className={`${classes.icon} ${selectedIcon?.styleClass}`}>
          <i className={selectedIcon?.iconClass}></i>
        </a>
        </div>
    );
}