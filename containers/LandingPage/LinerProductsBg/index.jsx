import React from "react";
import Link from "next/link";
import LinerProducts from "../LinerProducts";
import styles from "./LinerProductsBg.module.scss";
function LinerProductsBg({
  subTitle_LinerProductsBg,
  dataLinerProductsBg,
  url_LinerProductsBg,
  color,
  xl = 2,
  md = 6,
  lg = 6,
  num,
}) {
  return (
    <div styles={{ color: `${color}` }} className={`${styles.linearBg}  `}>
      <div
        style={{ marginLeft: "0 !important", padding: "0 !important" }}
        className={`${styles.righter} col-5 col-md-3 `}
      >
        <div className={styles.Button}>
          <div>
            <img src="/Values/shegeft.svg" alt="" />
          </div>

          <button>
            <Link
              href={`${
                url.includes("search=")
                  ? `${url_LinerProductsBg}`
                  : `/product?ap=${url_LinerProductsBg}`
              }`}
            >
              <a>مشاهده همه</a>
            </Link>
          </button>
        </div>
      </div>
      <div className={`${styles.lefter} col-7 col-md-9`}>
        <LinerProducts
          url={url_LinerProductsBg}
          dataLinerProducts={dataLinerProductsBg}
          subTitle={subTitle_LinerProductsBg}
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
