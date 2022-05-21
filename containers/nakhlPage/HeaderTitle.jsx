// node libraries
import Link from "next/link";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { BsBasket2 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
// methods
import rot13 from "../../utils/rout13";
import { http } from "../../services/callApi/api";
import { getUserInfo } from "../../redux/actions/user/getUserInfo";
import { clearTokenStorage } from "../../api/general/clearTokenStorage";
// components
import SlideMenu from "./slideMenu";
// style
import s from "./HeaderTitle.module.scss";

const list = [
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
const HeaderTitle = () => {

  const router = useRouter();
  const dispatch = useDispatch();
  const userLog = useSelector((state) => state.User.userInfo);
  const All_product_list_buy = useSelector((state) => state.Cart.allProduct);

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  return (
    <div className={s.container}>
      <div className={s.slideMenu}>
        <SlideMenu />
      </div>
      <div className={s.icon}>
        <Image
          layout="fixed"
          width={100}
          height={25}
          src="/icons/nakhllIcon.svg"
          alt="nakhll-icon"
        />
      </div>
      <div className={s.list}>
        <ul>
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
          {Object.keys(userLog).length > 0 ? (
            <>
              <div
                className={s.profile}
                onClick={() => {
                  router.push("/profile");
                }}
              >
                <FaUser className={s.icons} color="#064D81" />
              </div>
              <div className={s.modalProfile}>
                <Link href="/profile">
                  <a>
                    <div style={{ marginTop: "10px" }} className="flex-row">
                      <i className="fas fa-user-circle"></i>
                      <span>پروفایل</span>
                    </div>
                  </a>
                </Link>
                <div onClick={async () => {
                  let response = await http.post("/api/v1/auth/begin/login_register/",
                    { mobile: userLog.mobile_number }
                  );
                  if (response.status < 300) {
                    router.push(
                      `/setPassword/${rot13(response?.data?.auth_key)}/${response?.data?.mobile_status
                      }`
                    );
                  }
                }}
                >
                  <i className="fas fa-user-circle "></i>
                  <span>تغییر پسورد</span>
                </div>
                <div
                  onClick={() => {
                    clearTokenStorage();
                    router.push("/");
                    router.reload("/");
                  }}
                >
                  <i className="fas fa-sign-out-alt "></i>
                  <span>خروج از حساب کاربری</span>
                </div>
              </div>
            </>
          ) : (
            <button
              onClick={() => {
                router.push("/login");
              }}
              className={s.btn}
            >
              ثبت نام / ورود
            </button>
          )}
        </div>
        <div
          onClick={() => {
            router.push("/cart");
          }}
          className={s.cartContainer}
        >
          {!!All_product_list_buy?.ordered_items?.length && (
            <span className={s.numberLabel}>
              {All_product_list_buy.ordered_items.length}
            </span>
          )}
          <BsBasket2 className={s.icons} color="#064D81" />
        </div>
      </div>
    </div>
  );
};

export default HeaderTitle;
