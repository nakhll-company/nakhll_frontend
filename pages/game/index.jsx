import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./game.module.scss";

function index() {

  return (
    <>
      <div className={styles.onePage}>
        <Image src="/image/game/main.jpg" layout="fill"
          objectFit="cover"
        // quality={30}
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
