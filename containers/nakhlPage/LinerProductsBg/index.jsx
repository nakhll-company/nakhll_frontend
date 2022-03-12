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
  url_LinerProductsBg,
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
        className={`${styles.righter} col-5 col-md-3 `}
      >
        <div className={styles.Button}>
          <div>
            <Image
              src="/Values/shegeft.svg"
              layout="responsive"
              width={100}
              height={100}
              alt=""
            />
          </div>

          <button>
            <Link href={``}>
              <a>مشاهده همه</a>
            </Link>
          </button>
        </div>
      </div>
      <div className={`${styles.lefter} col-7 col-md-9`}>
        <LinerProducts
          url={url_LinerProductsBg}
          dataLinerProducts={dataLinerProductsBg.slice(0, 4)}
          subTitle={subTitle_LinerProductsBg}
          num={num}
          xl={3}
          md={4}
          lg={4}
          xs={6}
          noScroll={true}
        />
      </div>
    </div>
  );
}

export default LinerProductsBgLanding;
