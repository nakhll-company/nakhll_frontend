import Image from "next/image";
import React from "react";

import s from "./selers.module.scss";
const cartSeller = (
  <div className={s.selerContainer}>
    <div className={s.content}>
      <div className={s.header}>
        <div className={s.image}></div>
        <div className={s.title}>
          <h5>نیل مارکت</h5>
          <h5>سید مهدی صمدانی</h5>
        </div>
        <div className={s.medal}>
          <Image
            layout="fixed"
            width={80}
            height={80}
            src="/image/mahsol.svg"
            alt="icon"
          />
        </div>
      </div>
      <div className={s.images}>
        <div className={s.imageContainer}>
          <Image
            className={s.imageProduct}
            alt="m"
            src="/image/productTwo.jpg"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
        <div className={s.imageContainer}>
          <Image
            className={s.imageProduct}
            alt="m"
            src="/image/productTwo.jpg"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
        <div className={s.imageContainer}>
          <Image
            className={s.imageProduct}
            alt="m"
            src="/image/productTwo.jpg"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
        <div className={s.imageContainer}>
          <Image
            className={s.imageProduct}
            alt="m"
            src="/image/productTwo.jpg"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
    <div className={s.audioContainer}>
      <div className={s.wave}>milad</div>
      <div className={s.palyer}>داستان این کسب و کار</div>
    </div>
  </div>
);
function Selers() {
  return (
    <>
      <div className={s.titlePart}>
        <h3>فروشندگان برتر اسفندماه</h3>
      </div>
      <div className={s.container}>
        {cartSeller}
        {cartSeller}
        {cartSeller}
      </div>
    </>
  );
}

export default Selers;
