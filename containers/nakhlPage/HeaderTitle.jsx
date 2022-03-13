import Image from "next/image";
import React from "react";
import { BsBasket2 } from "react-icons/bs";
import s from "./HeaderTitle.module.scss";
const HeaderTitle = () => {
  return (
    <div className={s.container}>
      <div className={s.icon}>
        <Image
          layout="responsive"
          width={205}
          height={50}
          src="/icons/nakhllIcon.svg"
          alt="nakhll-icon"
        />
      </div>
      <div className={s.list}>
        <ul>
          <li>فروشگاه ها</li>
          <li>حجره ها</li>
          <li>وبلاگ</li>
          <li>توان افزایی و هم افزایی</li>
          <li>درباره ما</li>
          <li>تماس با ما</li>
        </ul>
      </div>
      <div className={s.menu}>
        <div className={s.buttonContainer}>
          <button className={s.btn}>ثبت نام / ورود</button>
        </div>
        <div className={s.cartContainer}>
          <BsBasket2 size="35px" color="#064D81" />
        </div>
      </div>
    </div>
  );
};

export default HeaderTitle;
