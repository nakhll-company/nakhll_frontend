// node libraries
import React from "react";
import Image from "next/image";
// style
import styles from "./Sm_LinerTwoImg.module.scss";

function Sm_LinerTwoImg_Fix() {
  return (
    <div className={styles.wrap}>
      <div className={styles.right}>
        <a href="">
          <Image src="/image/sample/3_1.jpg" alt="" />
        </a>
      </div>
      <div className={styles.left}>
        <a href="">
          <Image src="/image/sample/3_1.jpg" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Sm_LinerTwoImg_Fix;
