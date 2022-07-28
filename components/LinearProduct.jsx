import Image from "next/image";
import React from "react";
import CartProduct from "./CartProduct";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

function LinearProduct() {
  return (
    <section className="bg-gray-100">
      <div className="px-4 py-4 mx-auto sm:px-6 lg:pl-8 lg:pr-0 lg:mr-0 sm:py-24 max-w-[1340px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-2 gap-y-8 lg:items-center">
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

            <div className="hidden lg:mt-8 lg:flex lg:justify-center lg:gap-4">
              <button
                aria-label="Next slide"
                className="p-3 text-pink-600 border border-pink-600 rounded-full hover:bg-pink-600 hover:text-white next-button"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              <button
                aria-label="Previous slide"
                className="p-3 text-pink-600 border border-pink-600 rounded-full hover:bg-pink-600 hover:text-white prev-button"
              >
                <svg
                  className="w-5 h-5 transform -rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <Swiper
              // spaceBetween={1}

              slidesPerView={3.1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
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
            </Swiper>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8 lg:hidden">
          <button
            aria-label="Previous slide"
            className="p-4 text-pink-600 border border-pink-600 rounded-full hover:bg-pink-600 hover:text-white prev-button"
          >
            <svg
              className="w-5 h-5 transform -rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>

          <button
            aria-label="Next slide"
            className="p-4 text-pink-600 border border-pink-600 rounded-full hover:bg-pink-600 hover:text-white next-button"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default LinearProduct;
