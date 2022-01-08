import st from "./video.module.scss";
import lottie from "lottie-web";
import { useEffect, useState } from "react";
import { useRef } from "react";

import Script from "next/script";

function Video({ data }) {
  const video = data.data[0].video;
  const [videoAparat, setVideoAparat] = useState({ id: "", src: "" });

  const an1 = useRef(null);
  useEffect(() => {
    let id = video.substring(video.indexOf("id=") + 4, video.indexOf(">") - 1);

    let src = video.substring(
      video.indexOf('src="') + 5,
      video.indexOf("</script>") - 2
    );
    let indexStartId = video.indexOf("id=");

    let indexStartScript = video.indexOf('src="');

    if (indexStartId !== "-1" || indexStartScript !== "-1") {
      setVideoAparat({ id: id, src: src });
    }
  }, []);
  useEffect(() => {
    if (videoAparat.id !== "") {
      lottie.loadAnimation({
        container: an1.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../../public/lottie/bacV4.json"),
      });
    }
  }, [videoAparat]);
  return (
    <>
      {videoAparat.id !== "" && (
        <div className={st.wrapper}>
          <div ref={an1} className={st.animation}></div>
          <div className={st.wrap_video}>
            <div id={videoAparat.id} className={st.video}>
              <Script strategy="lazyOnload" src={`${videoAparat.src}`} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Video;
