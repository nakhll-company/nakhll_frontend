import React from "react";
import styles from "./CheckOutSteps.module.scss";
/**
 * component for step Level
 * @param {string} step => step =1 or 2 or 3 |||show you are in witch step :)
 */
export default function CheckOutSteps({ step }) {
  let step1 = "";
  let step2 = "";
  let step3 = "";
  let line1 = "";
  let line2 = "";
  let animationStep = "";

  //FOR ASSIGN CSS FOR EACH STEP
  if (step == 1) {
    step1 = styles.active;
    animationStep = styles.animationStep;
  }
  if (step == 2) {
    step1 = styles.active;
    line1 = styles.road;
    step2 = styles.active;
  }
  if (step == 3) {
    step1 = styles.active;
    step2 = styles.active;
    step3 = styles.active;
    line1 = styles.road;
    line2 = styles.road;
  }

  return (
    <div className={styles.checkout_steps}>
      {/* LEVEL ONE */}
      <a href="">
        <div className={`${styles.step_item}  ${step1} `}>
          <span className={`${styles.titleInStep}`}>اطلاعات ارسال</span>
        </div>
      </a>
      {/* ^^^^^^^^^^ LEVEL ONE ^^^^^^^^^^ */}

      {/* LINE 1 */}
      <div className={styles.line}>
        <div className={`${line1} `}></div>
      </div>

      {/* LEVEL TWO */}
      <a href="">
        <div className={`${styles.step_item} ${step2}`}>
          <div className={styles.titleInStep}>
            <span>پرداخت</span>
          </div>
        </div>
      </a>

      {/* ^^^^^^^^^^ LEVEL TWO ^^^^^^^^^^ */}

      {/* LINE 1 */}
      <div className={styles.line}>
        <div className={`${line2} `}></div>
      </div>

      {/* LEVEL THREE */}
      <a href="">
        <div className={`${styles.step_item} ${step3}`}>
          <div className={styles.titleInStep}>
            <span>اتمام خرید </span>
          </div>
        </div>
      </a>
    </div>
  );
}
