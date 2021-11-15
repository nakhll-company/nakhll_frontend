import React from "react";
import Link from "next/link";

import styles from "./MegaMenuDesktop.module.scss";
function MegaMenuDesktop({ category }) {
  return (
    <ul className={styles.nav_list}>
      {category.slice(0, 9).map((element, index) => (
        <li
          key={index}
          className={styles.nav_item}
          style={{ position: "relative", display: "inline-block" }}
        >
          <div className={styles.nav_item_link}>
            {element.name}
            <i className="fas fa-angle-down"></i>
          </div>

          <div
            className={`container  ${styles.nav_submenu}`}
            style={{ backgroundColor: "#fff" }}
          >
            <div className={styles.nav_cols_holder}>
              <div className={styles.nav_submenu_col}>
                <ul className={styles.nav_submenu_cat}>
                  <li className={styles.nav_submenu_col_title}>
                    {element.childrens.length > 0 &&
                      element.childrens.map((subElement, index) => (
                        // <Link
                        //   href={`/product?q=&category=${subElement.id}`}
                        //   key={index}
                        // >
                        <div
                          onClick={() =>
                            location.replace(
                              `/product?q=&category=${subElement.id}`
                            )
                          }
                        >
                          {subElement.name}
                          <i className="icon icon-Left"></i>
                        </div>
                        // </Link>
                      ))}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MegaMenuDesktop;

{
  /* <li className={styles.nav_item}>
        <a className={styles.nav_item_link} href="/search/category-digital">
          کالای دیجیتال<i className="fas fa-angle-down"></i>
        </a>
        <div className={`container  ${styles.nav_submenu} showMenuResponsive`}>
          <div className={styles.nav_cols_holder}>
            <div className={styles.nav_submenu_col}>
              <ul className={styles.nav_submenu_cat}>
                <li className={styles.nav_submenu_col_title}>
                  <a href="/search/category-mobile-phone">
                    موبایل<i className="icon icon-Left"></i>
                  </a>
                </li>
                <li>
                  <a href="/search/category-mobile-phone?brand[]=5">سامسونگ</a>
                </li>
                <li>
                  <a href="/search/category-mobile-phone?brand[]=13">هوآوی</a>
                </li>
                <li>
                  <a href="/search/category-mobile-phone?brand[]=6">اپل</a>
                </li>
                <li>
                  <a href="/search/category-mobile-phone?brand[]=7">شیائومی</a>
                </li>
                <li>
                  <a href="/search/category-mobile-phone?brand[]=20">آنر</a>
                </li>
                <li>
                  <a href="/search/category-mobile-phone?brand[]=23">نوکیا</a>
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
                  <a href="/search/category-laptop?brand[]=25">مایکروسافت</a>
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
                  <a href="/search/category-laptop-battery">باتری لپ‌تاپ</a>
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
                  <a href="/search/category-usb-flash-memory">فلش مموری</a>
                </li>
                <li>
                  <a href="/search/category-memory-card">کارت حافظه</a>
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
                  <a href="/search/category-speaker">اسپیکر بلوتوثی</a>
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
                  <a href="/search/category-3g-and-4g-modem">مودم 3G و 4G</a>
                </li>
              </ul>
              <ul className={styles.nav_submenu_cat}>
                <li className={styles.nav_submenu_col_title}>
                  <a href="/search/category-computer-parts">
                    کامپیوتر و تجهیزات جانبی <i className="icon icon-Left"></i>
                  </a>
                </li>
                <li>
                  <a href="/search/category-monitor">نمایشگر(مانیتور)</a>
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
                  <a href="/search/category-home-console"> XBox, PS5, PS4</a>
                </li>
                <li>
                  <a href="/search/category-computer-and-consol-game">بازی </a>
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
                  <a href="/search/category-television?brand[]=5">سامسونگ</a>
                </li>
                <li>
                  <a href="/search/category-television?brand[]=17">ال جی</a>
                </li>
                <li>
                  <a href="/search/category-television?brand[]=173">اسنوا</a>
                </li>
                <li>
                  <a href="/search/category-television?brand[]=184">TCL</a>
                </li>
                <li>
                  <a href="/search/category-television?brand[]=21">سونی</a>
                </li>
                <li>
                  <a href="/search/category-television?brand[]=166">جی پلاس</a>
                </li>
                <li>
                  <a href="/search/category-television?brand[]=603">شهاب</a>
                </li>
                <li>
                  <a href="/search/category-television?brand[]=197">دوو</a>
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
                  <a href="/search/category-memory-card">کارت حافظه</a>
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
                  <a href="/search/category-video-projector">ویدیو پروژکتور</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      
       */
}
