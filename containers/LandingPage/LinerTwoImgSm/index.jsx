import React from "react";
import InputPicture from "../../../containers/liveEdit/InputPicture";
import InputUrl from "../../../containers/liveEdit/InputUrl";

import styles from "./LinerTwoImgSm.module.scss";
// type=========3
// aspect======3

function LinerTwoImgSm({ dataLinerTwoValue }) {
  console.log("dataLinerTwoValue :>> ", dataLinerTwoValue);
  return (
    <div className="container">
      <div className={styles.wrap}>
        <div className={styles.right}>
          <a href="">
            <img src={dataLinerTwoValue[0].image} alt="" />
          </a>
        </div>
        <div className={styles.left}>
          <a href="">
            <img src={dataLinerTwoValue[1].image} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LinerTwoImgSm;
