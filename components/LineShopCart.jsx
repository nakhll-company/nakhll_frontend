import React from "react";
import ShopCard from "./ShopCard";

function LineShopCart({ title = "حجره ها" }) {
  return (
    <div className="mx-8 my-14">
      <div className="mx-auto max-w-7xl ">
        <h5 className="font-black text-lg">{title}</h5>
        <div className="flex flex-wrap justify-center gap-2 my-4 ">
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
        </div>
      </div>
    </div>
  );
}

export default LineShopCart;
