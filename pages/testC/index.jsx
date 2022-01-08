import EmptyLayout from "../../components/layout/EmptyLayout";
import st from "./aboutMe.module.scss";
import lottie from "lottie-web";
import { useEffect } from "react";
import { useRef } from "react";
import Image from "next/image";
import Script from "next/script";

function Test() {
  const an1 = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: an1.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../public/lottie/bacV4.json"),
    });
  }, []);
  return (
    <>
      {false && (
        <div className={st.wrapper}>
          <div ref={an1} className={st.animation}></div>
          <div id="76822050591" className={st.wrap_video}>
            <div className={st.video}>
              {/* <Script src="https://www.aparat.com/embed/B6lLS?data[rnddiv]=76822050591&data[responsive]=yes" /> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Test;

Test.Layout = EmptyLayout;
