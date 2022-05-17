// node libraries
import React, { useState } from "react";

// components
import InputUrl from "../../../containers/liveEdit/InputUrl";
import InputPicture from "../../../containers/liveEdit/InputPicture";
// style
import styles from "./HeroSlides.module.scss";

// type============1
//  ratio========2/1
function Sm_HeroSlides({ setImageSrc, id, data }) {
  const [wichSlide, setWichSlide] = useState(1);

  return (
    <div className={styles.content}>
      <div className={styles.slider}>
        <div className={styles.right}>
          <div className={styles.counter_number}>
            {`${wichSlide}/`}
            <span style={{ fontSize: "15px" }}>۵</span>
          </div>
          <div
            onClick={() => {
              if (wichSlide !== 1) {
                setWichSlide((el) => el - 1);
              }
            }}
            className={styles.prev}
          >
            &#10094;
          </div>
          <div
            onClick={() => {
              if (wichSlide !== 5) {
                setWichSlide((el) => el + 1);
              }
            }}
            className={styles.next}
          >
            &#10095;
          </div>
          {wichSlide && (
            <div>
              <div className={styles.icon_change_pic}>
                <InputPicture
                  setImageSrc={setImageSrc}
                  id={id}
                  order={wichSlide - 1}
                  ratio={2}
                />
              </div>
              <div className={styles.icon_change_url}>
                <InputUrl id={id} order={wichSlide - 1} />
              </div>
              {data[wichSlide - 1]?.title && (
                <div className={styles.titleUrl}>
                  <span>{data[wichSlide - 1]?.title}</span>
                </div>
              )}
              <img
                src={
                  data[wichSlide - 1]?.image
                    ? data[wichSlide - 1].image
                    : "/image/sample/2_1.jpg"
                }
                alt=""
              />
            </div>
          )}
        </div>
        <div className={styles.left}>
          <div className={styles.top}>
            <div className={styles.holderPic}>
              <img
                src={data[5]?.image ? data[5].image : "/image/sample/2_1_M.jpg"}
                alt=""
              />
            </div>
            <div className={styles.icon_change_pic}>
              <InputPicture
                setImageSrc={setImageSrc}
                id={id}
                order={5}
                ratio={2}
              />
            </div>
            <div className={styles.icon_change_url}>
              <InputUrl id={id} order={5} />
            </div>
            {data[5]?.title && (
              <div className={styles.titleUrl}>
                <span>{data[5]?.title}</span>
              </div>
            )}
          </div>
          <div className={styles.bottom}>
            <div className={styles.holderPic}>
              <img
                src={data[6]?.image ? data[6].image : "/image/sample/2_1_M.jpg"}
                alt=""
              />
            </div>
            <div className={styles.icon_change_pic}>
              <InputPicture setImageSrc={setImageSrc} id={id} order={6} />
            </div>

            <div className={styles.icon_change_url}>
              <InputUrl id={id} order={6} />
            </div>
            {data[6]?.title && (
              <div className={styles.titleUrl}>
                <span>{data[6]?.title}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sm_HeroSlides;
