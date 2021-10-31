import React from "react";
import Link from "next/link";
import styles from "./Sm_LinerOneImg.module.scss";
function Sm_LinerOneImg(props) {
  return (
    <div className={styles.wrapper}>
      <Link href="">
        <a>
          <img src="/image/sample/linearOneImg2.jpg" alt="" />
        </a>
      </Link>
    </div>
  );
}

export default Sm_LinerOneImg;
