import React from "react";
import ShopLayout from "../../components/shopLayout";
import ShopCard from "../../components/ShopCard";
import AppDisclosure from "../../components/Disclosure";
import { AdjustmentsIcon } from "@heroicons/react/solid";

function ShopsPage() {
  return (
    <div className="flex justify-center h-screen px-2 py-4">
      <div className="hidden w-[30%] p-4  lg:block ">
        <AppDisclosure title="دسته بندی" />
        <AppDisclosure title="استان و شهر حجره دار" />
      </div>
      <div className="w-[70%]   lg:w-full flex flex-col items-center">
        <div className="flex items-center justify-between px-2 mb-4 bg-white rounded-md shadow-md">
          <div className="flex items-center ">
            <div className="flex text-gray-600">
              <AdjustmentsIcon className="h-5 ml-2 text-gray-600" />
              <span className="text-sm">مرتب سازی :</span>
            </div>
            <ul className="flex ">
              <li className="px-3 py-2 text-sm font-bold transition-all duration-200 ease-in-out border-b-2 cursor-pointer hover:scale-110 ">
                بیشترین امتیاز
              </li>
              <li className="px-3 py-2 text-sm font-black text-red-500 transition-all duration-200 ease-in-out border-b-2 cursor-pointer hover:scale-110 border-b-red-500">
                جدیدترین
              </li>
              <li className="px-3 py-2 text-sm font-bold transition-all duration-200 ease-in-out border-b-2 cursor-pointer hover:scale-110 ">
                پرفروش ترین
              </li>
            </ul>
          </div>
          <span className="px-2 mr-20 text-sm font-bold">
            <span className="">تعداد :</span>
            <span className="mx-1 text-base">12</span>
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mx-auto">
          {[1, 1, 1, 1, 1, 1].map((e, index) => (
            <ShopCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopsPage;

ShopsPage.Layout = ShopLayout;
