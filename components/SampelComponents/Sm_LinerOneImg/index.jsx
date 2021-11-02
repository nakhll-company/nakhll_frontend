import React, { useRef } from "react";
import Link from "next/link";
import styles from "./Sm_LinerOneImg.module.scss";
import { selectImage } from "../../customCropper/methods/selectImage";
import { useDispatch } from "react-redux";
import { showCropper } from "../../../redux/actions/liveEdit/showCropper";

function Sm_LinerOneImg({ setImageSrc, croppedImage, id, data }) {
  const refInput = useRef(null);
  const dispatch = useDispatch();
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon_change_pic}>
        <i
          onClick={() => refInput.current.click()}
          className="fas fa-images"
        ></i>
        <input
          style={{ display: "none" }}
          ref={refInput}
          type="file"
          name=""
          id=""
          onChange={(e) => {
            selectImage(e, setImageSrc);
            dispatch(showCropper());
          }}
          accept="image/*"
        />
      </div>
      <img
        src={data.src ? data.src : "/image/sample/linearOneImg2.jpg"}
        src={croppedImage ? croppedImage : "/image/sample/linearOneImg2.jpg"}
        alt=""
      />
    </div>
  );
}

export default Sm_LinerOneImg;
