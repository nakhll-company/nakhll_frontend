import Image from "next/image";
import Link from "next/link";
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
          <li>
            <Link href="https://nakhll.com/blog/">
              <a>وبلاگ</a>
            </Link>
          </li>
          <li>توان افزایی و هم افزایی</li>

          <li>درباره ما</li>
          <li>
            <Link href="https://nakhll.com/blog/%d8%aa%d9%85%d8%a7%d8%b3-%d8%a8%d8%a7-%d9%85%d8%a7/">
              <a>تماس با ما</a>
            </Link>
          </li>
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
