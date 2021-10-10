import React from "react";
import LinerProducts from "../LinerProducts";
import styles from "./LinerProductsBg.module.scss";
function LinerProductsBg({
  subTitle_LinerProductsBg,
  nextApi_LinerProductsBg,
  url_LinerProductsBg,
  xl = 2,
  md = 6,
  lg = 6,
  num,
}) {
  return (
    <div className={`${styles.linearBg} row col-12`}>
      <div className={`${styles.righter} col-3 col-md-3 `}>
        <div className={styles.Button}>
          <img src="/Values/shegeft.svg" alt="" />
          <button>
            <a href={`/product/search?ap=${url_LinerProductsBg}`}>مشاهده همه</a>
          </button>
        </div>
      </div>
      <div className={`${styles.lefter} col-9 col-md-9`}>
        <LinerProducts
          url={url_LinerProductsBg}
          nextApi={nextApi_LinerProductsBg}
          subTitle={subTitle_LinerProductsBg}
          num={num}
          xl={xl}
          md={md}
          lg={lg}
          sm={12}
        />
      </div>
    </div>
  );
}

export default LinerProductsBg;
