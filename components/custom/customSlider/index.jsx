import React from "react";
import { Fragment } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation]);

const CustomSlider = ({
  data = [],
  slides320,
  slides576,
  slides992,
  slides1200,
  title,
  ...otherSwiperProps
}) => {
  return (
    <Fragment>
      <div className="product_row">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: slides320 || 2,
            },
            576: {
              slidesPerView: slides576 || 2,
            },
            992: {
              slidesPerView: slides992 || 3,
            },
            1200: {
              slidesPerView: slides1200 || 4,
            },
          }}
          index={0}
          navigation
          allowSlideNext={true}
          {...otherSwiperProps}
        >
          {data?.map((slide, index) => (
            <SwiperSlide className="slider_item" key={`slide-${index}`}>
              {slide}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Fragment>
  );
};

export default CustomSlider;
