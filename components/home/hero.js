import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.wrapper}>
        <h1>
          <span className={styles.headingSpan}>visit</span>
          MONTACQUA RESORT
        </h1>
      </div>
    </div>
  );
}
