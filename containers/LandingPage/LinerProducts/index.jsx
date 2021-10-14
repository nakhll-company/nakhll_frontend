import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCart/ProductCard";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

import styles from "./LinerProducts.module.scss";

function LinerProducts({
  noScroll = false,
  num = 6,
  title,
  subTitle,
  dataLinerProducts,
  url,

  xl = 2,
  md = 4,
  lg = 3,
  sm = 6,
  xs = 5,
}) {
  return (
    <div className={`container ${styles.lineProduct}`}>
      {title && (
        <div className={styles.header}>
          <div className={styles.title}>
            <h1>{title}</h1>
            {/* <h5>{subTitle}</h5> */}
          </div>
          <div className={styles.Button}>
            <button>
              <a href={`/product/search?ap=${url}`}>مشاهده همه</a>
            </button>
          </div>
        </div>
      )}
      <div
        style={{ overflowX: noScroll ? "unset" : "auto" }}
        className={`${styles.products} row`}
      >
        {dataLinerProducts.length > 0 &&
          dataLinerProducts.slice(0, num).map((product, index) => (
            <ProductCard
              xl={xl}
              md={md}
              lg={lg}
              sm={sm}
              xs={xs}
              key={index}
              padding={1}
              product={{
                id: product.id,
                imageUrl: product.image_thumbnail_url,
                url: `/product/${product.slug}/`,
                title: product.title,
                chamberTitle: product.shop.title,
                chamberUrl: `/hojreh/${product.shop.slug} `,
                discount: product.discount,
                price: product.price / 10,
                discountNumber: product.old_price / 10,
                city: product.shop.state,
                is_advertisement: product.is_advertisement,
              }}
            />
          ))}
      </div>
    </div>
  );
}

export default LinerProducts;
