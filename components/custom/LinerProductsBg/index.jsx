import React from "react";
import LinerProducts from "../LinerProducts";
import styles from "./LinerProductsBg.module.scss";
function LinerProductsBg(props) {
  return (
    <div className={`${styles.linearBg} row`}>
      <div className={`${styles.righter} col-3`}>
        <div className={styles.Button}>
          <button>مشاهده همه</button>
        </div>
      </div>
      <div className={`${styles.lefter} col-9`}>
        <LinerProducts />
      </div>
    </div>
  );
}

export default LinerProductsBg;
