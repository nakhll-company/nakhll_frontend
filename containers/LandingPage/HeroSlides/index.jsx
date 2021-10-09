import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

import styles from "./HeroSlides.module.scss";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
function HeroSlides({ nextApi_HeroSlides }) {
  console.log("Render :>> ", "Render_HeroSlides");
  const [dataHeroSlides, setDataHeroSlides] = useState([]);

  useEffect(async () => {
    console.log("Run One :>> ", "Run One");
    try {
      let response = await ApiRegister().apiRequest(
        null,
        "get",
        nextApi_HeroSlides,
        true,
        {}
      );
      if (response.status === 200) {
        setDataHeroSlides(response.data);
      }
    } catch (e) {
      console.log("rrrr :>> ", e);
    }
  }, []);

  return (
    <div className="container  ">
      <div className={`row ${styles.slide}`}>
        <div className={`col-md-8 ${styles.righter}`}>
          <Swiper pagination={true} spaceBetween={50} slidesPerView={1}>
            {dataHeroSlides.map((slider, index) => (
              <SwiperSlide key={index}>
                <a href={slider.url}>
                  <img src={slider.image} alt="بنر" />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={`col-md-4  ${styles.lefter}  d-none d-md-block`}>
          <img src="/image/slide/slideLeft2.jpg" alt="" />
          <img src="/image/slide/slidLeft.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeroSlides;
