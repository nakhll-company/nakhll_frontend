import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

import Image from "next/image";
function Unpublish({ image = "/image/unactive_shop.svg", text, sub = [] }) {
  return (
    <section className="">
      {/* first */}
      <div className="relative h-[240px] md:h-[500px]">
        <Image src={image} layout="fill" objectFit="contain" />
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
                  {text ? (
                    <>
                      {text}
                      <br />
                      {sub.map((el) => (
                        <>
                          <span>{el}</span>
                          <br />
                        </>
                      ))}
                    </>
                  ) : (
                    <>
                      این حجره به یکی از دلایل زیر غیرفعال شده است:
                      <br />
                      درخواست حجره دار برای غیرفعال سازی حجره
                      <br />
                      عدم مسئولیت پذیری و پاسخگویی حجره دار
                      <br />
                      عدم ارسال به موقع محصولات و یا لغو سفارشات از سمت حجره دار
                    </>
                  )}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </section>
  );
}

export default Unpublish;
