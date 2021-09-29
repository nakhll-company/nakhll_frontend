import React from "react";
import LinerProducts from "../LinerProducts";
import styles from "./LinerProductsBg.module.scss";
function LinerProductsBg({ products, xl = 2, md = 6, lg = 6 ,num }) {
  return (
    <div className={`${styles.linearBg} row`}>
      <div className={`${styles.righter} col-3`}>
        <div className={styles.Button}>
          <button>مشاهده همه</button>
        </div>
      </div>
      <div className={`${styles.lefter} col-9`}>
        <LinerProducts num={num} xl={xl} md={md} lg={lg} products={products} />
      </div>
    </div>
  );
}

export default LinerProductsBg;
