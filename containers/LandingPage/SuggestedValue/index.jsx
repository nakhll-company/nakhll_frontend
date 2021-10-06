import React from "react";
import styles from "./SuggestedValue.module.scss";
function SuggestedValue(props) {
  return (
    <aside className={styles.section}>
      <div className={styles.section_inner}>
        <div className={styles.container}>
          <a href="#">
            <div className={styles.img_one}>
              <span>تسویه تا ۷۲ ساعت</span>
            </div>
          </a>
          <a href="#">
            <div className={styles.img_two}>
              <span>فروشگاه آنلاین</span>
            </div>
          </a>
        </div>
      </div>
    </aside>
  );
}

export default SuggestedValue;
