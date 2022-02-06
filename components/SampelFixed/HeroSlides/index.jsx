// node libraries
import React from "react";
import Image from "next/image";
// style
import styles from "./HeroSlides.module.scss";

function Sm_HeroSlides_Fix() {
  return (
    <div className={styles.content}>
      <div className={styles.slider}>
        <div className={styles.right}>
          <Image src="/image/sample/2_1.jpg" alt="" />
        </div>
        <div className={styles.left}>
          <div className={styles.top}>
            <a href="">
              <Image src="/image/sample/2_1_M.jpg" alt="" />
            </a>
          </div>
          <div className={styles.bottom}>
            <a href="">
              <Image src="/image/sample/2_1_M.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sm_HeroSlides_Fix;
