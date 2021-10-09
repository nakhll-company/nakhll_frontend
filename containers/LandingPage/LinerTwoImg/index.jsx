import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCart/ProductCard";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

import styles from "./LinerTwoImg.module.scss";

function LinerTwoImg({ nextApi_LinerTwoImg }) {
  const [dataLinerTwoImg, setDataLinerTwoImg] = useState([]);

  useEffect(async () => {
    try {
      let response = await ApiRegister().apiRequest(
        null,
        "get",
        nextApi_LinerTwoImg,
        true,
        {}
      );
      if (response.status === 200) {
        setDataLinerTwoImg(response.data);
        console.log("response.data :>> ", response.data);
      }
    } catch (e) {
      console.log("rrrr :>> ", e);
    }
  }, []);

  return (
    <>
      {dataLinerTwoImg.length >= 2 && (
        <aside className={styles.section}>
          <a
            href={dataLinerTwoImg[0].url}
            data-observed="0"
            target="_blank"
            title={dataLinerTwoImg[0].description}
            className={styles.one}
          >
            <img
              src={dataLinerTwoImg[0].image}
              loading="lazy"
              alt={dataLinerTwoImg[0].title}
            />
          </a>
          <a
            href={dataLinerTwoImg[1].url}
            data-observed="0"
            target="_blank"
            title={dataLinerTwoImg[1].description}
            className={styles.two}
          >
            <img
              src={dataLinerTwoImg[1].image}
              loading="lazy"
              alt={dataLinerTwoImg[1].title}
            />
          </a>
        </aside>
      )}
    </>
  );
}

export default LinerTwoImg;
