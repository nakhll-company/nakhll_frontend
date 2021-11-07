import React from "react";
import InputPicture from "../../../containers/liveEdit/InputPicture";
import InputUrl from "../../../containers/liveEdit/InputUrl";
import styles from "./Sm_LinerFourImg.module.scss";

function Sm_LinerFourImg({ setImageSrc, id, data }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.wrapImg}>
        <div className={styles.icon_change_pic}>
          <InputPicture setImageSrc={setImageSrc} id={id} order={0} />
        </div>
        <div className={styles.icon_change_url}>
          <InputUrl id={id} order={0} />
        </div>
        {data[0].title && (
          <div className={styles.titleUrl}>
            <span>{data[0].title}</span>
          </div>
        )}
        <img
          src={data[0].src ? data[0].src : "/image/sample/main.jpg"}
          alt=""
        />
      </div>

      <div className={styles.wrapImg}>
        <div className={styles.icon_change_pic}>
          <InputPicture setImageSrc={setImageSrc} id={id} order={1} />
        </div>
        <div className={styles.icon_change_url}>
          <InputUrl id={id} order={1} />
        </div>
        {data[1].title && (
          <div className={styles.titleUrl}>
            <span>{data[1].title}</span>
          </div>
        )}
        <img
          src={data[1].src ? data[1].src : "/image/sample/linearOneImg2.jpg"}
          alt=""
        />
      </div>

      <div className={styles.wrapImg}>
        <div className={styles.icon_change_pic}>
          <InputPicture setImageSrc={setImageSrc} id={id} order={2} />
        </div>
        <div className={styles.icon_change_url}>
          <InputUrl id={id} order={2} />
        </div>
        {data[2].title && (
          <div className={styles.titleUrl}>
            <span>{data[2].title}</span>
          </div>
        )}
        <img
          src={data[2].src ? data[2].src : "/image/sample/sample.jpg"}
          alt=""
        />
      </div>

      <div className={styles.wrapImg}>
        <div className={styles.icon_change_pic}>
          <InputPicture setImageSrc={setImageSrc} id={id} order={3} />
        </div>
        <div className={styles.icon_change_url}>
          <InputUrl id={id} order={3} />
        </div>
        {data[3].title && (
          <div className={styles.titleUrl}>
            <span>{data[3].title}</span>
          </div>
        )}
        <img
          src={data[3].src ? data[3].src : "/image/sample/sample2.jpg"}
          alt=""
        />
      </div>
    </div>
  );
}

export default Sm_LinerFourImg;
