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
                    url.includes("search=") || url.includes("q=")
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
                  id: product.ID,
                  imageUrl: product.Image_medium_url,
                  url: `/shop/${product.FK_Shop.slug}/product/${product.Slug}/`,
                  title: product.Title,
                  chamberTitle: product.FK_Shop ? product.FK_Shop.title : "",
                  chamberUrl: product.FK_Shop
                    ? `/shop/${product.FK_Shop.slug} `
                    : "",
                  discount: product.discount,
                  price: product.Price / 10,
                  discountNumber: product.OldPrice / 10,
                  city: product.FK_Shop && product.FK_Shop.state,
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
                  href={`${
                    url.includes("search=") || url.includes("q=")
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
            dataLinerProducts.slice(0, num).map((oneProduct, index) => (
              <ProductCard
                xl={xl}
                md={md}
                lg={lg}
                sm={sm}
                xs={xs}
                key={index}
                padding={1}
                product={{
                  id: oneProduct.ID,
                  imageUrl: oneProduct.Image_medium_url,
                  url: `/shop/${oneProduct.FK_Shop.slug}/product/${oneProduct.Slug}/`,
                  title: oneProduct.Title,
                  chamberTitle: oneProduct.FK_Shop
                    ? oneProduct.FK_Shop.title
                    : "",
                  chamberUrl: oneProduct.FK_Shop
                    ? `/shop/${oneProduct.FK_Shop.slug} `
                    : "",

                  discount: oneProduct.discount,
                  price: oneProduct.Price / 10,
                  discountNumber: oneProduct.OldPrice / 10,
                  city: oneProduct.FK_Shop && oneProduct.FK_Shop.state,
                  is_advertisement: oneProduct.is_advertisement,
                }}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default LinerProducts;
