import React, { useState, useContext } from "react";
import ContextListProductPage from "./Context/context";
import { productForList } from "../../public/dataForProduct/data";

export const TopBar = ({ handel_filterModal }) => {
  const [witchItem, setWitchItem] = useState("1");
  const { _handel_filters, listWithFilter, totalcount } = useContext(
    ContextListProductPage
  );
  return (
    <>
      <div>
        <div className="items-slider product-filters mb-4">
          <div
            style={{
              cursor: "pointer",
              backgroundColor: "#fff",
              padding: "5px",
            }}
            className="product-filters-item--active d-lg-none product-filters-item ev-more-filters"
          >
            <i className="fas fa-filter"></i>{" "}
            <button className="btn" onClick={handel_filterModal}>
              <span>
                فیلترها
                <span></span>
              </span>
            </button>
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
                  <a
                    id={"1"}
                    onClick={() => {
                      _handel_filters({ ordering: "" });
                      setWitchItem("1");
                    }}
                  >
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
                      _handel_filters({ ordering: "Price" });

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
                      _handel_filters({ ordering: "-Price" });
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
                      _handel_filters({ ordering: "-DiscountPercentage" });

                      setWitchItem("4");
                    }}
                  >
                    بیشترین تخفیف
                  </a>
                </li>
                <li
                  className={`sort-item  ${
                    "5" === witchItem ? " active" : ""
                  } `}
                >
                  <a
                    onClick={() => {
                      _handel_filters({ ordering: "-DateCreate" });
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
                {totalcount}
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
