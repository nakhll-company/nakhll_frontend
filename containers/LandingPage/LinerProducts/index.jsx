// node libraries
import React, { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
// components
import ProductCard from "../../../components/productCart/ProductCard";
// style
import styles from "./LinerProducts.module.scss";
import { http } from "../../../services/callApi/api";

function LinerProducts({
  noScroll = false,
  color,
  num = 6,
  title,
  subTitle,
  // dataLinerProducts,
  url,
  xl = 2,
  md = 4,
  lg = 3,
  sm = 6,
  xs = 5,
}) {
  const [dataLinerProducts, setDataLinerProducts] = useState([])

  useEffect(async () => {
    const Queries = { page_size: "6" };
    if (url !== "") {

      if (url.split("?")[1]) {
        const partTwoUrl = url.split("?")[1].split("&");
        const arrayString = partTwoUrl.map((el) => el.split("="));

        arrayString.map((el) => {
          if (el[0] == "q") {
            Queries["search"] = decodeURI(el[1]);
          } else {
            Queries[el[0]] = decodeURI(el[1]);
          }
        });
      }

      if (Object.keys(Queries).length > 1) {
        const response = await http.get("https://nakhll.com/api/v1/products/", {
          params: Queries,
        });

        if (response.status == 200) {
          setDataLinerProducts(response.data.results);

        }
      }
    }
  }, []);
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
              <h3>{title}</h3>

              {subTitle !== null && <h5>{subTitle}</h5>}
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
              <h3>{title}</h3>
              {subTitle !== null && <h5>{subTitle}</h5>}
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

export default LinerProducts;
