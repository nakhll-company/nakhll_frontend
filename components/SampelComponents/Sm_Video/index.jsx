import st from "./video.module.scss";
import lottie from "lottie-web";
import { useEffect, useState } from "react";
import { useRef } from "react";

import Script from "next/script";
import InputUrl from "../../../containers/liveEdit/InputUrl";

function Sm_Video({ id }) {
  const [showInputVedio, setShowInputVedio] = useState(false);
  const an1 = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: an1.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../public/lottie/watchVideo.json"),
    });
  }, []);
  return (
    <>
      <div className={st.wrapper}>
        <div className={st.icon_change_url}>
          <div className={st.wrap_icon}>
            <InputUrl id={id} order={0} />
            {/* <i className="fas fa-video"></i> */}
          </div>
        </div>
        <div ref={an1} className={st.animation}></div>
        <div id="76822050591" className={st.wrap_video}>
          <div ref={an1} className={st.video}>
            {/* <Script src="https://www.aparat.com/embed/B6lLS?data[rnddiv]=76822050591&data[responsive]=yes" /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sm_Video;
