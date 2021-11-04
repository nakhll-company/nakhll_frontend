import React, { useRef } from "react";
import styles from "./Sm_LinerOneImg.module.scss";
import { useDispatch } from "react-redux";
import { _selectId } from "../../../redux/actions/liveEdit/_selectId";
import InputPicture from "../../../containers/liveEdit/InputPicture";

function Sm_LinerOneImg({ setImageSrc, id, data }) {
  console.log(`milad`, data);
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon_change_pic}>
        <InputPicture setImageSrc={setImageSrc} id={id} />
      </div>
      <img
        src={data[0].src ? data[0].src : "/image/sample/linearOneImg2.jpg"}
        alt=""
      />
    </div>
  );
}

export default Sm_LinerOneImg;
