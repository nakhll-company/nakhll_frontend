import Image from "next/image";
import React from "react";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import { PlusCircleIcon } from "@heroicons/react/outline";
import ShopLayout from "../../components/shopLayout";

const CartShop = () => {
  return (
    <>
      <div className="p-2 bg-white border-2 border-blue-600 shadow-xl w-72 rounded-xl">
        <h1 className="text-xl font-black text-center ">رایانک</h1>
        <div className="flex justify-center mt-2">
          <span className="mx-2 text-sm font-bold text-gray-500 ">
            میلاد حسنی
          </span>

          <LocationMarkerIcon className="w-4 h-4 mb-1 text-gray-500 animate-pulse" />
          <span className="text-sm font-bold text-gray-500 ">کرمان</span>
        </div>
        <div className="p-1 rounded-xl">
          <div className="grid grid-cols-2 gap-2 h-28">
            <div className="relative border rounded-md ">
              <Image src="/Values/nillMarket.png" layout="fill" />
            </div>
            <div className="relative border rounded-md ">
              <Image src="/Values/nillMarket.png" layout="fill" />
            </div>
          </div>
          <div className="grid h-20 grid-cols-3 gap-2 mt-2 ">
            <div className="relative border rounded-md">
              <Image src="/Values/nillMarket.png" layout="fill" />
            </div>
            <div className="relative border rounded-md ">
              <Image src="/Values/nillMarket.png" layout="fill" />
            </div>
            <div className="relative border rounded-md ">
              <Image src="/Values/nillMarket.png" layout="fill" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CartProduct = () => {
  return (
    <>
      <div className="px-4 pt-4 pb-2 border-gray-400 shadow-md border-1 rounded-xl">
        <div className="">
          <div className="relative rounded-md w-52 h-52 ">
            <Image
              src="/Values/nillMarket.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="border-b-2 border-gray-300">
          <h2 className="py-2 font-bold">عسل با موم 900 گرمی شافی</h2>
          <h4 className="py-2 text-sm font-semibold text-gray-600">
            نیل مارکت
          </h4>
        </div>

        <div className="flex items-center justify-between py-2 cursor-pointer">
          <PlusCircleIcon className="h-8 text-blue-600 transition-all duration-200 ease-out hover:scale-125 active:scale-95" />
          <div className="flex items-center">
            <div className="text-left">
              <span className="block font-bold ">123000254.214</span>
              <span className="font-bold text-gray-600 line-through">
                276.020
              </span>
            </div>

            <span className="block text-sm font-light text-gray-800 -rotate-90 ">
              تومان
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
function TestPage() {
  return (
    <div className="">
      <section className="">
        {/* first */}
        <div className="relative h-[240px] md:h-[500px]">
          <Image
            src="/image/unactive_shop.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* secound */}
        <div className="mx-4 mb-10">
          <div className="w-full max-w-2xl p-2 mx-auto bg-white shadow-md rounded-2xl">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-bold text-purple-900 bg-purple-100 rounded-lg text-md hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>چرا این اتفاق افتاده است؟</span>
                    <ChevronUpIcon
                      className={`transition duration-300 ease-out    ${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>

                  <Disclosure.Panel className="px-4 pt-4 pb-2 font-bold leading-10 text-gray-700 text-md">
                    این حجره به یکی از دلایل زیر غیرفعال شده است:
                    <br />
                    درخواست حجره دار برای غیرفعال سازی حجره
                    <br />
                    عدم مسئولیت پذیری و پاسخگویی حجره دار
                    <br />
                    عدم ارسال به موقع محصولات و یا لغو سفارشات از سمت حجره دار
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>

        {/* last Part */}
        {false && (
          <>
            <div className="mx-8 mt-14">
              <div className="mx-auto max-w-7xl ">
                <h5 className="font-bold">حجره هایی با محصولات مشابه:</h5>
                <div className="flex flex-wrap justify-center gap-2 my-4 ">
                  <CartShop />
                  <CartShop />
                  <CartShop />
                  <CartShop />
                </div>
              </div>
            </div>

            <div className="mx-8 mt-14">
              <div className="mx-auto max-w-7xl ">
                <h5 className="font-bold">محصولات مشابه :</h5>
                <div className="flex flex-wrap justify-center gap-2 my-4 ">
                  <CartProduct />
                  <CartProduct />
                  <CartProduct />
                  <CartProduct />
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default TestPage;
TestPage.Layout = ShopLayout;
