import React from "react";
import styles from "./MegaMenuMobile.module.scss";

function MegaMenuMobile({ category }) {
  const _handel_according = (accord, icon) => {
    let element = document.getElementById(accord);
    if (element.style.height == "0px") {
      element.style.height = "unset";
      document.getElementById(icon).className = "fas fa-angle-up";
    } else {
      element.style.height = "0";
      element.style.overflow = "hidden";
      document.getElementById(icon).className = "fas fa-angle-down";
    }
  };

  return (
    <ul className={styles.ul}>
      {category.map((element, index) => (
        <li key={index}>
          <a
            // href="javascript:void(0);"
            onClick={() =>
              _handel_according(`according_${index}`, `icon_${index}`)
            }
          >
            {element.name}
            <i id={`icon_${index}`} className="fas fa-angle-down"></i>
          </a>
          <ul
            id={`according_${index}`}
            className={styles.submenu}
            style={{
              height: "0",
              overflow: "hidden",
              transition: "all 1s ease",
            }}
          >
            <li>
              {/* <a href={`/product/search?word=&cat=${element.id}`}>
                مشاهده همه موارد این دسته
              </a> */}
            </li>
            {element.childrens.length > 0 &&
              element.childrens.map((subElement, index) => (
                <li key={index}>
                  {/* <Link href={`/search?q=&new_category=${subElement.id}`}> */}
                  <div
                    onClick={() => {
                      location.replace(
                        `/search?q=&new_category=${subElement.id}`
                      );
                      // document.getElementById("SlideMenu").style.right =
                      //   "-100%";
                    }}
                  >
                    {subElement.name}
                  </div>
                  {/* </Link> */}
                </li>
              ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default MegaMenuMobile;

// <li>
//         <a href="javascript:void(0);">
//           کالای دیجیتال<i className="fas fa-angle-down"></i>
//         </a>
//         <ul className={styles.submenu}>
//           <li>
//             <a href="/search/category-digital">مشاهده همه موارد این دسته</a>
//           </li>
//           <li>
//             <a>
//               موبایل <i className="fas fa-angle-down"></i>
//             </a>
//             <ul className={styles.inner_submenu}>
//               <li>
//                 <a href="/search/category-mobile-phone?brand[]=5">سامسونگ</a>
//               </li>
//               <li>
//                 <a href="/search/category-mobile-phone?brand[]=13">هوآوی</a>
//               </li>
//               <li>
//                 <a href="/search/category-mobile-phone?brand[]=6">اپل</a>
//               </li>
//               <li>
//                 <a href="/search/category-mobile-phone?brand[]=7">شیائومی</a>
//               </li>
//               <li>
//                 <a href="/search/category-mobile-phone?brand[]=20">آنر</a>
//               </li>
//               <li>
//                 <a href="/search/category-mobile-phone?brand[]=23">نوکیا</a>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <a>
//               لوازم جانبی موبایل <i className="fas fa-angle-down"></i>
//             </a>
//             <ul className={styles.inner_submenu}>
//               <li>
//                 <a href="/search/category-cell-phone-pouch-cover">
//                   قاب، کیف و کاور گوشی
//                 </a>
//               </li>
//               <li>
//                 <a href="/search/category-cell-phone-and-tablet-holder">
//                   پایه نگهدارنده گوشی
//                 </a>
//               </li>
//               <li>
//                 <a href="/search/category-cell-phone-screen-guard">
//                   محافظ صفحه نمایش گوشی
//                 </a>
//               </li>
//               <li>
//                 <a href="/search/category-cell-phone-data-cable">
//                   {" "}
//                   کابل و مبدل
//                 </a>
//               </li>
//               <li>
//                 <a href="/search/category-mobile-and-tablet-charger">
//                   شارژر موبایل و تبلت
//                 </a>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <a href="/search/category-power-bank">پاور بانک (شارژر همراه)</a>
//           </li>
//           <li>
//             <a href="/search/category-smart-watch-and-smartband">
//               مچبند و ساعت هوشمند
//             </a>
//           </li>
//           <li>
//             <a href="javascript:void(0);">
//               لپتاپ <i className="fas fa-angle-down"></i>
//             </a>
//             <ul className={styles.inner_submenu}>
//               <li>
//                 <a href="/search/category-laptop?brand[]=8">ایسوس</a>
//               </li>
//               <li>
//                 <a href="/search/category-laptop?brand[]=12">لنوو</a>
//               </li>
//               <li>
//                 <a href="/search/category-laptop?brand[]=19">ایسر</a>
//               </li>
//               <li>
//                 <a href="/search/category-laptop?brand[]=6">اپل</a>
//               </li>
//               <li>
//                 <a href="/search/category-laptop?brand[]=16">اچ پی</a>
//               </li>
//               <li>
//                 <a href="/search/category-laptop?brand[]=25">مایکروسافت</a>
//                 <li>
//                   <a href="/search/category-laptop?brand[]=22">دل</a>
//                 </li>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <a href="javascript:void(0);">
//               لوازم جانبی لپ تاپ <i className="fas fa-angle-down"></i>
//             </a>
//             <ul className={styles.inner_submenu}>
//               <li>
//                 <a href="/search/category-laptop-bag-and-cover">
//                   کیف،کوله و کاور لپ تاپ
//                 </a>
//               </li>
//               <li>
//                 <a href="/search/category-laptop-battery">باتری لپ‌تاپ</a>
//               </li>
//               <li>
//                 <a href="/search/category-laptop-charger">شارژر مخصوص لپ‌تاپ</a>
//               </li>
//               <li>
//                 <a href="/search/category-audio-and-video-cable">
//                   کابل‌ صدا، AUX و HDMI
//                 </a>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <a href="/search/category-tablet-and-reader">تبلت</a>
//           </li>
//           <li>
//             <a href="/search/category-tablet-accessories">لوازم جانبی تبلت</a>
//           </li>
//           <li>
//             <a href="/search/category-aabattery-charger-and-belonging">
//               باتری، شارژر و متعلقات
//             </a>
//           </li>
//           <li>
//             <a>
//               تجهیزات ذخیره‌سازی اطلاعات
//               <i className="fas fa-angle-down"></i>
//             </a>
//             <ul className={styles.inner_submenu}>
//               <li>
//                 <a href="/search/category-external-hard-disk">
//                   هارد دیسک اکسترنال
//                 </a>
//               </li>
//               <li>
//                 <a href="/search/category-usb-flash-memory">فلش مموری</a>
//               </li>
//               <li>
//                 <a href="/search/category-memory-card">کارت حافظه</a>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <a href="/search/category-headphones-headsets-handsfree">
//               هدفون، هدست، هندزفری
//             </a>
//           </li>
//           <li>
//             <a href="/search/category-speaker">
//               اسپیکر<i className="fas fa-angle-down"></i>
//             </a>
//             <ul className={styles.inner_submenu}>
//               <li>
//                 <a href="/search/category-speaker">اسپیکر بلوتوثی</a>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <a href="/search/category-network">
//               مودم <i className="fas fa-angle-down"></i>
//             </a>
//             <ul className={styles.inner_submenu}>
//               <li>
//                 <a href="/search/category-modem-router-adsl">
//                   مودم - روتر ADSL
//                 </a>
//               </li>
//               <li>
//                 <a href="/search/category-3g-and-4g-modem">مودم 3G و 4G</a>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <a href="javascript:void(0);">
//               کامپیوتر و تجهیزات جانبی
//               <i className="fas fa-angle-down"></i>
//             </a>
//             <ul className={styles.inner_submenu}>
//               <li>
//                 <a href="/search/category-monitor">نمایشگر(مانیتور)</a>
//               </li>
//               <li>
//                 <a href="/search/category-mouse">ماوس</a>
//               </li>
//               <li>
//                 <a href="/search/category-keyboard">کیبورد</a>
//               </li>
//               <li>
//                 <a href="/search/category-computer-devices">
//                   قطعات داخلی کامپیوتر
//                 </a>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <a href="javascript:void(0);">
//               کنسول بازی<i className="fas fa-angle-down"></i>
//             </a>
//             <ul className={styles.inner_submenu}>
//               <li>
//                 <a href="/search/category-home-console"> XBox, PS5, PS4</a>
//               </li>
//               <li>
//                 <a href="/search/category-computer-and-consol-game">بازی </a>
//               </li>
//               <li>
//                 <a href="/search/category-gaming-accessories">
//                   تجهیزات مخصوص بازی
//                 </a>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <a href="javascript:void(0);">
//               تلویزیون<i className="fas fa-angle-down"></i>
//             </a>
//             <ul className={styles.inner_submenu}>
//               <li>
//                 <a href="/search/category-television?brand[]=172">ایکس ویژن</a>
//               </li>
//               <li>
//                 <a href="/search/category-television?brand[]=5">سامسونگ</a>
//               </li>
//               <li>
//                 <a href="/search/category-television?brand[]=17">ال جی</a>
//               </li>
//               <li>
//                 <a href="/search/category-television?brand[]=173">اسنوا</a>
//               </li>
//               <li>
//                 <a href="/search/category-television?brand[]=184">TCL</a>
//               </li>
//               <li>
//                 <a href="/search/category-television?brand[]=21">سونی</a>
//               </li>
//               <li>
//                 <a href="/search/category-television?brand[]=166">جی پلاس</a>
//               </li>
//               <li>
//                 <a href="/search/category-television?brand[]=603">شهاب</a>
//               </li>
//               <li>
//                 <a href="/search/category-television?brand[]=197">دوو</a>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <a href="/search/category-home-theater-and-soundbar">
//               سینمای خانگی و ساندبار<i className="icon icon-Left"></i>
//             </a>
//           </li>
//           <li>
//             <a href="/search/category-usb-digital-tv-receiver">
//               گیرنده دیجیتال تلویزیون
//               <i className="icon icon-Left"></i>
//             </a>
//           </li>
//           <li>
//             <a href="javascript:void(0);">
//               دوربین<i className="fas fa-angle-down"></i>
//             </a>
//             <ul className={styles.inner_submenu}>
//               <li>
//                 <a href="/search/category-photography-camera">
//                   دوربین عکاسی دیجیتال
//                 </a>
//               </li>
//               <li>
//                 <a href="/search/category-video-camera">
//                   دوربین‌ ورزشی و فیلم برداری
//                 </a>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <a href="javascript:void(0);">
//               لوازم جانبی دوربین<i className="fas fa-angle-down"></i>
//             </a>
//             <ul className={styles.inner_submenu}>
//               <li>
//                 <a href="/search/category-camera-lens">لنز</a>
//               </li>
//               <li>
//                 <a href="/search/category-camera-bag">کیف</a>
//               </li>
//               <li>
//                 <a href="/search/category-memory-card">کارت حافظه</a>
//               </li>
//               <li>
//                 <a href="/search/category-instant-photo-paper">کاغذ چاپ عکس</a>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <a href="javascript:void(0);">
//               ماشین های اداری<i className="fas fa-angle-down"></i>
//             </a>
//             <ul className={styles.inner_submenu}>
//               <li>
//                 <a href="/search/category-telephone">تلفن، بی سیم و سانترال</a>
//               </li>
//               <li>
//                 <a href="/search/category-printer">پرینتر</a>
//               </li>
//               <li>
//                 <a href="/search/category-fax">فکس</a>
//               </li>
//               <li>
//                 <a href="/search/category-video-projector">ویدیو پروژکتور</a>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </li>
