import styles from "./about.module.css";
import { jacuzzi, restaurant } from "../../public/images";

export default function About() {
  return (
    <section className={styles.about}>
      <div className="container">
        <h2>Treat yourself to everyday exceptional.</h2>
        <p>
          Enjoy The Montacqua Villas, which is open all day, as well as Bar
          Brasserie Montbrie, where quality, workmanship, and service are
          prioritized. In the quiet setting of Michelin-starred Restaurant
          Vinkeles, located in an 18th century bakery, savor sophisticated
          delicacies.
        </p>
        <div className={styles.imageContainer}>
          <div>
            <img src={jacuzzi.src} alt="jacuzzi" />
            <h3>Four Pools, One Jacuzzi & Two Saunas</h3>
          </div>
          <div>
            <img src={restaurant.src} alt="restaurant" />
            <h3>A 3 Michelin Stars Restaurant & One Bar</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
