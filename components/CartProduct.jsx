import Image from "next/image";
import React from "react";
import { PlusCircleIcon } from "@heroicons/react/outline";
function CartProduct() {
  return (
    <>
      <div className="px-4  pt-4 pb-2 bg-white max-w-[240px] border-gray-400 shadow-md border-1 rounded-xl">
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
}

export default CartProduct;
