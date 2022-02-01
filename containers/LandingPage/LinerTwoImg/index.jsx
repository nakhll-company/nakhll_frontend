import React, { useEffect, useState } from "react";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
import Link from 'next/link';
import styles from "./LinerTwoImg.module.scss";

function LinerTwoImg({ nextApi_LinerTwoImg }) {
  const [dataLinerTwoImg, setDataLinerTwoImg] = useState([]);

  useEffect(async () => {
    try {
      let response = await ApiRegister().apiRequest(
        null,
        "get",
        nextApi_LinerTwoImg,
        true,
        {}
      );
      if (response.status === 200) {
        setDataLinerTwoImg(response.data);
      }
    } catch (e) { }
  }, []);

  return (
    <>
      {dataLinerTwoImg.length >= 2 && (
        <div className="container">
          <aside className={styles.section}>
            <Link href={dataLinerTwoImg[0].url}>
              <a
                title={dataLinerTwoImg[0].description}
                className={styles.one}
              >
                <img
                  src={dataLinerTwoImg[0].image}
                  loading="lazy"
                  alt={dataLinerTwoImg[0].title}
                />
              </a>
            </Link>
            <Link href={dataLinerTwoImg[1].url}>
              <a
                title={dataLinerTwoImg[1].description}
                className={styles.two}
              >
                <img
                  src={dataLinerTwoImg[1].image}
                  loading="lazy"
                  alt={dataLinerTwoImg[1].title}
                />
              </a>
            </Link>
          </aside>
        </div>
      )}
    </>
  );
}

export default LinerTwoImg;
