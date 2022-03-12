import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import s from "./selers.module.scss";

function Selers() {
  const [audio, setAudio] = useState();
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    setAudio(new Audio("/audio/milad.mp3"));
  }, []);

  useEffect(() => {
    console.log("audio :>> ", audio.currentTime);
  }, [audio]);

  const playMusic = () => {
    console.log("duration :>> ", audio.played);
    if (!playing) {
      audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  };
  const cartSeller = (
    <div className={s.selerContainer}>
      <div className={s.content}>
        <div className={s.header}>
          <div className={s.image}></div>
          <div className={s.title}>
            <h5>نیل مارکت</h5>
            <h5>سید مهدی صمدانی</h5>
          </div>
          <div className={s.medal}>
            <Image
              layout="fixed"
              width={80}
              height={80}
              src="/icons/gold.svg"
              alt="icon"
            />
          </div>
        </div>
        <div className={s.images}>
          <div className={s.imageContainer}>
            <Image
              className={s.imageProduct}
              alt="m"
              src="/image/productTwo.jpg"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
          <div className={s.imageContainer}>
            <Image
              className={s.imageProduct}
              alt="m"
              src="/image/productTwo.jpg"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
          <div className={s.imageContainer}>
            <Image
              className={s.imageProduct}
              alt="m"
              src="/image/productTwo.jpg"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
          <div className={s.imageContainer}>
            <Image
              className={s.imageProduct}
              alt="m"
              src="/image/productTwo.jpg"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
      <div className={s.audioContainer}>
        <div className={s.wave}>milad</div>
        <div className={s.palyer}>
          <button className={s.playBtn} onClick={playMusic}>
            {/* #ced7dc */}
            {/* #124d81 */}
            {!playing ? (
              <AiFillPlayCircle color="#124d81" size={35} />
            ) : (
              <AiFillPauseCircle color="#ced7dc" size={35} />
            )}
          </button>
          <h5>داستان این کسب و کار</h5>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <div className={s.titlePart}>
        <h3>فروشندگان برتر اسفندماه</h3>
      </div>
      <div className={s.container}>
        {cartSeller}
        {cartSeller}
        {cartSeller}
      </div>
    </>
  );
}

export default Selers;
