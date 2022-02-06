// node libraries
import { useRef } from "react";
import lottie from "lottie-web";
import { useEffect } from "react";
// components
import InputUrl from "../../../containers/liveEdit/InputUrl";
// style
import st from "./video.module.scss";

function Sm_Video({ id, data }) {

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
            {data[0].title && (
              <div className={st.titleUrl}>
                <span>{data[0].title}</span>
              </div>
            )}
          </div>
        </div>
        <div ref={an1} className={st.animation}></div>
        <div id="76822050591" className={st.wrap_video}>
          <div ref={an1} className={st.video}>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sm_Video;
