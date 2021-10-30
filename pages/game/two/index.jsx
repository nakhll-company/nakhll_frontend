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
        <Link href="/game/three">
            <a>
              <div ref={(el) => (btn = el)} className={styles.btnYes}>
                <button>بله</button>
              </div>
            </a>
          </Link>
          <Link href="/product/?ap=https://nakhll.com/api/v1/product/most-sold/">
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
