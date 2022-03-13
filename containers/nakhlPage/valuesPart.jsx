import Image from "next/image";
import React from "react";
import s from "./valuesPart.module.scss";
const icons = [
  { name: "حجره رایگان", path: "/icons/shop.svg" },
  { name: "رشد کسب وکار", path: "/icons/grow.svg" },
  { name: "پشتیبانی ۲۴ ساعته", path: "/icons/call.svg" },
  { name: "فروش سراسر کشور", path: "/icons/iran.svg" },
  { name: "تسویه تا ۷۲ ساعت", path: "/icons/72_H.svg" },
  { name: "فروشگاه اختصاصی", path: "/icons/permium.svg" },
];
function ValuesPart() {
  return (
    <div className={`${s.container} container`}>
      {icons.map((item, index) => (
        <div key={index} className={s.iconContainer}>
          <Image
            src={item.path}
            layout="fixed"
            height={100}
            width={100}
            alt={item.name}
          />

          <div className="">{item.name}</div>
        </div>
      ))}
    </div>
  );
}

export default ValuesPart;
