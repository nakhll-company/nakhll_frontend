// node libraries
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from "react";
// method
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
// style
import styles from "./LinerTwoImg.module.scss";
import { http } from '../../../services/callApi/api';

function LinerTwoImg({ nextApi_LinerTwoImg }) {

  const [dataLinerTwoImg, setDataLinerTwoImg] = useState([]);

  useEffect(() => {
    async function fetchData() {
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
      } catch (e) { return false; }
    }
    fetchData();
  }, [nextApi_LinerTwoImg]);

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
                <Image
                  src={dataLinerTwoImg[0].image}
                  loading="lazy"
                  alt={dataLinerTwoImg[0].title}
                  width="100%"
                  height="100%"
                />
              </a>
            </Link>
            <Link href={dataLinerTwoImg[1].url}>
              <a
                title={dataLinerTwoImg[1].description}
                className={styles.two}
              >
                <Image
                  src={dataLinerTwoImg[1].image}
                  loading="lazy"
                  alt={dataLinerTwoImg[1].title}
                  width="100%"
                  height="100%"
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
