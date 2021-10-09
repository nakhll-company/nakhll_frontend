import React, { useEffect, useState } from "react";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
import styles from "./LinerOneImg.module.scss";

function LinerOneImg({ nextApi_LinerOneImg }) {
  const [dataLinerOneImg, setDataLinerOneImg] = useState([]);
  const _Call_Products_HeroSlides = async () => {
    try {
      let response = await ApiRegister().apiRequest(
        null,
        "get",
        nextApi_LinerOneImg,
        true,
        {}
      );
      if (response.status === 200) {
        setDataLinerOneImg(response.data);
        console.log("response.data :>> ", response.data);
      }
    } catch (e) {
      console.log("rrrr :>> ", e);
    }
  };
  useEffect(() => {
    _Call_Products_HeroSlides();
  }, []);
  return (
    <>
      {dataLinerOneImg.length > 0 && (
        <div className={`${styles.linearImages} container`}>
          <div className="row ">
            <div className={`col-12  ${styles.righter}`}>
              <a href={dataLinerOneImg[0].url}>
                <img
                  src={dataLinerOneImg[0].image}
                  alt={dataLinerOneImg[0].title}
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LinerOneImg;
