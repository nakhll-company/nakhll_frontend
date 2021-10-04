import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

import styles from "./HeroSlides.module.scss";
function HeroSlides(props) {
  return (
    <div className="container  ">
      <div className={`row ${styles.slide}`}>
        <div className={`col-md-8 ${styles.righter}`}>
          <Swiper pagination={true} spaceBetween={50} slidesPerView={1}>
            <SwiperSlide>
              <img src="/image/slide/slid1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/image/slide/slid1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/image/slide/slid1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/image/slide/slid1.jpg" alt="" />
            </SwiperSlide>
            
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
