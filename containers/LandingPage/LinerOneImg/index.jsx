import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./LinerOneImg.module.scss";

function LinerOneImg({ dataLinerOneImg }) {
  return (
    <Fragment key={Math.random() + 3}>
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
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default LinerOneImg;
