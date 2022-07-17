import React from "react";
import { LocationMarkerIcon } from "@heroicons/react/solid";

import Image from "next/image";

function ShopCard() {
  return (
    <>
      <div className="p-2 cursor-pointer hover:scale-95 transition-all duration-200 ease-in-out bg-white border-1 border-[#0F4C81] shadow-xl w-72 rounded-xl">
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
}

export default ShopCard;
