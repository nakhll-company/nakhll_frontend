import React from "react";
import styles from "./SuggestedValue.module.scss";
function SuggestedValue(props) {
  return (
    <aside className={styles.section}>
      <div className={styles.section_inner}>
        <div className={styles.container}>
          <a href="#">
            <div className={styles.img_one}>تحویل اکسپرس</div>
          </a>
          <a href="#">
            <div className={styles.img_two}>پرداخت در محل</div>
          </a>
          <a href="#">
            <div className={styles.img_three}>۷ روز ضمانت بازگشت</div>
          </a>
        </div>
      </div>
    </aside>
  );
}

export default SuggestedValue;
