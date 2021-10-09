import React from "react";
import LinerProducts from "../LinerProducts";
import styles from "./LinerProductsBg.module.scss";
function LinerProductsBg({
  title_LinerProductsBg,
  subTitle_LinerProductsBg,
  nextApi_LinerProductsBg,
  url_LinerProductsBg,
  xl = 2,
  md = 6,
  lg = 6,
  num,
}) {
  return (
    <div className={`${styles.linearBg} row`}>
      <div className={`${styles.righter} col-md-3 d-none d-md-block`}>
        <div className={styles.Button}>
          <button>
            <a href={`/product/search?ap=${url_LinerProductsBg}`}>مشاهده همه</a>
          </button>
        </div>
      </div>
      <div className={`${styles.lefter} col-12 col-md-9`}>
        <LinerProducts
          url={url_LinerProductsBg}
          nextApi={nextApi_LinerProductsBg}
          subTitle={subTitle_LinerProductsBg}
          title={title_LinerProductsBg}
          num={num}
          xl={xl}
          md={md}
          lg={lg}
        />
      </div>
    </div>
  );
}

export default LinerProductsBg;
