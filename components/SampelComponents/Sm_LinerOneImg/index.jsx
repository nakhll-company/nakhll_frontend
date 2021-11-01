import React, { useRef } from "react";
import Link from "next/link";
import styles from "./Sm_LinerOneImg.module.scss";

function Sm_LinerOneImg(props) {
  const refInput = useRef(null);
  return (
    <div className={styles.wrapper}>
      <div
        onClick={() => refInput.current.click()}
        className={styles.icon_change_pic}
      >
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
            selectImage(e, setImageSrc, setShowModal);
          }}
          accept="image/*"
        />
      </div>
      <img src="/image/sample/linearOneImg2.jpg" alt="" />
    </div>
  );
}

export default Sm_LinerOneImg;
