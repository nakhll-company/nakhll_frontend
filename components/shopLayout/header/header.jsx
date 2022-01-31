import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Assistent from "zaravand-assistent-number";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// component
import BoxSearch from "./boxSearch";
import MegaMenuMobile from "../../../containers/LandingPage/MegaMenuMobile";
import MegaMenuDesktop from "../../../containers/LandingPage/MegaMenuDesktop";
import {
  _call_Category,
  _get_all_shops,
  _handel_search,
} from "../../../api/header";
// methods
import { getUserInfo } from "../../../redux/actions/user/getUserInfo";
// style
import styles from "./header.module.scss";

const _asist = new Assistent();

function Header() {
  const router = useRouter();
  console.log("router :>> ", router);
  const dispatch = useDispatch();
  const userLog = useSelector((state) => state.User.userInfo);
  const [category, setCategory] = useState([]);
  const [shopsName, setShopsName] = useState([]);
  const [searchShops, setSearchShops] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(async () => {
    dispatch(getUserInfo());
    let getCategory = await _call_Category();
    setCategory(getCategory);
  }, []);

  return (
    <>
      <header className={`${styles.header}`}>
        <div className={styles.topBanner}>
          <Link href="/description">
            <a>
              <Image
                layout="responsive"
                height={100}
                width={3000}
                src="/image/topBanner/topImg.jpg"
                alt="نوبت مامانه"
              />
            </a>
          </Link>
          <div
            style={{
              position: "absolute",
              top: "5px",
              left: "150px",
              fontSize: "30px",
              fontWeight: "bolder",
            }}
          >
            {/* <Timer date="2022-1-24" /> */}
          </div>
        </div>
        <div className="container">
          <div className={styles.top_header}>
            <div className={styles.top_header_rightside}>
              <div className={styles.h_logo}>
                <Link href="/">
                  <a
                    style={{
                      display: "flex",
                      alignItems: " center",
                      justifyContent: "space-between",
                      display: "block",
                    }}
                  >
                    <Image
                      layout="responsive"
                      height={100}
                      width={300}
                      src="/icons/logo_Nakhl.svg"
                      alt="فروشگاه اینترنتی نخل"
                      style={{ cursor: "pointer", maxHeight: "42px" }}
                    />
                  </a>
                </Link>
              </div>
              <div className={styles.h_search}>
                <div className={styles.search_box}>
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      location.replace(`/search?q=${inputSearch}`);
                    }}
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="جستجو در نخل ..."
                      onClick={async () => {
                        if (shopsName.length == 0) {
                          let getShopsName = await _get_all_shops(shopsName);
                          setShopsName(getShopsName);
                        }
                      }}
                      onChange={(e) => {
                        setInputSearch(e.target.value);

                        let searchedShop = _handel_search(
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
                      onClick={() => {
                        localStorage.removeItem("refreshToken");
                        localStorage.removeItem("accessToken");
                        if (router.pathname === "/profile") {
                          router.reload(window.location.pathname);
                          router.push("/");
                        } else {
                          router.reload(window.location.pathname);
                        }
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
                  <i>
                    <Image
                      layout="responsive"
                      width={10}
                      height={10}
                      src="/icons/sabad.svg"
                      alt=""
                    />
                  </i>
                  {Object.keys(userLog).length > 0 &&
                    userLog.cart_items_count !== 0 && (
                      <span className={styles.counter_cart}>
                        {_asist.number(userLog.cart_items_count)}
                      </span>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav>
          <div className="container">
            <div className={styles.nav_row}>
              <div className={styles.menu_collaps}>
                <span className="fas fa-bars"></span>
              </div>
              <MegaMenuDesktop category={category} />
            </div>
          </div>
        </nav>
      </header>

      <header className={`${styles.mobile_header} `}>
        <div className={styles.topBanner}>
          <Link href="/description">
            <a>
              <Image
                layout="responsive"
                height={100}
                width={1200}
                src="/image/topBanner/topImg_mobile.jpg"
                alt="در نخل حجره دار شوید."
              />
            </a>
          </Link>
          {/* <div style={{ position: "absolute", top: "5px", left: "5px", fontSize: "11px", fontWeight: "bolder" }}>
            <Timer date="2022-1-24" />
          </div> */}
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
                <Link href="/">
                  <a>
                    <Image
                      layout="responsive"
                      height={26}
                      width={26}
                      src="/icons/Nakhll.png"
                      alt="فروشگاه اینترنتی نخل"
                      style={{ cursor: "pointer", marginRight: "10px" }}
                    />
                  </a>
                </Link>
              </div>
              <div className={styles.logo_name}>
                <Link href="/">
                  <a>
                    <Image
                      layout="responsive"
                      height={100}
                      width={350}
                      src="/icons/Name_Nakhl.png"
                      alt="فروشگاه اینترنتی نخل"
                      style={{ cursor: "pointer", width: "130%" }}
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
                    <i>
                      <Image
                        style={{ width: "24px", marginLeft: "12px" }}
                        src="/icons/sabad.svg"
                        width={24}
                        height={24}
                        alt=""
                      />
                    </i>
                    {Object.keys(userLog).length > 0 &&
                      userLog.cart_items_count !== 0 && (
                        <span className={styles.counter_cart}>
                          {_asist.number(userLog.cart_items_count)}
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
                  location.replace(`/search?q=${inputSearch}`);
                }}
              >
                <input
                  type="text"
                  className="form-control"
                  onClick={async () => {
                    let getShopsName = await _get_all_shops(shopsName);
                    setShopsName(getShopsName);
                  }}
                  onChange={(e) => {
                    setInputSearch(e.target.value);
                    let searchedShop = _handel_search(
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
                {/* <Link  href={`/search?q=${inputSearch}`}>
                  <a aria-label="پروفایل"> */}
                <div
                  onClick={() => {
                    setSearchShops([]);
                    router.push(`/search?q=${inputSearch}`);
                  }}
                >
                  <i className="fas fa-search"></i>
                </div>
                {/* </a>
                </Link> */}
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
                    style={{ maxHeight: "50px" }}
                    src="/icons/logo_Nakhl.svg"
                    width={200}
                    height={100}
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
