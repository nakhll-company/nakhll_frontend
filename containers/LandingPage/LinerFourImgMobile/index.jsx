import React, { useEffect, useState } from "react";

import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

import styles from "./LinerFourImgMobile.module.scss";

function LinerFourImgMobile({ nextApi_LinerFourImgMobile }) {
  const [dataLinerFourImgMobile, setDataLinerFourImgMobile] = useState([]);
  useEffect(async () => {
    try {
      let response = await ApiRegister().apiRequest(
        null,
        "get",
        nextApi_LinerFourImgMobile,
        true,
        {}
      );
      if (response.status === 200) {
        setDataLinerFourImgMobile(response.data);
      }
    } catch (e) {
      console.log("rrrr :>> ", e);
    }
  }, []);

  return (
    <>
      {dataLinerFourImgMobile.length >= 4 && (
        <>
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
          <aside className={styles.section}>
            <a
              href={dataLinerTwoImg[3].url}
              data-observed="0"
              target="_blank"
              title={dataLinerTwoImg[3].description}
              className={styles.one}
            >
              <img
                src={dataLinerTwoImg[3].image}
                loading="lazy"
                alt={dataLinerTwoImg[3].title}
              />
            </a>
            <a
              href={dataLinerTwoImg[4].url}
              data-observed="0"
              target="_blank"
              title={dataLinerTwoImg[4].description}
              className={styles.two}
            >
              <img
                src={dataLinerTwoImg[4].image}
                loading="lazy"
                alt={dataLinerTwoImg[4].title}
              />
            </a>
          </aside>
        </>
      )}
    </>
  );
}

export default LinerFourImgMobile;
