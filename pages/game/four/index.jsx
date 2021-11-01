import React from "react";
import styles from "./game.module.scss";
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';

function index(props) {

  return (
    <>
      <div className={styles.onePage}>
        <Image src="/image/game/04.jpg" layout="fill"
          objectFit="cover"
        // quality={10}
        />
        <div id="58136310496">
          <Script id="one_script" src="https://www.aparat.com/embed/GbpMK?data[rnddiv]=58136310496&data[responsive]=yes&&recom=none" />
        </div>
        <Link href="/game/finish">
          <a>
            <button>فینال</button>
          </a>
        </Link>
      </div>
    </>
  );
}

export default index;
