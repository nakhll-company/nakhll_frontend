// node libraries
import React from "react";
import Image from "next/image";
// style
import styles from "./LinerTwoValue.module.scss";

function LinerTwoValue({ dataLinerTwoValue }) {
  return (
    <>
      {dataLinerTwoValue && dataLinerTwoValue.length >= 2 && (
        <>
          <div className="container  d-block mt-2 mb-5">
            <aside className={styles.section}>
              <div className={styles.rightImg}>
                <Image
                  className={styles.values_until_72}
                  src={dataLinerTwoValue[0].image}
                  loading="lazy"
                  alt={dataLinerTwoValue[0].title}
                  width={100}
                  height={100}
                />
                <span>
                  {dataLinerTwoValue[0].title}
                </span>
              </div>

              <div className={styles.leftImg}>
                <Image
                  className={styles.values_online_shop}
                  src={dataLinerTwoValue[1].image}
                  loading="lazy"
                  alt={dataLinerTwoValue[1].title}
                  width={100}
                  height={100}
                />
                <span>
                  {dataLinerTwoValue[1].title}
                </span>
              </div>
            </aside>
          </div>
        </>
      )}
    </>
  );
}

export default LinerTwoValue;
