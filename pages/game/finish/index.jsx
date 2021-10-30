import React, { useEffect, useRef } from "react";
import styles from "./game.module.scss";
import Link from "next/link";
function index(props) {
  let btn =useRef(null)
  let btn2 =useRef(null)
  return (
    <>
      <div className={styles.onePage}>
      
      </div>
      <div className={styles.twoPage}>
      
      </div>
      <div className={styles.threePage}>
      
      </div>
    </>
  );
}

export default index;
