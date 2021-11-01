import React from "react";
import Link from "next/link";
import styles from "./Sm_LinerOneImg.module.scss";

function Sm_LinerOneImg(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon_change_pic}>
        {/* <i onClick={} className="fas fa-images"></i> */}
        <input type="file" name="" id="" />
      </div>
      <img src="/image/sample/linearOneImg2.jpg" alt="" />
    </div>
  );
}

export default Sm_LinerOneImg;
