import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Banners() {
  return (
    <>
      <div className="">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="relative rounded-lg p-[5px] ">
              <Image
                className="rounded-lg"
                src="/image/slide/slidB.jpg"
                layout="responsive"
                height={100}
                width={300}
              />
              {/* <div className="absolute bottom-0 z-20 w-full h-32 bg-gradient-to-t from-white to-transparent"></div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative rounded-lg p-[18px]">
              <Image
                className="rounded-lg"
                src="/image/slide/slide2.jpg"
                layout="responsive"
                height={100}
                width={300}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative rounded-lg p-[18px]">
              <Image
                className="rounded-lg"
                src="/image/slide/slid1.jpg"
                layout="responsive"
                height={100}
                width={300}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Banners;
