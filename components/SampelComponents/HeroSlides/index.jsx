import React from "react";
import InputPicture from "../../../containers/liveEdit/InputPicture";
import InputUrl from "../../../containers/liveEdit/InputUrl";
import styles from "./HeroSlides.module.scss";

function Sm_HeroSlides({ setImageSrc, id, data }) {
  return (
    <div className={styles.content}>
      <div className={styles.slider}>
        <div className={styles.right}>
          <div className={styles.icon_change_pic}>
            <InputPicture setImageSrc={setImageSrc} id={id} order={0} />
          </div>
          <div className={styles.icon_change_url}>
            <InputUrl id={id} order={0} />
          </div>
          <img
            src={data[0].src ? data[0].src : "/image/sample/main.jpg"}
            alt=""
          />
        </div>
        <div className={styles.left}>
          <div className={styles.top}>
            <div className={styles.holderPic}>
              <img
                src={data[1].src ? data[1].src : "/image/sample/sample.jpg"}
                alt=""
              />
            </div>
            <div className={styles.icon_change_pic}>
              <InputPicture setImageSrc={setImageSrc} id={id} order={1} />
            </div>
            <div className={styles.icon_change_url}>
              <InputUrl id={id} order={1} />
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.holderPic}>
              <img
                src={data[2].src ? data[2].src : "/image/sample/sample2.jpg"}
                alt=""
              />
            </div>
            <div className={styles.icon_change_pic}>
              <InputPicture setImageSrc={setImageSrc} id={id} order={2} />
            </div>

            <div className={styles.icon_change_url}>
              <InputUrl id={id} order={2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sm_HeroSlides;
