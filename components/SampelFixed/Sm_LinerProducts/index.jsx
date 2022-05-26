// node libraries
import React from "react";
// components
import SmProduct from "../Sm_product";
// style
import styles from "./Sm_LinerProducts.module.scss";

function SmLinerProductsFix() {
  const name = "پرفروش ترین";
  const subTitle = "زیرعنوان";

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <div className={styles.name}>
          <span className={styles.mainTitle}>{name}</span>
          <span className={styles.subTitle}>{subTitle}</span>
        </div>
        <div className={styles.seeAll}>
          <div className={styles.wrapBtn}>
            <span>مشاهده همه</span>
          </div>
        </div>
      </div>
      <div className={styles.wrap}>
        <SmProduct />
        <SmProduct />
        <SmProduct />
      </div>
    </div>
  );
}

export default SmLinerProductsFix;
