import React, { useEffect, useState } from "react";

import Head from "next/head";

import styles from "./landing.module.scss";
import LinerProducts from "../../containers/LandingPage/LinerProducts";
import LinerProductsBg from "../../containers/LandingPage/LinerProductsBg";
import LinearImages from "../../containers/LandingPage/LinerImages";
import HeroSlides from "../../containers/LandingPage/HeroSlides";
import { ApiRegister } from "../../services/apiRegister/ApiRegister";

const index = () => {
  const [products, setProducts] = useState([]);
  const [lastDiscount, setLastDiscount] = useState([]);
  const _Call_Products = async () => {
    try {
      let response = await ApiRegister().apiRequest(
        null,
        "get",
        `/api/v1/landing/last-created-products/`,
        true,
        {}
      );
      if (response.status === 200) {
        console.log("response.data :>> ", response.data);
        setProducts(response.data);
      }
    } catch (e) {
      console.log("rrrr :>> ", e);
    }
  };
  const _Call_last_discount = async () => {
    try {
      let response = await ApiRegister().apiRequest(
        null,
        "get",
        `/api/v1/landing/last-created-discounted-products/`,
        true,
        {}
      );
      if (response.status === 200) {
        console.log("response.data :>> ", response.data);
        setLastDiscount(response.data);
      }
    } catch (e) {
      console.log("rrrr :>> ", e);
    }
  };
  useEffect(() => {
    _Call_Products();
    _Call_last_discount();
  }, []);

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

      <HeroSlides />
      {products && (
        <LinerProducts products={products} title="جدیدترین محصولات" />
      )}

      <LinerProducts title="نشان شده های" subTitle="مورد توجه کاربران" />

      <LinearImages />
      <LinerProducts title="نشان شده های" subTitle="مورد توجه کاربران" />

      {lastDiscount && <LinerProductsBg num={4} xl={3} products={lastDiscount} />}

      <LinerProducts title="نشان شده های" subTitle="منتخب مدیر عامل" />
      <LinerProducts title="نشان شده های" subTitle="منتخب مدیر عامل" />
      <LinerProductsBg />
    </>
  );
};

export default index;
