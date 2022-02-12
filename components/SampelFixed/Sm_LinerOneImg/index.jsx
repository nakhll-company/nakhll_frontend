// node libraries
import React from "react";
import Link from "next/link";
import Image from "next/image";
// style
import styles from "./Sm_LinerOneImg.module.scss";

function Sm_LinerOneImg_Fix() {
  return (
    <div className={styles.wrapper}>
      <Link href="">
        <a>
          <Image src="/image/sample/6_1.jpg" alt="" layout="fill" />
        </a>
      </Link>
    </div>
  );
}

export default Sm_LinerOneImg_Fix;
