import React from "react";
import Link from 'next/link';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

import styles from "./HeroSlides.module.scss";

function HeroSlides({ dataHeroSlides }) {
  return (
    <div style={{ marginTop: "5px" }} className="container ">
      <div className={`row ${styles.slide}`}>
        <div className={`col-12 col-md-8 ${styles.righter}`}>
          <Swiper pagination={true} spaceBetween={20} slidesPerView={1}>
            {dataHeroSlides.map((slider, index) => (
              <SwiperSlide key={index}>
                <Link href={slider.url}>
                  <a>
                    <img src={slider.image} alt="بنر" />
                  </a>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={`col-md-4  ${styles.lefter}  d-none d-md-flex`}>
          <img src="/image/slide/slideLeft2.jpg" alt="" />
          <img src="/image/slide/slidLeft.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeroSlides;
