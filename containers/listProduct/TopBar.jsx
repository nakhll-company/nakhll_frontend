import React, { useState, useContext } from "react";
import ContextListProductPage from "./Context/context";
import { productForList } from "../../public/dataForProduct/data";

export const TopBar = () => {
  const [witchItem, setWitchItem] = useState("1");
  const {
    sortProductAsc,
    sortProductDes,
    sortBestsellingProduct,
    listProducts,
  } = useContext(ContextListProductPage);
  return (
    <>
      <div>
        <div className="items-slider product-filters mb-4">
          <div className="product-filters-item--active d-lg-none product-filters-item ev-more-filters">
            <i className="bi bi-filter"></i>{" "}
            <span>
              فیلترها
              <span>(1)</span>
            </span>
          </div>{" "}
          <div className="search-sorts mb-0 ">
            <div className="d-flex align-items-center">
              <div className="title">
                <i className="bi bi-sort"></i>{" "}
                <span className="d-none d-lg-block"> مرتب‌سازی براساس: </span>
              </div>{" "}
              <ul>
                <li
                  className={`sort-item  ${
                    "1" === witchItem ? " active" : ""
                  } `}
                >
                  <a id={"1"} onClick={() => setWitchItem("1")}>
                    مرتبط‌ترین
                  </a>
                </li>
                <li
                  className={`sort-item  ${
                    "2" === witchItem ? " active" : ""
                  } `}
                >
                  <a
                    onClick={() => {
                      sortProductAsc();
                      setWitchItem("2");
                    }}
                  >
                    ارزان‌تر
                  </a>
                </li>
                <li
                  id={"3"}
                  className={`sort-item  ${
                    "3" === witchItem ? " active" : ""
                  } `}
                >
                  <a
                    onClick={() => {
                      sortProductDes();
                      setWitchItem("3");
                    }}
                  >
                    گران‌تر
                  </a>
                </li>
                <li
                  className={`sort-item  ${
                    "4" === witchItem ? " active" : ""
                  } `}
                >
                  <a
                    onClick={() => {
                      sortBestsellingProduct();
                      setWitchItem("4");
                    }}
                  >
                    پرفروش‌ها
                  </a>
                </li>
                <li
                  className={`sort-item  ${
                    "5" === witchItem ? " active" : ""
                  } `}
                >
                  <a
                    onClick={() => {
                      setWitchItem("5");
                    }}
                  >
                    تازه‌ها
                  </a>
                </li>
              </ul>
            </div>
            <span className="d-none d-lg-block " style={{ marginLeft: "20px" }}>
              {" "}
              تعداد کالا:
              <span className="Blazing" style={{ marginRight: "10px" }}>
                {" "}
                {listProducts.length}
              </span>
            </span>
          </div>{" "}
          <div className="v-portal" style={{ display: "none" }}></div>{" "}
          <div className="v-portal" style={{ display: "none" }}></div>
        </div>{" "}
      </div>{" "}
    </>
  );
};
