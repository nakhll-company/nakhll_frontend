import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import s from "./slideMenu.module.scss";
import { FaBars, FaTimesCircle } from "react-icons/fa";
import MegaMenuMobile from "../LandingPage/MegaMenuMobile";
import { http } from "../../services/callApi/api";

const dataList = [
  { title: "محصولات", url: "/search/?q=&available=true" },
  { title: "حجره دار شوید", url: "https://nakhll.com/description/" },
  { title: "وبلاگ", url: "https://nakhll.com/blog/" },
  {
    title: "درباره ما",
    url: "https://nakhll.com/blog/%d8%af%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%d8%a8%d8%a7%d8%b2%d8%a7%d8%b1-%d8%a7%d8%ac%d8%aa%d9%85%d8%a7%d8%b9%db%8c-%d9%86%d8%ae%d9%84/",
  },
  {
    title: "تماس با ما",
    url: "https://nakhll.com/blog/%d8%aa%d9%85%d8%a7%d8%b3-%d8%a8%d8%a7-%d9%85%d8%a7/",
  },
];
function SlideMenu() {
  const [category, setCategory] = useState([]);

  const getCategory = async () => {
    let response = await http.get(`/api/v1/categories/?max_depth=2`);
    if (response.status === 200) {
      setCategory(response.data);
    } else {
      return [];
    }
  };

  return (
    <>
      <div
        onClick={() => {
          getCategory();
          document.getElementById("SlideMenu").style.right = "0px";
        }}
      >
        <FaBars size={20} color="#064D81" />
      </div>

      <div className={s.mobile_menu} id="SlideMenu">
        <div className={s.head_menu}>
          <Link href="/">
            <a className={s.menu_logo}>
              <Image
                className={s.logo_nakhl_mobile}
                src="/icons/logo_Nakhl.svg"
                width="200"
                height="100"
                alt=""
              />
            </a>
          </Link>
          <span
            className={s.close_menu}
            onClick={() => {
              document.getElementById("SlideMenu").style.right = "-100%";
            }}
          >
            <FaTimesCircle size={30} color="#064D81" />
          </span>
        </div>

        <div className={s.btn_links}>
          {dataList.map((el, index) => (
            <Link key={index} href={el.url}>
              <a className={s.btn_link_box}>
                {/* <div className={s.icon_holder}>
                  <img
                    src=""
                    className="icon"
                  />
                </div> */}
                <div className={s.txt}>{el.title}</div>
              </a>
            </Link>
          ))}
        </div>
        <div className={s.top_menu}>
          <h2 className={s.title_menu}>دسته بندی محصولات</h2>
        </div>
        <MegaMenuMobile category={category} />
      </div>
    </>
  );
}

export default SlideMenu;
