// node libraries
import React from "react";
import Link from "next/link";
import Image from "next/image";
// components
import LinerProducts from "../LinerProducts";
// styles
import styles from "./LinerProductsBg.module.scss";

function LinerProductsBg({
  subTitleLinerProductsBg,
  dataLinerProductsBg,
  urlLinerProductsBg,
  color,
  xl = 2,
  md = 6,
  lg = 6,
  num,
  url,
}) {
  if (dataLinerProductsBg && dataLinerProductsBg.results) {
    dataLinerProductsBg = dataLinerProductsBg.results;
  }
  return (
    <div
      styles={{ color: `${color}` }}
      className={`${styles.linearBg}`}
      key={Math.random() + 5}
    >
      <div
        style={{ marginLeft: "0 !important", padding: "0 !important" }}
        className={`${styles.righter} col-5 col-md-3 `}
      >
        <div className={styles.Button}>
          <div>
            <Image src="/Values/shegeft.svg" width={100} height={100} alt="" />
          </div>

          <button>
            <Link
              href={`${
                url.includes("search=")
                  ? `${urlLinerProductsBg}`
                  : `/search?ap=${urlLinerProductsBg}`
              }`}
            >
              <a>مشاهده همه</a>
            </Link>
          </button>
        </div>
      </div>
      <div className={`${styles.lefter} col-7 col-md-9`}>
        <LinerProducts
          url={urlLinerProductsBg}
          dataLinerProducts={dataLinerProductsBg}
          subTitle={subTitleLinerProductsBg}
          num={num}
          xl={xl}
          md={md}
          lg={lg}
          xs={12}
          noScroll={true}
        />
      </div>
    </div>
  );
}

export default LinerProductsBg;
