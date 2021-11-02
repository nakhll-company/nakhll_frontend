import React from "react";
import Link from "next/link";
import styles from "./Sm_LinerThreeImg.module.scss";
function Sm_LinerThreeImg_Fix(props) {
  return (
    <div>
      <div className={styles.wrapper}>
        <Link href="">
          <a>
            <img src="/image/sample/linearOneImg2.jpg" alt="" />
          </a>
        </Link>
      </div>
      <div className={styles.wrap}>
        <div className={styles.right}>
          <a href="">
            <img src="/image/sample/main.jpg" alt="" />
          </a>
        </div>
        <div className={styles.left}>
          <a href="">
            <img src="/image/sample/main.jpg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sm_LinerThreeImg_Fix;
