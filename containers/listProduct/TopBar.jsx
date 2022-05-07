import React from "react";
import Assistent from "zaravand-assistent-number";
const _asist = new Assistent();
export const TopBar = ({
  onChangeFilter,
  totalcount,
  data,
  handel_filterModal,
  handel_OrderingModal,
}) => {
  return (
    <>
      <div style={{ marginTop: "0px" }}>
        <div className=" product-filters mb-4">
          <div
            style={{
              cursor: "pointer",
              backgroundColor: "#fff",
              padding: "5px 15px",
            }}
            className="d-lg-none"
          >
            <i className="fas fa-filter"></i>
            <button className="btn px-2" onClick={handel_filterModal}>
              <span style={{ marginLeft: "45px" }}>فیلترها</span>
            </button>
            <i className="fas fa-sort-amount-down-alt"></i>
            <button className="btn px-2" onClick={handel_OrderingModal}>
              <span>
                مرتب سازی:
                <span
                  style={{
                    fontSize: "12px",
                    color: "red",
                    marginRight: "5px",
                  }}
                >
                  {data == "" && "مرتبط‌ترین"}
                  {data == "Price" && "ارزانتر"}
                  {data == "-Price" && "گرانتر"}

                  {data == "DiscountPrecentage" && "بیشترین تخفیف"}
                  {data == "-DateCreate" && "تازه ها"}
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
                <li className={`sort-item  ${data ? " " : "active"} `}>
                  <a
                    id={"1"}
                    onClick={() => {
                      onChangeFilter("ordering", "");
                    }}
                  >
                    مرتبط‌ترین
                  </a>
                </li>
                <li
                  className={`sort-item  ${data == "Price" ? " active" : ""} `}
                >
                  <a
                    onClick={() => {
                      onChangeFilter("ordering", "Price");
                    }}
                  >
                    ارزان‌تر
                  </a>
                </li>
                <li
                  id={"3"}
                  className={`sort-item  ${data == "-Price" ? " active" : ""} `}
                >
                  <a
                    onClick={() => {
                      onChangeFilter("ordering", "-Price");
                    }}
                  >
                    گران‌تر
                  </a>
                </li>
                <li
                  className={`sort-item  ${
                    data == "-DiscountPrecentage" ? " active" : ""
                  } `}
                >
                  <a
                    onClick={() => {
                      onChangeFilter("ordering", "-DiscountPrecentage");
                    }}
                  >
                    بیشترین تخفیف
                  </a>
                </li>
                <li
                  className={`sort-item  ${
                    data == "-DateCreate" ? " active" : ""
                  } `}
                >
                  <a
                    onClick={() => {
                      onChangeFilter("ordering", "-DateCreate");
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
              <span style={{ marginRight: "10px", fontWeight: "bold" }}>
                {" "}
                {_asist.number(totalcount)}
              </span>
            </span>
          </div>{" "}
        </div>
      </div>
    </>
  );
};
