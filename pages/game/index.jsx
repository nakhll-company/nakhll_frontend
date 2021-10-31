import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./game.module.scss";
function index() {
  // gsap
  // let tl = new gsap.timeline();
  // let btn = useRef(null);
  // let all = useRef(null)
  // useEffect(() => {
  // for Animation
  // tl.from(all, {
  //   opacity: 0,
  //   duration: 1,
  // }).from(btn, {
  //   opacity: 0,
  //   scale: 0,
  //   ease: "back",
  // })
  // }, []);

  return (
    <>
      <div className={styles.onePage}>
        <Image src="/image/game/main.jpg" layout="fill"
          objectFit="cover"
          quality={10}
        />
        <Link href="/game/two">
          <a>
            <div className={styles.btntop}>
              <button>شروع</button>
            </div>
          </a>
        </Link>
        <Link href="/game/two">
          <a>
            <div className={styles.btnbottom}>
              <button>شروع</button>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
}

export default index;
