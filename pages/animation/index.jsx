import st from "./animation.module.scss";
import lottie from "lottie-web";
import { useEffect } from "react";
import { useRef } from "react";

function index() {
  const an1 = useRef(null);
  const an2 = useRef(null);
  const an3 = useRef(null);
  const an4 = useRef(null);
  const an5 = useRef(null);
  const an6 = useRef(null);
  const an7 = useRef(null);
  const an8 = useRef(null);
  const an9 = useRef(null);
  const an10 = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: an1.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../public/lottie/an1.json"),

      //   path: "./lottie/animation.json",
    });
    lottie.loadAnimation({
      container: an2.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../public/lottie/an2.json"),

      //   path: "./lottie/animation.json",
    });
    lottie.loadAnimation({
      container: an3.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../public/lottie/an3.json"),

      //   path: "./lottie/animation.json",
    });
    lottie.loadAnimation({
      container: an4.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../public/lottie/an4.json"),

      //   path: "./lottie/animation.json",
    });
    lottie.loadAnimation({
      container: an5.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../public/lottie/an5.json"),

      //   path: "./lottie/animation.json",
    });
    lottie.loadAnimation({
      container: an6.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../public/lottie/an6.json"),

      //   path: "./lottie/animation.json",
    });
    lottie.loadAnimation({
      container: an7.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../public/lottie/an7.json"),

      //   path: "./lottie/animation.json",
    });
    lottie.loadAnimation({
      container: an8.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../public/lottie/an8.json"),

      //   path: "./lottie/animation.json",
    });
    lottie.loadAnimation({
      container: an9.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../public/lottie/an9.json"),

      //   path: "./lottie/animation.json",
    });
    lottie.loadAnimation({
      container: an10.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../public/lottie/an10.json"),

      //   path: "./lottie/animation.json",
    });
  }, []);
  return (
    <div className={st.container}>
      <div ref={an1}></div>
      <div ref={an2}></div>
      <div ref={an3}></div>
      <div ref={an4}></div>
      <div ref={an5}></div>
      <div ref={an6}></div>
      <div ref={an7}></div>
      <div ref={an8}></div>
      <div ref={an9}></div>
      <div ref={an10}></div>
    </div>
  );
}

export default index;
