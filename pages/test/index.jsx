import Image from "next/image";
import React from "react";
import EmptyLayout from "../../components/layout/EmptyLayout";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, LocationMarkerIcon } from "@heroicons/react/solid";

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
        <div className="mx-4">
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
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-700">
                    هر زمان دلیلش آماده شد میذارم
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>

        {/* last Part */}
        <div className="mx-8 mt-14">
          <div className="max-w-6xl mx-auto ">
            <h5 className="font-bold">حجره هایی با محصولات مشابه:</h5>
            <div className="my-4">
              <div className="p-2 bg-white border-2 border-blue-600 shadow-xl w-72 rounded-xl">
                <h1 className="text-xl font-black text-center ">رایانک</h1>
                <div className="flex justify-center mt-2">
                  <span className="mx-2 text-sm font-bold text-gray-500 ">
                    میلاد حسنی
                  </span>

                  <LocationMarkerIcon className="w-4 h-4 mb-1 text-gray-500 animate-pulse" />
                  <span className="text-sm font-bold text-gray-500 ">
                    کرمان
                  </span>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TestPage;
TestPage.Layout = EmptyLayout;
