import styles from "./intro.module.css";
import {
  amazingViews,
  exquisiteFoods,
  stylishPools,
} from "../../public/images";

export default function Intro() {
  return (
    <section className={styles.intro}>
      <div className="container">
        <p className={styles.introText}>
          Come for our fresh, delicious fare, and stay for views & experiences
          you won’t forget. An intimate hideaway with style, inspired by its
          natural environment.
        </p>
        <div className={styles.imageSection}>
          <div>
            <img src={stylishPools.src} alt="pools" />
            <p>Stylish pools</p>
          </div>
          <div>
            <img src={exquisiteFoods.src} alt="foods" />
            <p>Exquisite foods</p>
          </div>
          <div>
            <img src={amazingViews.src} alt="views" />
            <p>Amazing views</p>
          </div>
        </div>
      </div>
    </section>
  );
}
