import React, { useState, useEffect } from "react";
import styles from "./header2.module.scss";
import Head from "next/head";
import Image from "next/image";
function Header2(props) {
 

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
                    src="/icons/logo_Nakhl.png"
                    alt="فروشگاه اینترنتی نخل"
                    style={{ cursor: "pointer", maxHeight: "36px" }}
                  />
                  <img
                    src="/icons/Name_Nakhl.png"
                    alt="فروشگاه اینترنتی نخل"
                    style={{ cursor: "pointer", maxHeight: "30px" }}
                  />
                </a>
              </div>
              <div className={styles.h_search}>
                <div className={styles.search_box}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="جستجو در نخل ..."
                    value=""
                  />
                  <i className="fas fa-search"></i>
                  {/* <i className="fas fa-close"></i> */}
                  <div className="result_search">
                    <div className="search_history"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.top_header_leftside}>
              <div className={styles.be_seller}>
                <a href="/landing/seller">در نخل بفروش!</a>
              </div>
              <div className={styles.shahneshin}>
                <a title="شاه نشین" href="/page/shahneshin">
                  <img
                    src="https://images.timcheh.com/1/fill/18/14/sm/true/plain/https://static.timcheh.com/uploads/manual/images/others/shahneshin.svg"
                    alt="شاه نشین"
                    className="icon-shahneshin"
                  />
                </a>
              </div>
              <div className={styles.help_link}>
                <a
                  target="_blank"
                  title="کارت هدیه"
                  href="/search/category-timcheh-gift-card"
                >
                  <img
                    src="https://images.timcheh.com/1/fill/24/24/sm/true/plain/https://static.timcheh.com/uploads/manual/images/others/card_giftcard.svg"
                    alt="کارت هدیه"
                    className="icon-shahneshin"
                  />
                </a>
              </div>
              <div className={styles.help_link}>
                <a title="راهنمای نخل" href="/help">
                  <i className="icon icon-QuestionCircle"></i>
                </a>
              </div>
              <a className={styles.nav_item_link_login} href="/auth/login">
                ورود/ثبت نام
              </a>
              <a className={styles.bascket_btn} rel="nofollow" href="/cart">
                <i className="fas fa-shopping-cart"></i>
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
              <ul className={styles.nav_list}>
                <li className={styles.nav_item}>
                  <a
                    className={styles.nav_item_link}
                    href="/search/category-digital"
                  >
                    کالای دیجیتال<i className="fas fa-angle-down"></i>
                  </a>
                  <div
                    className={`container  ${styles.nav_submenu} showMenuResponsive`}
                  >
                    <div className={styles.nav_cols_holder}>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-mobile-phone">
                              موبایل<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-mobile-phone?brand[]=5">
                              سامسونگ
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-mobile-phone?brand[]=13">
                              هوآوی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-mobile-phone?brand[]=6">
                              اپل
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-mobile-phone?brand[]=7">
                              شیائومی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-mobile-phone?brand[]=20">
                              آنر
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-mobile-phone?brand[]=23">
                              نوکیا
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-mobile-accessories">
                              لوازم جانبی موبایل
                              <i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-cell-phone-pouch-cover">
                              قاب، کیف و کاور گوشی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-cell-phone-and-tablet-holder">
                              پایه نگهدارنده گوشی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-cell-phone-screen-guard">
                              محافظ صفحه نمایش گوشی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-cell-phone-data-cable">
                              {" "}
                              کابل و مبدل
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-mobile-and-tablet-charger">
                              شارژر موبایل و تبلت
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-power-bank">
                              پاور بانک (شارژر همراه)
                              <i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-smart-watch-and-smartband">
                              مچبند و ساعت هوشمند
                              <i className="icon icon-Left"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-laptop">
                              لپتاپ<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-laptop?brand[]=8">
                              ایسوس
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-laptop?brand[]=12">
                              لنوو
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-laptop?brand[]=19">
                              ایسر
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-laptop?brand[]=6">اپل</a>
                          </li>
                          <li>
                            <a href="/search/category-laptop?brand[]=16">
                              اچ پی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-laptop?brand[]=25">
                              مایکروسافت
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-laptop?brand[]=22">دل</a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-laptop-accessories">
                              لوازم جانبی لپ تاپ
                              <i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-laptop-bag-and-cover">
                              کیف،کوله و کاور لپ تاپ
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-laptop-battery">
                              باتری لپ‌تاپ
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-laptop-charger">
                              شارژر مخصوص لپ‌تاپ
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-audio-and-video-cable">
                              کابل‌ صدا، AUX و HDMI
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-tablet-and-reader">
                              تبلت<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-tablet-accessories">
                              لوازم جانبی تبلت<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-aabattery-charger-and-belonging">
                              باتری، شارژر و متعلقات
                              <i className="icon icon-Left"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-data-storage">
                              تجهیزات ذخیره‌سازی اطلاعات
                              <i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-external-hard-disk">
                              هارد دیسک اکسترنال
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-usb-flash-memory">
                              فلش مموری
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-memory-card">
                              کارت حافظه
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-headphones-headsets-handsfree">
                              هدفون، هدست، هندزفری
                              <i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-speaker">
                              اسپیکر<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-speaker">
                              اسپیکر بلوتوثی
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-network">
                              مودم <i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-modem-router-adsl">
                              مودم - روتر ADSL
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-3g-and-4g-modem">
                              مودم 3G و 4G
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-computer-parts">
                              کامپیوتر و تجهیزات جانبی{" "}
                              <i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-monitor">
                              نمایشگر(مانیتور)
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-mouse">ماوس</a>
                          </li>
                          <li>
                            <a href="/search/category-keyboard">کیبورد</a>
                          </li>
                          <li>
                            <a href="/search/category-computer-devices">
                              قطعات داخلی کامپیوتر
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-game-console">
                              کنسول بازی<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-home-console">
                              {" "}
                              XBox, PS5, PS4
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-computer-and-consol-game">
                              بازی{" "}
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-gaming-accessories">
                              تجهیزات مخصوص بازی
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-television">
                              تلویزیون<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-television?brand[]=172">
                              ایکس ویژن
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-television?brand[]=5">
                              سامسونگ
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-television?brand[]=17">
                              ال جی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-television?brand[]=173">
                              اسنوا
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-television?brand[]=184">
                              TCL
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-television?brand[]=21">
                              سونی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-television?brand[]=166">
                              جی پلاس
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-television?brand[]=603">
                              شهاب
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-television?brand[]=197">
                              دوو
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-home-theater-and-soundbar">
                              سینمای خانگی و ساندبار
                              <i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-usb-digital-tv-receiver">
                              گیرنده دیجیتال تلویزیون
                              <i className="icon icon-Left"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-camera">
                              دوربین<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-photography-camera">
                              دوربین عکاسی دیجیتال
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-video-camera">
                              دوربین‌ ورزشی و فیلم برداری
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-photography-accessories">
                              لوازم جانبی دوربین
                              <i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-camera-lens">لنز</a>
                          </li>
                          <li>
                            <a href="/search/category-camera-bag">کیف</a>
                          </li>
                          <li>
                            <a href="/search/category-memory-card">
                              کارت حافظه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-instant-photo-paper">
                              کاغذ چاپ عکس
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-office-machines">
                              ماشین های اداری<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-telephone">
                              تلفن، بی سیم و سانترال
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-printer">پرینتر</a>
                          </li>
                          <li>
                            <a href="/search/category-fax">فکس</a>
                          </li>
                          <li>
                            <a href="/search/category-video-projector">
                              ویدیو پروژکتور
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className={styles.nav_item}>
                  <a
                    className={styles.nav_item_link}
                    href="/search/category-home-and-kitchen"
                  >
                    خانه و آشپزخانه<i className="fas fa-angle-down"></i>
                  </a>
                  <div className={`container  ${styles.nav_submenu}`}>
                    <div className={styles.nav_cols_holder}>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-television">
                              تلویزیون<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-television?brand[]=172">
                              ایکس ویژن
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-television?brand[]=5">
                              سامسونگ
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-television?brand[]=17">
                              ال جی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-television?brand[]=173">
                              اسنوا
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-television?brand[]=184">
                              TCL
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-television?brand[]=21">
                              سونی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-television?brand[]=166">
                              جی پلاس
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-television?brand[]=603">
                              شهاب
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-television?brand[]=197">
                              دوو
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-home-theater-and-soundbar">
                              سینمای خانگی و ساندبار
                              <i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-audio-and-video-receiver">
                              گیرنده دیجیتال تلویزیون
                              <i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-lighting">
                              نور و روشنایی<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-lamps-and-lights">
                              لامپ و چراغ
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-decorative-lights">
                              لوستر و چراغ تزیینی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-antenna">آنتن</a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-pet">
                              حیوانات خانگی، غذا و لوازم
                              <i className="icon icon-Left"></i>
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-personal-appliance-accessories">
                              فندک و لوازم جانبی
                              <i className="icon icon-Left"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-electrical-home-appliances">
                              لوازم خانگی برقی<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-refrigerator-and-freezer">
                              یخچال و فریزر
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-washing-machine">
                              ماشین لباسشویی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-dishwasher-machine">
                              ماشین ظرفشویی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-vacuum-cleaner">
                              جاروبرقی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-iron">اتو بخار و پرسی</a>
                          </li>
                          <li>
                            <a href="/search/category-sewing-machine">
                              چرخ خیاطی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-rechargeable-vacuum-cleaner">
                              جارو شارژی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-telephone">
                              تلفن، بی سیم و سانترال
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-electric-heater">
                              فن هیتر و بخاری برقی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-water-heater">آبگرمکن</a>
                          </li>
                          <li>
                            <a href="/search/category-kitchen-weighing-scale">
                              ترازوی آشپزخانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-steam-cleaner">بخارشو</a>
                          </li>
                          <li>
                            <a href="/search/category-water-purifier-and-water-cooler">
                              تصفیه آب و آبسردکن
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-electric-cooking-appliances">
                              لوازم پخت و پز برقی
                              <i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-microwave">
                              مایکروویو، مایکروفر
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-air-fryer">سرخ کن</a>
                          </li>
                          <li>
                            <a href="/search/category-oven-toaster">
                              آون توستر
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-stove">اجاق گاز</a>
                          </li>
                          <li>
                            <a href="/search/category-grill-and-barbecue">
                              کباب پز و باربیکیو
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-built-in-oven">
                              فر توکار
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-toaster">توستر</a>
                          </li>
                          <li>
                            <a href="/search/category-ricecooker-pressurecooker-slowcooker-steamcooker-aircooker-eggcooker-breadmaker">
                              پلوپز، زودپز، آرام پز و بخارپز
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-drink-maker">
                              نوشیدنی ساز<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-espresso-maker">
                              اسپرسو ساز
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-tea-maker">چای ساز</a>
                          </li>
                          <li>
                            <a href="/search/category-juicer">آبمیوه گیری</a>
                          </li>
                          <li>
                            <a href="/search/category-electric-samovars">
                              سماور برقی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-electric-kettle">
                              کتری برقی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-coffee-maker">قهوه ساز</a>
                          </li>
                          <li>
                            <a href="/search/category-citrus-juice">
                              آب مرکبات گیر
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-chopper-and-food-processor">
                              غذاساز و خرد کن<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-food-processor">غذاساز</a>
                          </li>
                          <li>
                            <a href="/search/category-meat-grinder">چرخ گوشت</a>
                          </li>
                          <li>
                            <a href="/search/category-mixer">همزن</a>
                          </li>
                          <li>
                            <a href="/search/category-blenders">مخلوط کن</a>
                          </li>
                          <li>
                            <a href="/search/category-kitchen-grinder">آسیاب</a>
                          </li>
                          <li>
                            <a href="/search/category-hand-blender">
                              گوشت کوب برقی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-sandwich-maker-and-waffle-maker">
                              ساندویچ ساز
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-chopper">خردکن</a>
                          </li>
                          <li>
                            <a href="/search/category-kitchen-machine">
                              ماشین آشپزخانه
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-serving">
                              سرو و پذیرایی<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-dinnerware-set">
                              سرویس غذاخوری
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-spoons-forks-and-knives">
                              قاشق، چنگال و کارد
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-mug-and-jug-set">
                              پارچ، بطری، لیوان و ماگ
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-servingware">
                              ظروف پذیرایی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-disposable-container">
                              کیسه زباله و فریزر
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-kitchen">
                              آشپزخانه<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-cookware-set">
                              سرویس و ظروف پخت و پز
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-flasks">فلاسک و کلمن</a>
                          </li>
                          <li>
                            <a href="/search/category-kettles-and-teapots">
                              کتری، قوری، لوازم سرو چای
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-disposable-container">
                              ظروف یکبار مصرف
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-bedroom-and-bathroom">
                              خواب و حمام<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-towel">
                              حوله و وسایل حمام
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-bed-set">سرویس خواب</a>
                          </li>
                          <li>
                            <a href="/search/category-blankets">پتو</a>
                          </li>
                          <li>
                            <a href="/search/category-pillow">بالش</a>
                          </li>
                          <li>
                            <a href="/search/category-cushion">کوسن</a>
                          </li>
                          <li>
                            <a href="/search/category-pillowcase">رو بالشی</a>
                          </li>
                          <li>
                            <a href="/search/category-bedsheet">ملحفه</a>
                          </li>
                          <li>
                            <a href="/search/category-mattress">تشک</a>
                          </li>
                          <li>
                            <a href="/search/category-water-closet">دستشویی</a>
                          </li>
                          <li>
                            <a href="/search/category-bedroom">اتاق خواب</a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-washing-and-cleaning">
                              شستشو و نظافت<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-tissue-paper">
                              دستمال کاغذی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-washing-liquid">
                              مایع دستشویی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-clothes-detergents">
                              شوینده لباس
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-dishes-detergents">
                              شوینده ظروف
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-surface-cleaner">
                              شوینده سطوح
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-shoe-cleaning">
                              نظافت کفش
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-cleaning-tools">
                              ابزار نظافت
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-insecticide">
                              حشره کش و سوسک کش
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-clothes-pin">گیره لباس</a>
                          </li>
                          <li>
                            <a href="/search/category-laundry-basket">
                              سبد رخت چرک
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-clothes-line">بند رخت</a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-decorative">
                              دکوراتیو<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-office-decoration">
                              دکوراسیون اداری
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-mirror">آینه</a>
                          </li>
                          <li>
                            <a href="/search/category-stickers-and-posters">
                              استیکر و پوستر
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-decorative-accessories">
                              لوازم تزیینی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-photo-frame">قاب عکس</a>
                          </li>
                          <li>
                            <a href="/search/category-home-furniture">
                              مبلمان خانگی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-curtain-accessories">
                              پرده ملزومات
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-sculptures-and-statues">
                              مجسمه و تندیس
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-decorative-clocks">
                              ساعت های تزئینی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-bedside-lamps-and-decorative-lamp">
                              چراغ خواب و آباژور
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-decorative-board">
                              تابلو
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-flooring-and-wall-coverings">
                              کفپوش و دیوارپوش
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-pictorial-carpet">
                              تابلو فرش
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className={styles.nav_item}>
                  <a
                    className={styles.nav_item_link}
                    href="/search/category-car-tool-work"
                  >
                    خودرو، ابزار، باغبانی<i className="fas fa-angle-down"></i>
                  </a>
                  <div className={`container  ${styles.nav_submenu}`}>
                    <div className={styles.nav_cols_holder}>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-electrical-tools">
                              ابزار برقی<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-car-wash">کارواش</a>
                          </li>
                          <li>
                            <a href="/search/category-drill">دریل</a>
                          </li>
                          <li>
                            <a href="/search/category-electric-and-cordless-screwdriver">
                              پیچ گوشتی برقی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-milling-and-desktop-stone">
                              فرز و سنگ رومیزی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-industrial-inverter">
                              اینورتر جوشکاری
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-welding-machine">
                              دستگاه جوش
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-air-compressor">
                              کمپرسور
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-blower">مکنده و دمنده</a>
                          </li>
                          <li>
                            <a href="/search/category-versatile-tool">
                              ابزار همه کاره{" "}
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-electric-engine">
                              موتور برق
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-solder-gun">
                              هویه،سیم لحیم و لوازم جانبی
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-non-electrical-tools">
                              ابزار غیر برقی<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-level">
                              متر، تراز، اندازه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-safety-tools">
                              تجهیزات ایمنی و کار
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-ladder">نردبان</a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-hand-tool">
                              ابزار دستی<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-tools-set">
                              مجموعه ابزار
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-screwdriver-and-phase-meter">
                              پیچ گوشتی و فازمتر
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-glue">
                              نوار تفلون و چسب{" "}
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-bolts-rawlplug-rivets">
                              پیچ و مهره، رول پلاک، میخ{" "}
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-box-and-toolsbag">
                              جعبه و کیف ابزار
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-lubrication-supplies">
                              لوازم روانکاری
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-gardening">
                              لوازم باغبانی<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-soil-and-fertilizer">
                              خاک، کود و آفت کش
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-sprayer">سمپاش</a>
                          </li>
                          <li>
                            <a href="/search/category-chainsaw">اره زنجیری</a>
                          </li>
                          <li>
                            <a href="/search/category-plants-grain-and-seeds">
                              بذر و تخم گیاهان
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-vase">گلدان</a>
                          </li>
                          <li>
                            <a href="/search/category-saw">اره</a>
                          </li>
                          <li>
                            <a href="/search/category-irrigation-equipment">
                              لوازم آبیاری
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-scissors-knife-and-gardening-tools">
                              قیچی‌، چاقو و ابزار باغبانی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-ax-shovel-and-pickaxe">
                              تبر، بیل و کلنگ
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-construction-tools-and-equipment">
                              لوازم و یراق آلات ساختمان
                              <i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-valves">
                              شیرآلات و دوش حمام
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-water-pump">پمپ آب</a>
                          </li>
                          <li>
                            <a href="/search/category-pipes-and-fittings">
                              لوله و اتصالات
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-lighting">
                              روشنایی و لوازم الکتریکی
                              <i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-power-strip-and-voltage-protector">
                              محافظ برق
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-lamps-and-lights">
                              لامپ و چراغ
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-decorative-lights">
                              لوسترو آباژور
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-power-strip-and-voltage-protector">
                              چندراهی برق و مبدل
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-antenna">آنتن</a>
                          </li>
                          <li>
                            <a href="/search/category-switches-and-sockets">
                              کلید و پریز
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-ventilator">هواکش</a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-car-consumables">
                              لوازم مصرفی خودرو
                              <i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-engine-oil">روغن موتور</a>
                          </li>
                          <li>
                            <a href="/search/category-gearbox-oil">
                              روغن گیربکس
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-car-fuel-and-oil-supplement">
                              انژکتور شوی و مکمل سوخت
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-antifreeze-and-radiator-water">
                              ضدیخ و آب رادیاتور
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-brake-oil">روغن ترمز</a>
                          </li>
                          <li>
                            <a href="/search/category-car-tire">
                              لاستیک و تایر
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-car-accessories">
                              لوازم جانبی خودرو
                              <i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-steering-wheel-lock-and-pedal-and-spare">
                              قفل پدال و قفل فرمان
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-car-organizer-equipment">
                              تجهیزات نظم دهنده داخل خودرو
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-steering-wheel-cover">
                              روکش فرمان
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-car-decorative-accessories">
                              لوازم تزیینی خودرو
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-car-audio-and-video-system">
                              سیستم صوتی و تصویری
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-car-cleaning-and-maintenance">
                              نظافت و نگهداری خودرو
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-motorcycle">
                              موتورسیکلت<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-helmets">
                              کلاه کاسکت موتور
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-motorcycle-consumables">
                              لوازم مصرفی و یدکی موتورسیکلت
                              <i className="icon icon-Left"></i>
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-car-spare-parts">
                              لوازم یدکی خودرو<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-car-lamp">لامپ خودرو</a>
                          </li>
                          <li>
                            <a href="/search/category-car-lights">چراغ خودرو</a>
                          </li>
                          <li>
                            <a href="/search/category-car-brake-pads">
                              لنت ترمز خودرو
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-motorcycle-brake-pads">
                              لنت ترمز موتور سیکلت
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-car-tire">
                              لاستیک و تایر
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className={styles.nav_item}>
                  <a
                    className={styles.nav_item_link}
                    href="/search/category-stationery"
                  >
                    لوازم‌التحریر، کتاب و هنر
                    <i className="fas fa-angle-down"></i>
                  </a>
                  <div className={`container  ${styles.nav_submenu}`}>
                    <div className={styles.nav_cols_holder}>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-printed-book">
                              کتاب چاپی<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-book-and-art-poem-and-literature">
                              شعر و ادبیات
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-book-and-art-economics-and-management">
                              اقتصاد و مدیریت
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-book-and-art-business">
                              کسب و کار
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-book-and-art-kids-and-teenager">
                              کودک و نوجوان
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-book-and-art-psychology">
                              روانشناسی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-book-and-art-general">
                              عمومی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-book-and-art-artistic">
                              هنر
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-book-and-art-university">
                              دانشگاهی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-book-and-art-historical">
                              تاریخ
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-book-and-art-novel">
                              رمان
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-book-and-art-tutoring-and-testing">
                              کمک درسی و آزمون
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-book-and-art-language-teaching">
                              زبان
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-book-and-art-philosophy">
                              فلسفه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-book-and-art-sociology-and-social-sciences">
                              جامعه شناسی و علوم اجتماعی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-book-and-art-health-and-hyginie">
                              سلامت و بهداشت
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-book-and-art-politics">
                              سیاست
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-book-and-art-engineering-technical-sciences">
                              علوم فنی و مهندسی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-book-and-art-social">
                              اجتماعی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-book-and-art-legal">
                              حقوق
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-book-and-art-computer">
                              کامپیوتر
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-stationery">
                              لوازم تحریر<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-notebook-and-paper">
                              کاغذ و دفتر
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-pencil">
                              مداد و مداد رنگی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-pen-and-rollerball-pen">
                              خودکار و روان نویس
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-marker">ماژیک </a>
                          </li>
                          <li>
                            <a href="/search/category-pencil-sharpener">
                              تراش،پاک کن و نوشت افزار{" "}
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-schoolbag-backpack">
                              کیف و کوله{" "}
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-desklamp">چراغ مطالعه</a>
                          </li>
                          <li>
                            <a href="/search/category-calculator">ماشین حساب</a>
                          </li>
                          <li>
                            <a href="/search/category-desk">میز تحریر</a>
                          </li>
                          <li>
                            <a href="/search/category-painting-drawing-and-art-supplies">
                              ابزار نقاشی و رنگ آمیزی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-calendar">
                              تقویم و سالنامه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-glue">
                              زونکن،چسب و لوازم اداری
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-whiteboard-and-clearboard">
                              تخته وایت برد
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-wrapping-paper">
                              کاغذ کادو و پاکت هدیه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-pencilcase">جامدادی</a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-multimedia-training-pack">
                              محتوای آموزشی<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-english-learning">
                              آموزش زبان
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-music-training">
                              آموزش موسیقی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-software-and-computer-training">
                              آموزش نرم‌افزار و کامپیوتر
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-software">
                              نرم افزار<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-software-package">
                              مجموعه نرم افزاری
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-security-software">
                              آنتی ویروس
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-operating-system">
                              سیستم عامل
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-accounting-software">
                              نرم افزارهای حسابداری
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-musicalinstruments">
                              آلات موسیقی<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-guitar">گیتار</a>
                          </li>
                          <li>
                            <a href="/search/category-piano">پیانو</a>
                          </li>
                          <li>
                            <a href="/search/category-electronic-keyboard">
                              کیبورد و ارگ
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-dulcimer">سنتور</a>
                          </li>
                          <li>
                            <a href="/search/category-violin">ویولن</a>
                          </li>
                          <li>
                            <a href="/search/category-transverse-flute">فلوت</a>
                          </li>
                          <li>
                            <a href="/search/category-iranian-instruments">
                              سازهای ایرانی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-musicinstrumentsaccessories">
                              لوازم جانبی آلات موسیقی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-studio-equipment">
                              تجهیزات استودیویی
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-handicraft">
                              صنایع دستی<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-termeh">ترمه</a>
                          </li>
                          <li>
                            <a href="/search/category-giftbox">جعبه هدیه</a>
                          </li>
                          <li>
                            <a href="/search/category-pottery-ceramic-porcelain">
                              سفال، سرامیک و چینی
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className={styles.nav_item}>
                  <a
                    className={styles.nav_item_link}
                    href="/search/category-personal-appliance"
                  >
                    آرایشی و سلامت<i className="fas fa-angle-down"></i>
                  </a>
                  <div className={`container  ${styles.nav_submenu}`}>
                    <div className={styles.nav_cols_holder}>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-cosmetics">
                              لوازم آرایشی<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-face-makeup">
                              آرایش صورت
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-eye-and-eyebrow-makeup">
                              آرایش چشم{" "}
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-eye-and-eyebrow-makeup">
                              آرایش ابرو
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-lip-makeup">آرایش لب</a>
                          </li>
                          <li>
                            <a href="/search/category-hair-dressing">
                              {" "}
                              آرایش مو
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-nail-health-and-beauty">
                              آرایش ناخن
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-cosmetic-equipment">
                              ابزار آرایش
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-body-care">
                              لوازم بهداشتی<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-skin-care">
                              کرم و مراقبت پوست
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-shampoo-and-hair-care">
                              شامپو و تقویت کننده مو
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-oral-care">
                              بهداشت دهان و دندان
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-health-and-body-care">
                              بهداشت و مراقبت بدن
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-haircut-accessories">
                              لوازم اصلاح مو
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-womens-health">
                              بهداشت بانوان
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-gamic-health-products">
                              بهداشت جنسی
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-perfume">
                              عطر و ادکلن<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-mens-perfume-and-cologne">
                              عطر مردانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-womens-perfume-and-cologne">
                              عطر زنانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-pocket-perfume">
                              عطر جیبی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-spray">اسپری</a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-personal-electrical-tools">
                              لوازم شخصی برقی<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-hairclipper">
                              ماشین اصلاح صورت
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-hairclipper">
                              ماشین اصلاح سر
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-ironing-and-styling">
                              اتو مو{" "}
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-laser-cosmetics">لیزر</a>
                          </li>
                          <li>
                            <a href="/search/category-hairdryer">سشوار</a>
                          </li>
                          <li>
                            <a href="/search/category-epilator">اپیلاتور</a>
                          </li>
                          <li>
                            <a href="/search/category-men-body-haircut">
                              اصلاح بدن آقایان
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-women-body-haircut">
                              اصلاح بدن بانوان
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-shaving-ears-nose-and-eyebrows">
                              اصلاح موی گوش، بینی و ابرو
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-comb-and-hair-brush">
                              برس پاک سازی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-curlers-and-curling-irons">
                              بیگودی و فر کننده
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-electric-toothbrush">
                              مسواک برقی
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-washing-and-cleaning">
                              شستشو و نظافت<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-tissue-paper">
                              دستمال کاغذی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-washing-liquid">
                              مایع دستشویی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-clothes-detergents">
                              شوینده لباس
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-dishes-detergents">
                              شوینده ظروف
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-surface-cleaner">
                              شوینده سطوح
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-shoe-cleaning">
                              نظافت کفش
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-cleaning-tools">
                              ابزار نظافت
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-insecticide">
                              حشره کش و سوسک کش
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-clothes-pin">گیره لباس</a>
                          </li>
                          <li>
                            <a href="/search/category-laundry-basket">
                              سبد رخت چرک
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-clothes-line">بند رخت</a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-health-care-product">
                              ابزار سلامت<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-adhesives-and-therapeutic-pads">
                              چسب، پد الکلی و درمانی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-scales">ترازوی دیجیتال</a>
                          </li>
                          <li>
                            <a href="/search/category-barometer">فشارسنج</a>
                          </li>
                          <li>
                            <a href="/search/category-blood-glucose-test">
                              تست قند خون
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-massager">ماساژور</a>
                          </li>
                          <li>
                            <a href="/search/category-thermometer">تب سنج</a>
                          </li>
                          <li>
                            <a href="/search/category-foot-care-tools">
                              ابزار مراقبت پا
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-sleeping-goods-and-medical-rest">
                              بالش خواب و استراحت طبی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-heart-rate-monitor">
                              نمایشگر ضربان قلب
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-electric-mattresses-and-blankets">
                              تشک و پتوی برقی
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className={styles.nav_item}>
                  <a
                    className={styles.nav_item_link}
                    href="/search/category-food-beverage"
                  >
                    خواروبار<i className="fas fa-angle-down"></i>
                  </a>
                  <div className={`container  ${styles.nav_submenu}`}>
                    <div className={styles.nav_cols_holder}>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-basic-goods-and-groceries">
                              خوار و بار<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-rice">برنج</a>
                          </li>
                          <li>
                            <a href="/search/category-oil">روغن</a>
                          </li>
                          <li>
                            <a href="/search/category-saffron-barberry-and-food-decorations">
                              زعفران، زرشک و تزئینات غذا
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-pasta-pasta-and-noodles">
                              ماکارونی، پاستا و لازانیا
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-tomato-paste-and-canned">
                              رب و کنسرو گوجه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-beans-and-soy">حبوبات </a>
                          </li>
                          <li>
                            <a href="/search/category-sugar-and-candy">
                              قند و نبات
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-sugar">شکر</a>
                          </li>
                          <li>
                            <a href="/search/category-spices-and-seasonings">
                              ادویه و چاشنی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-sauce">سس</a>
                          </li>
                          <li>
                            <a href="/search/category-olive">زیتون</a>
                          </li>
                          <li>
                            <a href="/search/category-pickles-and-pickles">
                              خیارشور و ترشیجات
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-beverages">
                              نوشیدنی ها<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-coffee">قهوه</a>
                          </li>
                          <li>
                            <a href="/search/category-instant-coffee-and-hot-chocolate">
                              قهوه فوری و هات چاکلت
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-tea">چای</a>
                          </li>
                          <li>
                            <a href="/search/category-syrup-and-juice">
                              شربت و آبمیوه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-water-and-mineral-water">
                              آب و آب معدنی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-soft-drinks">نوشابه</a>
                          </li>
                          <li>
                            <a href="/search/category-non-alcoholic-beer">
                              ماءالشعیر
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-energy-drink">
                              نوشابه انرژی زا
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-sweats-and-roses">
                              عرقیات و گلاب
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-herbal-tea">دمنوش</a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-dessert">
                              دسر و شیرینی پزی<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-cereals">
                              غلات و پودر کیک
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-nuts-and-sweets">
                              آجیل و خشکبار<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-date">خرما</a>
                          </li>
                          <li>
                            <a href="/search/category-nuts-and-nuts">خشکبار</a>
                          </li>
                          <li>
                            <a href="/search/category-nuts-and-nuts"> آجیل</a>
                          </li>
                          <li>
                            <a href="/search/category-sweets">شیرینی</a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-canned-and-ready-meals">
                              کنسرو و غذای آماده
                              <i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-tuna">تن ماهی</a>
                          </li>
                          <li>
                            <a href="/search/category-prepared-food-and-noodles">
                              غذای آماده و نودل
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-canned-and-compote">
                              کنسرو و کمپوت
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-junk-food">
                              تنقلات<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-biscuits-and-wafers">
                              بیسکویت
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-chips-and-popcorn">
                              چیپس و پاپ کورن
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-puffs-and-snacks">
                              پفک و اسنک
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-chocolate-toffee-and-candy">
                              شکلات، تافی و آبنبات
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-chewing-gum-and-mouthwash">
                              آدامس
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-flavored-seeds-and-nuts">
                              تخمه و مغز طعم
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-lavashka-leaves-and-plums">
                              آلوچه و لواشک
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-gummi-candy">پاستیل</a>
                          </li>
                          <li>
                            <a href="/search/category-cakes-and-cookies">
                              کیک و کلوچه
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-breakfast">
                              صبحانه<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-jam">مربا</a>
                          </li>
                          <li>
                            <a href="/search/category-sugar-halva-flour-and-sesame">
                              حلوا شکری، ارده و کنجد
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-breakfast-cereal">
                              غلات صبحانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-breakfast-chocolate">
                              شکلات صبحانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-honey">عسل</a>
                          </li>
                          <li>
                            <a href="/search/category-peanut-butter">
                              کره بادام زمینی
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-dairy">
                              لبنیات<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-milk">شیر</a>
                          </li>
                          <li>
                            <a href="/search/category-dough">دوغ</a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-protein-material">
                              پروتئینی<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-egg">تخم مرغ</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className={styles.nav_item}>
                  <a
                    className={styles.nav_item_link}
                    href="/search/category-toys-baby-infant"
                  >
                    اسباب بازی، کودک و نوزاد
                    <i className="fas fa-angle-down"></i>
                  </a>
                  <div className={`container  ${styles.nav_submenu}`}>
                    <div className={styles.nav_cols_holder}>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-toys">
                              اسباب بازی<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-intellectual-game">
                              بازی فکری
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-gun-and-combat-toys">
                              تفنگ و مبارزه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-tricycle-and-motorcycle">
                              سه‌چرخه موتور و ماشین بازی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-swings-and-slides">
                              تاب و سرسره
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-pranks-and-entertainment">
                              شوخی و سرگرمی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-puzzle-and-building">
                              پازل و لگو
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-doll">عروسک </a>
                          </li>
                          <li>
                            <a href="/search/category-car-airplane-train">
                              ماشین، هواپیما و قطار
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-roleplay">نقش آفرینی</a>
                          </li>
                          <li>
                            <a href="/search/category-robots-and-gadget">
                              ربات و گجت
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-surprising-toys">
                              اسباب بازی شانسی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-play-gym">
                              تشک بازی و پارک بازی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-rattles">جغجغه</a>
                          </li>
                          <li>
                            <a href="/search/category-baby-walkers">
                              روروک و واکر
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-inflatable-toy-equipment">
                              تجهیزات بازی بادی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-pedal-horse">
                              اسب رکاب‌دار
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-baby-clothing">
                              پوشاک و کفش کودک و نوزاد
                              <i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-kids-clothes">لباس</a>
                          </li>
                          <li>
                            <a href="/search/category-kids-shoes">کفش</a>
                          </li>
                          <li>
                            <a href="/search/category-baby-socks">جوراب</a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-hygiene-and-bath">
                              بهداشت کودک<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-diaper">پوشک </a>
                          </li>
                          <li>
                            <a href="/search/category-baby-and-infant-shampoo">
                              شامپو
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-baby-wet-wipes">
                              دستمال مرطوب
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-creams-balms-and-lotions">
                              کرم، بالم و لوسیون{" "}
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-baby-powder">پودر بچه</a>
                          </li>
                          <li>
                            <a href="/search/category-baby-towel">حوله </a>
                          </li>
                          <li>
                            <a href="/search/category-cloth-diaper">کهنه </a>
                          </li>
                          <li>
                            <a href="/search/category-diaper-cleaner">
                              مینی واش
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-babyoil">روغن بچه</a>
                          </li>
                          <li>
                            <a href="/search/category-napkin-cover-and-baby-bucket">
                              کاور دستمال کاغذی و سطل{" "}
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-baby-bath-tub">
                              وان حمام نوزاد
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-baby-changing-mat">
                              تشک و زیرانداز تعویض کودک
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-children-cotton-swab">
                              گوش پاک کن
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-baby-bath-loofah">لیف</a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-baby-personal-care">
                              لوازم شخصی<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-pacifier-and-accessories">
                              پستانک و ملزومات
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-baby-and-infant-milking">
                              شیردوش
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-baby-strollers-and-accessories">
                              گردش و سفر<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-stroller-and-carrier">
                              کالسکه و کریر
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-chair-species">
                              صندلی خودرو کودک و نوزاد
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-diaper-bag">
                              ساک لوازم کودک و نوزاد
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-baby-carrier">آغوشی</a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-safety-and-care">
                              ایمنی و مراقبت<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-child-and-infant-safety-tools">
                              ابزار ایمنی کودک و نوزاد
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-thermometer">
                              تب سنج و دماسنج کودک و نوزاد
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-baby-and-infant-room-monitor-and-pager">
                              مانیتور و پیجر اتاق کودک و نوزاد
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-hot-water-bag">
                              پد و کیسه آب گرم
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-feeding">
                              غذاخوری<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-baby-bottle">
                              شیشه شیر، سرلاک و داروخوری
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-baby-bottle-accessory">
                              ملزومات شیشه شیر
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-baby-bottle-accessory">
                              استریل، گرم و خشک کننده شیشه شیر
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-spoon-forks-and-dishes">
                              قاشق، چنگال و ظروف کودک و نوزاد
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-baby-food-containers">
                              ظرف غذای کودک و نوزاد
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-booster-seat">
                              صندلی غذاخوری کودک و نوزاد
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-feeding-cloak">
                              کاور شیردهی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-baby-thermos-flask">
                              قمقمه و فلاسک کودک و نوزاد
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-baby-laundry-detergent">
                              شوینده لباس کودک و نوزاد
                              <i className="icon icon-Left"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-baby-sleeping-products">
                              خواب کودک<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-baby-bed-set">
                              سرویس خواب کودک و نوزاد
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-baby-and-infant-mattresses">
                              تشک کودک و نوزاد
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-feeding-pillow">
                              بالش شیردهی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-baby-decorative-lamp">
                              چراغ خواب کودک و نوزاد
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-baby-blanket">
                              پتو کودک و نوزاد
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-baby-and-child-sheet">
                              ملحفه کودک و نوزاد
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-children-room-decorating">
                              تزئینات اتاق کودک
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-childrens-bedroom-furniture">
                              مبلمان اتاق کودک
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-baby-and-infant-cradle">
                              گهواره
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-mosquito-net">پشه بند</a>
                          </li>
                          <li>
                            <a href="/search/category-baby-bed">
                              تختخواب کودک و نوزاد
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-baby-drawer-and-dresser">
                              کمد و دراور کودک
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-baby-cushion">
                              کوسن کودک
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className={styles.nav_item}>
                  <a
                    className={styles.nav_item_link}
                    href="/search/category-sport-and-travel"
                  >
                    ورزش، سفر، کمپینگ<i className="fas fa-angle-down"></i>
                  </a>
                  <div className={`container  ${styles.nav_submenu}`}>
                    <div className={styles.nav_cols_holder}>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-aerobic-and-bodybuilding">
                              ورزش های هوازی و بدنسازی
                              <i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-aerobic-and-bodybuilding-equipment">
                              {" "}
                              ایروبیک و تناسب اندام
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-dumbell">دمبل</a>
                          </li>
                          <li>
                            <a href="/search/category-treadmill">تردمیل</a>
                          </li>
                          <li>
                            <a href="/search/category-elliptical-and-lifecycle-bike">
                              دوچرخه ثابت و الپتیکال
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-horizontalbar">بارفیکس</a>
                          </li>
                          <li>
                            <a href="/search/category-sport-rope">طناب</a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a>
                              ورزش های سرعتی<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-selfbalancing-scooter">
                              اسکوتر برقی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-scooter"> اسکوتر</a>
                          </li>
                          <li>
                            <a href="/search/category-skate-and-skateboard">
                              اسکیت{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-sportsballs">
                              ورزش های توپی<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-ball">توپ</a>
                          </li>
                          <li>
                            <a href="/search/category-racquet">راکت</a>
                          </li>
                          <li>
                            <a href="/search/category-pingpong-table">
                              میز پینگ پنگ
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-foosball">فوتبال دستی</a>
                          </li>
                          <li>
                            <a href="/search/category-sports-balls-accessories">
                              لوازم جانبی ورزش های توپی
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a>
                              سایر وسایل ورزشی<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-water-sports">
                              ورزش های آبی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-martialarts">
                              ورزش های رزمی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-mindsport">
                              {" "}
                              ورزش های فکری
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-archery">
                              ورزش های نشانه‌ گیری
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-ski-and-ski-equipment">
                              اسکی و تجهیزات اسکی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-diving-equipment">
                              لوازم غواصی
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-mountain-climbing-and-camping">
                              کوه‌نوردی و کمپینگ
                              <i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-tent">چادر</a>
                          </li>
                          <li>
                            <a href="/search/category-knife-and-multifunctional-tools">
                              چاقوی سفر و ابزار چند کاره
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-sleeping-bag">
                              کیسه خواب
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-torch-light">چراغ قوه</a>
                          </li>
                          <li>
                            <a href="/search/category-picnic-set-and-picnic-stove">
                              اجاق و ظرف سفری
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-binoculars-and-monoculars">
                              دوربین دو چشمی و تک چشمی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-mountaineering-and-travel-accessories">
                              تجهیزات جانبی کوه‌نوردی و سفر
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-travel-equipment">
                              تجهیزات سفر<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-bag-and-backpack">
                              کیف و کوله
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-suitcase">ساک و چمدان</a>
                          </li>
                          <li>
                            <a href="/search/category-umbrella">چتر</a>
                          </li>
                          <li>
                            <a href="/search/category-fishing-tools">
                              لوازم ماهیگیری
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-bicycles-and-accessories">
                              دوچرخه و لوازم جانبی
                              <i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-bicycle">دوچرخه</a>
                          </li>
                          <li>
                            <a href="/search/category-bicycle-accessories">
                              لوازم جانبی دوچرخه
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className={styles.nav_item}>
                  <a
                    className={styles.nav_item_link}
                    href="/search/category-apparel"
                  >
                    طلا، مد و پوشاک<i className="fas fa-angle-down"></i>
                  </a>
                  <div className={`container  ${styles.nav_submenu}`}>
                    <div className={styles.nav_cols_holder}>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-women-gold-jewelry">
                              زیورآلات طلا زنانه
                              <i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-womens-gold-necklace">
                              گردنبند طلا{" "}
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-womens-gold-pendant">
                              آویز طلا{" "}
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-womens-gold-binding">
                              پابند طلا
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-womens-gold-bracelet">
                              دستبند طلا{" "}
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-womens-gold-brooch">
                              گل سینه طلا{" "}
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-womens-gold-chains">
                              زنجیر طلا
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-womens-gold-earrings">
                              گوشواره طلا{" "}
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-womens-gold-jewelry-set">
                              ست زیورآلات طلا{" "}
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-womens-gold-piercing">
                              پیرسینگ طلا{" "}
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-womens-gold-ring">
                              انگشتر طلا{" "}
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-womens-gold-watch-pendant">
                              آویز ساعت طلا{" "}
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-bullion">
                              شمش و پلاک طلا و نقره
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-mens-accessories">
                              اکسسوری مردانه<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-mens-bag">کیف مردانه</a>
                          </li>
                          <li>
                            <a href="/search/category-mens-backpack">
                              کوله پشتی مردانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-men-belts">
                              کمربند و ساسبند مردانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-men-wallet">
                              کیف پول مردانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-mens-gift-set">
                              ست هدیه مردانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-mens-gloves">
                              دستکش مردانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-men-headwear">
                              سرپوش مردانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-men-jewelry">
                              زیورآلات مردانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-men-luggage">
                              کیف سفری و چمدان مردانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-men-silver-jewelry">
                              زیورآلات نقره مردانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-men-sport-accessories">
                              اکسسوری ورزشی مردانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-men-ties">
                              کراوات و پاپیون مردانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-mens-keychain">
                              جاکلیدی مردانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-mens-sunglasses">
                              عینک آفتابی مردانه
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-women-accessories">
                              اکسسوری زنانه<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-women-backpack">
                              کوله پشتی زنانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-women-bag">کیف زنانه</a>
                          </li>
                          <li>
                            <a href="/search/category-womens-belt">
                              کمربند زنانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-womens-gift-set">
                              ست هدیه زنانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-womens-gloves">
                              دستکش زنانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-women-hair-accessories">
                              اکسسوری مو زنانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-uni-headwear">
                              سرپوش زنانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-women-luggage">
                              کیف سفری و چمدان زنانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-shawl-and-scarf">
                              شال و روسری زنانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-women-sport-accessories">
                              اکسسوری ورزشی زنانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-women-ties-and-bows">
                              کراوات و پاپیون زنانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-women-wallets-and-cosmetic-bags">
                              کیف پول و کیف لوازم آرایش زنانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-womens-watch">
                              ساعت زنانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-glass-accessories">
                              لوازم جانبی و اکسسوری عینک زنانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-jewelry-equipment">
                              ملزومات زیورآلات زنانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-analog-and-digital-watch-accessories">
                              لوازم جانبی ساعت عقربه ای و دیجیتال زنانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-circle-budgets">
                              پیکسل زنانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-womens-sunglasses">
                              عینک آفتابی زنانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-women-silver-jewelry">
                              زیورآلات نقره زنانه
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-perfume">
                              عطر و ادکلن<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-mens-perfume-and-cologne">
                              عطر مردانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-womens-perfume-and-cologne">
                              عطر زنانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-pocket-perfume">
                              عطر جیبی
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-spray">اسپری</a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-mens-watch">
                              ساعت مردانه<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-mens-analog-watch">
                              ساعت عقربه ای مردانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-mens-digital-watch">
                              ساعت دیجیتال مردانه
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-womens-watch">
                              ساعت زنانه<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-women-analog-watch">
                              ساعت عقربه ای زنانه
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-women-digital-watch">
                              ساعت دیجیتال زنانه
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-watch-set">
                              ست ساعت زنانه و مردانه
                              <i className="icon icon-Left"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.nav_submenu_col}>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-men-clothing">
                              لباس مردانه<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-mens-tshirt-and-polos">
                              تی شرت و پولو شرت
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-men-shirts">پیراهن</a>
                          </li>
                          <li>
                            <a href="/search/category-mens-jeans">شلوار</a>
                          </li>
                          <li>
                            <a href="/search/category-mens-underwear">
                              لباس زیر
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-men-sportswear">
                              پوشاک ورزشی
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-men-shoes">
                              کفش مردانه<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-casual-shoes-for-men">
                              کفش روزمره
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-mens-sneakers">
                              کفش ورزشی
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-women-clothing">
                              لباس زنانه<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-women-mantou-and-pant">
                              مانتو
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-women-shirts">
                              بلوز و شومیز
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-women-tshirts-and-polos">
                              تی شرت و پولوشرت
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-women-mantou-and-pant">
                              شلوار
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-women-underwear">
                              لباس زیر
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-women-sportwear">
                              پوشاک ورزشی
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a href="/search/category-women-shoes">
                              کفش زنانه<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-casual-shoes-for-women">
                              کفش روزمره
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-women-sneakers">
                              کفش ورزشی
                            </a>
                          </li>
                        </ul>
                        <ul className={styles.nav_submenu_cat}>
                          <li className={styles.nav_submenu_col_title}>
                            <a>
                              بچه گانه<i className="icon icon-Left"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/search/category-kids-clothes">نوزاد</a>
                          </li>
                          <li>
                            <a href="/search/category-boys-clothing">پسرانه</a>
                          </li>
                          <li>
                            <a href="/search/category-girls-clothing">
                              دخترانه
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <header className={`${styles.mobile_header} `}>
        <div className={styles.header_holder}>
          <div className="container">
            <div className={styles.inner_header}>
              <div className={styles.menu_Hamburger} onClick={}>
                <i
                  className="fas fa-bars"
                  
                ></i>
              </div>
              <div className={styles.logo}>
                <a href="/">
                  <img
                    src="/icons/logo_Nakhl.png"
                    alt="فروشگاه اینترنتی نخل"
                    style={{ cursor: "pointer", maxHeight: "37px" }}
                  />
                </a>
              </div>
              <div className={styles.left_side}>
                <a className={styles.profile_btn} href="/dashboard">
                  <i className="far fa-user"></i>
                </a>
                <a className={styles.bascket_btn} href="/cart">
                  <i className="fas fa-shopping-cart"></i>
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
                value=""
                placeholder="جستجو در نخل ..."
              />
              <i className="fas fa-search"></i>
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
          
            <div className={styles.mobile_menu}>
              <div className={styles.head_menu}>
                <a href="#" className={styles.menu_logo}>
                  <img
                    src="https://images.timcheh.com/1/fill/115/36/sm/true/plain/https://static.timcheh.com/uploads/manual/images/logo.svg"
                    alt=""
                  />
                </a>
                <span
                  className={styles.close_menu}
                  onClick={}
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
                  <a
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
                  </a>
                  <a className={styles.btn_link_box} href="/page/shahneshin">
                    <div className={styles.icon_holder}>
                      <img
                        src="https://images.timcheh.com/1/fill/18/14/sm/true/plain/https://static.timcheh.com/uploads/manual/images/others/shahneshin.svg"
                        className="icon"
                      />
                    </div>
                    <div className="txt">شاه‌نشین</div>
                  </a>
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
              <ul>
                <li>
                  <a href="javascript:void(0);">
                    کالای دیجیتال<i className="fas fa-angle-down"></i>
                  </a>
                  <ul className={styles.submenu}>
                    <li>
                      <a href="/search/category-digital">
                        مشاهده همه موارد این دسته
                      </a>
                    </li>
                    <li>
                      <a>
                        موبایل <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-mobile-phone?brand[]=5">
                            سامسونگ
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-mobile-phone?brand[]=13">
                            هوآوی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-mobile-phone?brand[]=6">
                            اپل
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-mobile-phone?brand[]=7">
                            شیائومی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-mobile-phone?brand[]=20">
                            آنر
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-mobile-phone?brand[]=23">
                            نوکیا
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        لوازم جانبی موبایل <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-cell-phone-pouch-cover">
                            قاب، کیف و کاور گوشی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-cell-phone-and-tablet-holder">
                            پایه نگهدارنده گوشی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-cell-phone-screen-guard">
                            محافظ صفحه نمایش گوشی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-cell-phone-data-cable">
                            {" "}
                            کابل و مبدل
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-mobile-and-tablet-charger">
                            شارژر موبایل و تبلت
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/search/category-power-bank">
                        پاور بانک (شارژر همراه)
                      </a>
                    </li>
                    <li>
                      <a href="/search/category-smart-watch-and-smartband">
                        مچبند و ساعت هوشمند
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        لپتاپ <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-laptop?brand[]=8">ایسوس</a>
                        </li>
                        <li>
                          <a href="/search/category-laptop?brand[]=12">لنوو</a>
                        </li>
                        <li>
                          <a href="/search/category-laptop?brand[]=19">ایسر</a>
                        </li>
                        <li>
                          <a href="/search/category-laptop?brand[]=6">اپل</a>
                        </li>
                        <li>
                          <a href="/search/category-laptop?brand[]=16">اچ پی</a>
                        </li>
                        <li>
                          <a href="/search/category-laptop?brand[]=25">
                            مایکروسافت
                          </a>
                          <li>
                            <a href="/search/category-laptop?brand[]=22">دل</a>
                          </li>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        لوازم جانبی لپ تاپ <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-laptop-bag-and-cover">
                            کیف،کوله و کاور لپ تاپ
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-laptop-battery">
                            باتری لپ‌تاپ
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-laptop-charger">
                            شارژر مخصوص لپ‌تاپ
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-audio-and-video-cable">
                            کابل‌ صدا، AUX و HDMI
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/search/category-tablet-and-reader">تبلت</a>
                    </li>
                    <li>
                      <a href="/search/category-tablet-accessories">
                        لوازم جانبی تبلت
                      </a>
                    </li>
                    <li>
                      <a href="/search/category-aabattery-charger-and-belonging">
                        باتری، شارژر و متعلقات
                      </a>
                    </li>
                    <li>
                      <a>
                        تجهیزات ذخیره‌سازی اطلاعات
                        <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-external-hard-disk">
                            هارد دیسک اکسترنال
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-usb-flash-memory">
                            فلش مموری
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-memory-card">کارت حافظه</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/search/category-headphones-headsets-handsfree">
                        هدفون، هدست، هندزفری
                      </a>
                    </li>
                    <li>
                      <a href="/search/category-speaker">
                        اسپیکر<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-speaker">اسپیکر بلوتوثی</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/search/category-network">
                        مودم <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-modem-router-adsl">
                            مودم - روتر ADSL
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-3g-and-4g-modem">
                            مودم 3G و 4G
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        کامپیوتر و تجهیزات جانبی
                        <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-monitor">
                            نمایشگر(مانیتور)
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-mouse">ماوس</a>
                        </li>
                        <li>
                          <a href="/search/category-keyboard">کیبورد</a>
                        </li>
                        <li>
                          <a href="/search/category-computer-devices">
                            قطعات داخلی کامپیوتر
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        کنسول بازی<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-home-console">
                            {" "}
                            XBox, PS5, PS4
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-computer-and-consol-game">
                            بازی{" "}
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-gaming-accessories">
                            تجهیزات مخصوص بازی
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        تلویزیون<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-television?brand[]=172">
                            ایکس ویژن
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-television?brand[]=5">
                            سامسونگ
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-television?brand[]=17">
                            ال جی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-television?brand[]=173">
                            اسنوا
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-television?brand[]=184">
                            TCL
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-television?brand[]=21">
                            سونی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-television?brand[]=166">
                            جی پلاس
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-television?brand[]=603">
                            شهاب
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-television?brand[]=197">
                            دوو
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/search/category-home-theater-and-soundbar">
                        سینمای خانگی و ساندبار<i className="icon icon-Left"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/search/category-usb-digital-tv-receiver">
                        گیرنده دیجیتال تلویزیون
                        <i className="icon icon-Left"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        دوربین<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-photography-camera">
                            دوربین عکاسی دیجیتال
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-video-camera">
                            دوربین‌ ورزشی و فیلم برداری
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        لوازم جانبی دوربین<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-camera-lens">لنز</a>
                        </li>
                        <li>
                          <a href="/search/category-camera-bag">کیف</a>
                        </li>
                        <li>
                          <a href="/search/category-memory-card">کارت حافظه</a>
                        </li>
                        <li>
                          <a href="/search/category-instant-photo-paper">
                            کاغذ چاپ عکس
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        ماشین های اداری<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-telephone">
                            تلفن، بی سیم و سانترال
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-printer">پرینتر</a>
                        </li>
                        <li>
                          <a href="/search/category-fax">فکس</a>
                        </li>
                        <li>
                          <a href="/search/category-video-projector">
                            ویدیو پروژکتور
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:void(0);" title="">
                    خانه و آشپزخانه<i className="fas fa-angle-down"></i>
                  </a>
                  <ul className={styles.submenu}>
                    <li>
                      <a href="/search/category-home-and-kitchen">
                        مشاهده همه موارد این دسته
                      </a>
                    </li>
                    <li>
                      <a>
                        تلویزیون<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-television?brand[]=172">
                            ایکس ویژن
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-television?brand[]=5">
                            سامسونگ
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-television?brand[]=17">
                            ال جی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-television?brand[]=173">
                            اسنوا
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-television?brand[]=184">
                            TCL
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-television?brand[]=21">
                            سونی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-television?brand[]=166">
                            جی پلاس
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-television?brand[]=603">
                            شهاب
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-television?brand[]=197">
                            دوو
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/search/category-home-theater-and-soundbar">
                        سینمای خانگی و ساندبار<i className="icon icon-Left"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/search/category-audio-and-video-receiver">
                        گیرنده دیجیتال تلویزیون
                        <i className="icon icon-Left"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="">
                        نور و روشنایی <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-lamps-and-lights">
                            لامپ و چراغ
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-decorative-lights">
                            لوستر و چراغ تزیینی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-antenna">آنتن</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/search/category-pet">
                        حیوانات خانگی، غذا و لوازم
                      </a>
                    </li>
                    <li>
                      <a href="/search/category-personal-appliance-accessories">
                        فندک و لوازم جانبی
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="">
                        لوازم خانگی برقی<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-refrigerator-and-freezer">
                            یخچال و فریزر
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-washing-machine">
                            ماشین لباسشویی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-dishwasher-machine">
                            ماشین ظرفشویی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-vacuum-cleaner">جاروبرقی</a>
                        </li>
                        <li>
                          <a href="/search/category-iron">اتو بخار و پرسی</a>
                        </li>
                        <li>
                          <a href="/search/category-sewing-machine">
                            چرخ خیاطی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-rechargeable-vacuum-cleaner">
                            جارو شارژی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-telephone">
                            تلفن، بی سیم و سانترال
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-electric-heater">
                            فن هیتر و بخاری برقی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-water-heater">آبگرمکن</a>
                        </li>
                        <li>
                          <a href="/search/category-kitchen-weighing-scale">
                            ترازوی آشپزخانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-steam-cleaner">بخارشو</a>
                        </li>
                        <li>
                          <a href="/search/category-water-purifier-and-water-cooler">
                            تصفیه آب و آبسردکن
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="">
                        لوازم پخت و پز برقی<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-microwave">
                            مایکروویو، مایکروفر
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-air-fryer">سرخ کن</a>
                        </li>
                        <li>
                          <a href="/search/category-oven-toaster">آون توستر</a>
                        </li>
                        <li>
                          <a href="/search/category-stove">اجاق گاز</a>
                        </li>
                        <li>
                          <a href="/search/category-grill-and-barbecue">
                            کباب پز و باربیکیو
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-built-in-oven">فر توکار</a>
                        </li>
                        <li>
                          <a href="/search/category-toaster">توستر</a>
                        </li>
                        <li>
                          <a href="/search/category-ricecooker-pressurecooker-slowcooker-steamcooker-aircooker-eggcooker-breadmaker">
                            پلوپز، زودپز، آرام پز و بخارپز
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="">
                        نوشیدنی ساز<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-espresso-maker">
                            اسپرسو ساز
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-tea-maker">چای ساز</a>
                        </li>
                        <li>
                          <a href="/search/category-juicer">آبمیوه گیری</a>
                        </li>
                        <li>
                          <a href="/search/category-electric-samovars">
                            سماور برقی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-electric-kettle">
                            کتری برقی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-coffee-maker">قهوه ساز</a>
                        </li>
                        <li>
                          <a href="/search/category-citrus-juice">
                            آب مرکبات گیر
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="">
                        غذاساز و خرد کن<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-food-processor">غذاساز</a>
                        </li>
                        <li>
                          <a href="/search/category-meat-grinder">چرخ گوشت</a>
                        </li>
                        <li>
                          <a href="/search/category-mixer">همزن</a>
                        </li>
                        <li>
                          <a href="/search/category-blenders">مخلوط کن</a>
                        </li>
                        <li>
                          <a href="/search/category-kitchen-grinder">آسیاب</a>
                        </li>
                        <li>
                          <a href="/search/category-hand-blender">
                            گوشت کوب برقی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-sandwich-maker-and-waffle-maker">
                            ساندویچ ساز
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-chopper">خردکن</a>
                        </li>
                        <li>
                          <a href="/search/category-kitchen-machine">
                            ماشین آشپزخانه
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="">
                        سرو و پذیرایی<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-dinnerware-set">
                            سرویس غذاخوری
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-spoons-forks-and-knives">
                            قاشق، چنگال و کارد
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-mug-and-jug-set">
                            پارچ، بطری، لیوان و ماگ
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-servingware">
                            ظروف پذیرایی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-disposable-container">
                            کیسه زباله و فریزر
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="">
                        آشپزخانه<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-cookware-set">
                            سرویس و ظروف پخت و پز
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-flasks">فلاسک و کلمن</a>
                        </li>
                        <li>
                          <a href="/search/category-kettles-and-teapots">
                            کتری، قوری، لوازم سرو چای
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-disposable-container">
                            ظروف یکبار مصرف
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="">
                        خواب و حمام<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-towel">حوله و وسایل حمام</a>
                        </li>
                        <li>
                          <a href="/search/category-bed-set">سرویس خواب</a>
                        </li>
                        <li>
                          <a href="/search/category-blankets">پتو</a>
                        </li>
                        <li>
                          <a href="/search/category-pillow">بالش</a>
                        </li>
                        <li>
                          <a href="/search/category-cushion">کوسن</a>
                        </li>
                        <li>
                          <a href="/search/category-pillowcase">رو بالشی</a>
                        </li>
                        <li>
                          <a href="/search/category-bedsheet">ملحفه</a>
                        </li>
                        <li>
                          <a href="/search/category-mattress">تشک</a>
                        </li>
                        <li>
                          <a href="/search/category-water-closet">دستشویی</a>
                        </li>
                        <li>
                          <a href="/search/category-bedroom">اتاق خواب</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="">
                        شستشو و نظافت<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-tissue-paper">
                            دستمال کاغذی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-washing-liquid">
                            مایع دستشویی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-clothes-detergents">
                            شوینده لباس
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-dishes-detergents">
                            شوینده ظروف
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-surface-cleaner">
                            شوینده سطوح
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-shoe-cleaning">نظافت کفش</a>
                        </li>
                        <li>
                          <a href="/search/category-cleaning-tools">
                            ابزار نظافت
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-insecticide">
                            حشره کش و سوسک کش
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-clothes-pin">گیره لباس</a>
                        </li>
                        <li>
                          <a href="/search/category-laundry-basket">
                            سبد رخت چرک
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-clothes-line">بند رخت</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="">
                        دکوراتیو<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-office-decoration">
                            دکوراسیون اداری
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-mirror">آینه</a>
                        </li>
                        <li>
                          <a href="/search/category-stickers-and-posters">
                            استیکر و پوستر
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-decorative-accessories">
                            لوازم تزیینی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-photo-frame">قاب عکس</a>
                        </li>
                        <li>
                          <a href="/search/category-home-furniture">
                            مبلمان خانگی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-curtain-accessories">
                            پرده ملزومات
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-sculptures-and-statues">
                            مجسمه و تندیس
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-decorative-clocks">
                            ساعت های تزئینی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-bedside-lamps-and-decorative-lamp">
                            چراغ خواب و آباژور
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-decorative-board">تابلو</a>
                        </li>
                        <li>
                          <a href="/search/category-flooring-and-wall-coverings">
                            کفپوش و دیوارپوش
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-pictorial-carpet">
                            تابلو فرش
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a title="">
                    خودرو، ابزار، باغبانی<i className="fas fa-angle-down"></i>
                  </a>
                  <ul className={styles.submenu}>
                    <li>
                      <a href="/search/category-car-tool-work">
                        مشاهده همه موارد این دسته
                      </a>
                    </li>
                    <li>
                      <a>
                        ابزار برقی<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-car-wash">کارواش</a>
                        </li>
                        <li>
                          <a href="/search/category-drill">دریل</a>
                        </li>
                        <li>
                          <a href="/search/category-electric-and-cordless-screwdriver">
                            پیچ گوشتی برقی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-milling-and-desktop-stone">
                            فرز و سنگ رومیزی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-industrial-inverter">
                            اینورتر جوشکاری
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-welding-machine">
                            دستگاه جوش
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-air-compressor">کمپرسور</a>
                        </li>
                        <li>
                          <a href="/search/category-blower">مکنده و دمنده</a>
                        </li>
                        <li>
                          <a href="/search/category-versatile-tool">
                            ابزار همه کاره{" "}
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-electric-engine">
                            موتور برق
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-solder-gun">
                            هویه،سیم لحیم و لوازم جانبی
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        ابزار دستی<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-tools-set">مجموعه ابزار</a>
                        </li>
                        <li>
                          <a href="/search/category-screwdriver-and-phase-meter">
                            پیچ گوشتی و فازمتر
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-glue">نوار تفلون و چسب </a>
                        </li>
                        <li>
                          <a href="/search/category-bolts-rawlplug-rivets">
                            پیچ و مهره، رول پلاک، میخ{" "}
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-box-and-toolsbag">
                            جعبه و کیف ابزار
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-non-electrical-tools">
                            لوازم روانکاری
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        ابزار غیر برقی<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-level">متر، تراز، اندازه</a>
                        </li>
                        <li>
                          <a href="/search/category-safety-tools">
                            تجهیزات ایمنی و کار
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-ladder">نردبان</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        لوازم باغبانی<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-soil-and-fertilizer">
                            خاک، کود و آفت کش
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-sprayer">سمپاش</a>
                        </li>
                        <li>
                          <a href="/search/category-chainsaw">اره زنجیری</a>
                        </li>
                        <li>
                          <a href="/search/category-plants-grain-and-seeds">
                            بذر و تخم گیاهان
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-vase">گلدان</a>
                        </li>
                        <li>
                          <a href="/search/category-saw">اره</a>
                        </li>
                        <li>
                          <a href="/search/category-irrigation-equipment">
                            لوازم آبیاری
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-scissors-knife-and-gardening-tools">
                            قیچی‌، چاقو و ابزار باغبانی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-ax-shovel-and-pickaxe">
                            تبر، بیل و کلنگ
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        لوازم و یراق آلات ساختمان
                        <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-valves">
                            شیرآلات و دوش حمام
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-water-pump">پمپ آب</a>
                        </li>
                        <li>
                          <a href="/search/category-pipes-and-fittings">
                            لوله و اتصالات
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        روشنایی و لوازم الکتریکی
                        <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-power-strip-and-voltage-protector">
                            محافظ برق
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-lamps-and-lights">
                            لامپ و چراغ
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-decorative-lights">
                            لوسترو آباژور
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-antenna">آنتن</a>
                        </li>
                        <li>
                          <a href="/search/category-switches-and-sockets">
                            کلید و پریز
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-ventilator">هواکش</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        موتور سیکلت<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-helmets">
                            کلاه کاسکت موتور
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        لوازم مصرفی خودرو<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-engine-oil">روغن موتور</a>
                        </li>
                        <li>
                          <a href="/search/category-gearbox-oil">روغن گیربکس</a>
                        </li>
                        <li>
                          <a href="/search/category-car-fuel-and-oil-supplement">
                            انژکتور شوی و مکمل سوخت
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-antifreeze-and-radiator-water">
                            ضدیخ و آب رادیاتور
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-brake-oil">روغن ترمز</a>
                        </li>
                        <li>
                          <a href="/search/category-car-tire">لاستیک و تایر</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        لوازم جانبی خودرو<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-steering-wheel-lock-and-pedal-and-spare">
                            قفل پدال و قفل فرمان
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-car-organizer-equipment">
                            تجهیزات نظم دهنده داخل خودرو
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-steering-wheel-cover">
                            روکش فرمان
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-car-decorative-accessories">
                            لوازم تزیینی خودرو
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-car-audio-and-video-system">
                            سیستم صوتی و تصویری
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-car-cleaning-and-maintenance">
                            نظافت و نگهداری خودرو
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        لوازم یدکی خودرو<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-car-lamp">لامپ خودرو</a>
                        </li>
                        <li>
                          <a href="/search/category-car-lights">چراغ خودرو</a>
                        </li>
                        <li>
                          <a href="/search/category-car-brake-pads">
                            لنت ترمز خودرو
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-motorcycle-brake-pads">
                            لنت ترمز موتور سیکلت
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-car-tire">لاستیک و تایر</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/search/category-motorcycle-consumables">
                        لوازم مصرفی و یدکی موتورسیکلت
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a title="">
                    لوازم‌التحریر، کتاب و هنر
                    <i className="fas fa-angle-down"></i>
                  </a>
                  <ul className={styles.submenu}>
                    <li>
                      <a href="/search/category-books-stationery-and-art">
                        مشاهده همه موارد این دسته
                      </a>
                    </li>
                    <li>
                      <a>
                        کتاب چاپی<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-book-and-art-poem-and-literature">
                            شعر و ادبیات
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-book-and-art-economics-and-management">
                            اقتصاد و مدیریت
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-book-and-art-business">
                            کسب و کار
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-book-and-art-kids-and-teenager">
                            کودک و نوجوان
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-book-and-art-psychology">
                            روانشناسی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-book-and-art-general">
                            عمومی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-book-and-art-artistic">
                            هنر
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-book-and-art-university">
                            دانشگاهی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-book-and-art-historical">
                            تاریخ
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-book-and-art-novel">رمان</a>
                        </li>
                        <li>
                          <a href="/search/category-book-and-art-tutoring-and-testing">
                            کمک درسی و آزمون
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-book-and-art-language-teaching">
                            زبان
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-book-and-art-philosophy">
                            فلسفه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-book-and-art-sociology-and-social-sciences">
                            جامعه شناسی و علوم اجتماعی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-book-and-art-health-and-hyginie">
                            سلامت و بهداشت
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-book-and-art-politics">
                            سیاست
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-book-and-art-engineering-technical-sciences">
                            علوم فنی و مهندسی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-book-and-art-social">
                            اجتماعی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-book-and-art-legal">حقوق</a>
                        </li>
                        <li>
                          <a href="/search/category-book-and-art-computer">
                            کامپیوتر
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        لوازم تحریر<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-notebook-and-paper">
                            کاغذ و دفتر
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-pencil">مداد و مداد رنگی</a>
                        </li>
                        <li>
                          <a href="/search/category-pen-and-rollerball-pen">
                            خودکار و روان نویس
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-marker">ماژیک </a>
                        </li>
                        <li>
                          <a href="/search/category-pencil-sharpener">
                            تراش،پاک کن و نوشت افزار{" "}
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-bag-and-backpack">
                            کیف و کوله{" "}
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-desklamp">چراغ مطالعه</a>
                        </li>
                        <li>
                          <a href="/search/category-calculator">ماشین حساب</a>
                        </li>
                        <li>
                          <a href="/search/category-desk">میز تحریر</a>
                        </li>
                        <li>
                          <a href="/search/category-painting-drawing-and-art-supplies">
                            ابزار نقاشی و رنگ آمیزی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-calendar">
                            تقویم و سالنامه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-glue">
                            زونکن،چسب و لوازم اداری
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-whiteboard-and-clearboard">
                            تخته وایت برد
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-wrapping-paper">
                            کاغذ کادو و پاکت هدیه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-pencilcase">جامدادی</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        محتوای آموزشی<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-english-learning">
                            آموزش زبان
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-music-training">
                            آموزش موسیقی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-software-and-computer-training">
                            آموزش نرم افزار
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        نرم افزار<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-software-package">
                            مجموعه نرم افزاری
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-security-software">
                            آنتی ویروس
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-operating-system">
                            سیستم عامل
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-accounting-software">
                            نرم افزارهای حسابداری
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        آلات موسیقی<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-guitar">گیتار</a>
                        </li>
                        <li>
                          <a href="/search/category-piano">پیانو</a>
                        </li>
                        <li>
                          <a href="/search/category-electronic-keyboard">
                            کیبورد و ارگ
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-dulcimer">سنتور</a>
                        </li>
                        <li>
                          <a href="/search/category-violin">ویولن</a>
                        </li>
                        <li>
                          <a href="/search/category-transverse-flute">فلوت</a>
                        </li>
                        <li>
                          <a href="/search/category-iranian-instruments">
                            سازهای ایرانی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-musicinstrumentsaccessories">
                            لوازم جانبی آلات موسیقی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-studio-equipment">
                            تجهیزات استودیویی
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        صنایع دستی<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-termeh">ترمه</a>
                        </li>
                        <li>
                          <a href="/search/category-giftbox">جعبه هدیه</a>
                        </li>
                        <li>
                          <a href="/search/category-pottery-ceramic-porcelain">
                            سفال، سرامیک و چینی
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a title="">
                    آرایشی و سلامت<i className="fas fa-angle-down"></i>
                  </a>
                  <ul className={styles.submenu}>
                    <li>
                      <a href="/search/category-personal-appliance">
                        مشاهده همه موارد این دسته
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="">
                        لوازم بهداشتی<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-skin-care">
                            کرم و مراقبت پوست
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-shampoo-and-hair-care">
                            شامپو و تقویت کننده مو
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-oral-care">
                            بهداشت دهان و دندان
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-health-and-body-care">
                            بهداشت و مراقبت بدن
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-haircut-accessories">
                            لوازم اصلاح مو
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-womens-health">
                            بهداشت بانوان
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-gamic-health-products">
                            بهداشت جنسی
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="">
                        لوازم آرایشی<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-face-makeup">آرایش صورت</a>
                        </li>
                        <li>
                          <a href="/search/category-eye-and-eyebrow-makeup">
                            آرایش چشم{" "}
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-eye-and-eyebrow-makeup">
                            آرایش ابرو
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-lip-makeup">آرایش لب</a>
                        </li>
                        <li>
                          <a href="/search/category-hair-dressing"> آرایش مو</a>
                        </li>
                        <li>
                          <a href="/search/category-nail-health-and-beauty">
                            آرایش ناخن
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-cosmetic-equipment">
                            ابزار آرایش
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="">
                        عطر و ادکلن<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-mens-perfume-and-cologne">
                            عطر مردانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-womens-perfume-and-cologne">
                            عطر زنانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-pocket-perfume">عطر جیبی</a>
                        </li>
                        <li>
                          <a href="/search/category-spray">اسپری</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="">
                        لوازم شخصی برقی<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-hairclipper">
                            ماشین اصلاح صورت
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-hairclipper">
                            ماشین اصلاح سر
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-ironing-and-styling">
                            اتو مو{" "}
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-laser-cosmetics">لیزر</a>
                        </li>
                        <li>
                          <a href="/search/category-hairdryer">سشوار</a>
                        </li>
                        <li>
                          <a href="/search/category-epilator">اپیلاتور</a>
                        </li>
                        <li>
                          <a href="/search/category-men-body-haircut">
                            اصلاح بدن آقایان
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-women-body-haircut">
                            اصلاح بدن بانوان
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-shaving-ears-nose-and-eyebrows">
                            اصلاح موی گوش، بینی و ابرو
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-comb-and-hair-brush">
                            برس پاک سازی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-curlers-and-curling-irons">
                            بیگودی و فر کننده
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-electric-toothbrush">
                            مسواک برقی
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="">
                        شستشو و نظافت<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-tissue-paper">
                            دستمال کاغذی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-washing-liquid">
                            مایع دستشویی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-clothes-detergents">
                            شوینده لباس
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-dishes-detergents">
                            شوینده ظروف
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-surface-cleaner">
                            شوینده سطوح
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-shoe-cleaning">نظافت کفش</a>
                        </li>
                        <li>
                          <a href="/search/category-cleaning-tools">
                            ابزار نظافت
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-insecticide">
                            حشره کش و سوسک کش
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-clothes-pin">گیره لباس</a>
                        </li>
                        <li>
                          <a href="/search/category-laundry-basket">
                            سبد رخت چرک
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-clothes-line">بند رخت</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="">
                        ابزار سلامت<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-adhesives-and-therapeutic-pads">
                            چسب، پد الکلی و درمانی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-scales">ترازوی دیجیتال</a>
                        </li>
                        <li>
                          <a href="/search/category-barometer">فشارسنج</a>
                        </li>
                        <li>
                          <a href="/search/category-blood-glucose-test">
                            تست قند خون
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-massager">ماساژور</a>
                        </li>
                        <li>
                          <a href="/search/category-thermometer">تب سنج</a>
                        </li>
                        <li>
                          <a href="/search/category-foot-care-tools">
                            ابزار مراقبت پا
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-sleeping-goods-and-medical-rest">
                            بالش خواب و استراحت طبی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-heart-rate-monitor">
                            نمایشگر ضربان قلب
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-electric-mattresses-and-blankets">
                            تشک و پتوی برقی
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:void(0);" title="">
                    خوار و بار<i className="fas fa-angle-down"></i>
                  </a>
                  <ul className={styles.submenu}>
                    <li>
                      <a href="/search/category-food-beverage">
                        مشاهده همه موارد این دسته
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="">
                        خوار و بار<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-rice">برنج</a>
                        </li>
                        <li>
                          <a href="/search/category-oil">روغن</a>
                        </li>
                        <li>
                          <a href="/search/category-saffron-barberry-and-food-decorations">
                            زعفران، زرشک و تزئینات غذا
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-pasta-pasta-and-noodles">
                            ماکارونی، پاستا و لازانیا
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-tomato-paste-and-canned">
                            رب و کنسرو گوجه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-beans-and-soy">حبوبات </a>
                        </li>
                        <li>
                          <a href="/search/category-sugar-and-candy">
                            قند و نبات
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-sugar">شکر</a>
                        </li>
                        <li>
                          <a href="/search/category-spices-and-seasonings">
                            ادویه و چاشنی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-sauce">سس</a>
                        </li>
                        <li>
                          <a href="/search/category-olive">زیتون</a>
                        </li>
                        <li>
                          <a href="/search/category-pickles-and-pickles">
                            خیارشور و ترشیجات
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="">
                        نوشیدنی ها<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-coffee">قهوه</a>
                        </li>
                        <li>
                          <a href="/search/category-instant-coffee-and-hot-chocolate">
                            قهوه فوری و هات چاکلت
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-tea">چای</a>
                        </li>
                        <li>
                          <a href="/search/category-syrup-and-juice">
                            شربت و آبمیوه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-water-and-mineral-water">
                            آب و آب معدنی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-soft-drinks">نوشابه</a>
                        </li>
                        <li>
                          <a href="/search/category-non-alcoholic-beer">
                            ماءالشعیر
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-energy-drink">
                            نوشابه انرژی زا
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-sweats-and-roses">
                            عرقیات و گلاب
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-herbal-tea">دمنوش</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a title="">
                        دسر و شیرینی پزی<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.submenu}>
                        <li>
                          <a href="/search/category-cereals">غلات و پودر کیک</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="">
                        آجیل و خشکبار<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-date">خرما</a>
                        </li>
                        <li>
                          <a href="/search/category-nuts-and-nuts">خشکبار</a>
                        </li>
                        <li>
                          <a href="/search/category-nuts-and-nuts"> آجیل</a>
                        </li>
                        <li>
                          <a href="/search/category-sweets">شیرینی</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a title="">
                        کنسرو و غذای آماده<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.submenu}>
                        <li>
                          <a href="/search/category-canned-and-ready-meals">
                            کنسرو و غذای آماده
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-tuna">تن ماهی</a>
                        </li>
                        <li>
                          <a href="/search/category-prepared-food-and-noodles">
                            غذای آماده و نودل
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-canned-and-compote">
                            کنسرو و کمپوت
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="">
                        تنقلات<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-biscuits-and-wafers">
                            بیسکویت
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-chips-and-popcorn">
                            چیپس و پاپ کورن
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-puffs-and-snacks">
                            پفک و اسنک
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-chocolate-toffee-and-candy">
                            شکلات، تافی و آبنبات
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-chewing-gum-and-mouthwash">
                            آدامس
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-flavored-seeds-and-nuts">
                            تخمه و مغز طعم
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-lavashka-leaves-and-plums">
                            آلوچه و لواشک
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-gummi-candy">پاستیل</a>
                        </li>
                        <li>
                          <a href="/search/category-cakes-and-cookies">
                            کیک و کلوچه
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="">
                        صبحانه<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-jam">مربا</a>
                        </li>
                        <li>
                          <a href="/search/category-sugar-halva-flour-and-sesame">
                            حلوا شکری، ارده و کنجد
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-breakfast-cereal">
                            غلات صبحانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-breakfast-chocolate">
                            شکلات صبحانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-honey">عسل</a>
                        </li>
                        <li>
                          <a href="/search/category-peanut-butter">
                            کره بادام زمینی
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="">
                        لبنیات<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-milk">شیر</a>
                        </li>
                        <li>
                          <a href="/search/category-dough">دوغ</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="">
                        پروتئینی<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.inner_submenu}>
                        <li>
                          <a href="/search/category-egg">تخم مرغ</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a title="">
                    اسباب بازی، کودک و نوزاد
                    <i className="fas fa-angle-down"></i>
                  </a>
                  <ul className={styles.submenu}>
                    <li>
                      <a href="/search/category-toys-baby-infant">
                        مشاهده همه موارد این دسته
                      </a>
                    </li>
                    <li>
                      <a>
                        اسباب بازی<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.submenu}>
                        <li>
                          <a href="/search/category-intellectual-game">
                            بازی فکری
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-gun-and-combat-toys">
                            تفنگ و مبارزه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-tricycle-and-motorcycle">
                            سه‌چرخه موتور و ماشین بازی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-swings-and-slides">
                            تاب و سرسره
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-pranks-and-entertainment">
                            شوخی و سرگرمی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-puzzle-and-building">
                            پازل و لگو
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-doll">عروسک </a>
                        </li>
                        <li>
                          <a href="/search/category-car-airplane-train">
                            ماشین، هواپیما و قطار
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-roleplay">نقش آفرینی</a>
                        </li>
                        <li>
                          <a href="/search/category-robots-and-gadget">
                            ربات و گجت
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-surprising-toys">
                            اسباب بازی شانسی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-play-gym">
                            تشک بازی و پارک بازی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-rattles">جغجغه</a>
                        </li>
                        <li>
                          <a href="/search/category-baby-walkers">
                            روروک و واکر
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-inflatable-toy-equipment">
                            تجهیزات بازی بادی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-pedal-horse">
                            اسب رکاب‌دار
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        پوشاک و کفش کودک و نوزاد
                        <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.submenu}>
                        <li>
                          <a href="/search/category-kids-clothes">لباس</a>
                        </li>
                        <li>
                          <a href="/search/category-kids-shoes">کفش</a>
                        </li>
                        <li>
                          <a href="/search/category-baby-socks">جوراب</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        بهداشت کودک<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.submenu}>
                        <li>
                          <a href="/search/category-diaper">پوشک </a>
                        </li>
                        <li>
                          <a href="/search/category-baby-and-infant-shampoo">
                            شامپو
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-baby-wet-wipes">
                            دستمال مرطوب
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-creams-balms-and-lotions">
                            کرم، بالم و لوسیون{" "}
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-baby-powder">پودر بچه</a>
                        </li>
                        <li>
                          <a href="/search/category-baby-towel">حوله </a>
                        </li>
                        <li>
                          <a href="/search/category-cloth-diaper">کهنه </a>
                        </li>
                        <li>
                          <a href="/search/category-diaper-cleaner">مینی واش</a>
                        </li>
                        <li>
                          <a href="/search/category-babyoil">روغن بچه</a>
                        </li>
                        <li>
                          <a href="/search/category-napkin-cover-and-baby-bucket">
                            کاور دستمال کاغذی و سطل{" "}
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-baby-bath-tub">
                            وان حمام نوزاد
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-baby-changing-mat">
                            تشک و زیرانداز تعویض کودک
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-children-cotton-swab">
                            گوش پاک کن
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-baby-bath-loofah">لیف</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        لوازم شخصی<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.submenu}>
                        <li>
                          <a href="/search/category-pacifier-and-accessories">
                            پستانک و ملزومات
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-baby-and-infant-milking">
                            شیردوش
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        گردش و سفر<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.submenu}>
                        <li>
                          <a href="/search/category-stroller-and-carrier">
                            کالسکه و کریر
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-chair-species">
                            صندلی خودرو کودک و نوزاد
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-diaper-bag">
                            ساک لوازم کودک و نوزاد
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-baby-carrier">آغوشی</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        ایمنی و مراقبت<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.submenu}>
                        <li>
                          <a href="/search/category-child-and-infant-safety-tools">
                            ابزار ایمنی کودک و نوزاد
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-thermometer">
                            تب سنج و دماسنج کودک و نوزاد
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-baby-and-infant-room-monitor-and-pager">
                            مانیتور و پیجر اتاق کودک و نوزاد
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-hot-water-bag">
                            پد و کیسه آب گرم
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        غذاخوری<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.submenu}>
                        <li>
                          <a href="/search/category-baby-bottle">
                            شیشه شیر، سرلاک و داروخوری
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-baby-bottle-accessory">
                            ملزومات شیشه شیر
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-baby-bottle-accessory">
                            استریل، گرم و خشک کننده شیشه شیر
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-spoon-forks-and-dishes">
                            قاشق، چنگال و ظروف کودک و نوزاد
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-baby-food-containers">
                            ظرف غذای کودک و نوزاد
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-booster-seat">
                            صندلی غذاخوری کودک و نوزاد
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-feeding-cloak">
                            کاور شیردهی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-baby-thermos-flask">
                            قمقمه و فلاسک کودک و نوزاد
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/search/category-baby-laundry-detergent">
                        شوینده لباس کودک و نوزاد
                      </a>
                    </li>
                    <li>
                      <a>
                        خواب کودک<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.submenu}>
                        <li>
                          <a href="/search/category-baby-bed-set">
                            سرویس خواب کودک و نوزاد
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-baby-and-infant-mattresses">
                            تشک کودک و نوزاد
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-feeding-pillow">
                            بالش شیردهی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-baby-decorative-lamp">
                            چراغ خواب کودک و نوزاد
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-baby-blanket">
                            پتو کودک و نوزاد
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-baby-and-child-sheet">
                            ملحفه کودک و نوزاد
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-children-room-decorating">
                            تزئینات اتاق کودک
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-childrens-bedroom-furniture">
                            مبلمان اتاق کودک
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-baby-and-infant-cradle">
                            گهواره
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-mosquito-net">پشه بند</a>
                        </li>
                        <li>
                          <a href="/search/category-baby-bed">
                            تختخواب کودک و نوزاد
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-baby-drawer-and-dresser">
                            کمد و دراور کودک
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-baby-cushion">کوسن کودک</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>
                    ورزش و سفر و کمپینگ<i className="fas fa-angle-down"></i>
                  </a>
                  <ul className={styles.submenu}>
                    <li>
                      <a href="/search/category-sport-and-travel">
                        مشاهده همه موارد این دسته
                      </a>
                    </li>
                    <li>
                      <a>
                        ورزش های هوازی و بدنسازی
                        <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.submenu}>
                        <li>
                          <a href="/search/category-aerobic-and-bodybuilding-equipment">
                            {" "}
                            ایروبیک و تناسب اندام
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-dumbell">دمبل</a>
                        </li>
                        <li>
                          <a href="/search/category-treadmill">تردمیل</a>
                        </li>
                        <li>
                          <a href="/search/category-elliptical-and-lifecycle-bike">
                            دوچرخه ثابت و الپتیکال
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-horizontalbar">بارفیکس</a>
                        </li>
                        <li>
                          <a href="/search/category-sport-rope">طناب</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        ورزش های سرعتی<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.submenu}>
                        <li>
                          <a href="/search/category-selfbalancing-scooter">
                            اسکوتر برقی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-scooter"> اسکوتر</a>
                        </li>
                        <li>
                          <a href="/search/category-skate-and-skateboard">
                            اسکیت{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        ورزش های توپی<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.submenu}>
                        <li>
                          <a href="/search/category-ball">توپ</a>
                        </li>
                        <li>
                          <a href="/search/category-racquet">راکت</a>
                        </li>
                        <li>
                          <a href="/search/category-pingpong-table">
                            میز پینگ پنگ
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-foosball">فوتبال دستی</a>
                        </li>
                        <li>
                          <a href="/search/category-sports-balls-accessories">
                            لوازم جانبی ورزش های توپی
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        سایر وسایل ورزشی<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.submenu}>
                        <li>
                          <a href="/search/category-water-sports">
                            ورزش های آبی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-martialarts">
                            ورزش های رزمی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-mindsport">
                            {" "}
                            ورزش های فکری
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-archery">
                            ورزش های نشانه‌ گیری
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-ski-and-ski-equipment">
                            اسکی و تجهیزات اسکی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-diving-equipment">
                            لوازم غواصی
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        کوه‌نوردی و کمپینگ<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.submenu}>
                        <li>
                          <a href="/search/category-tent">چادر</a>
                        </li>
                        <li>
                          <a href="/search/category-knife-and-multifunctional-tools">
                            چاقوی سفر و ابزار چند کاره
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-sleeping-bag">کیسه خواب</a>
                        </li>
                        <li>
                          <a href="/search/category-torch-light">چراغ قوه</a>
                        </li>
                        <li>
                          <a href="/search/category-picnic-set-and-picnic-stove">
                            اجاق و ظرف سفری
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-binoculars-and-monoculars">
                            دوربین دو چشمی و تک چشمی
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-mountaineering-and-travel-accessories">
                            تجهیزات جانبی کوه‌نوردی و سفر
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        تجهیزات سفر<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.submenu}>
                        <li>
                          <a href="/search/category-bag-and-backpack">
                            کیف و کوله
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-suitcase">ساک و چمدان</a>
                        </li>
                        <li>
                          <a href="/search/category-umbrella">چتر</a>
                        </li>
                        <li>
                          <a href="/search/category-fishing-tools">
                            لوازم ماهیگیری
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        دوچرخه و لوازم جانبی
                        <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.submenu}>
                        <li>
                          <a href="/search/category-bicycle">دوچرخه</a>
                        </li>
                        <li>
                          <a href="/search/category-bicycle-accessories">
                            لوازم جانبی دوچرخه
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>
                    طلا، مد و پوشاک<i className="fas fa-angle-down"></i>
                  </a>
                  <ul className={styles.submenu}>
                    <li>
                      <a href="/search/category-apparel">
                        مشاهده همه موارد این دسته
                      </a>
                    </li>
                    <li>
                      <a>
                        زیورآلات طلا زنانه<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.submenu}>
                        <li>
                          <a href="/search/category-womens-gold-necklace">
                            گردنبند طلا{" "}
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-womens-gold-pendant">
                            آویز طلا{" "}
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-womens-gold-binding">
                            پابند طلا
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-womens-gold-bracelet">
                            دستبند طلا{" "}
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-womens-gold-brooch">
                            گل سینه طلا{" "}
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-womens-gold-chains">
                            زنجیر طلا
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-womens-gold-earrings">
                            گوشواره طلا{" "}
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-womens-gold-jewelry-set">
                            ست زیورآلات طلا{" "}
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-womens-gold-piercing">
                            پیرسینگ طلا{" "}
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-womens-gold-ring">
                            انگشتر طلا{" "}
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-womens-gold-watch-pendant">
                            آویز ساعت طلا{" "}
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-bullion">
                            شمش و پلاک طلا و نقره
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        اکسسوری مردانه<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.submenu}>
                        <li>
                          <a href="/search/category-mens-bag">کیف مردانه</a>
                        </li>
                        <li>
                          <a href="/search/category-mens-backpack">
                            کوله پشتی مردانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-men-belts">
                            کمربند و ساسبند مردانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-men-wallet">
                            کیف پول مردانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-mens-gift-set">
                            ست هدیه مردانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-mens-gloves">
                            دستکش مردانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-men-headwear">
                            سرپوش مردانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-men-jewelry">
                            زیورآلات مردانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-men-luggage">
                            کیف سفری و چمدان مردانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-men-silver-jewelry">
                            زیورآلات نقره مردانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-men-sport-accessories">
                            اکسسوری ورزشی مردانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-men-ties">
                            کراوات و پاپیون مردانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-mens-keychain">
                            جاکلیدی مردانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-mens-sunglasses">
                            عینک آفتابی مردانه
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        اکسسوری زنانه<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.submenu}>
                        <li>
                          <a href="/search/category-women-backpack">
                            کوله پشتی زنانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-women-bag">کیف زنانه</a>
                        </li>
                        <li>
                          <a href="/search/category-womens-belt">
                            کمربند زنانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-womens-gift-set">
                            ست هدیه زنانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-womens-gloves">
                            دستکش زنانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-women-hair-accessories">
                            اکسسوری مو زنانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-uni-headwear">
                            سرپوش زنانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-women-luggage">
                            کیف سفری و چمدان زنانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-shawl-and-scarf">
                            شال و روسری زنانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-women-sport-accessories">
                            اکسسوری ورزشی زنانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-women-ties-and-bows">
                            کراوات و پاپیون زنانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-women-wallets-and-cosmetic-bags">
                            کیف پول و کیف لوازم آرایش زنانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-womens-watch">ساعت زنانه</a>
                        </li>
                        <li>
                          <a href="/search/category-glass-accessories">
                            لوازم جانبی و اکسسوری عینک زنانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-jewelry-equipment">
                            ملزومات زیورآلات زنانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-analog-and-digital-watch-accessories">
                            لوازم جانبی ساعت عقربه ای و دیجیتال زنانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-circle-budgets">
                            پیکسل زنانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-womens-sunglasses">
                            عینک آفتابی زنانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-women-silver-jewelry">
                            زیورآلات نقره زنانه
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        عطر و ادکلن<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.submenu}>
                        <li>
                          <a href="/search/category-perfume-and-cologne">
                            عطر مردانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-perfume-and-cologne">
                            عطر زنانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-pocket-perfume">عطر جیبی</a>
                        </li>
                        <li>
                          <a href="/search/category-spray">اسپری</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        ساعت مردانه<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.submenu}>
                        <li>
                          <a href="/search/category-mens-analog-watch">
                            ساعت عقربه ای مردانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-mens-digital-watch">
                            ساعت دیجیتال مردانه
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        ساعت زنانه<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.submenu}>
                        <li>
                          <a href="/search/category-women-analog-watch">
                            ساعت عقربه ای زنانه
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-women-digital-watch">
                            ساعت دیجیتال زنانه
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/search/category-watch-set">
                        ست ساعت زنانه و مردانه
                      </a>
                    </li>
                    <li>
                      <a>
                        لباس مردانه<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.submenu}>
                        <li>
                          <a href="/search/category-mens-tshirt-and-polos">
                            تی شرت و پولو شرت
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-men-shirts">پیراهن</a>
                        </li>
                        <li>
                          <a href="/search/category-mens-jeans">شلوار</a>
                        </li>
                        <li>
                          <a href="/search/category-mens-underwear">لباس زیر</a>
                        </li>
                        <li>
                          <a href="/search/category-men-sportswear">
                            پوشاک ورزشی
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        کفش مردانه<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.submenu}>
                        <li>
                          <a href="/search/category-casual-shoes-for-men">
                            کفش روزمره
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-mens-sneakers">کفش ورزشی</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        لباس زنانه<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.submenu}>
                        <li>
                          <a href="/search/category-women-mantou-and-pant">
                            مانتو
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-women-shirts">
                            بلوز و شومیز
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-women-tshirts-and-polos">
                            تی شرت و پولوشرت
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-women-mantou-and-pant">
                            شلوار
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-women-underwear">
                            لباس زیر
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-women-sportwear">
                            پوشاک ورزشی
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        کفش زنانه<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.submenu}>
                        <li>
                          <a href="/search/category-casual-shoes-for-women">
                            کفش روزمره
                          </a>
                        </li>
                        <li>
                          <a href="/search/category-women-sneakers">
                            کفش ورزشی
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        بچه گانه<i className="fas fa-angle-down"></i>
                      </a>
                      <ul className={styles.submenu}>
                        <li>
                          <a href="/search/category-kids-clothes">نوزاد</a>
                        </li>
                        <li>
                          <a href="/search/category-boys-clothing">پسرانه</a>
                        </li>
                        <li>
                          <a href="/search/category-girls-clothing">دخترانه</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          
        </nav>
      </header>
    </>
  );
}

export default Header2;
