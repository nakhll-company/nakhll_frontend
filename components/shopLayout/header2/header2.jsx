import React, { useState, useEffect } from "react";
import styles from "./header2.module.scss";
import Head from "next/head";
import Image from "next/image";
import MegaMenuDesktop from "../../../containers/LandingPage/MegaMenuDesktop";
import MegaMenuMobile from "../../../containers/LandingPage/MegaMenuMobile";
function Header2(props) {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossorigin="anonymous"
        />

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
          crossorigin="anonymous"
        ></script>
      </Head>

      <header className={`${styles.header} `}>
        <div className="container">
          <div className={styles.top_header}>
            <div className={styles.top_header_rightside}>
              <div className={styles.h_logo}>
                <a
                  href="/"
                  style={{
                    display: "flex",
                    alignItems: " center",
                    justifyContent: "space-between",
                  }}
                >
                  <img
                    src="/icons/logo_Nakhl.svg"
                    alt="فروشگاه اینترنتی نخل"
                    style={{ cursor: "pointer", maxHeight: "42px" }}
                  />
                </a>
              </div>
              <div className={styles.h_search}>
                <div className={styles.search_box}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="جستجو در نخل ..."
                    onChange={(e) => setInputSearch(e.target.value)}
                    value={inputSearch}
                  />

                  <a href={`/product/search?word=${inputSearch}&cat=`}>
                    <i className="fas fa-search"></i>
                  </a>
                  {/* <i className="fas fa-close"></i> */}
                  <div className="result_search">
                    <div className="search_history"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.top_header_leftside}>
              {/* <div className={styles.be_seller}>
                <a href="/landing/seller">در نخل بفروش!</a>
              </div> */}
              {/* <div className={styles.shahneshin}>
                <a title="شاه نشین" href="/page/shahneshin">
                  <img
                    src=""
                    alt="شاه نشین"
                    className="icon-shahneshin"
                  />
                </a>
              </div> */}
              {/* <div className={styles.help_link}>
                <a
                  target="_blank"
                  title="کارت هدیه"
                  href=""
                >
                  <img
                    src=""
                    alt="کارت هدیه"
                    className="icon-shahneshin"
                  />
                </a>
              </div> */}
              {/* <div className={styles.help_link}>
                <a title="راهنمای نخل" href=""> */}
                  {/* <i className="icon icon-QuestionCircle"></i> */}
                {/* </a>
              </div> */}
              <a
                className={styles.nav_item_link_login}
                href="https://nakhll.com/accounts/get-phone/"
              >
                ورود/ثبت نام
              </a>
              <a className={styles.bascket_btn} rel="nofollow" href="/cart">
                <i>
                  <img
                    style={{ width: "24px" }}
                    src="/icons/sabad.svg"
                    alt=""
                  />
                </i>
                <span className={styles.counter_cart}>0</span>
              </a>
            </div>
          </div>
        </div>
        <nav>
          <div className="container">
            <div className={styles.nav_row}>
              <div className={styles.menu_collaps}>
                <span className="fas fa-bars"></span>
              </div>
              <MegaMenuDesktop />
            </div>
          </div>
        </nav>
      </header>

      <header className={`${styles.mobile_header} `}>
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
              <div className={styles.logo}>
                <a href="/">
                  <img
                    src="/icons/logo_Nakhl.svg"
                    alt="فروشگاه اینترنتی نخل"
                    style={{ cursor: "pointer", maxHeight: "42px" }}
                  />
                </a>
              </div>
              <div className={styles.left_side}>
                <a className={styles.profile_btn} href="/dashboard">
                  <i className="fas fa-user-circle"></i>
                </a>
                <a className={styles.bascket_btn} href="/cart">
                  <i>
                    <img
                      style={{ width: "24px", marginLeft: "12px" }}
                      src="/icons/sabad.svg"
                      alt=""
                    />
                  </i>
                  <span className={styles.counter_cart}>0</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.search_header}>
          <div className="container">
            <div className={styles.search_box}>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setInputSearch(e.target.value)}
                value={inputSearch}
                placeholder="جستجو در نخل ..."
              />

              <a href={`/product/search?word=${inputSearch}&cat=`}>
                <i className="fas fa-search"></i>
              </a>
              {/* <i className="fas fa-times"></i> */}
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
              <a href="#" className={styles.menu_logo}>
                <img
                  style={{ maxHeight: "50px" }}
                  src="/icons/logo_Nakhl.svg"
                  alt=""
                />
              </a>
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
              <div className={styles.btn_links}>
                <a className={styles.btn_link_box} href="/cart">
                  <div className={styles.icon_holder}>
                    <img
                      src="https://images.timcheh.com/1/fill/24/24/sm/true/plain/https://static.timcheh.com/uploads/manual/images/others/icon-ShoppingCart-fill.svg"
                      className="icon"
                    />
                  </div>
                  <div className="txt">سبد‌‌خرید</div>
                </a>
                <a className={styles.btn_link_box} href="/help">
                  <div className={styles.icon_holder}>
                    <img
                      src="https://images.timcheh.com/1/fill/24/24/sm/true/plain/https://static.timcheh.com/uploads/manual/images/others/icon-QuestionCircle-fill.svg"
                      className="icon"
                    />
                  </div>
                  <div className="txt">دفترچه راهنما</div>
                </a>
                {/* <a
                  className={styles.btn_link_box}
                  href="/search/category-timcheh-gift-card"
                >
                  <div className={styles.icon_holder}>
                    <img
                      src="https://images.timcheh.com/1/fill/18/14/sm/true/plain/https://static.timcheh.com/uploads/manual/images/others/card_giftcard.svg"
                      className="icon"
                    />
                  </div>
                  <div className="txt">کارت هدیه</div>
                </a> */}
                {/* <a className={styles.btn_link_box} href="/page/shahneshin">
                  <div className={styles.icon_holder}>
                    <img
                      src="https://images.timcheh.com/1/fill/18/14/sm/true/plain/https://static.timcheh.com/uploads/manual/images/others/shahneshin.svg"
                      className="icon"
                    />
                  </div>
                  <div className="txt">شاه‌نشین</div>
                </a> */}
                <a className={styles.btn_link_box} href="/landing/seller">
                  <div className={styles.icon_holder}>
                    <img
                      src="https://images.timcheh.com/1/fill/24/24/sm/true/plain/https://static.timcheh.com/uploads/manual/images/others/Store-Mall-Directory-blue.svg"
                      className="icon"
                    />
                  </div>
                  <div className="txt">فروشنده شوید</div>
                </a>
              </div>
              <h2 className={styles.title_menu}>دسته بندی محصولات</h2>
            </div>
            <MegaMenuMobile />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header2;
