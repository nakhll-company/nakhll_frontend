// node libraries
import { useState } from "react";
// scss
import styles from "../../../styles/pages/product/create.module.scss";

const Category = ({
  clearErrors,
  setPlaceholderSubmarckets,
  data,
  setSubmarketId,
  setData,
  categories,
}) => {
  const [title, settitle] = useState("");
  const [page, setPage] = useState(1);

  // submarket
  function clickButton(e) {
    setPage(2);
    settitle(e.name);
  }
  // final Click
  function finalClick(e) {
    let element = document.getElementById("wrapperMarkets");
    element.style.display = "none";
    let elementProduct = document.getElementById("wrapper_product");
    elementProduct.style.display = "flex";
    setPlaceholderSubmarckets(e);
    setSubmarketId(e.id);
    setData(categories);
    setPage((page) => page - 1);
    clearErrors("submark");
  }
  // Go Back
  function GoBack() {
    if (page === 1) {
      let element = document.getElementById("wrapperMarkets");
      element.style.display = "none";
      let elementProduct = document.getElementById("wrapper_product");
      elementProduct.style.display = "flex";
    } else {
      setPage((page) => page - 1);
    }
  }
  return (
    <div
      style={{
        position: "relative",
        gridColumn: "1/-1",
        gridRow: "1/-1",
        background: "#ffffff",
      }}
    >
      <div id="wrapperMarkets" className={styles.markets}>
        <div className={styles.wrapper}>
          <div className={styles.Header}>
            <button
              style={{ outline: "unset" }}
              onClick={GoBack}
              className={styles.btn_icon}
            >
              <span
                className="fas fa-arrow-right"
                style={{
                  fontSize: "15px",
                  color: "#5E7488",
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
              ></span>
            </button>
            {page === 1 && (
              <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>
                انتخاب دسته بندی
              </h2>
            )}
            {page !== 1 && (
              <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>
                {" "}
                انتخاب زیر دسته از {title}{" "}
              </h2>
            )}
          </div>
          <div className={styles.content}>
            {data.map((value, index) => {
              return (
                <button
                  key={index}
                  style={{ outline: "unset" }}
                  onClick={() => {
                    clickButton(value);
                    value.childrens.length > 0 && setData(value.childrens);
                    value.childrens.length === 0 && finalClick(value);
                  }}
                  className={styles.btn}
                >
                  <div className={styles.in_btn}>
                    <h2
                      style={{
                        marginRight: "14px",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      {value.name}
                    </h2>
                    <span
                      style={{ marginLeft: "14px" }}
                      className="fas fa-chevron-left "
                    ></span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
// export
export default Category;
