import st from "./aboutMe.module.scss";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";

function Sm_AboutMe() {
  const an1 = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: an1.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../public/lottie/dinoDance.json"),

      //   path: "./lottie/animation.json",
    });
  }, []);
  return (
    <>
      <div className={st.wrapper}>
        <div ref={an1} className={st.animation}></div>
        <span className={st.title}>درباره ما</span>
        <span className={st.content}>
          درباره حجره خود بنویسید تا دیگران از داستان کسب و کار شما باخبر بشوند
        </span>
      </div>
    </>
  );
}

export default Sm_AboutMe;
