import React from "react";
import styles from "./CheckOutSteps.module.scss";

export default function CheckOutSteps({ step }) {
  let witchStep = "";
  let lineActive = "";
  if (step == 1) {
    witchStep = styles.active;
  }
  if (step == 2) {
    witchStep = styles.active;
    lineActive = styles.road;
  }

  return (
    <div className={styles.checkout_steps}>
      {/* LEVEL ONE */}
      <a href="">
        <div className={`${styles.step_item}  ${witchStep}`}>
          <span className={`${styles.titleInStep}`}>اطلاعات ارسال</span>
        </div>
      </a>

      <div className={styles.line}>
        <div className={`${lineActive}`}></div>
      </div>

      {/* LEVEL TWO */}
      <a href="">
        <div className={styles.step_item}>
          <div className={styles.titleInStep}>
            <span>پرداخت</span>
          </div>
        </div>
      </a>
      <div className={styles.line}></div>

      {/* LEVEL THREE */}
      <a href="">
        <div className={styles.step_item}>
          <div className={styles.titleInStep}>
            <span>اتمام خرید </span>
          </div>
        </div>
      </a>
    </div>
  );
}
