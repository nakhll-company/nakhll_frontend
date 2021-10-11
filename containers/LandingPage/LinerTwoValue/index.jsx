import React from "react";

import styles from "./LinerTwoValue.module.scss";

function LinerTwoValue({ dataLinerTwoValue }) {
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
              <span>{dataLinerTwoValue[0].title}</span>
            </div>

            <div className={styles.leftImg}>
              <img
                style={{ height: "auto" }}
                src={dataLinerTwoValue[1].image}
                loading="lazy"
                alt={dataLinerTwoValue[1].title}
              />
              <span>{dataLinerTwoValue[1].title}</span>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

export default LinerTwoValue;
