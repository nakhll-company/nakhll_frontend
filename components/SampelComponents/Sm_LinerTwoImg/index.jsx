import React from "react";
import InputPicture from "../../../containers/liveEdit/InputPicture";

import styles from "./Sm_LinerTwoImg.module.scss";
function Sm_LinerTwoImg({ setImageSrc, id, data }) {
  console.log(`data`, data);
  return (
    <div className={styles.wrap}>
      <div className={styles.right}>
        <div className={styles.icon_change_pic}>
          <InputPicture setImageSrc={setImageSrc} id={id} order={0} />
        </div>
        <a href="">
          <img
            src={data[0].src ? data[0].src : "/image/sample/main.jpg"}
            alt=""
          />
        </a>
      </div>
      <div className={styles.left}>
        <div className={styles.icon_change_pic}>
          <InputPicture setImageSrc={setImageSrc} id={id} order={1} />
        </div>
        <a href="">
          <img
            src={data[1].src ? data[1].src : "/image/sample/main.jpg"}
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default Sm_LinerTwoImg;
