import React, { useEffect, useRef, useState } from "react";

// gsap
import { gsap } from "gsap";

import Sm_HeroSlides_Fix from "../../../components/SampelFixed/HeroSlides";
import Sm_LinerFourImg_Fix from "../../../components/SampelFixed/Sm_LinerFourImg";
import Sm_LinerOneImg_Fix from "../../../components/SampelFixed/Sm_LinerOneImg";
import Sm_LinerProducts_Fix from "../../../components/SampelFixed/Sm_LinerProducts";
import Sm_LinerThreeImg_Fix from "../../../components/SampelFixed/Sm_LinerThreeImg";
import Sm_LinerTwoImg_Fix from "../../../components/SampelFixed/Sm_LinerTwoImg";
import lottie from "lottie-web";
import styles from "./ListComponent.module.scss";
import AboutMe_Fix from "../../../components/SampelFixed/Sm_AboutMe";
import VipProducts from "../../LandingPage/VipProducts";

function ListComponent({ _handel_add_component }) {
  // gsap
  const [numSec, setNumSec] = useState(0);
  const tl = new gsap.timeline();

  // Ref
  let partOne = useRef(null);
  let partTwo = useRef(null);
  let partThree = useRef(null);
  let partFour = useRef(null);
  let partFive = useRef(null);
  let partSix = useRef(null);
  const partNine = useRef(null);
  const partTen = useRef(null);
  const partEleven = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: partNine.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../public/lottie/wecoverSkel.json"),

      //   path: "./lottie/animation.json",
    });

    lottie.loadAnimation({
      container: partTen.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../public/lottie/galeryRotate.json"),

      //   path: "./lottie/animation.json",
    });
    lottie.loadAnimation({
      container: partEleven.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../public/lottie/videoDes.json"),

      //   path: "./lottie/animation.json",
    });

    tl.from(partOne, {
      opacity: 0,
      scale: 0,
      ease: "back",
      duration: 0.8,
    })
      .from(partTwo, { opacity: 0, scale: 0, ease: "back", duration: 0.3 })
      .from(partThree, { opacity: 0, scale: 0, ease: "back", duration: 0.3 })
      .from(partFour, { opacity: 0, scale: 0, ease: "back", duration: 0.3 })
      .from(partFive, { opacity: 0, scale: 0, ease: "back", duration: 0.3 })
      .from(partSix, { opacity: 0, scale: 0, ease: "back", duration: 0.3 });
  }, []);

  return (
    <>
      <div className={styles.parent}>
        <div
          className={styles.holderItems}
          onClick={() => _handel_add_component(1)}
          ref={(el) => (partOne = el)}
        >
          <Sm_HeroSlides_Fix />
          {/* <span>کامپوننت اسلایدر</span> */}
          <div className={styles.cover}></div>
        </div>
        <div
          className={styles.holderItems}
          onClick={() => _handel_add_component(2)}
          ref={(el) => (partTwo = el)}
        >
          <Sm_LinerOneImg_Fix />
          {/* <span>بنر تکی</span> */}
          <div className={styles.cover}></div>
        </div>
        <div
          className={styles.holderItems}
          onClick={() => _handel_add_component(3)}
          ref={(el) => (partThree = el)}
        >
          <Sm_LinerTwoImg_Fix />
          {/* <span>بنر دوتایی</span> */}
          <div className={styles.cover}></div>
        </div>
        <div
          className={styles.holderItems}
          onClick={() => _handel_add_component(4)}
          ref={(el) => (partFour = el)}
        >
          <Sm_LinerThreeImg_Fix />
          {/* <span>بنر سه تایی</span> */}
          <div className={styles.cover}></div>
        </div>

        <div
          className={styles.holderItems}
          onClick={() => _handel_add_component(5)}
          ref={(el) => (partFive = el)}
        >
          {/* <span style={{ color: "red" }}>بنر چهارتایی</span> */}
          <Sm_LinerFourImg_Fix />
          <div className={styles.cover}></div>
        </div>
        <div
          className={styles.holderItems}
          onClick={() => _handel_add_component(6)}
          ref={(el) => (partSix = el)}
        >
          <Sm_LinerProducts_Fix />
          {/* <span>لیست</span> */}
          <div className={styles.cover}></div>
        </div>
        <div
          className={styles.holderItems}
          onClick={() => _handel_add_component(8)}
          ref={(el) => (partSix = el)}
        >
          <AboutMe_Fix />

          <div className={styles.cover}></div>
        </div>
        <div
          className={styles.holderItems}
          onClick={() => _handel_add_component(9)}
        >
          <div ref={partNine}></div>
          <div className={styles.cover}></div>
        </div>
        <div
          className={styles.holderItems}
          onClick={() => {
            if (numSec == 4) {
              alert("الان اضافه میشه");
              _handel_add_component(10);
            } else {
              setNumSec((e) => e + 1);
            }
          }}
        >
          {/* <div ref={partTen}></div> */}
          <div className={styles.cover}></div>
        </div>
        <div
          className={styles.holderItems}
          onClick={() => _handel_add_component(11)}
        >
          <div ref={partEleven}></div>
          <div className={styles.cover}></div>
        </div>
        <div
          className={styles.holderItems}
          onClick={() => {
            if (numSec == 4) {
              alert("الان اضافه میشه");
              _handel_add_component(13);
            } else {
              setNumSec((e) => e + 1);
            }
          }}
        >
          {/* <div ref={partTen}></div> */}
          <div className={styles.cover}></div>
        </div>
        <div style={{ marginTop: "30px" }}></div>
      </div>
    </>
  );
}

export default ListComponent;
