import Villa from "./villa";
import styles from "./villas.module.css";
import { alpineVilla, lacVilla, provenceVilla } from "../../public/images";

const villaArr = [
  {
    id: 1,
    img: provenceVilla,
    title: "Baux-de-Provence Villa",
    subtitle: "The Provençal Mas",
    info: "Enjoy the quiet comfort of our beautiful arty Mas in Provence, built into the rock in the middle of the Alpilles.",
    people: 12,
    rooms: 6,
    area: 680,
    bath: 6,
  },
  {
    id: 2,
    img: alpineVilla,
    title: "Courchevel Alpine Villa",
    subtitle: "The Alpine Chalet",
    info: "Enjoy the authentic luxury of an incredible chalet, hidden away in Les 3 Vallées, the largest ski area in the world.",
    people: 16,
    rooms: 8,
    area: 760,
    bath: 8,
  },
  {
    id: 3,
    img: lacVilla,
    title: "Les Bords du Lac Villa",
    subtitle: "The Ultimate Ocean Villa",
    info: "Enjoy a boldly luxurious experience in a beautiful property in Les Landes, very close to the Ocean.",
    people: 10,
    rooms: 5,
    area: 580,
    bath: 5,
  },
];

export default function Villas() {
  return (
    <section className={styles.villas}>
      <div className={styles.container}>
        <h2>Our Villas</h2>
        <p className={styles.para}>
          See here our villas and what you need to know about them.
        </p>
      </div>
      {villaArr.map((villa) => (
        <Villa key={villa.id} {...villa} />
      ))}
    </section>
  );
}
