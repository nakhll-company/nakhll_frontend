import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCart/ProductCard";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

import styles from "./LinerProducts.module.scss";

function LinerProducts({
  num = 6,
  title,
  subTitle,
  nextApi,

  xl = 2,
  md = 4,
  lg = 3,
  sm = 6,
}) {
  const [products, setProducts] = useState([]);
  const _Call_Products = async () => {
    try {
      let response = await ApiRegister().apiRequest(
        null,
        "get",
        nextApi,
        true,
        {}
      );
      if (response.status === 200) {
        console.log("milad :>> ", response.data);
        setProducts(response.data);
      }
    } catch (e) {
      console.log("rrrr :>> ", e);
    }
  };

  useEffect(() => {
    _Call_Products();
  }, []);

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
        {/* {products.length > 0 && products.slice(0, num).map((product) => (
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
        ))} */}
      </div>
    </div>
  );
}

export default LinerProducts;

[
  {
    "component_type": 3,
    "data": "https://nakhll.com/api/v1/landing/sliders/?search=3",
    "title": null,
    "subtitle": null,
    "url": null,
    "background_color": null,
    "image": null,
    "publish_status": "pub",
    "order": 0
  },
  {
    "component_type": 1,
    "data": "https://nakhll.com/api/v1/landing/sliders/?search=2",
    "title": null,
    "subtitle": null,
    "url": null,
    "background_color": null,
    "image": null,
    "publish_status": "pub",
    "order": 1
  },
  {
    "component_type": 2,
    "data": "https://nakhll.com/api/v1/landing/sliders/?search=3",
    "title": null,
    "subtitle": null,
    "url": null,
    "background_color": null,
    "image": null,
    "publish_status": "pub",
    "order": 1
  },
  {
    "component_type": 6,
    "data": "https://nakhll.com/api/v1/landing/most-discount-prec-products/",
    "title": "پر تخفیف ترین ها",
    "subtitle": "براساس محصولات با بیشترین تخفیف",
    "url": "https://nakhll.com/api/v1/landing/most-discount-prec-products/",
    "background_color": null,
    "image": null,
    "publish_status": "pub",
    "order": 2
  }
]