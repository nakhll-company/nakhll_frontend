import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

import styles from "./HeroSlides.module.scss";

function HeroSlides({ dataHeroSlides }) {
  const userLog = useSelector((state) => state.User.userInfo);
  return (
    <div style={{ marginTop: "5px" }} className="container ">
      <div className={`row ${styles.slide}`}>
        <div className={`col-12 col-md-8 ${styles.righter}`}>
          <Swiper pagination={true} spaceBetween={20} slidesPerView={1}>
            {dataHeroSlides
              .slice(0, dataHeroSlides.length - 2)
              .map((slider, index) => (
                <SwiperSlide key={index}>
                  <Link
                    href={
                      slider.url === "https://nakhll.com/fp/store/create"
                        ? Object.keys(userLog).length > 0
                          ? slider.url
                          : "https://nakhll.com/accounts/get-phone/"
                        : slider.url
                    }
                  >
                    <a>
                      <img src={slider.image} alt="بنر" />
                    </a>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div className={`col-md-4  ${styles.lefter}  d-none d-md-flex`}>
          <Link href={dataHeroSlides[dataHeroSlides.length - 2].url}>
            <a>
              <img
                src={dataHeroSlides[dataHeroSlides.length - 2].image}
                alt={dataHeroSlides[dataHeroSlides.length - 2].title}
              />
            </a>
          </Link>
          <Link href={dataHeroSlides[dataHeroSlides.length - 1].url}>
            <a>
              <img
                src={dataHeroSlides[dataHeroSlides.length - 1].image}
                alt={dataHeroSlides[dataHeroSlides.length - 1].title}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSlides;
