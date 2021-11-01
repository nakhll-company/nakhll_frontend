import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./game.module.scss";
import Link from "next/link";
import Image from 'next/image';
function index(props) {
  let tl = new gsap.timeline();
  let box2 = useRef(null);
  useEffect(() => {
    // for Animation
    tl.from(box2, {
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
        <div ref={(el) => (box2 = el)} className={styles.twoPage}>
          <Image src="/image/game/last.jpg" layout="fill"
            objectFit="cover"
            quality={10} />
          <Link href="https://nakhll.com/accounts/get-phone/">
            <a>
              تیله اول رو بدست بیار<br />
              کلیک کنید
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default index;
