import Image from "next/image";
import Link from "next/link";
import React from "react";
import AppButton from "../../components/AppButton";
import ButtonLanding from "./ButtonLanding";
import HeaderTitle from "./HeaderTitle";
import s from "./heroSlider.module.scss";
import InputLanding from "./InputLanding";
function HeroSlider() {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <HeaderTitle />
      </div>
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
          <ButtonLanding title="آغاز فروش" />

          <InputLanding />
        </div>
      </div>
    </div>
  );
}

export default HeroSlider;
