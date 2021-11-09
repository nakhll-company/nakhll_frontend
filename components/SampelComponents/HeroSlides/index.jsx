import React from "react";
import InputPicture from "../../../containers/liveEdit/InputPicture";
import InputUrl from "../../../containers/liveEdit/InputUrl";
import styles from "./HeroSlides.module.scss";

// type============1
//  ratio========2/1
function Sm_HeroSlides({ setImageSrc, id, data }) {
  return (
    <div className={styles.content}>
      <div className={styles.slider}>
        <div className={styles.right}>
          <div className={styles.icon_change_pic}>
            <InputPicture
              setImageSrc={setImageSrc}
              id={id}
              order={0}
              ratio={2}
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
            src={data[0].image ? data[0].image : "/image/sample/2_1.jpg"}
            alt=""
          />
        </div>
        <div className={styles.left}>
          <div className={styles.top}>
            <div className={styles.holderPic}>
              <img
                src={data[1].image ? data[1].image : "/image/sample/2_1_M.jpg"}
                alt=""
              />
            </div>
            <div className={styles.icon_change_pic}>
              <InputPicture
                setImageSrc={setImageSrc}
                id={id}
                order={1}
                ratio={2}
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
          </div>
          <div className={styles.bottom}>
            <div className={styles.holderPic}>
              <img
                src={data[2].image ? data[2].image : "/image/sample/2_1_M.jpg"}
                alt=""
              />
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sm_HeroSlides;
