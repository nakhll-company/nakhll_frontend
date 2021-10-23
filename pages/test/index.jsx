import React from "react";
import styles from "./test.module.scss";

function index(props) {
  return (
    <div className={styles.content}>
      <div className={styles.slider}>
        <div className={styles.right}>
          <img src="/image/slide/slideLeft2.jpg" alt="" />
        </div>
        <div className={styles.left}>
          <div className={styles.top}>
              <a href="">
                <img src="/image/slide/slidB.jpg" alt="" />
              </a>
          </div>
          <div className={styles.bottom}>
              <a href="">
                <img src="/image/slide/slideLeft2.jpg" alt="" />
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
