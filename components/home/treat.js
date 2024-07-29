import Link from "next/link";
import styles from "./treat.module.css";
import { treatSmall, treatLarge } from "../../public/images";

export default function TreatSection() {
  return (
    <section className={styles.treat}>
      <div className={styles.info}>
        <h2>Treat yourself to everyday exceptional.</h2>
        <p>
          Enjoy The Montacqua Villas, which is open all day, as well as Bar
          Brasserie Montbrie, where quality, workmanship, and service are
          prioritized. In the quiet setting of Michelin-starred Restaurant
          Vinkeles, located in an 18th century bakery, savor sophisticated
          delicacies.
        </p>
        <Link href="/villas">Book Our Villa</Link>
      </div>
      <div className={styles.image}>
        <img className={styles.small} src={treatSmall.src} alt="plant" />
        <img className={styles.large} src={treatLarge.src} alt="building" />
      </div>
    </section>
  );
}
