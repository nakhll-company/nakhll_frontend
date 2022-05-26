// node libraries
import React from "react";
// style
import styles from "./HeroSlides.module.scss";

function SmHeroSlidesFix() {
  return (
    <div className={styles.content}>
      <div className={styles.slider}>
        <div className={styles.right}>
          <img src="/image/sample/2_1.jpg" alt="" />
        </div>
        <div className={styles.left}>
          <div className={styles.top}>
            <a href="">
              <img src="/image/sample/2_1_M.jpg" alt="" />
            </a>
          </div>
          <div className={styles.bottom}>
            <a href="">
              <img src="/image/sample/2_1_M.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmHeroSlidesFix;
