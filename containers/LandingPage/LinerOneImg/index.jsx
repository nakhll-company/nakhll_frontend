import React from "react";
import styles from "./LinerOneImg.module.scss";

function LinerOneImg(props) {
  return (
    <div className={`${styles.linearImages} container`}>
      <div className="row ">
        <div className={`col-12  ${styles.righter}`}>
          <img src="/image/slide/slidB.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default LinerOneImg;
