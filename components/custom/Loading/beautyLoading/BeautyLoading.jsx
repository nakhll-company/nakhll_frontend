import React from "react";
import styles from "./BeautyLoading.module.scss";
export const BeautyLoading = () => {
  return (
    <div className={styles.containerLoader}>
      <div className={styles.loader}>
        <span style={{ "--i": 0 }}></span>
        <span style={{ "--i": 1 }}></span>
        <span style={{ "--i": 2 }}></span>
        <span style={{ "--i": 3 }}></span>
        <span style={{ "--i": 4 }}></span>
        <span style={{ "--i": 5 }}></span>
        <span style={{ "--i": 6 }}></span>
      </div>
    </div>
  );
};
