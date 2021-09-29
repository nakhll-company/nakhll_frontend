import React from "react";
import ProductCard from "../../../components/ProductCart/ProductCard";

import styles from "./LinerProducts.module.scss";

function LinerProducts({ title, subTitle }) {
  let product = {
    imageUrl: "/image/faile.webp",
    url: "/hamzeh",
    title: "نبات گیاهی متبرک مشهد با نی چوبی 1 کیلویی برکت هشتم",
    chamberTitle: "گالری سنگ و نقره شاپرک",
    chamberUrl: "/azizzadeh",
    rate: 10,
    commentCount: 102,
    discount: 25,
    price: 107000,
    discountNumber: 190000,
    // sales: 52,
    city: "کرمان",
  };
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
        {[1, 2, 3, 4, 5, 6].map((e) => (
          <ProductCard
            col={2}
            key={e}
            padding={1}
            product={{
              imageUrl: product.imageUrl,
              url: "",
              title: product.title,
              chamberTitle: product.chamberTitle,
              chamberUrl: "#",
              discount: product.discount,
              price: product.price / 10,
              discountNumber: product.old_price / 10,
              city: product.city,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default LinerProducts;
