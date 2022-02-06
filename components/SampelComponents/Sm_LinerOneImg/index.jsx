// node libraries
import React from "react";
import Image from "next/image";
// components
import InputUrl from "../../../containers/liveEdit/InputUrl";
import InputPicture from "../../../containers/liveEdit/InputPicture";
// style
import styles from "./Sm_LinerOneImg.module.scss";

function Sm_LinerOneImg({ setImageSrc, id, data }) {

  return (
    <div className={styles.wrapper}>
      <div className={styles.icon_change_pic}>
        <InputPicture setImageSrc={setImageSrc} id={id} ratio={6} />
      </div>
      <div className={styles.icon_change_url}>
        <InputUrl id={id} />
      </div>
      {data[0].title && (
        <div className={styles.titleUrl}>
          <span>{data[0].title}</span>
        </div>
      )}
      <Image
        src={data[0].image ? data[0].image : "/image/sample/6_1.jpg"}
        alt=""
      />
    </div>
  );
}

export default Sm_LinerOneImg;
