// node libraries
import React from "react";
import Image from "next/image";
// style
import styles from "./Sm_LinerFourImg.module.scss";

function Sm_LinerFourImg_Fix() {
  return (
    <div className={styles.wrap}>
      <Image src="/image/sample/4_3.jpg" alt="" layout="fill" />

      <Image src="/image/sample/4_3.jpg" alt="" layout="fill" />

      <Image src="/image/sample/4_3.jpg" alt="" layout="fill" />

      <Image src="/image/sample/4_3.jpg" alt="" layout="fill" />
    </div>
  );
}

export default Sm_LinerFourImg_Fix;
