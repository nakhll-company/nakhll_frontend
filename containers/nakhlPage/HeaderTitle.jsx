import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsBasket2 } from "react-icons/bs";
import s from "./HeaderTitle.module.scss";

const list = [
  { title: "وبلاگ", url: "https://nakhll.com/blog/" },
  { title: "محصولات", url: "/search/?q=&available=true" },
  {
    title: "درباره ما",
    url: "https://nakhll.com/blog/%d8%af%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%d8%a8%d8%a7%d8%b2%d8%a7%d8%b1-%d8%a7%d8%ac%d8%aa%d9%85%d8%a7%d8%b9%db%8c-%d9%86%d8%ae%d9%84/",
  },
  {
    title: "تماس با ما",
    url: "https://nakhll.com/blog/%d8%aa%d9%85%d8%a7%d8%b3-%d8%a8%d8%a7-%d9%85%d8%a7/",
  },
];
const HeaderTitle = () => {
  const router=useRouter()
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
          {/* <li>فروشگاه ها</li> */}
          {/* <li>حجره ها</li> */}
          {list.map((el, index) => (
            <li key={index}>
              <Link href={el.url}>
                <a>{el.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={s.menu}>
        <div className={s.buttonContainer}>
          <button className={s.btn}>ثبت نام / ورود</button>
        </div>
        <div
          onClick={() => {
            router.push("/cart");
          }}
          className={s.cartContainer}
        >
          <BsBasket2 size="35px" color="#064D81" />
        </div>
      </div>
    </div>
  );
};

export default HeaderTitle;
