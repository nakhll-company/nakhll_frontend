import React from "react";
import styles from "./toturial.module.scss";

function index(props) {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={`${styles.clip1} ${styles.clip}`}> </div>
        <div className={`${styles.clip2} ${styles.clip}`}></div>
        <div className={`${styles.clip3} ${styles.clip}`}></div>
      </div>
    </div>
  );
}

export default index;
