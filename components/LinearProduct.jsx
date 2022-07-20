import Image from "next/image";
import React from "react";

function LinearProduct() {
  return (
    <div className="grid grid-cols-[150px_1fr] md:grid-cols-[300px_1fr] px-4 mx-auto my-14">
      <div className="">
        <div className="relative h-56">
          <Image
            src="/Values/nillMarket.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex justify-center my-4">
          <button className="px-6 py-2 font-bold text-white bg-blue-600 cursor-pointer rounded-xl">
            مشاهده همه
          </button>
        </div>
      </div>
      <div className="bg-blue-500">ss</div>
    </div>
  );
}

export default LinearProduct;
