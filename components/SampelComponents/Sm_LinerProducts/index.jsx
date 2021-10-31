import React, { useState } from "react";
import styles from "./Sm_LinerProducts.module.scss";

import Sm_product from "../Sm_product";
function Sm_LinerProducts(props) {
  const [toggle, setToggle] = useState(true);
  const [name, setName] = useState("پرفروش ترین");
  const [toggleSubTitle, setToggleSubTitle] = useState(true);
  const [subTitle, setSubTitle] = useState("زیرعنوان");
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <div className={styles.name}>
          {toggle ? (
            <span
              className={styles.mainTitle}
              onDoubleClick={() => {
                setToggle(false);
              }}
            >
              {name}
            </span>
          ) : (
            <input
              className={styles.input}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === "Escape") {
                  setToggle(true);
                  event.preventDefault();
                  event.stopPropagation();
                }
              }}
            />
          )}

          {toggleSubTitle ? (
            <span
              className={styles.subTitle}
              onDoubleClick={() => {
                setToggleSubTitle(false);
              }}
            >
              {subTitle}
            </span>
          ) : (
            <input
              className={styles.input}
              type="text"
              value={subTitle}
              onChange={(e) => setSubTitle(e.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === "Escape") {
                  setToggleSubTitle(true);
                  event.preventDefault();
                  event.stopPropagation();
                }
              }}
            />
          )}
        </div>
        <div className={styles.seeAll}>
          <div className={styles.wrapBtn}>
            <span>مشاهده همه</span>
          </div>
        </div>
      </div>
      <div className={styles.wrap}>
        <Sm_product />
        <Sm_product />
        <Sm_product />
        <Sm_product />
        <Sm_product />
        <Sm_product />
      </div>
    </div>
  );
}

export default Sm_LinerProducts;
