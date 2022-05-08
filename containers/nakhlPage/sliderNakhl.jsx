import React from "react";
// node libraries
import Link from "next/link";
import Image from "next/image";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// style
import s from "./sliderNakhl.module.scss";

SwiperCore.use([Pagination]);

function SliderNakhl({dataSliders}) {
  return (
    <div className={`${s.container} container`}>
      <Swiper pagination={true} spaceBetween={20} slidesPerView={1}>
        {dataSliders.map((slider, index) => {
          if (slider.image !== "") {
            return (
              <SwiperSlide key={index}>
                <Link href={slider.url}>
                  <a>
                    <div className={s.imageDesktop}>
                      <Image
                        className={s.image}
                        layout="responsive"
                        width={400}
                        height={100}
                        src={slider.image}
                        alt="بنر"
                      />
                    </div>
                    <div className={s.imageMobile}>
                      <Image
                        className={s.image}
                        layout="responsive"
                        width={200}
                        height={100}
                        src={slider.imageMobile}
                        alt="بنر"
                      />
                    </div>
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
