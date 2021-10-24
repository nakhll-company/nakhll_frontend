import React from "react";
import styles from "./InputPlace.module.scss";

function Sm_InputPlace(props) {
  return (
    <>
      <div className={styles.box_outer}>
        <div className={styles.main_box}>
          <div className={`${styles.bar} ${styles.top}`}></div>
          <div
            className={`${styles.bar} ${styles.right} ${styles.delay}`}
          ></div>
          <div
            className={`${styles.bar} ${styles.bottom} ${styles.delay}`}
          ></div>
          <div className={`${styles.bar} ${styles.left}`}></div>
        </div>
      </div>
    </>
  );
}

export default Sm_InputPlace;
