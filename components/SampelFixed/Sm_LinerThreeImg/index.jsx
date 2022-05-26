// node libraries
import React from "react";
import Link from "next/link";
// style
import styles from "./Sm_LinerThreeImg.module.scss";

function SmLinerThreeImgFix() {
  return (
    <div>
      <div className={styles.wrapper}>
        <Link href="">
          <a>
            <img src="/image/sample/6_1.jpg" alt="" />
          </a>
        </Link>
      </div>
      <div className={styles.wrap}>
        <div className={styles.right}>
          <a href="">
            <img src="/image/sample/3_1.jpg" alt="" />
          </a>
        </div>
        <div className={styles.left}>
          <a href="">
            <img src="/image/sample/3_1.jpg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SmLinerThreeImgFix;
