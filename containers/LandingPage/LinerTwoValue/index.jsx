// node libraries
import React, { Fragment } from "react";
import Image from "next/image";
// style
import styles from "./LinerTwoValue.module.scss";

function LinerTwoValue({ dataLinerTwoValue }) {
  return (
    <Fragment key={Math.random() + 7}>
      {dataLinerTwoValue && dataLinerTwoValue.length >= 2 && (
        <>
          {/* for mobile */}
          <div className={`container d-lg-none ${styles.mobile}`}>
            <div className="d-flex flex-row-reverse">
              <Image
                src={dataLinerTwoValue[0].image}
                loading="lazy"
                alt={dataLinerTwoValue[0].title}
                layout={"fill"}
              />
              <h4 className="ms-2">{dataLinerTwoValue[0].title}</h4>
            </div>

            <div className="d-flex flex-row-reverse">
              <Image
                src={dataLinerTwoValue[1].image}
                loading="lazy"
                alt={dataLinerTwoValue[1].title}
                layout={"fill"}
              />
              <h4>{dataLinerTwoValue[1].title}</h4>
            </div>
          </div>

          <div className="container d-none d-lg-block mt-2 mb-5">
            <aside className={styles.section}>
              <div className={styles.rightImg}>
                <Image
                  className={styles.image_on_desctop}
                  src={dataLinerTwoValue[0].image}
                  loading="lazy"
                  alt={dataLinerTwoValue[0].title}
                  layout={"fill"}
                />
                <span style={{ fontSize: "15px" }}>
                  {dataLinerTwoValue[0].title}
                </span>
              </div>

              <div className={styles.leftImg}>
                <Image
                  className={styles.image_on_desctop}
                  src={dataLinerTwoValue[1].image}
                  loading="lazy"
                  alt={dataLinerTwoValue[1].title}
                  layout={"fill"}
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
    </Fragment>
  );
}

export default LinerTwoValue;
