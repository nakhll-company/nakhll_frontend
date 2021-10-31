import React from "react";
import styles from "./Sm_LinerFourImg.module.scss";

function Sm_LinerFourImg(props) {
  return (
    <div className={styles.wrap}>
      <img src="/image/sample/main.jpg" alt="" />

      <img src="/image/sample/linearOneImg2.jpg" alt="" />

      <img src="/image/sample/sample.jpg" alt="" />

      <img src="/image/sample/sample2.jpg" alt="" />
    </div>
  );
}

export default Sm_LinerFourImg;
