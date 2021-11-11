import React from "react";

import Link from "next/link";

import styles from "./LinerTwoImgSm.module.scss";
// type=========3
// aspect======3

function LinerTwoImgSm({ dataLinerTwoValue }) {
  return (
    <div className="container">
      <div className={styles.wrap}>
        <div className={styles.right}>
          <Link href={dataLinerTwoValue[0].url}>
            <a>
              <img src={dataLinerTwoValue[0].image} alt="" />
            </a>
          </Link>
        </div>
        <div className={styles.left}>
          <Link href={dataLinerTwoValue[0].url}>
            <a>
              <img src={dataLinerTwoValue[1].image} alt="" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LinerTwoImgSm;
