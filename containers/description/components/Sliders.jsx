import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

function Sliders() {
  return (
    <>
      <Swiper pagination={true} spaceBetween={20} slidesPerView={1}>
        <SwiperSlide>
          <Image
            className="rounded-lg"
            layout="responsive"
            width={200}
            height={100}
            src="/image/description/p1.webp"
            alt="بنر"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded-lg"
            layout="responsive"
            width={200}
            height={100}
            src="/image/description/p2.webp"
            alt="بنر"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded-lg"
            layout="responsive"
            width={200}
            height={100}
            src="/image/description/p3.webp"
            alt="بنر"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Sliders;
