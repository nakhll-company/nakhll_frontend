import st from "./video.module.scss";

import { useEffect, useState } from "react";

import Script from "next/script";

function Video({ data }) {
  // const video = data.data[0].video;
  const [videoAparat, setVideoAparat] = useState(
    data.data[0].video ? data.data[0].video : { id: "", src: "" }
  );

  useEffect(() => {
    setVideoAparat(
      data.data[0].video ? data.data[0].video : { id: "", src: "" }
    );
  }, [data]);
  // useEffect(() => {
  //   let id = video.substring(video.indexOf("id=") + 4, video.indexOf(">") - 1);

  //   let src = video.substring(
  //     video.indexOf('src="') + 5,
  //     video.indexOf("</script>") - 2
  //   );
  //   let indexStartId = video.indexOf("id=");

  //   let indexStartScript = video.indexOf('src="');

  //   if (indexStartId !== "-1" || indexStartScript !== "-1") {
  //     setVideoAparat({ id: id, src: src });
  //   }
  // }, []);

  return (
    <>
      {videoAparat.id !== "" && (
        <div className={st.wrapper}>
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
