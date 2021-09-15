import React from "react";
import styles from "./WoLoading.module.scss";

export const WoLoading = () => {
  return (
    <div className={styles.container_Loading}>
      <div className={styles.parent_loading}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <h3 className={styles.text}>بازار نخل</h3>
      </div>
    </div>
  );
};
