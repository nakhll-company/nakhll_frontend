// node libraries
import React from "react";
import Link from "next/link";
import Image from "next/image";
// style
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
              <Image
                src={dataLinerTwoValue[0].image}
                alt=""
                width="100%"
                height="100%"
              />
            </a>
          </Link>
        </div>
        <div className={styles.left}>
          <Link href={dataLinerTwoValue[0].url}>
            <a>
              <Image
                src={dataLinerTwoValue[1].image}
                alt=""
                width="100%"
                height="100%"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LinerTwoImgSm;
