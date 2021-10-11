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
      }
    } catch (e) {
    }
  }, []);

  return (
    <>
      {dataLinerTwoValue.length >= 2 && (
        <div className="container">
          <aside className={styles.section}>
            <div className={styles.rightImg}>
              <img
                style={{ height: "auto" }}
                src={dataLinerTwoValue[0].image}
                loading="lazy"
                alt={dataLinerTwoValue[0].title}
              />
              <span></span>
            </div>

            <div className={styles.leftImg}>
              <img
                style={{ height: "auto" }}
                src={dataLinerTwoValue[1].image}
                loading="lazy"
                alt={dataLinerTwoValue[1].title}
              />
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

export default LinerTwoValue;
