import React from "react";
import Link from "next/link";
import styles from "./LinerThreeImg.module.scss";

function LinerThreeImg({ dataLinerThreeImg }) {
  return (
    <>
      {dataLinerThreeImg.length >= 3 && (
        <>
          {/* for mobile */}
          <div className="container d-lg-none">
            <div className={styles.topImage}>
              <Link href={dataLinerThreeImg[0].url}>
                <a title={dataLinerThreeImg[0].description}>
                  <img
                    src={dataLinerThreeImg[0].image}
                    alt={dataLinerThreeImg[0].title}
                  />
                </a>
              </Link>
            </div>
            <aside className={styles.section}>
              <div className="col-6">
                <Link href={dataLinerThreeImg[1].url}>
                  <a
                    title={dataLinerThreeImg[1].description}
                    className={styles.one}
                  >
                    <img
                      src={dataLinerThreeImg[1].image}
                      loading="lazy"
                      alt={dataLinerThreeImg[1].title}
                    />
                  </a>
                </Link>
              </div>
              <div className="col-6">
                <Link href={dataLinerThreeImg[2].url}>
                  <a
                    title={dataLinerThreeImg[2].description}
                    className={styles.two}
                  >
                    <img
                      src={dataLinerThreeImg[2].image}
                      loading="lazy"
                      alt={dataLinerThreeImg[2].title}
                    />
                  </a>
                </Link>
              </div>
            </aside>
          </div>

          {/* for Desktop */}
          <div className="container d-none d-lg-block">
            <div className={`${styles.parent}  row`}>
              <div className="col-5">
                <Link href={dataLinerThreeImg[0].url}>
                  <a
                    title={dataLinerThreeImg[0].description}
                    className={styles.right_img}
                  >
                    <img
                      src={dataLinerThreeImg[0].image}
                      alt={dataLinerThreeImg[0].title}
                    />
                  </a>
                </Link>
              </div>
              <div className={`${styles.left_side} col-7`}>
                <div className="col-6">
                  <Link href={dataLinerThreeImg[1].url}>
                    <a
                      title={dataLinerThreeImg[1].description}
                      className={styles.left_image}
                    >
                      <img
                        src={dataLinerThreeImg[1].image}
                        loading="lazy"
                        alt={dataLinerThreeImg[1].title}
                      />
                    </a>
                  </Link>
                </div>
                <div className="col-6">
                  <Link href={dataLinerThreeImg[2].url}>
                    <a
                      title={dataLinerThreeImg[2].description}
                      className={styles.left_image}
                    >
                      <img
                        src={dataLinerThreeImg[2].image}
                        loading="lazy"
                        alt={dataLinerThreeImg[2].title}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default LinerThreeImg;
