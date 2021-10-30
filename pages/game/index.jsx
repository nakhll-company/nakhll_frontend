import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap, Power3 } from "gsap";
import styles from "./game.module.scss";
function index(props) {
  // gsap
  let tl = new gsap.timeline();
  let btn = useRef(null);
  let all=useRef(null)
  useEffect(() => {
    // for Animation
    tl.from(all,{
      opacity:0,
      duration:1,
    }).from(btn, { opacity: 0,
      scale: 0,
      ease: "back",
       })
  }, []);

  return (
    <>
      <div ref={(el)=>(all=el)} className={styles.onePage}>
        <Link href="/game/two">
          <a>
            <div ref={(el) => (btn = el)} className={styles.btntop}>
              <button>شروع</button>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
}

export default index;
