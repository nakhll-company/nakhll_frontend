// node libraries
import React from "react";
import Link from "next/link";
import Image from "next/image";
// components
// import LinerProducts from "../LinerProducts";
// styles
import styles from "./LinerProductsBg.module.scss";
import LinerProducts from "../../LandingPage/LinerProducts";

function LinerProductsBgLanding({
  subTitle_LinerProductsBg,
  dataLinerProductsBg,
  url_LinerProductsBg='',
  color,
  xl = 2,
  md = 6,
  lg = 6,
  num,
  url,
}) {
  return (
    <div
      styles={{ color: `${color}` }}
      className={`${styles.linearBg}`}
      key={Math.random() + 5}
    >
      <div
        style={{ marginLeft: "0 !important", padding: "0 !important" }}
        className={`${styles.righter} col-4 col-md-3 `}
      >
        <Image
          src="/Values/nillMarket.png"
          layout="responsive"
          width={120}
          height={120}
          alt=""
        />

        <div className={styles.btn}>
          <Link href={url_LinerProductsBg}>
            <a style={{whiteSpace:'nowrap'}}>مشاهده محصولات</a>
          </Link>
        </div>
      </div>
      <div className={`${styles.lefter} col-9 col-md-9`}>
        <LinerProducts
          url={url_LinerProductsBg}
          dataLinerProducts={dataLinerProductsBg.slice(0, 4)}
          subTitle={subTitle_LinerProductsBg}
          num={num}
          xl={3}
          md={4}
          lg={4}
          xs={6}
          noScroll={false}
        />
      </div>
    </div>
  );
}

export default LinerProductsBgLanding;
