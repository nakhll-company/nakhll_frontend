import React, { useEffect, useState } from "react";

import styles from "./Sm_LinerProducts.module.scss";

import Sm_product from "../Sm_product";
import InputUrl from "../../../containers/liveEdit/InputUrl";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
import { useDispatch } from "react-redux";
import { _updateProducts } from "../../../redux/actions/liveEdit/_updateProducts";
import { _selectId } from "../../../redux/actions/liveEdit/_selectId";
import { _updateTitleColorSubtitle } from "../../../redux/actions/liveEdit/_updateTitleColorSubtitle";
function Sm_LinerProducts({ id, data }) {
  const [products, setProducts] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [name, setName] = useState(data[0].titleComponent);
  const [toggleSubTitle, setToggleSubTitle] = useState(true);
  const [subTitle, setSubTitle] = useState(data[0].subTitle);
  const [color, setColor] = useState(data[0].color);
  const dispatch = useDispatch();
  useEffect(async () => {
    let Queries = { page_size: "6" };
    if (data[0].url !== "") {
      let url = data[0].url;
      if (url.split("?")[1]) {
        let partTwoUrl = url.split("?")[1].split("&");
        let arrayString = partTwoUrl.map((el) => el.split("="));

        arrayString.map((el) => {
          if (el[0] == "q") {
            Queries["search"] = decodeURI(el[1]);
          } else {
            Queries[el[0]] = decodeURI(el[1]);
          }
        });
      }

      if (Object.keys(Queries).length > 1) {
        let response = await ApiRegister().apiRequest(
          null,
          "GET",
          "https://nakhll.com/api/v1/products/",
          false,
          Queries
        );

        if (response.status == 200) {
          setProducts(response.data.results);
          dispatch(_updateProducts(response.data.results));
        }
      }
    }
  }, [data[0].url]);

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
                dispatch(_selectId({ id, order: 0 }));
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
                  dispatch(
                    _updateTitleColorSubtitle({
                      color: color,
                      title: name,
                      subTitle: subTitle,
                    })
                  );
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
                dispatch(_selectId({ id, order: 0 }));
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
                  dispatch(
                    _updateTitleColorSubtitle({
                      color: color,
                      title: name,
                      subTitle: subTitle,
                    })
                  );
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
              <label htmlFor="palette">
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
                onClick={() => {
                  dispatch(_selectId({ id, order: 0 }));
                }}
                onChange={(e) => {
                  setColor(e.target.value);
                  dispatch(
                    _updateTitleColorSubtitle({
                      color: color,
                      title: name,
                      subTitle: subTitle,
                    })
                  );
                }}
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
        {products.map((product, index) => (
          <Sm_product key={index} data={product} />
        ))}
        {/* <Sm_product />
        <Sm_product />
        <Sm_product />
        <Sm_product />
        <Sm_product /> */}
      </div>
    </div>
  );
}

export default Sm_LinerProducts;
