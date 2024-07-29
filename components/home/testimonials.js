import styles from "./testimonials.module.css";
import { quote, author } from "../../public/images";

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div>
        <div className={styles.quote}>
          <img src={quote.src} alt="quote" />
        </div>
        <h2 className={styles.title}>
          I’ve enjoyed our time at Montacqua Villas more than any other place
          before...
        </h2>
        <p className={styles.comment}>
          The delight and learning that comes from experiencing a new place and
          culture is unsurpassed; nevertheless, it must also be a force for good
          in the communities and countries we visit. With our worldwide network
          of friends, we are united in our opinion that environmentally
          sustainable tourism is the way to go.
        </p>
        <img
          className={styles.authorImg}
          src={author.src}
          alt="Flavius Mosby"
        />
        <p className={styles.author}>Flavius Mosby</p>
        <p className={styles.about}>Happy Customer of Montacqua</p>
      </div>
    </section>
  );
}
