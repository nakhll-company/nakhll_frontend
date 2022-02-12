// node libraries
import React from "react";
import Image from "next/image";
// style
import styles from "./LinerImages.module.scss";

function LinearImages() {
  return (
    <div className={`${styles.linearImages} container`}>
      <div className="row ">
        <div className={`col-12 col-md-6 ${styles.righter}`}>
          <Image src="/image/slide/slidB.jpg" alt="" layout="fill" />
        </div>
        <div className={`col-12 col-md-6  ${styles.lefter}`}>
          <Image src="/image/slide/slidLeft.jpg" alt="" layout="fill" />
        </div>
      </div>
    </div>
  );
}

export default LinearImages;
