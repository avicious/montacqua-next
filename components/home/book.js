import Link from "next/link";
import styles from "./book.module.css";

export default function Book() {
  return (
    <section className={styles.book}>
      <div className="container">
        <h2>
          Enjoy the peace & seclusion of our exclusive spa resort location.
        </h2>
        <p>
          Indulge in one of our special offers, which range from a supper at our
          Michelin-starred Restaurant Vinkeles to the opportunity to learn about
          the benefits of organizing the perfect romantic weekend.
        </p>
        <Link href="/villas">Book Our Villa</Link>
      </div>
    </section>
  );
}
