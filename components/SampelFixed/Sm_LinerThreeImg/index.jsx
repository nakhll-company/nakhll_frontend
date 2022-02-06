// node libraries
import React from "react";
import Link from "next/link";
import Image from "next/image";
// style
import styles from "./Sm_LinerThreeImg.module.scss";

function Sm_LinerThreeImg_Fix() {
  return (
    <div>
      <div className={styles.wrapper}>
        <Link href="">
          <a>
            <Image src="/image/sample/6_1.jpg" alt="" />
          </a>
        </Link>
      </div>
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
    </div>
  );
}

export default Sm_LinerThreeImg_Fix;
