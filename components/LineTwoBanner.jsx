import Image from "next/image";
import React from "react";

function LineTwoBanner() {
  return (
    <div className="grid grid-cols-1 gap-2 px-4 mx-auto lg:grid-cols-2 my-14">
      <div className="transition-all duration-200 ease-out cursor-pointer rounded-2xl hover:shadow-xl ">
        <Image
          className="rounded-2xl"
          src="/image/NakhlLanding/banners/desktop/one.jpg"
          layout="responsive"
          width={680}
          height={160}
        />
      </div>

      <div className="transition-all duration-200 ease-out cursor-pointer rounded-2xl hover:shadow-xl">
        <Image
          className="rounded-2xl"
          src="/image/NakhlLanding/banners/desktop/one.jpg"
          layout="responsive"
          width={680}
          height={160}
        />
      </div>
    </div>
  );
}

export default LineTwoBanner;
