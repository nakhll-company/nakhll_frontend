// node libraries
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillCloseCircle } from "react-icons/ai";
// component
import BoxSearch from "./boxSearch";
import MegaMenuMobile from "../../../containers/LandingPage/MegaMenuMobile";
import MegaMenuDesktop from "../../../containers/LandingPage/MegaMenuDesktop";
// methods
import rot13 from "../../../utils/rout13";
import { http } from "../../../services/callApi/api";
import { gtag } from "../../../utils/googleAnalytics";
import { getUserInfo } from "../../../redux/actions/user/getUserInfo";
import { clearTokenStorage } from "../../../api/general/clearTokenStorage";
import { checkForCallUserInfo } from "../../../utils/checkForCallUserInfo";
import { callCategory, getAllShops, handelSearch } from "../../../api/header";
// style
import styles from "./header.module.scss";

function Header() {
  const router = useRouter();

  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);
  const [shopsName, setShopsName] = useState([]);
  const [searchShops, setSearchShops] = useState([]);
  const [inputSearch, setInputSearch] = useState(router?.query?.q ?? "");
  const userLog = useSelector((state) => state.User.userInfo);
  const allProductListBuy = useSelector((state) => state.Cart.allProduct);

  useEffect(() => {
    async function fetchData() {
      checkForCallUserInfo() && dispatch(getUserInfo());
      const getCategory = await callCategory();
      setCategory(getCategory);
    }
    fetchData();
  }, [dispatch]);

  return (
    <>
      <header className={`${styles.header}`}>
        <div
          onClick={() => {
            gtag("event", "بنر حجره دار", {
              event_category: "کلیک",
              event_label: "کلیک بنر حجره دار",
            });
            router.push("/description");
          }}
          className={styles.topBanner}
        >
          <Image
            layout="responsive"
            height={100}
            width={3000}
            src="/image/topBanner/topImg.jpg"
            alt="حجره بزن"
          />
          <div
            style={{
              position: "absolute",
              top: "5px",
              left: "150px",
              fontSize: "30px",
              fontWeight: "bolder",
            }}
          ></div>
        </div>
        <div className="container">
          <div className={styles.top_header}>
            <div className={styles.top_header_rightside}>
              <div className={styles.h_logo}>
                <Link href="/">
                  <a>
                    <Image
                      layout="responsive"
                      height="100"
                      width="300"
                      src="/icons/logo_Nakhl.svg"
                      alt="فروشگاه اینترنتی نخل"
                      className={styles.logo_nakhl}
                    />
                  </a>
                </Link>
              </div>
              <div className={styles.h_search}>
                <div className={styles.search_box}>
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      setSearchShops([]);
                      router.push(`/search?q=${inputSearch}`);
                    }}
                  >
                    {inputSearch != "" && (
                      <div
                        className={styles.close_btn}
                        onClick={() => setInputSearch("")}
                      >
                        <AiFillCloseCircle size={23} />
                      </div>
                    )}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="جستجو در نخل ..."
                      onClick={async () => {
                        if (shopsName.length == 0) {
                          const getShopsName = await getAllShops(shopsName);
                          setShopsName(getShopsName);
                        }
                      }}
                      onChange={(e) => {
                        setInputSearch(e.target.value);
                        const searchedShop = handelSearch(
                          e.target.value,
                          shopsName
                        );
                        setSearchShops(searchedShop);
                      }}
                      value={inputSearch}
                    />
                    {searchShops.length > 0 && (
                      <BoxSearch list={searchShops} word={inputSearch} />
                    )}
                    <Link href={`/search?q=${inputSearch}`}>
                      <a aria-label="پروفایل">
                        <i className="fas fa-search"></i>
                      </a>
                    </Link>
                  </form>
                  <div className="result_search">
                    <div className="search_history"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.top_header_leftside}>
              {Object.keys(userLog).length > 0 ? (
                <>
                  <Link href="/profile">
                    <a
                      aria-label="پروفایل"
                      className={styles.nav_item_link_login}
                    >
                      <i
                        style={{ fontSize: "30px", marginLeft: "20px" }}
                        className="fas fa-user-circle"
                      ></i>
                    </a>
                  </Link>
                  <div className={styles.modalProfile}>
                    <Link href="/profile">
                      <a>
                        <div style={{ marginTop: "10px" }} className="flex-row">
                          <i className="fas fa-user-circle"></i>
                          <span>پروفایل</span>
                        </div>
                      </a>
                    </Link>
                    <div
                      onClick={async () => {
                        const response = await http.post(
                          "/api/v1/auth/begin/login_register/",
                          { mobile: userLog.mobile_number }
                        );
                        if (response.status < 300) {
                          router.push(
                            `/setPassword/${rot13(response?.data?.auth_key)}/${
                              response?.data?.mobile_status
                            }`
                          );
                        }
                      }}
                    >
                      <i className="fas fa-user-circle "></i>
                      <span>تغییر پسورد</span>
                    </div>
                    <div
                      onClick={async () => {
                        await clearTokenStorage();
                        await router.push("/");
                        await router.reload("/");
                      }}
                    >
                      <i className="fas fa-sign-out-alt "></i>
                      <span>خروج از حساب کاربری</span>
                    </div>
                  </div>
                </>
              ) : (
                <Link href="/login">
                  <a
                    style={{ margin: "0px 20px " }}
                    className={styles.nav_item_link_login}
                  >
                    ورود/ثبت نام
                  </a>
                </Link>
              )}
              <div
                onClick={() => {
                  router.push("/cart");
                }}
              >
                <div className={styles.bascket_btn}>
                  <Image
                    layout="responsive"
                    width={10}
                    height={10}
                    src="/icons/sabad.svg"
                    alt=""
                  />
                  {!!allProductListBuy?.ordered_items?.length && (
                    <span className={styles.counter_cart}>
                      {allProductListBuy.ordered_items.length}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav>
          <div style={{ margin: "0px 10px" }}>
            {/* <SlideMenu /> */}
            <div className={styles.nav_row}>
              <MegaMenuDesktop category={category} />
            </div>
          </div>
        </nav>
      </header>

      <header className={`${styles.mobile_header} `}>
        <div
          onClick={() => {
            gtag("event", "بنر حجره دار", {
              event_category: "کلیک",
              event_label: "کلیک بنر حجره دار",
            });
            router.push("/description");
          }}
          className={styles.topBanner}
        >
          <Image
            layout="responsive"
            height={100}
            width={1200}
            src="/image/topBanner/topImg_mobile.jpg"
            alt="در نخل حجره دار شوید."
          />
        </div>
        <div className={styles.header_holder}>
          <div className="container">
            <div className={styles.inner_header}>
              <div
                className={styles.menu_Hamburger}
                onClick={() => {
                  document.getElementById("SlideMenu").style.right = "0px";
                }}
              >
                <i className="fas fa-bars"></i>
              </div>
              <div className={styles.logo_name}>
                <Link href="/">
                  <a className="px-2">
                    <Image
                      height={30}
                      width={30}
                      src="/icons/Nakhll.png"
                      alt="فروشگاه اینترنتی نخل"
                      className={styles.icon_nakhl}
                    />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <Image
                      height={30}
                      width={90}
                      src="/icons/Name_Nakhl.png"
                      alt="فروشگاه اینترنتی نخل"
                      className={styles.icon_nakhl_name}
                    />
                  </a>
                </Link>
              </div>
              <div className={styles.left_side}>
                {Object.keys(userLog).length > 0 ? (
                  <Link className={styles.profile_btn} href="/profile">
                    <a>
                      <i
                        style={{ fontSize: "25px", marginLeft: "9px" }}
                        className="fas fa-user-circle"
                      ></i>
                    </a>
                  </Link>
                ) : (
                  <Link
                    style={{
                      margin: "0px 2px ",
                      fontSize: "10px",
                      fontWeight: "500",
                    }}
                    href="/login"
                  >
                    ورود/ثبت نام
                  </Link>
                )}
                <div
                  onClick={() => {
                    router.push("/cart");
                  }}
                >
                  <div className={styles.bascket_btn}>
                    <Image
                      className={styles.icon_sabad}
                      src="/icons/sabad.svg"
                      width={24}
                      height={22}
                      alt=""
                    />
                    {Object.keys(userLog).length > 0 &&
                      userLog.cart_items_count !== 0 && (
                        <span className={styles.counter_cart}>
                          {userLog.cart_items_count}
                        </span>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.search_header}>
          <div className="container">
            <div className={styles.search_box}>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  gtag("event", "سرچ", {
                    event_category: "کلیک",
                    event_label: "زدن روی سرچ",
                  });
                  location.replace(`/search?q=${inputSearch}`);
                }}
              >
                <input
                  type="text"
                  className="form-control"
                  onClick={async () => {
                    const getShopsName = await getAllShops(shopsName);
                    setShopsName(getShopsName);
                  }}
                  onChange={(e) => {
                    setInputSearch(e.target.value);
                    const searchedShop = handelSearch(
                      e.target.value,
                      shopsName
                    );
                    setSearchShops(searchedShop);
                  }}
                  value={inputSearch}
                  placeholder="جستجو در نخل ..."
                />

                {searchShops.length > 0 && (
                  <BoxSearch list={searchShops} word={inputSearch} />
                )}
                <div
                  onClick={() => {
                    gtag("event", "سرچ", {
                      event_category: "کلیک",
                      event_label: "زدن روی سرچ",
                    });
                    setSearchShops([]);
                    router.push(`/search?q=${inputSearch}`);
                  }}
                >
                  <i className="fas fa-search"></i>
                </div>
              </form>
            </div>
          </div>
        </div>
        <nav
          className={styles.menu_holder}
          switch-shift-element-right="29"
          switch-adjust-element-width="30"
          switch-left-popup-id="31"
        >
          <div className={styles.mobile_menu} id="SlideMenu">
            <div className={styles.head_menu}>
              <Link href="/">
                <a className={styles.menu_logo}>
                  <Image
                    className={styles.logo_nakhl_mobile}
                    src="/icons/logo_Nakhl.svg"
                    width="200"
                    height="100"
                    alt=""
                  />
                </a>
              </Link>
              <span
                className={styles.close_menu}
                onClick={() => {
                  document.getElementById("SlideMenu").style.right = "-100%";
                }}
              >
                <i className="fas fa-times"></i>
              </span>
            </div>
            <div className={styles.top_menu}>
              <h2 className={styles.title_menu}>دسته بندی محصولات</h2>
            </div>
            <MegaMenuMobile category={category} />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
