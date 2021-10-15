import React from "react";
import Link from 'next/link';
import styles from "./LinerFourImgMobile.module.scss";

function LinerFourImgMobile({ dataLinerFourImgMobile }) {
  return (
    <>
      {dataLinerFourImgMobile.length >= 4 && (
        <>
          <div className="container">
            <aside className={styles.section}>
              <Link href={dataLinerFourImgMobile[0].url}>
                <a
                  title={dataLinerFourImgMobile[0].description}
                  className={styles.one}
                >
                  <img
                    src={dataLinerFourImgMobile[0].image}
                    loading="lazy"
                    alt={dataLinerFourImgMobile[0].title}
                  />
                </a>
              </Link>
              <Link href={dataLinerFourImgMobile[1].url}>
                <a
                  title={dataLinerFourImgMobile[1].description}
                  className={styles.two}
                >
                  <img
                    src={dataLinerFourImgMobile[1].image}
                    loading="lazy"
                    alt={dataLinerFourImgMobile[1].title}
                  />
                </a>
              </Link>
            </aside>
            <aside className={styles.section}>
              <Link href={dataLinerFourImgMobile[3].url}>
                <a
                  title={dataLinerFourImgMobile[3].description}
                  className={styles.one}
                >
                  <img
                    src={dataLinerFourImgMobile[3].image}
                    loading="lazy"
                    alt={dataLinerFourImgMobile[3].title}
                  />
                </a>
              </Link>
              <Link href={dataLinerFourImgMobile[4].url}>
                <a
                  title={dataLinerFourImgMobile[4].description}
                  className={styles.two}
                >
                  <img
                    src={dataLinerFourImgMobile[4].image}
                    loading="lazy"
                    alt={dataLinerFourImgMobile[4].title}
                  />
                </a>
              </Link>
            </aside>
          </div>
        </>
      )}
    </>
  );
}

export default LinerFourImgMobile;
