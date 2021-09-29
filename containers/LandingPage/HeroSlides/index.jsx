import React from "react";
import styles from "./HeroSlides.module.scss";
function HeroSlides(props) {
  return (
    <div className="container  ">
      <div className={`row ${styles.slide}`}>
        <div className={`col-md-8 ${styles.righter}`}>
          <img src="/image/slide/slid1.jpg" alt="" />
        </div>
        <div className={`col-md-4  ${styles.lefter}  d-none d-md-block`}>
          <img src="/image/slide/slideLeft2.jpg" alt="" />
          <img src="/image/slide/slidLeft.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeroSlides;
