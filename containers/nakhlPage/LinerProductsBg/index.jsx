// node libraries
import React from "react";
import Link from "next/link";
import Image from "next/image";
// components
import LinerProducts from "../../LandingPage/LinerProducts";
// styles
import styles from "./LinerProductsBg.module.scss";

function LinerProductsBgLanding({
  subTitleLinerProductsBg,
  dataLinerProductsBg,
  urlLinerProductsBg = "",
  color,
  num
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
        <Link href={urlLinerProductsBg}>
          <div className={styles.btn}>
            <a style={{ whiteSpace: "nowrap" }}>مشاهده محصولات</a>
          </div>
        </Link>
      </div>
      <div className={`${styles.lefter} col-9 col-md-9`}>
        <LinerProducts
          url={urlLinerProductsBg}
          dataLinerProducts={dataLinerProductsBg.slice(0, 4)}
          subTitle={subTitleLinerProductsBg}
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
