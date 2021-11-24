import React from "react";
import Link from "next/link";
import ProductCard from "../../../components/ProductCart/ProductCard";
import styles from "./LinerProducts.module.scss";

function LinerProducts({
  noScroll = false,
  color,
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
  if (dataLinerProducts.results) {
    dataLinerProducts = dataLinerProducts.results;
  }

  return (
    <>
      {/* for mobile */}
      <div
        style={{ backgroundColor: `${color}` }}
        className={`container d-md-none ${styles.lineProduct}`}
      >
        {title && (
          <div className={styles.header}>
            <div className={styles.title}>
              <h1>{title}</h1>
              <h5>{subTitle}</h5>
            </div>
            <div className={styles.Button}>
              <button>
                <Link
                  href={`${
                    url.includes("search=") ? `${url}` : `/search?ap=${url}`
                  }`}
                >
                  <a>مشاهده همه</a>
                </Link>
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
                  url: `/shop/${product.shop.slug}/product/${product.slug}/`,
                  title: product.title,
                  chamberTitle: product.shop.title,
                  chamberUrl: `/shop/${product.shop.slug} `,
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

      {/* for Descktop */}

      <div
        style={{ backgroundColor: `${color}` }}
        className={` d-none d-md-block ${styles.lineProduct}`}
      >
        {title && (
          <div className={`${styles.header} px-5 pt-3`}>
            <div className={styles.title}>
              <h1>{title}</h1>
              <h5>{subTitle}</h5>
            </div>
            <div className={styles.Button}>
              <button>
                <Link
                  href={`${url.includes("search=") || url.includes("q=")
                      ? `${url}`
                      : `/search?ap=${url}`
                  }`}
                >
                  <a>مشاهده همه</a>
                </Link>
              </button>
            </div>
          </div>
        )}
        <div
          style={{ overflowX: noScroll ? "unset" : "auto" }}
          className={`${styles.products} row px-5`}
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
                  url: `/shop/${product.shop.slug}/product/${product.slug}/`,
                  title: product.title,
                  chamberTitle: product.shop.title,
                  chamberUrl: `/shop/${product.shop.slug} `,
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
    </>
  );
}

export default LinerProducts;
