import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCart/ProductCard";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

import styles from "./LinerTwoValue.module.scss";

function LinerTwoValue({ nextApi_LinerTwoValue }) {
  const [dataLinerTwoValue, setDataLinerTwoValue] = useState([]);

  useEffect(async () => {
    try {
      let response = await ApiRegister().apiRequest(
        null,
        "get",
        nextApi_LinerTwoValue,
        true,
        {}
      );
      if (response.status === 200) {
        setDataLinerTwoValue(response.data);
        console.log("response.data :>> ", response.data);
      }
    } catch (e) {
      console.log("rrrr :>> ", e);
    }
  }, []);

  return (
    <>
      {dataLinerTwoValue.length >= 2 && (
        <div className="container">
          <aside className={styles.section}>
            <a
              href={dataLinerTwoValue[0].url}
              data-observed="0"
              target="_blank"
              title={dataLinerTwoValue[0].description}
              className={styles.one}
            >
              <img
                style={{ height: "auto" }}
                src={dataLinerTwoValue[0].image}
                loading="lazy"
                alt={dataLinerTwoValue[0].title}
              />
            </a>
            <a
              href={dataLinerTwoValue[1].url}
              data-observed="0"
              target="_blank"
              title={dataLinerTwoValue[1].description}
              className={styles.two}
            >
              <img
                style={{ height: "auto" }}
                src={dataLinerTwoValue[1].image}
                loading="lazy"
                alt={dataLinerTwoValue[1].title}
              />
            </a>
          </aside>
        </div>
      )}
    </>
  );
}

export default LinerTwoValue;
