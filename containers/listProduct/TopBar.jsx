import React, { useState, useContext } from "react";
import ContextListProductPage from "./Context/context";
import { productForList } from "../../public/dataForProduct/data";

export const TopBar = ({
  handel_filterModal,
  setWhichOrdering,
  handel_OrderingModal,
  whichOrdering,
}) => {
  const [witchItem, setWitchItem] = useState("1");
  const { totalcount } = useContext(ContextListProductPage);
  return (
    <>
      <div style={{marginTop:"16px"}}>
        <div className="items-slider product-filters mb-4">
          <div
            style={{
              cursor: "pointer",
              backgroundColor: "#fff",
              padding: "5px",
            }}
            className=" d-lg-none  "
          >
            <i className="fas fa-filter"></i>{" "}
            <button className="btn" onClick={handel_filterModal}>
              <span style={{ marginLeft: "10px" }}>
                فیلترها
                <span></span>
              </span>
            </button>
            <i className="fas fa-sort-amount-down-alt"></i>{" "}
            <button className="btn" onClick={handel_OrderingModal}>
              <span>
                مرتب سازی:
                <span
                  style={{
                    fontSize: "12px",
                    color: "red",
                    marginRight: "5px",
                  }}
                >
                  {whichOrdering == "" && "مرتبط‌ترین"}
                  {whichOrdering == "Price" && "ارزانتر"}
                  {whichOrdering == "-Price" && "گرانتر"}

                  {whichOrdering == "DiscountPrecentage" && "بیشترین تخفیف"}
                  {whichOrdering == "-DateCreate" && "تازه ها"}
                </span>
                <span></span>
              </span>
            </button>
          </div>{" "}
          <div className="search-sorts mb-0  productPage_top_filter">
            <div className="d-flex align-items-center">
              <div
                className="title"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "rgb(138 137 137)",
                }}
              >
                <i
                  className="fas fa-sort-amount-down-alt"
                  style={{ fontSize: "18px" }}
                ></i>{" "}
                <span
                  className="d-none d-lg-block"
                  style={{ color: "rgb(138 137 137)" }}
                >
                  {" "}
                  مرتب‌سازی براساس :{" "}
                </span>
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
                      setWhichOrdering("");
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
                      setWhichOrdering("Price");

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
                      setWhichOrdering("-Price");

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
                      setWhichOrdering("DiscountPrecentage");
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
                      setWhichOrdering("-DateCreate");
                      setWitchItem("5");
                    }}
                  >
                    تازه‌ها
                  </a>
                </li>
              </ul>
            </div>
            <span className="  " style={{ marginLeft: "20px" }}>
              {" "}
              تعداد کالا:
              <span className="Blazing" style={{ marginRight: "10px" }}>
                {" "}
                {totalcount}
              </span>
            </span>
          </div>{" "}
        </div>
      </div>
    </>
  );
};
