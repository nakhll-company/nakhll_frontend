import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./game.module.scss";

function index(props) {

  return (
    <>
      <div className={styles.onePage}>
        <Image src="/image/game/two.jpg" layout="fill"
          objectFit="cover"
        // quality={10}
        />
        <div className={styles.wrap}>
          <Link href="/game/three">
            <a>
              <div className={styles.btnYes}>
                <button>بله</button>
              </div>
            </a>
          </Link>
          <Link href="/game/specialDiscount">
            <a>
              <div className={styles.btnNo}>
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
