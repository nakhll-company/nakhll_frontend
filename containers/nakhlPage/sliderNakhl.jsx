import React from "react";
// node libraries
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// style
import s from "./sliderNakhl.module.scss";

SwiperCore.use([Pagination]);
const data = [
  { image: "/image/slideNakhl.jpg", url: "" },
  { image: "/image/slideNakhl.jpg", url: "" },
  { image: "/image/slideNakhl.jpg", url: "" },
  { image: "/image/slideNakhl.jpg", url: "" },
  { image: "/image/slideNakhl.jpg", url: "" },
];
function SliderNakhl() {
  return (
    <div className={`${s.container} container`}>
      <Swiper pagination={true} spaceBetween={20} slidesPerView={1}>
        {data.map((slider, index) => {
          if (slider.image !== "") {
            return (
              <SwiperSlide key={index}>
                <Link href={slider.url}>
                  <a>
                    <Image
                      className={s.image}
                      layout="responsive"
                      width={400}
                      height={100}
                      src={slider.image}
                      alt="بنر"
                    />
                  </a>
                </Link>
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </div>
  );
}

export default SliderNakhl;
