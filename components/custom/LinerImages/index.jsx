import React from "react";
import styles from "./LinerImages.module.scss";

function LinearImages(props) {
  return (
    <div className={`${styles.linearImages} container`}>
      <div className="row ">
        <div className={`col-6 ${styles.righter}`}>
          <img src="/image/slide/slidB.jpg" alt="" />
        </div>
        <div className={`col-6 ${styles.lefter}`}>
          <img src="/image/slide/slidLeft.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default LinearImages;
