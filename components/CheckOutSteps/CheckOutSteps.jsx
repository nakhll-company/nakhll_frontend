// node libraries
import React from "react";
import Link from "next/link";
// style
import styles from "./CheckOutSteps.module.scss";

export default function CheckOutSteps({ step }) {
  let step1 = "";
  let step2 = "";
  let step3 = "";
  let line1 = "";
  let line2 = "";
  // FOR ASSIGN CSS FOR EACH STEP
  if (step == 1) {
    step1 = styles.active;
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
      <Link style={{ cursor: "pointer" }} href="" passHref>
        <div
          className={`${styles.step_item}  ${step1} `}
          style={{ cursor: "pointer" }}
        >
          <span className={`${styles.titleInStep}`}>اطلاعات ارسال</span>
        </div>
      </Link>
      <div className={styles.line}>
        <div className={`${line1} `}></div>
      </div>
      <Link href="" style={{ cursor: "pointer" }} passHref>
        <div
          style={{ cursor: "pointer" }}
          className={`${styles.step_item} ${step2}`}
        >
          <div className={styles.titleInStep}>
            <span>پرداخت</span>
          </div>
        </div>
      </Link>
      <div className={styles.line}>
        <div className={`${line2} `}></div>
      </div>
      <Link href="" style={{ cursor: "pointer" }} passHref>
        <div
          style={{ cursor: "pointer" }}
          className={`${styles.step_item} ${step3}`}
        >
          <div className={styles.titleInStep}>
            <span>اتمام خرید </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
