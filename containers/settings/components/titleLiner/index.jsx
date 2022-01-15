import styles from "./titleLiner.module.scss";
import React from "react";
function TitleLiner({ title }) {
  console.log(`render`, "TitleLiner");
  return (
    <>
      <div className={styles.HeadName}>
        <h1 style={{ margin: "0px" }}>{title}</h1>
      </div>
    </>
  );
}

export default React.memo(TitleLiner);
