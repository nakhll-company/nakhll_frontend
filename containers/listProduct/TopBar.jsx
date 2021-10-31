import React from "react";
import AddFavorites from "../../components/AddFavorites";

export const TopBar = ({
  totalcount,
  data,
  handel_filterModal,
  setWhichOrdering,
  handel_OrderingModal,
  whichOrdering,
  router,
}) => {
  console.log("router :>> ", router);
  return (
    <>
      <div style={{ marginTop: "0px" }}>
        <div className="items-slider product-filters mb-4">
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
                <li className={`sort-item  ${data == "" ? " active" : ""} `}>
                  <a
                    id={"1"}
                    onClick={() => {
                      setWhichOrdering("");
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
                      setWhichOrdering("Price");
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
                      setWhichOrdering("-Price");
                    }}
                  >
                    گران‌تر
                  </a>
                </li>
                <li
                  className={`sort-item  ${
                    data == "DiscountPrecentage" ? " active" : ""
                  } `}
                >
                  <a
                    onClick={() => {
                      setWhichOrdering("-DiscountPrecentage");
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
                      setWhichOrdering("-DateCreate");
                    }}
                  >
                    تازه‌ها
                  </a>
                </li>
                {/* <li className={`sort-item   `}>
                  <a>
                    <AddFavorites />
                  </a>
                </li> */}
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
