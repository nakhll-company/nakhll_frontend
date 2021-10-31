import React, { useEffect, useRef } from "react";
import styles from "./game.module.scss";
import { gsap, Power3 } from "gsap";
import Link from "next/link";
function index(props) {
  let tl = new gsap.timeline();
  let all = useRef(null);
  let btn = useRef(null);
  let btn2 = useRef(null);
  useEffect(() => {
    // for Animation
    tl.from(all, {
      opacity: 0,
      duration: 2,
    })
      .from(btn, { x: 200 })
      .from(btn2, { x: -200 });
  }, []);
  return (
    <>
      <div ref={(el) => (all = el)} className={styles.onePage}>
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
