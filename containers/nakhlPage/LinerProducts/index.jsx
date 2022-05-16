// node libraries
import React, { Fragment } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
// components
import ProductCard from "../../../components/ProductCart/ProductCard";
// style
import styles from "./LinerProducts.module.scss";

function NakhlLinerProducts({
  noScroll = false,
  color,
  num = 6,
  title,
  subTitle,
  dataLinerProducts,
  colorTitle = "#000",
  url = "",
  xl = 2,
  md = 4,
  lg = 3,
  sm = 6,
  xs = 5,
}) {
  if (dataLinerProducts && dataLinerProducts.results) {
    dataLinerProducts = dataLinerProducts.results;
  }
  const userData = useSelector((state) => state.User.userInfo);

  return (
    <Fragment key={Math.random() + 4}>
      {/* for mobile */}
      <div
        style={{ backgroundColor: `${color}` }}
        className={`container d-md-none ${styles.lineProduct}`}
      >
        {title && (
          <div className={styles.header}>
            <div className={styles.title}>
              <h3 style={{ color: `${colorTitle}` }}>{title}</h3>

              {subTitle !== null && <h5>{subTitle}</h5>}
            </div>
            <div className={styles.Button}>
              <button>
                <Link href={url}>
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
          {dataLinerProducts &&
            dataLinerProducts.length > 0 &&
            dataLinerProducts
              .slice(0, num)
              .map((product, index) => (
                <ProductCard
                  userData={userData}
                  xl={xl}
                  md={md}
                  lg={lg}
                  sm={sm}
                  xs={xs}
                  key={index}
                  padding={1}
                  dataProduct={product}
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
              <h3 style={{ color: `${colorTitle}` }}>{title}</h3>
              {subTitle !== null && <h5>{subTitle}</h5>}
            </div>
            <div className={styles.Button}>
              <button>
                <Link href={url}>
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
          {dataLinerProducts &&
            dataLinerProducts.length > 0 &&
            dataLinerProducts
              .slice(0, num)
              .map((oneProduct, index) => (
                <ProductCard
                  xl={xl}
                  md={md}
                  lg={lg}
                  sm={sm}
                  xs={xs}
                  key={index}
                  padding={1}
                  dataProduct={oneProduct}
                />
              ))}
        </div>
      </div>
    </Fragment>
  );
}

export default NakhlLinerProducts;
