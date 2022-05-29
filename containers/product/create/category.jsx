// node libraries
import { useState } from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import { BiArrowBack } from "react-icons/bi";
// scss
import styles from "./create.module.scss";

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
    const element = document.getElementById("wrapperMarkets");
    element.style.display = "none";
    const elementProduct = document.getElementById("wrapper_product");
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
      const element = document.getElementById("wrapperMarkets");
      element.style.display = "none";
      const elementProduct = document.getElementById("wrapper_product");
      elementProduct.style.display = "flex";
    } else {
      setData(categories);
      setPage(1);
    }
  }
  return (
    <div className={styles.mainWrapper}>
      <div id="wrapperMarkets" className={styles.markets}>
        <div className={styles.wrapper}>
          <div className={styles.Header}>
            <button
              style={{ outline: "unset" }}
              onClick={GoBack}
              className={styles.btn_icon}
            >
              <FiArrowRightCircle size={25} style={{ marginBottom: "5px" }} />
            </button>
            {page === 1 ? (
              <h2 style={{ margin: 0, fontSize: "18px", fontWeight: "bold" }}>
                انتخاب دسته بندی
              </h2>
            ) : (
              <h2 style={{ fontSize: "16px" }}> زیردسته {title} </h2>
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
                    <BiArrowBack size={20} color="#000" />
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
