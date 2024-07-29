import styles from "./villa.module.css";
import { areaIcon, bathIcon, peopleIcon, roomIcon } from "../../public/images";

export default function Villa({
  img,
  title,
  subtitle,
  info,
  people,
  rooms,
  area,
  bath,
}) {
  return (
    <div className={styles.villa}>
      <div className={styles.image}>
        <img src={img.src} alt={title} />
      </div>
      <div className={styles.details}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.subtitle}>{subtitle}</p>
          <p className={styles.info}>{info}</p>
        </div>
        <div className={styles.specs}>
          <div>
            <img src={peopleIcon.src} alt="people" />
            <p>{people} People</p>
          </div>
          <div>
            <img src={roomIcon.src} alt="room" />
            <p>{rooms} Rooms</p>
          </div>
          <div>
            <img src={areaIcon.src} alt="area" />
            <p>
              {area} m<sup>2</sup>
            </p>
          </div>
          <div>
            <img src={bathIcon.src} alt="bath" />
            <p>{bath} Bathrooms</p>
          </div>
        </div>
        <div className={styles.button}>
          <button>Book Our Villa</button>
        </div>
      </div>
    </div>
  );
}
