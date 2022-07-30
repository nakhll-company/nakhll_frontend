import Image from "next/image";
import React from "react";
import CartProduct from "./CartProduct";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

function LinearProduct() {
  return (
    <section className="bg-gray-100">
      <div className="px-4 py-4 mx-auto sm:px-6 lg:pl-8 lg:pr-0 lg:mr-0 sm:py-24 max-w-[1340px]">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-2 gap-y-8 lg:items-center">
          <div className="max-w-xl text-center sm:text-left">
            <div className="relative h-56">
              <Image
                src="/Values/nillMarket.png"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <p className="mt-4 text-gray-500">
              محصولات سوپر مارکتی خود را از حجره نیل مارکت تهیه فرمایید.
            </p>
          </div>

          <div className=" lg:col-span-3 lg:mx-0">
            <Swiper
              slidesPerView={1.3}
              spaceBetween={5}
              breakpoints={{
                425: {
                  slidesPerView: 1.9,
                  spaceBetween: 5,
                },
                640: {
                  slidesPerView: 2.9,
                  spaceBetween: 5,
                },
                768: {
                  slidesPerView: 2.8,
                  spaceBetween: 5,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 5,
                },
                1400: {
                  slidesPerView: 4,
                  spaceBetween: 5,
                },
              }}
              modules={[Pagination]}
            >
              <SwiperSlide>
                <CartProduct />
              </SwiperSlide>

              <SwiperSlide>
                <CartProduct />
              </SwiperSlide>
              <SwiperSlide>
                <CartProduct />
              </SwiperSlide>
              <SwiperSlide>
                <CartProduct />
              </SwiperSlide>
              <SwiperSlide>
                <CartProduct />
              </SwiperSlide>
              <SwiperSlide>
                <CartProduct />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LinearProduct;
