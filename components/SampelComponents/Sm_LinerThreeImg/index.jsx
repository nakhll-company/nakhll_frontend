import React from "react";
import Link from "next/link";
import styles from "./Sm_LinerThreeImg.module.scss";
import InputPicture from "../../../containers/liveEdit/InputPicture";
function Sm_LinerThreeImg({ setImageSrc, id, data }) {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.icon_change_pic}>
          <InputPicture setImageSrc={setImageSrc} id={id} order={0} />
        </div>
        <img
          src={data[0].src ? data[0].src : "/image/sample/linearOneImg2.jpg"}
          alt=""
        />
      </div>
      <div className={styles.wrap}>
        <div className={styles.right}>
          <div className={styles.icon_change_pic}>
            <InputPicture setImageSrc={setImageSrc} id={id} order={1} />
          </div>
          <img
            src={data[1].src ? data[1].src : "/image/sample/main.jpg"}
            alt=""
          />
        </div>
        <div className={styles.left}>
          <div className={styles.icon_change_pic}>
            <InputPicture setImageSrc={setImageSrc} id={id} order={2} />
          </div>
          <img
            src={data[2].src ? data[2].src : "/image/sample/main.jpg"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Sm_LinerThreeImg;
