import { useRef } from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Service from "./Service/Service";
import classes from './Services.module.css'
import type { serviceExample } from '/Dantway/stomatology-site/src/data/services';
import { servicesData } from "../../../data/services";


const serviceTypes: { label: string; type: serviceExample["type"] }[] = [
  { label: "1. Profilaktyka", type: "Profilaktyka" },
  { label: "2. Stomatologia dziecięca", type: "Stomatologia dziecięca" },
  { label: "3. Stomatologia zachowawcza", type: "Stomatologia zachowawcza" },
  { label: "4. Wybielanie", type: "Wybielanie" },
  { label: "5. Chirurgia", type: "Chirurgia" },
  { label: "6. Protetyka", type: "Protetyka" },
  { label: "7. Leczenie kanałowe", type: "Leczenie kanałowe" },
  { label: "8. Implantologia", type: "Implantologia" },
];

export default function Services() {
  const parentServ = useRef<HTMLDivElement>(null);

  return (
    <main className={classes.main}>
      <Header />
      <div className={classes.div} ref={parentServ}>
        <h1 className={classes.h1}>Cennik Usług Stomatologicznych</h1>

        {serviceTypes.map(({ label, type }) => (
          <div className={classes.servicesList} key={type}>
            <h2 className={classes.h2}>{label}</h2>
            {servicesData
              .filter(serv => serv.type === type)
              .map((serv, idx) => (
                <Service key={idx} serv={serv} />
              ))}
          </div>
        ))}

        <div className={classes.br} />
      </div>
      <Footer />
    </main>
  );
}
