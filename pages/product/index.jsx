import React, { useEffect, useState } from "react";
import Head from "next/head";
import ProductCard from "../../components/ProductCart/ProductCard";
import styles from "../../styles/pages/testProduct/product.module.scss";
import { productForList } from "../../public/dataForProduct/data";
import { orderBy } from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";

import { Html } from "next/document";
import CustomAccordion from "../../components/custom/customAccordion";

const index = () => {
  const [listProducts, setlistProducts] = useState([]);
  const [witchItem, setWitchItem] = useState("1");
  useEffect(() => {
    setlistProducts(productForList);
  }, []);
  const selectItem = (id) => {
    setWitchItem(id);
  };

  const sortPorductDes = () => {
    setlistProducts(orderBy(listProducts, "current_price", "desc"));
  };

  const sortPorductAsc = () => {
    setlistProducts(orderBy(listProducts, "current_price", "asc"));
  };
  const sortBestsellingProduct = () => {
    setlistProducts(orderBy(listProducts, "discount", "desc"));
  };

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
    sales: 52,
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
      <div className="container_N" style={{ backgroundColor: "#00171f" }}>
        <div className="row sidebar-parent">
          <div className="d-none d-lg-block col-lg-3">
            <div id="sidebar">
              <CustomAccordion title="دسته بندی" item="1">
                <div>اینجا اطلاعات قرار می گیره</div>
              </CustomAccordion>
              <CustomAccordion title="امتیاز محصول" item="2">
                <div>اینجا اطلاعات قرار می گیره</div>
              </CustomAccordion>

              <CustomAccordion title="محدوده قیمت" item="3">
                <div>اینجا اطلاعات قرار می گیره</div>
              </CustomAccordion>
              <CustomAccordion title="استان و شهر غرفه دار" item="4">
                <div>اینجا اطلاعات قرار می گیره</div>
              </CustomAccordion>
              <div className="search-body-filter">
                <div className="d-lg-none more-fliters-header ev-cancel-filter">
                  <h3 className="font-size1-1 m-0">فیلترها</h3>{" "}
                  <div className="d-flex">
                    <i className="bi bi-close pointer font-size2"></i>
                  </div>
                </div>{" "}
                <div className="modal-body" style={{ msOverflowX: "hidden" }}>
                  <div className="filter-box pb">
                    <div className="custom-switch d-flex align-items-center ev-yekase-filter">
                      <input
                        type="checkbox"
                        id="free-shipping-filter"
                        className="custom-switch__input"
                      />{" "}
                      <label
                        for="free-shipping-filter"
                        className="custom-switch__label"
                      >
                        <span className="circle"></span>
                      </label>
                    </div>{" "}
                    <label
                      for="free-shipping-filter"
                      className="filter-box-title"
                    >
                      <span className="d-block font-size-9 m-0">
                        ارسال رایگان
                      </span>
                    </label>
                  </div>{" "}
                  <div className="filter-box pb">
                    <div className="custom-switch d-flex align-items-center ev-same-city-filter">
                      <input
                        type="checkbox"
                        id="same-city-filter"
                        className="custom-switch__input"
                      />{" "}
                      <label
                        for="same-city-filter"
                        className="custom-switch__label"
                      >
                        <span className="circle"></span>
                      </label>
                    </div>{" "}
                    <label for="same-city-filter" className="filter-box-title">
                      <span className="d-block font-size-9 m-0">همشهری</span>
                    </label>
                  </div>{" "}
                  <div className="filter-box pb">
                    <div className="custom-switch d-flex align-items-center ev-exist-filter">
                      <input
                        type="checkbox"
                        id="exist-filter"
                        checked="checked"
                        className="custom-switch__input"
                      />{" "}
                      <label
                        for="exist-filter"
                        className="custom-switch__label"
                      >
                        <span className="circle"></span>
                      </label>
                    </div>{" "}
                    <label for="exist-filter" className="filter-box-title">
                      <span className="d-block font-size-9 m-0">
                        فقط کالاهای موجود
                      </span>
                    </label>
                  </div>{" "}
                  <div className="filter-box pb">
                    <div className="custom-switch d-flex align-items-center ev-ready-filter">
                      <input
                        type="checkbox"
                        id="ready-filter"
                        className="custom-switch__input"
                      />{" "}
                      <label
                        for="ready-filter"
                        className="custom-switch__label"
                      >
                        <span className="circle"></span>
                      </label>
                    </div>{" "}
                    <label for="ready-filter" className="filter-box-title">
                      <span className="d-block font-size-9 m-0">
                        آماده‌ ارسال
                      </span>
                    </label>
                  </div>{" "}
                  <div className="filter-box pb">
                    <div className="custom-switch d-flex align-items-center ev-discount-filter">
                      <input
                        type="checkbox"
                        id="discount-filter"
                        className="custom-switch__input"
                      />{" "}
                      <label
                        for="discount-filter"
                        className="custom-switch__label"
                      >
                        <span className="circle"></span>
                      </label>
                    </div>{" "}
                    <label for="discount-filter" className="filter-box-title">
                      <span className="d-block font-size-9 m-0">
                        تخفیف‌دارها
                      </span>
                    </label>
                  </div>{" "}
                  <div className="product-count d-block d-lg-none fixed-bottom">
                    <span>مشاهده 3638 محصول</span>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="col-12 col-lg-9">
            <div>
              <div className="items-slider product-filters mb-4">
                <div className="product-filters-item--active d-lg-none product-filters-item ev-more-filters">
                  <i className="bi bi-filter"></i>{" "}
                  <span>
                    فیلترها
                    <span>(1)</span>
                  </span>
                </div>{" "}
                <div className="search-sorts mb-0 ">
                  <div className="d-flex align-items-center">
                    <div className="title">
                      <i className="bi bi-sort"></i>{" "}
                      <span className="d-none d-lg-block">
                        {" "}
                        مرتب‌سازی براساس:{" "}
                      </span>
                    </div>{" "}
                    <ul>
                      <li
                        className={`sort-item  ${
                          "1" === witchItem ? " active" : ""
                        } `}
                      >
                        <a id={"1"} onClick={() => setWitchItem("1")}>
                          مرتبط‌ترین
                        </a>
                      </li>
                      <li
                        className={`sort-item  ${
                          "2" === witchItem ? " active" : ""
                        } `}
                      >
                        <a
                          onClick={() => {
                            sortPorductAsc();
                            setWitchItem("2");
                          }}
                        >
                          ارزان‌تر
                        </a>
                      </li>
                      <li
                        id={"3"}
                        className={`sort-item  ${
                          "3" === witchItem ? " active" : ""
                        } `}
                      >
                        <a
                          onClick={() => {
                            sortPorductDes();
                            setWitchItem("3");
                          }}
                        >
                          گران‌تر
                        </a>
                      </li>
                      <li
                        className={`sort-item  ${
                          "4" === witchItem ? " active" : ""
                        } `}
                      >
                        <a
                          onClick={() => {
                            sortBestsellingProduct();
                            setWitchItem("4");
                          }}
                        >
                          پرفروش‌ها
                        </a>
                      </li>
                      <li
                        className={`sort-item  ${
                          "5" === witchItem ? " active" : ""
                        } `}
                      >
                        <a
                          onClick={() => {
                            setWitchItem("5");
                          }}
                        >
                          تازه‌ها
                        </a>
                      </li>
                    </ul>
                  </div>
                  <span
                    className="d-none d-lg-block "
                    style={{ marginLeft: "20px" }}
                  >
                    {" "}
                    تعداد کالا:
                    <span className="Blazing" style={{ marginRight: "10px" }}>
                      {" "}
                      {productForList.length}
                    </span>
                  </span>
                </div>{" "}
                <div className="v-portal" style={{ display: "none" }}></div>{" "}
                <div className="v-portal" style={{ display: "none" }}></div>
              </div>{" "}
            </div>{" "}
            <div className="mx-auto row">
              {listProducts.map((oneProduct) => (
                <ProductCard
                  padding={1}
                  product={{
                    imageUrl: oneProduct.image_link,
                    url: oneProduct.page_url,
                    title: oneProduct.title,
                    chamberTitle: oneProduct.shop,
                    chamberUrl: oneProduct.page_url,
                    rate: 10,
                    commentCount: 102,
                    discount: Math.ceil(
                      (1 - oneProduct.current_price / oneProduct.old_price) *
                        100
                    ),
                    price: oneProduct.current_price,
                    discountNumber: oneProduct.old_price,
                    sales: oneProduct.discount,
                    city: oneProduct.city,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
