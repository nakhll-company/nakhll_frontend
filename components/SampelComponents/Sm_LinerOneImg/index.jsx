import React, { useRef } from "react";
import styles from "./Sm_LinerOneImg.module.scss";

import { _selectId } from "../../../redux/actions/liveEdit/_selectId";
import InputPicture from "../../../containers/liveEdit/InputPicture";
import InputUrl from "../../../containers/liveEdit/InputUrl";

function Sm_LinerOneImg({ setImageSrc, id, data }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon_change_pic}>
        <InputPicture setImageSrc={setImageSrc} id={id} />
      </div>
      <div className={styles.icon_change_url}>
        <InputUrl id={id} />
      </div>
      <img
        src={data[0].src ? data[0].src : "/image/sample/linearOneImg2.jpg"}
        alt=""
      />
    </div>
  );
}

export default Sm_LinerOneImg;
