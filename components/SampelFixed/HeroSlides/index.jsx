import React from "react";
import styles from "./HeroSlides.module.scss";

function Sm_HeroSlides_Fix(props) {
  return (
    <div className={styles.content}>
      <div className={styles.slider}>
        <div className={styles.right}>
          <img src="/image/sample/main.jpg" alt="" />
        </div>
        <div className={styles.left}>
          <div className={styles.top}>
            <a href="">
              <img src="/image/sample/sample.jpg" alt="" />
            </a>
          </div>
          <div className={styles.bottom}>
            <a href="">
              <img src="/image/sample/sample2.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sm_HeroSlides_Fix;
