import Image from "next/image";
import React from "react";
import AppButton from "../../components/AppButton";
import s from "./heroSlider.module.scss";
function HeroSlider() {
  return (
    <div className={s.container}>
      <Image
        src="/image/hero.jpg"
        layout="responsive"
        width={1920}
        height={1080}
        alt="m"
      />

      {/* title */}
      <div className={s.boxContainer}>
        <h1>بازار اجتماعی نخل</h1>
        <h2>بستری برای رشد و فروش کسب و کارهای اصیل و زندگی پذیر</h2>
        <div className={s.searchConatiner}>
          <input placeholder="جست وجو در بیش از هزار فروشگاه..." />
          <AppButton />
        </div>
      </div>
    </div>
  );
}

export default HeroSlider;
