import React, { useEffect, useState } from "react";

import styles from "./Sm_LinerProducts.module.scss";

import Sm_product from "../Sm_product";
import InputUrl from "../../../containers/liveEdit/InputUrl";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
function Sm_LinerProducts({ id, data }) {
  console.log(`data`, data);
  // #a1db43
  const [toggle, setToggle] = useState(true);
  const [name, setName] = useState(data[0].titleComponent);
  const [toggleSubTitle, setToggleSubTitle] = useState(true);
  const [subTitle, setSubTitle] = useState(data[0].subTitle);
  const [color, setColor] = useState(data[0].color);
  useEffect(async () => {
    if (data[0].url !== "") {
      console.log(`data[0].url `, data[0].url);
      let Queries = { page_size: "6" };
      //

      let api =
        "https://nakhll.com/api/v1/products/?search=%D9%84%D8%A8%D8%A7%D8%B3&ordering=&ready=false&available=false&discounted=false&page_size=6&min_price=0&max_price=100000000&shop=";

      // url
      // let urlpa =
      //   "http://localhost:3007/product/?q=&ordering=-Price&ready=true&available=true&discounted=true&city=467&min_price=1662&shop=Roya&category=306";
      let url = data[0].url;
      if (url.split("?")[1]) {
        let partTwoUrl = url.split("?")[1].split("&");
        let arrayString = partTwoUrl.map((el) => el.split("="));

        arrayString.map((el) => {
          if (el[0] == "q") {
            Queries["search"] = decodeURI(el[1]);
          } else {
            Queries[el[0]] = el[1];
          }
        });
      }

      if (Object.keys(Queries).length > 1) {
        let one_Component = await ApiRegister().apiRequest(
          null,
          "GET",
          "https://nakhll.com/api/v1/products/",
          true,
          Queries
        );
      }

      let samp = [
        {
          q: "",
        },
        {
          ordering: "-Price",
        },
        {
          ready: "true",
        },
        {
          available: "true",
        },
        {
          discounted: "true",
        },
        {
          city: "467",
        },
        {
          min_price: "1662",
        },
        {
          shop: "Roya",
        },
        {
          category: "306",
        },
      ];
    }
  }, [data[0].url]);
  // if (data[0].url !== "") {
  //   alert("hi");
  // }
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
