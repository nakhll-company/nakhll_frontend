import React from "react";
import Image from "next/image";
import styles from "./Sm_product.module.scss";

import diviedNumber from "../../../utils/diviedNumber";

function SmProduct({ data }) {
  console.log("data :>> ", data);
  return (
    <>
      <div className={styles.product}>
        <div className={styles.product_img}>
          <Image
            layout="responsive"
            width={100}
            height={100}
            src={data.Image_medium_url}
            alt=""
          />
        </div>
        <div className={styles.product_name}>
          <span>{data.Title}</span>
        </div>
        <div className={styles.product_detail}>
          <span>{data.FK_Shop.state.name}</span>
          <span>
            ‍<i className="fa fa-angle-left px-1"></i>
          </span>
          <span>{data.FK_Shop.title}</span>
        </div>
        <div className={styles.product_price}>
          <div className={styles.plus}>
            <span>
              <i className="fas fa-plus"></i>
            </span>
          </div>
          <div className={styles.price}>{diviedNumber(data.Price)}</div>
        </div>
      </div>
    </>
  );
}

export default SmProduct;
