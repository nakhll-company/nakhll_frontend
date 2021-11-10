import React from "react";
import styles from "./Sm_product.module.scss";
import Assistent from "zaravand-assistent-number";

function Sm_product({ data }) {
  const _asist = new Assistent();
  return (
    <>
      <div className={styles.product}>
        <div className={styles.product_img}>
          <img src={data.image_thumbnail_url} alt="" />
        </div>
        <div className={styles.product_name}>
          <span>{data.title}</span>
        </div>
        <div className={styles.product_detail}>
          <span>{data.shop.state}</span>
          <span>
            ‍<i className="fa fa-angle-left px-1"></i>
          </span>
          <span>{data.shop.title}</span>
        </div>
        <div className={styles.product_price}>
          <div className={styles.plus}>
            <span>
              <i className="fas fa-plus"></i>
            </span>
          </div>
          <div className={styles.price}>{_asist.PSeparator(data.price)}</div>
        </div>
      </div>
    </>
  );
}

export default Sm_product;
