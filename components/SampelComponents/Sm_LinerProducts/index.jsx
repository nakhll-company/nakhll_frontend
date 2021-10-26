import React from "react";
import styles from "./Sm_LinerProducts.module.scss";

import Sm_product from "../Sm_product";
function Sm_LinerProducts(props) {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <div className={styles.name}>
          <span className={styles.mainTitle}>پرفروش ترین</span>

          <span className={styles.subTitle}>منتخب</span>
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
        <Sm_product />
        <Sm_product />
        <Sm_product />
      </div>
    </div>
  );
}

export default Sm_LinerProducts;
