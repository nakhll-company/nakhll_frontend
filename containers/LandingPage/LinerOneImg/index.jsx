import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./LinerOneImg.module.scss";

function LinerOneImg({ dataLinerOneImg }) {
  return (
    <>
      {dataLinerOneImg && dataLinerOneImg.length > 0 && (
        <div className={`${styles.linearImages} container`}>
          <div className="row ">
            <div className={`  ${styles.righter}`}>
              <Link href={dataLinerOneImg[0].url}>
                <a>
                  <Image
                    layout="responsive"
                    width={600}
                    height={100}
                    src={dataLinerOneImg[0].image}
                    alt={dataLinerOneImg[0].title}
                  />
                </a>
              </Link>
            </div>
            {/* <div className={`col-12 d-md-none  ${styles.righter}`}>
              <Link href={dataLinerOneImg[0].url}>
                <a>
                  <Image
                    layout="responsive"
                    width={300}
                    height={100}
                    src={dataLinerOneImg[0].image}
                    alt={dataLinerOneImg[0].title}
                  />
                </a>
              </Link>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}

export default LinerOneImg;
