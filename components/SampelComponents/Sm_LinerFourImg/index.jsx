// node libraries
import React from "react";
// components
import InputUrl from "../../../containers/liveEdit/InputUrl";
import InputPicture from "../../../containers/liveEdit/InputPicture";
// style
import styles from "./Sm_LinerFourImg.module.scss";

// type==============5
// aspect=================1.33

function SmLinerFourImg({ setImageSrc, id, data }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.wrapImg}>
        <div className={styles.icon_change_pic}>
          <InputPicture
            setImageSrc={setImageSrc}
            id={id}
            order={0}
            ratio={1.33}
          />
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
          src={data[0].image ? data[0].image : "/image/sample/4_3.jpg"}
          alt=""
        />
      </div>

      <div className={styles.wrapImg}>
        <div className={styles.icon_change_pic}>
          <InputPicture
            setImageSrc={setImageSrc}
            id={id}
            order={1}
            ratio={1.33}
          />
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
          src={data[1].image ? data[1].image : "/image/sample/4_3.jpg"}
          alt=""
        />
      </div>

      <div className={styles.wrapImg}>
        <div className={styles.icon_change_pic}>
          <InputPicture
            setImageSrc={setImageSrc}
            id={id}
            order={2}
            ratio={1.33}
          />
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
          src={data[2].image ? data[2].image : "/image/sample/4_3.jpg"}
          alt=""
        />
      </div>

      <div className={styles.wrapImg}>
        <div className={styles.icon_change_pic}>
          <InputPicture
            setImageSrc={setImageSrc}
            id={id}
            order={3}
            ratio={1.33}
          />
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
          src={data[3].image ? data[3].image : "/image/sample/4_3.jpg"}
          alt=""
        />
      </div>
    </div>
  );
}

export default SmLinerFourImg;
