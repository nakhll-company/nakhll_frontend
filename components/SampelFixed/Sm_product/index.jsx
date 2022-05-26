// node libraries
import React from "react";
import Image from "next/image";

// style
import styles from "./Sm_product.module.scss";
import diviedNumber from "../../../utils/diviedNumber";

function SmProductFix() {
  return (
    <>
      <div className={styles.product}>
        <div className={styles.product_img}>
          <Image src="/image/sample/sample.jpg" alt="" layout="fill" />
        </div>
        <div className={styles.product_name}>
          <span>نام محصول</span>
        </div>
        <div className={styles.product_detail}>
          <span> استان</span>
          <span>
            ‍<i className="fa fa-angle-left px-1"></i>
          </span>
          <span> حجره</span>
        </div>
        <div className={styles.product_price}>
          <div className={styles.plus}>
            <span>
              <i className="fas fa-plus"></i>
            </span>
          </div>
          <div className={styles.price}>{diviedNumber(25000)}</div>
        </div>
      </div>
    </>
  );
}

export default SmProductFix;
