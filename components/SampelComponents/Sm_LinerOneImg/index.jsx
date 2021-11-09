import React, { useRef } from "react";
import styles from "./Sm_LinerOneImg.module.scss";

import { _selectId } from "../../../redux/actions/liveEdit/_selectId";
import InputPicture from "../../../containers/liveEdit/InputPicture";
import InputUrl from "../../../containers/liveEdit/InputUrl";
// type component ===============2
// aspect ratio 6/1
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
      <img
        src={data[0].image ? data[0].image : "/image/sample/linearOneImg2.jpg"}
        alt=""
      />
    </div>
  );
}

export default Sm_LinerOneImg;
