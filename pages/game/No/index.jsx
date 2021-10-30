import React, { useEffect, useRef } from "react";
import styles from "./game.module.scss";
import Link from "next/link";
function index(props) {
  let btn =useRef(null)
  let btn2 =useRef(null)
  return (
    <>
      <div className={styles.onePage}>
      <Link href="/game/four">
          <a>
            <div ref={(el) => (btn = el)} className={styles.btntop}>
              <button>بازگشت</button>
            </div>
          </a>
        </Link>
      
      </div>
      
    </>
  );
}

export default index;
