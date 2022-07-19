import Image from "next/image";
import React from "react";

function LineTwoBanner() {
  return (
    <div className="my-14 mx-auto grid grid-cols-2 gap-2 px-4">
      <div className="hover:scale-95 ">
        <Image
          className="rounded-xl"
          src="/image/NakhlLanding/banners/desktop/one.jpg"
          layout="responsive"
          width={680}
          height={160}
        />
      </div>

      <div className="  ">
        <Image
          className="rounded-xl"
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
