import React, { useEffect, useState } from "react";
import Head from "next/head";
import ProductCard from "../../components/ProductCart/ProductCard";
import styles from "./hojreh.module.scss";
import { useRouter } from "next/router";
import CustomAccordion from "../../components/custom/customAccordion";
import CustomSwitch from "../../components/custom/customSwitch";
import ContextListProductPage from "../../containers/listProduct/Context/context";
import { TopBar } from "../../containers/listProduct/TopBar";
import MenuMobile from "../../components/layout/MenuMobile";
import { modalFilter } from "../../containers/productLis/modalFilter";
import MultiRangeSlider from "../../components/custom/customMultiRangeSlider/MultiRangeSlider";
import { errorMessage, successMessage } from "../../containers/utils/message";
import { ApiRegister } from "../../services/apiRegister/ApiRegister";
import { Loading } from "../../components/custom/Loading/Loading";
import CheckboxTree from "react-checkbox-tree";
import { BeautyLoading } from "../../components/custom/Loading/beautyLoading/BeautyLoading";
import { allCites } from "../../components/custom/data/data";
import { market } from "../../components/custom/data/market";
import InfiniteScroll from "react-infinite-scroll-component";
import { WoLoading } from "../../components/custom/Loading/woLoading/WoLoading";
import ListProduct from "../../containers/listProduct";

const product = ({ dataFirst, searchWord = "لباس" }) => {
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
      <div className={styles.topHoj}>
        <div className={styles.liner}>
          <span>خانه</span>
          <i className="fas fa-angle-left"></i>
          <span>غرفه ها</span>
          <i className="fas fa-angle-left"></i>
          <span>حجره پسته</span>
        </div>
        <div className={styles.slide}>
          <div className="">
            <img className={styles.imgslid} src="/image/back.jpeg" alt="" />
          </div>
          <div className={styles.profile}>
            <img className={styles.img_profile} src="/image/milad.jpg" alt="" />
            <div className={styles.information}>
              <h1>میلاد حسنی</h1>
              <h5>حجره پسته</h5>
            </div>
            <i className="fas fa-share-alt-square"></i>
          </div>
        </div>
        <div className={styles.title}>
          <span> محصولات</span>
        </div>
        <div className={styles.sub_line}></div>
      </div>

      <ListProduct />
    </>
  );
};

export default product;
