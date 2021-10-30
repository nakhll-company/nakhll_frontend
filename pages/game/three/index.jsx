import React, { useEffect, useRef } from "react";
import styles from "./game.module.scss";
import Link from "next/link";
function index(props) {
  let btn =useRef(null)
  let btn2 =useRef(null)
  return (
    <>
      <div className={styles.onePage}>
      <div className={styles.wrap}>
        <Link href="/game/two">
            <a>
              <div ref={(el) => (btn = el)} className={styles.btnYes}>
                <button>بله</button>
              </div>
            </a>
          </Link>
          <Link href="/game/two">
            <a>
              <div ref={(el) => (btn2 = el)} className={styles.btnNo}>
                <button>خیر</button>
              </div>
            </a>
          </Link>
      </div>

      </div>
    </>
  );
}

export default index;
