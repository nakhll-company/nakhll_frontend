import React from "react";

import Head from "next/head";

import styles from "./landing.module.scss";
import LinerProducts from "../../containers/LandingPage/LinerProducts";
import LinerProductsBg from "../../containers/LandingPage/LinerProductsBg";
import LinearImages from "../../containers/LandingPage/LinerImages";

const index = () => {
  let product = {
    imageUrl: "/image/faile.webp",
    url: "/hamzeh",
    title: "نبات گیاهی متبرک مشهد با نی چوبی 1 کیلویی برکت هشتم",
    chamberTitle: "گالری سنگ و نقره شاپرک",
    chamberUrl: "/azizzadeh",
    rate: 10,
    commentCount: 102,
    discount: 25,
    price: 107000,
    discountNumber: 190000,
    // sales: 52,
    city: "کرمان",
  };
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
          integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
          crossorigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossOrigin="anonymous"
        ></link>
      </Head>

      <div className="container p-2 ">
        <div className={`row ${styles.slide}`}>
          <div className={`col-md-8 ${styles.righter}`}>
            <img src="/image/slide/slid1.jpg" alt="" />
          </div>
          <div className={`col-md-4  ${styles.lefter} `}>
            <img src="/image/slide/slideLeft2.jpg" alt="" />
            <img src="/image/slide/slidLeft.jpg" alt="" />
          </div>
        </div>
      </div>

      <LinerProducts title="فرش و قالیچه" subTitle="منتخب میلاد" />
      <LinerProducts title="نشان شده های" subTitle="مورد توجه کاربران" />

      <LinearImages />
      <LinerProducts title="نشان شده های" subTitle="مورد توجه کاربران" />

      <LinerProductsBg />

      <LinerProducts title="نشان شده های" subTitle="منتخب مدیر عامل" />
      <LinerProducts title="نشان شده های" subTitle="منتخب مدیر عامل" />
      <LinerProductsBg />
    </>
  );
};

export default index;
