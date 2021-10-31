import React, { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";
import styles from "./game.module.scss";
import Link from "next/link";
function index(props) {
  let tl = new gsap.timeline();
  let box1 = useRef(null);
  let box2 = useRef(null);
  useEffect(() => {
    // for Animation
    tl.from(box1, {
      opacity: 0,
      duration: 3,
    }).from(box2, {
      opacity: 0,
      scale: 0,
      ease: "back",
      duration: 2,
      delay: 1,
    });
  }, []);
  return (
    <>
      <div className={styles.wrap}>
        <div ref={(el) => (box1 = el)} className={styles.onePage}></div>
        <div ref={(el) => (box2 = el)} className={styles.twoPage}></div>
      </div>
    </>
  );
}

export default index;
