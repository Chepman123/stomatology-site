type servives = "Profilaktyka" |
 "Stomatologia dziecięca"|"Stomatologia zachowawcza"|"Wybielanie"|"Chirurgia"|"Protetyka"|"Leczenie kanałowe"|"Implantologia";

export interface serviceExample{
    type:servives,
    price:number|string,
    name:string
 }

export const servicesData: serviceExample[]=[
    {
        type:"Profilaktyka",
        price:"200+",
        name:"Skaling"
    },
    {
        type:"Profilaktyka",
        price:"250+",
        name:"Piaskowanie"
    },
    {
        type:"Profilaktyka",
        price:400,
        name:"Skaling + piaskowanie"
    },
    {
        type:"Profilaktyka",
        price:400,
        name:"fluoryzacja"
    },
    {
        type:"Stomatologia dziecięca",
        price:100,
        name:"Lakowanie bruzd"
    },
    {
        type:"Stomatologia dziecięca",
        price:200,
        name:"Wypełnienie zęba"
    },
    {
        type:"Stomatologia dziecięca",
        price:200,
        name:"Usunięcie zęba"
    },
    {
        type:"Stomatologia zachowawcza",
        price:"100+",
        name:"Konsultacja"
    },
    {
        type:"Stomatologia zachowawcza",
        price:"250+",
        name:"Wypełnienie"
    }
    ,
    {
        type:"Stomatologia zachowawcza",
        price:"500",
        name:"Obudowa zęba"
    },
    {
        type:"Wybielanie",
        price:"1000",
        name:"Nakładki + preparat"
    },
    {
        type:"Wybielanie",
        price:"1000",
        name:"Jednowizytowe"
    },


    {
        type:"Chirurgia",
        price:"400+",
        name:"Ekstrakcja zęba"
    },
     {
        type:"Chirurgia",
        price:"800+",
        name:"Usunięcie zęba „mądrości” górnego"
    },
     {
        type:"Chirurgia",
        price:"800+",
        name:"Usunięcie zęba „mądrości” dolnego"
    },
     {
        type:"Chirurgia",
        price:"0",
        name:"Usunięcie szwów"
    },
     {
        type:"Chirurgia",
        price:"1000",
        name:"Dłutowanie zęba zatrzymanego"
    },
     {
        type:"Chirurgia",
        price:"100",
        name:"Szycie chirurgiczne"
    },

    {
        type:"Protetyka",
        price:"200",
        name:"Konsultacja"
    },
    {
        type:"Protetyka",
        price:"2500",
        name:"Proteza akrylowa(Całkowita)"
    },
    {
        type:"Protetyka",
        price:"2000",
        name:"Proteza akrylowa(Częściowa)"
    },
    {
        type:"Protetyka",
        price:"500",
        name:"Proteza akrylowa(Siatka wzmacniająca)"
    },
    {
        type:"Protetyka",
        price:"3500",
        name:"Proteza szkieletowa"
    },
    {
        type:"Protetyka",
        price:"1300",
        name:"Korona ceramiczna na podbudowie metalowej"
    },
    {
        type:"Protetyka",
        price:"2000",
        name:"Korona ceramiczna na podbudowie cyrkonowej"
    },
    {
        type:"Protetyka",
        price:"1000",
        name:"Korona pełnometalowa"
    },
    {
        type:"Protetyka",
        price:"700",
        name:"Wkład"
    },
    {
        type:"Protetyka",
        price:"1000",
        name:"Szyna relaksacyjna"
    },
    {
        type:"Protetyka",
        price:"1300",
        name:"Inla/onlay"
    },
    {
        type:"Protetyka",
        price:"1200",
        name:"Mikroproteza do 3 zębów"
    },
    {
        type:"Protetyka",
        price:"300+",
        name:"Naprawa protezy"
    },
    {
        type:"Protetyka",
        price:"700",
        name:"Podścielenie"
    },
    {
        type:"Protetyka",
        price:"50",
        name:"Korona tymczasowa (natychmiastowa)"
    },
    {
        type:"Protetyka",
        price:"100",
        name:"Zdęcie/ zacementowanie korony z innego gabinetu"
    },
    {
        type:"Protetyka",
        price:"2500",
        name:"Licówka pełnoceramiczna za 1 pkt."
    },
    {
        type:"Protetyka",
        price:"2000",
        name:"Most adhezyjny cyrkonowy"
    },
    {
        type:"Protetyka",
        price:"1000",
        name:"Most adhezyjny kompozytowy"
    },
    {
        type:"Protetyka",
        price:-1,
        name:"Wykonanie pracy protetycznej w trybie ekspresowym dopłata 30%"
    },
    {
        type:"Leczenie kanałowe",
        price:"1000+",
        name:"Reendo (ponowne leczenie kanałowe"
    },
    {
        type:"Leczenie kanałowe",
        price:"500",
        name:"Usunięcie złamanego narzędzia"
    },


     {
        type:"Leczenie kanałowe",
        price:"800",
        name:"Leczenie kanałowe(x1)"
    },
    {
        type:"Leczenie kanałowe",
        price:"1000",
        name:"Leczenie kanałowe(x2)"
    },
    {
        type:"Leczenie kanałowe",
        price:"1200",
        name:"Leczenie kanałowe(x3)"
    },
    {
        type:"Leczenie kanałowe",
        price:"1600",
        name:"Leczenie kanałowe(x4)"
    },


    {
        type:"Leczenie kanałowe",
        price:-1,
        name:"UWAGA! Po leczeniu kanałowym odbudowa/wypełnienie zęba jest odzielnym, płatnym zabiegiem"
    },

   
     {
        type:"Implantologia",
        price:"3000",
        name:"Wszczepienie implantu"
    },
    {
        type:"Implantologia",
        price:"w cenie implanta ",
        name:"Odsłonięcie implantu"
    },
    {
        type:"Implantologia",
        price:"5500",
        name:"Wszczepienie implantu + korona ceramiczna na podbudowie cyrkonowejz łącznikiem"
    },
     {
        type:"Implantologia",
        price: "4500",
        name:"Wszczepienie implantu + korona ceramiczna na podbudowie metalowej złącznikiem"
    },
    {
        type:"Implantologia",
        price: "łącznik + 2000",
        name:"Korona cyrkonowa na implancie"
    },
    {
        type:"Implantologia",
        price: "łącznik + 500",
        name:"Korona tymczasowa na implancie"
    },
    {
        type:"Implantologia",
        price: "łącznik + 1300",
        name:"Korona metalowa na implancie"
    },
]