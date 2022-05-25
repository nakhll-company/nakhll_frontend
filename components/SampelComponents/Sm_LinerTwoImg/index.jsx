// node libraries
import React from "react";
// components
import InputUrl from "../../../containers/liveEdit/InputUrl";
import InputPicture from "../../../containers/liveEdit/InputPicture";
// style
import styles from "./Sm_LinerTwoImg.module.scss";
// type=========3
// aspect======3

function SmLinerTwoImg({ setImageSrc, id, data }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.right}>
        <div className={styles.icon_change_pic}>
          <InputPicture setImageSrc={setImageSrc} id={id} order={0} ratio={3} />
        </div>
        <div className={styles.icon_change_url}>
          <InputUrl id={id} order={0} />
        </div>
        {data[0].title && (
          <div className={styles.titleUrl}>
            <span>{data[0].title}</span>
          </div>
        )}

        <img
          src={data[0].image ? data[0].image : "/image/sample/3_1.jpg"}
          alt=""
        />
      </div>
      <div className={styles.left}>
        <div className={styles.icon_change_pic}>
          <InputPicture setImageSrc={setImageSrc} id={id} order={1} ratio={3} />
        </div>
        <div className={styles.icon_change_url}>
          <InputUrl id={id} order={1} />
        </div>

        <img
          src={data[1].image ? data[1].image : "/image/sample/3_1.jpg"}
          alt=""
        />

        {data[1].title && (
          <div className={styles.titleUrl}>
            <span>{data[1].title}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default SmLinerTwoImg;
