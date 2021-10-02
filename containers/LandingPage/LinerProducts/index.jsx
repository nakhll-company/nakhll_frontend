import React from "react";
import ProductCard from "../../../components/ProductCart/ProductCard";

import styles from "./LinerProducts.module.scss";

function LinerProducts({
  num = 6,
  title,
  subTitle,
  products = [],
  xl = 2,
  md = 4,
  lg = 3,
  sm = 6,
}) {
  return (
    <div className={`container ${styles.lineProduct}`}>
      {title && (
        <div className={styles.header}>
          <div className={styles.title}>
            <h1>{title}</h1>
            <h5>{subTitle}</h5>
          </div>
          <div className={styles.Button}>
            <button>مشاهده همه</button>
          </div>
        </div>
      )}
      <div className={`${styles.products} row`}>
        {products.slice(0, num).map((product) => (
          <ProductCard
            xl={xl}
            md={md}
            lg={lg}
            sm={sm}
            key={1}
            padding={1}
            product={{
              id: product.id,
              imageUrl: product.image_thumbnail_url,
              url: `/productDetail/${product.slug}/`,
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
