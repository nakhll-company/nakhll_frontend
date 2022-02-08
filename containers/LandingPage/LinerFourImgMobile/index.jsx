import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./LinerFourImgMobile.module.scss";

function LinerFourImgMobile({ dataLinerFourImgMobile }) {
  return (
    <Fragment key={Math.random() + 2}>
      {dataLinerFourImgMobile && dataLinerFourImgMobile.length >= 4 && (
        <>
          <div className="container">
            <aside className={styles.section}>
              <Link href={dataLinerFourImgMobile[0].url}>
                <a
                  title={dataLinerFourImgMobile[0].description}
                  className={styles.one}
                >
                  <Image
                    layout="responsive"
                    width={400}
                    height={300}
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
                  <Image
                    layout="responsive"
                    width={400}
                    height={300}
                    src={dataLinerFourImgMobile[1].image}
                    loading="lazy"
                    alt={dataLinerFourImgMobile[1].title}
                  />
                </a>
              </Link>
            </aside>
            <aside className={styles.section}>
              <Link href={dataLinerFourImgMobile[2].url}>
                <a
                  title={dataLinerFourImgMobile[2].description}
                  className={styles.one}
                >
                  <Image
                    layout="responsive"
                    width={400}
                    height={300}
                    src={dataLinerFourImgMobile[2].image}
                    loading="lazy"
                    alt={dataLinerFourImgMobile[2].title}
                  />
                </a>
              </Link>
              <Link href={dataLinerFourImgMobile[3].url}>
                <a
                  title={dataLinerFourImgMobile[3].description}
                  className={styles.two}
                >
                  <Image
                    layout="responsive"
                    width={400}
                    height={300}
                    src={dataLinerFourImgMobile[3].image}
                    loading="lazy"
                    alt={dataLinerFourImgMobile[3].title}
                  />
                </a>
              </Link>
            </aside>
          </div>
        </>
      )}
    </Fragment>
  );
}

export default LinerFourImgMobile;
