import React from "react";
import styles from "./HolderIcon.module.scss";
function HolderIcon(props) {
  return (
    <div className={styles.loader}>
      <span></span>
      <div></div>
    </div>
  );
}

export default HolderIcon;
