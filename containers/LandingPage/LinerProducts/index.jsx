import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCart/ProductCard";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

import styles from "./LinerProducts.module.scss";

function LinerProducts({
  num = 6,
  title,
  subTitle,
  nextApi,
  url,

  xl = 2,
  md = 4,
  lg = 3,
  sm = 6,
}) {
  const [productsListForLinear, setProductsListForLinear] = useState([]);
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
        setProductsListForLinear(response.data);
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
            <button>
              <a href={`/product/search?ap=${url}`}>مشاهده همه</a>
            </button>
          </div>
        </div>
      )}
      <div className={`${styles.products} row`}>
        {productsListForLinear.length > 0 &&
          productsListForLinear.slice(0, num).map((product, index) => (
            <ProductCard
              xl={xl}
              md={md}
              lg={lg}
              sm={sm}
              key={index}
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
