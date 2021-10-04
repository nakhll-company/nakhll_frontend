import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Confetti from "react-confetti";
// styles
import styles from "./success.module.scss";

const success = () => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const confettiRef = useRef(null);
  useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
  }, []);

  return (
    <>
      <div className={styles.container} ref={confettiRef}>
        <div className={styles.content}>
          <Image
            src="/image/sucsses.webp"
            alt="Picture of the author"
            width={400}
            height={400}
            data-toggle="tooltip"
            data-placement="bottom"
            title=""
          />
          <h3 className={styles.text}>عملیات خرید با موفقیت انجام شد.</h3>
          <Confetti width={width} height={height} />
        </div>
      </div>
    </>
  );
};

export default success;
