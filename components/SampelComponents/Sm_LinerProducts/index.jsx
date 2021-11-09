import React, { useEffect, useState } from "react";

import styles from "./Sm_LinerProducts.module.scss";

import Sm_product from "../Sm_product";
import InputUrl from "../../../containers/liveEdit/InputUrl";
function Sm_LinerProducts({ id, data }) {
  console.log(`data`, data);
  // #a1db43
  const [toggle, setToggle] = useState(true);
  const [name, setName] = useState(data[0].title);
  const [toggleSubTitle, setToggleSubTitle] = useState(true);
  const [subTitle, setSubTitle] = useState(data[0].subTitle);
  const [color, setColor] = useState(data[0].color);

  return (
    <div style={{ backgroundColor: color }} className={styles.main}>
      <div className={styles.icon_change_url}>
        <InputUrl id={id} order={0} />
      </div>
      {data[0].title && (
        <div className={styles.titleUrl}>
          <span>{data[0].title}</span>
        </div>
      )}
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

          <div className={styles.palette}>
            {/* <input type="color" name="" id="" /> */}
            <div className={styles.wrapIcon}>
              <label for="palette">
                <i
                  style={{ fontSize: "30px", color: "#fff" }}
                  className={`fas fa-palette ${styles.colorIcon}`}
                ></i>
              </label>
              <input
                className={styles.inputcolor}
                type="color"
                name="palette"
                id="palette"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                style={{
                  opacity: 0,
                  cursor: "pointer",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
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
