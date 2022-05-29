// node libraries
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { FiArrowRightCircle } from "react-icons/fi";
// methods
import {goBack} from './methods/goBack';
import { finalClick } from './methods/finalClick';
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
  const [page, setPage] = useState(1);
  const [title, settitle] = useState("");

  // submarket
  function clickButton(e) {
    setPage(2);
    settitle(e.name);
  }

  return (
    <div className={styles.mainWrapper}>
      <div id="wrapperMarkets" className={styles.markets}>
        <div className={styles.wrapper}>
          <div className={styles.Header}>
            <button
              style={{ outline: "unset" }}
              onClick={()=>{goBack(page,setPage,setData,categories)}}
              className={styles.btn_icon}
            >
              <FiArrowRightCircle size={25} style={{marginBottom:'5px'}} />
            </button>
            {page === 1 ? (
              <h2 className={styles.categoryTitle}>
                انتخاب دسته بندی
              </h2>
            ):(
              <h2 className={styles.categoryTitle}> زیردسته {title} </h2>
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
                    value.childrens.length === 0 && finalClick(value,setPlaceholderSubmarckets,setSubmarketId,setData,setPage,clearErrors,categories);
                  }}
                  className={styles.btn}
                >
                  <div className={styles.in_btn}>
                    <h2 className={styles.categoryItems}>
                      {value.name}
                    </h2>
                    <BiArrowBack size={20} color='#000'/>
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
