import React from "react";

import styles from "./LinerTwoValue.module.scss";

function LinerTwoValue({ dataLinerTwoValue }) {
  return (
    <>
      {dataLinerTwoValue.length >= 2 && (
        <>
          {/* for mobile */}
          <div className={`container d-lg-none ${styles.mobile}`}>
            <div className="d-flex flex-row-reverse">
              <img
                src={dataLinerTwoValue[0].image}
                loading="lazy"
                alt={dataLinerTwoValue[0].title}
              />
              <h4 className="ms-2">{dataLinerTwoValue[0].title}</h4>
            </div>

            <div className="d-flex flex-row-reverse">
              <img
                src={dataLinerTwoValue[1].image}
                loading="lazy"
                alt={dataLinerTwoValue[1].title}
              />
              <h4>{dataLinerTwoValue[1].title}</h4>
            </div>
          </div>

          <div className="container d-none d-lg-block">
            <aside className={styles.section}>
              <div className={styles.rightImg}>
                <img
                  style={{ height: "auto" }}
                  src={dataLinerTwoValue[0].image}
                  loading="lazy"
                  alt={dataLinerTwoValue[0].title}
                />
                <span style={{ fontSize: "15px" }}>
                  {dataLinerTwoValue[0].title}
                </span>
              </div>

              <div className={styles.leftImg}>
                <img
                  style={{ height: "auto" }}
                  src={dataLinerTwoValue[1].image}
                  loading="lazy"
                  alt={dataLinerTwoValue[1].title}
                />
                <span style={{ fontSize: "15px" }}>
                  {dataLinerTwoValue[1].title}
                </span>
              </div>
            </aside>
          </div>
          {/* for Desktop */}
        </>
      )}
    </>
  );
}

export default LinerTwoValue;
