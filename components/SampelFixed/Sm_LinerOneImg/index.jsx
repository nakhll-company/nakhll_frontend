import React from "react";
import Link from "next/link";
import styles from "./Sm_LinerOneImg.module.scss";
function Sm_LinerOneImg_Fix(props) {
  return (
    <div className={styles.wrapper}>
      <Link href="">
        <a>
          <img src="/image/sample/6_1.jpg" alt="" />
        </a>
      </Link>
    </div>
  );
}

export default Sm_LinerOneImg_Fix;
