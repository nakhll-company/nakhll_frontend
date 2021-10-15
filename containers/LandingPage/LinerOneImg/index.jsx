import React from "react";
import Link from 'next/link';
import styles from "./LinerOneImg.module.scss";

function LinerOneImg({ dataLinerOneImg }) {
  return (
    <>
      {dataLinerOneImg.length > 0 && (
        <div className={`${styles.linearImages} container`}>
          <div className="row ">
            <div className={`col-12  ${styles.righter}`}>
              <Link href={dataLinerOneImg[0].url}>
                <a>
                  <img
                    src={dataLinerOneImg[0].image}
                    alt={dataLinerOneImg[0].title}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LinerOneImg;
