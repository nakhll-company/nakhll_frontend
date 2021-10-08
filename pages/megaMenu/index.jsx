import Head from "next/head";
import React from "react";
import styles from "../../styles/MegaMenu/MegaMenu.module.scss";
const index = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="#"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="#"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossOrigin="anonymous"
        ></link>
      </Head>

      <div className={styles.megamenu}>
        <div className="container">
          <div className={styles.megamenu__container}>
            <div className={styles.megamenu__item}>
              <a href="#" className={styles.link}>
                <span>مواد غذایی</span>
              </a>
              <div className={styles.megamenu__section}>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>نوشیدنی‌ها</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>چای و دمنوش</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>قهوه و محصولات کافئین دار</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>نوشیدنی‌های گازدار</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>آبمیوه و شربت</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>عسل و فرآورده‌های عسل</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>عسل</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ژل رویال</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>گرده گل</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>معجون و فرآورده‌های عسل</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>بره موم</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>ارده و فرآورده‌های کنجدی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ارده</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>حلوا شکری</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>حلوا ارده</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>کنجد عسلی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>سایر فرآورده‌های کنجدی</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>میوه و سبزیجات تازه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>میوه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>سبزی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>صیفی جات</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>قارچ</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>سبزی خشک</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>ترشی و شور</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ترشی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>خیارشور و شور </span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ترشک و لواشک</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>زیتون</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>محصولات پروتئینی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>تخم مرغ و طیور</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>گوشت قرمز</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>مرغ و طیور</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ماهی، میگو و خاویار</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>پنیر پیتزا</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>همبرگر و کباب لقمه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>سوسیس و کالباس</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>لبنیات </span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>شیر و سرشیر</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>شیر خشک</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>پنیر و کره</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>کشک</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>خامه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ماست و دوغ</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>ادویه و چاشنی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>تزئینات غذا</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ادویه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>رب</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>سس</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>زعفران و زرشک</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>خلال‌ها</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>آبلیمو، آبغوره و سرکه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>سایر چاشنی‌ها</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>شیرینی، آجیل و خشکبار</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>کیک و شیرینی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>آبنبات و شکلات</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>دسر و بستنی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>آجیل و سایر خشکبار</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>میوه خشک</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>گردو و بادام</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>تنقلات</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>خرما</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>گز و پولکی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>سوهان</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>خوار و بار</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ماکارونی، پاستا و رشته</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>حبوبات و سویا</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>روغن‌های خوراکی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>برنج</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>نان و غلات</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>قند، شکر و نبات</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>مربا، شیره و کره مغزیجات</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>مربا</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>کره بادام زمینی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>شیره</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>غذاهای آماده و نیمه آماده</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>آماده</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>نیمه آماده</span>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.megamenu__item}>
              <a href="#" className={styles.link}>
                <span>مد و پوشاک</span>
              </a>
              <div className={styles.megamenu__section}>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>زنانه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>لباس زنانه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>لباس زیر زنانه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>کیف زنانه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>کفش زنانه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>کیف و کفش زنانه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>لباس ورزشی زنانه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>جواهرات و زیورآلات</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ساعت زنانه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ملزومات جانبی (اکسسوری) زنانه</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>مردانه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>لباس مردانه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>لباس زیر مردانه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>کیف و کفش مردانه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>لباس ورزشی مردانه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>انگشتر مردانه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ساعت مردانه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ملزومات جانبی (اکسسوری) مردانه</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>بچه گانه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>لباس دخترانه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>کیف و کفش دخترانه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ملزومات جانبی (اکسسوری) دخترانه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>لباس پسرانه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>کیف و کفش پسرانه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ملزومات جانبی (اکسسوری) پسرانه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>نوزاد</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>سایر بچه گانه</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>زنانه و مردانه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>کیف و کفش زنانه و مردانه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ساعت زنانه و مردانه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>زیورآلات زنانه و مردانه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ملزومات جانبی (اکسسوری) زنانه و مردانه</span>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.megamenu__item}>
              <a href="#" className={styles.link}>
                <span>خانه و آشپزخانه</span>
              </a>
              <div className={styles.megamenu__section}>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>فرش و تابلوفرش</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>فرش، قالیچه و موکت</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>گلیم، جاجیم و گبه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>پادری و روفرشی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>فرش کودک</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>تابلو فرش</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>پرده و مبلمان</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>مبل</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>میز</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>تخت خواب</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>صندلی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>پرده و ملزومات</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>پارچه و ملزومات خیاطی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>کمد و نظم دهنده</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>کالای خواب</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>تشک</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>روتختی و پتو</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ملحفه و روبالشی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>سرویس خواب</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>بالش و کوسن</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>سایر کالای خواب</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>نور و روشنایی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>لوستر و آباژور</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ریسه و چراغ تزئینی </span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>انواع لامپ</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>سایر لوازم الکتریکی</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>گل و گیاه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>گل و گیاه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>گلدان</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>بذر و تخم گیاهان</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>خاک، کود و آفت کش</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ابزار باغبانی</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>دکوری و تزئینی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>شلف و استند</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>مجسمه و تندیس</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ساعت‌های دیواری و دکوری</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>خوشبو کننده‌ها و عود</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>آینه و تابلو</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>گل مصنوعی و گلدان</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>رومیزی و رانر </span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>پرده تزئینی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>سایر لوازم تزئینی و دیوار آویزها</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>لوازم آشپزخانه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>سرویس غذاخوری</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>قاشق، چنگال و کارد </span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>پارچ، لیوان و بطری</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>سفره و زیر بشقابی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ظروف یکبار مصرف</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>سطل و سبد و آبکش</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>حوله و دستمال آشپزخانه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>فلاسک، کلمن و ماگ</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ظروف سرو و پذیرایی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>لوازم تهیه و سرو چای </span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>لوازم پخت و پز</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>سایر لوازم آشپزخانه</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>لوازم حمام و دستشویی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>لوازم حمام</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>لوازم دستشویی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>تزئینات حمام و دستشویی</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>ابزار و مواد شوینده</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ابزار نظافت</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>تمیز کننده سطوح</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>شوینده ظروف</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>شوینده لباس </span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>سایر مواد شوینده</span>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.megamenu__item}>
              <a href="#" className={styles.link}>
                <span>صنایع دستی</span>
              </a>
              <div className={styles.megamenu__section}>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>بافتنی، پارچه و رودوزی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>قلاب بافی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>تریکو بافی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>مکرومه بافی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ترمه </span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>قلم کاری</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>گلدوزی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>شماره دوزی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ملیله دوزی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>سوزن دوزی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>سایر بافتنی ها</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a
                    href="#"
                    aria-current="page"
                    className="section-link-header nuxt-link-exact-active nuxt-link-active"
                  >
                    <span>هنرهای تجسمی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>نگارگری</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>خوشنویسی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>تذهیب</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>طراحی و نقاشی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>سایر هنر های تجسمی</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>محصولات چوبی و حصیری</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>قاب‌های دست ساز </span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>معرق کاری</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>خاتم کاری</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>منبت کاری</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>خراطی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>سوخت روی چوب</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>حصیر بافی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>سایر محصولات چوبی و حصیری</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>محصولات سنگی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>فیروزه کوبی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>سنگ‌های قیمتی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>حکاکی روی سنگ</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>نقاشی روی سنگ</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>مرصع کاری</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>سایر محصولات سنگی</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>ملزومات کادویی و هدیه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>انواع گیفت</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>جعبه کادو</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>سایر ملزومات کادویی</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>محصولات فلزی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>محصولات مسی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>محصولات برنجی و برنزی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>قلم زنی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>میناکاری</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>نقره کاری</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>سایر محصولات فلزی</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>صنایع شیشه و آبگینه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ویترای</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>معرق روی شیشه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>شیشه گری</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>سایر صنایع شیشه و آبگینه</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>سفال، کاشی و چینی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>سفال</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>کاشی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>چینی</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>فرش و قالی</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>دکوری و تزئینی</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>محصولات چرم</span>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.megamenu__item}>
              <a href="#" className={styles.link}>
                <span>عطاری</span>
              </a>
              <div className={styles.megamenu__section}>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>دارو و روغن های درمانی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>روغن‌های درمانی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>داروهای گیاهی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>مرهم و پماد</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>گیاهان دارویی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>گیاهان دارویی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>صمغ و شیره گیاهی</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>عرقیات و گلاب</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>عرقیات</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>گلاب</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>سویق و قاووت</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>سویق</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>قاووت</span>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.megamenu__item}>
              <a href="#" className={styles.link}>
                <span>آرایشی و بهداشتی</span>
              </a>
              <div className={styles.megamenu__section}>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>لوازم آرایشی و پیرایشی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>آرایش چشم و ابرو</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ابزار آرایشی و پیرایش</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>آرایش لب</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>آرایش صورت</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>آرایش و بهداشت ناخن</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>پاک کننده آرایشی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>کیف لوازم آرایش</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>مراقبت پوست و بدن</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>مراقبت صورت</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>مراقبت دور چشم</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>مراقبت بدن</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>مراقبت و زیبایی مو</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>حالت دهنده مو</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>روغن مو</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>سرم و ماسک مو</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>رنگ مو</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>شامپو و نرم کننده مو</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>بهداشت شخصی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>بهداشت دهان و دندان</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>بهداشت بانوان</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>بهداشت سر و صورت</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>بهداشت دست و بدن </span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>بهداشت زناشویی</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>عطر و ادکلن و اسپری</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>عطر و ادکلن</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>اسپری </span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>عطر جیبی</span>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.megamenu__item}>
              <a href="#" className={styles.link}>
                <span>فرهنگی، آموزشی و سرگرمی</span>
              </a>
              <div className={styles.megamenu__section}>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>بازی و سرگرمی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ماکت</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>بازی کامپیوتری</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>پازل</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>کار دستی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>اسباب بازی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>بازی فکری</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>عروسک دست ساز</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>سایر بازی و سرگرمی</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>فرهنگی و آموزشی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>نرم افزار</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>کتاب صوتی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>کتب الکترونیک</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>محتوای آموزشی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>مجله</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>محصولات مذهبی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>محصولات فرهنگی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>کتاب چاپی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>لوازم التحریر</span>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.megamenu__item}>
              <a href="#" className={styles.link}>
                <span>ورزش و سفر</span>
              </a>
              <div className={styles.megamenu__section}>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>سفر</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ساک و چمدان</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>کوله پشتی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>تجهیزات سفر</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>ورزش</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ساک ورزشی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>لباس ورزشی زنانه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>لباس ورزشی مردانه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>تجهیزات ورزشی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>مکمل ورزشی</span>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.megamenu__item}>
              <a href="#" className={styles.link}>
                <span>خدمات کسب و کار</span>
              </a>
              <div className={styles.megamenu__section}>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>تجهیزات کسب و کار</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>کندو و زنبورداری</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>بسته‌بندی و حمل و نقل</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>لجستیک برون شهر</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>لجستیک درون شهر</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>بسته‌بندی</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>محتوا و ترجمه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>نامه نویسی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>تایپ</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ویراستاری</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ترجمه انگلیسی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ترجمه عربی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>حجره نویسی</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>مربوط به خانه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>دکوراسیون و بازسازی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>باغبانی و فضای سبز</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>لوازم خانگی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>برق ساختمان</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>آموزش و مشاوره</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>آموزش حجره داری</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>مشاوره مالی کسب و کار </span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>آموزش فنی و حرفه‌ای </span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>گرافیک، طراحی و عکاسی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>طراحی کاتالوگ</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>طراحی اینفوگرافیک</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>طراحی بصری</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>طراحی المان و کاراکتر</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>طراحی برای چاپ</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>عکاسی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>طراحی پست و بنر</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>طراحی بسته بندی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>لوگو و برند</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>طراحی برچسب و کتاب</span>
                  </a>
                </div>
                <div className={styles.megamenu__section__wrapper}>
                  <a href="#" className={styles.section_link_header}>
                    <span>ویدئو و انیمیشن</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>پاورپوینت و ارائه</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ویدئوی تبلیغاتی</span>
                  </a>
                  <a href="#" className={styles.section_link}>
                    <span>ادیت و میکس</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
