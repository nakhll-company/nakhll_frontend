import React from "react";
import Link from "next/link";
import Image from "next/image";
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
                  <Image
                    layout="responsive"
                    width={200}
                    height={100}
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
                    <Image
                      layout="responsive"
                      width={400}
                      height={300}
                      src={dataLinerThreeImg[1].image}
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
                    <Image
                      layout="responsive"
                      width={400}
                      height={300}
                      src={dataLinerThreeImg[2].image}
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
              <div style={{ padding: "0px" }} className="col-5">
                <Link href={dataLinerThreeImg[0].url}>
                  <a
                    title={dataLinerThreeImg[0].description}
                    className={styles.right_img}
                  >
                    <Image
                      layout="responsive"
                      width={200}
                      height={100}
                      src={dataLinerThreeImg[0].image}
                      alt={dataLinerThreeImg[0].title}
                    />
                  </a>
                </Link>
              </div>
              <div
                style={{ paddingRight: "22px" }}
                className={`${styles.left_side} col-7`}
              >
                <div style={{ marginLeft: "6px" }} className="col-6">
                  <Link href={dataLinerThreeImg[1].url}>
                    <a
                      title={dataLinerThreeImg[1].description}
                      className={styles.left_image}
                    >
                      <Image
                        layout="responsive"
                        width={400}
                        height={300}
                        src={dataLinerThreeImg[1].image}
                        alt={dataLinerThreeImg[1].title}
                      />
                    </a>
                  </Link>
                </div>
                <div style={{ marginRight: "6px" }} className="col-6">
                  <Link href={dataLinerThreeImg[2].url}>
                    <a
                      title={dataLinerThreeImg[2].description}
                      className={styles.left_image}
                    >
                      <Image
                        layout="responsive"
                        width={400}
                        height={300}
                        src={dataLinerThreeImg[2].image}
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
