// node libraries
import React from "react";
// components
import Sm_product from "../Sm_product";
// style
import styles from "./Sm_LinerProducts.module.scss";

function Sm_LinerProducts_Fix() {

  const name = "پرفروش ترین";
  const subTitle = "زیرعنوان";

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <div className={styles.name}>
          <span
            className={styles.mainTitle}
          >
            {name}
          </span>
          <span
            className={styles.subTitle}
          >
            {subTitle}
          </span>
        </div>
        <div className={styles.seeAll}>
          <div className={styles.wrapBtn}>
            <span>مشاهده همه</span>
          </div>
        </div>
      </div>
      <div className={styles.wrap}>
        <Sm_product />
        <Sm_product />
        <Sm_product />
      </div>
    </div>
  );
}

export default Sm_LinerProducts_Fix;
