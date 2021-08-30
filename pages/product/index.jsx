import React from "react";
import Head from "next/head";
import ProductCard from "../../components/ProductCart/ProductCard";
import styles from "../../styles/pages/testProduct/product.module.scss";
import { productForList } from "../../public/dataForProduct/data";

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
    sales: 52,
    city: "کرمان",
  };
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <div className="container_N">
        <div className="row sidebar-parent">
          <div className="d-none d-lg-block col-lg-3">
            <div id="sidebar">
              <div className="search-body-filter">
                <div className="d-lg-none more-fliters-header ev-cancel-filter">
                  <h3 className="font-size1-1 m-0">فیلترها</h3>{" "}
                  <div className="d-flex">
                    <i className="bi bi-close pointer font-size2"></i>
                  </div>
                </div>{" "}
                <div className="modal-body" style={{ msOverflowX: "hidden" }}>
                  {" "}
                  <div className="facet-filter-item">
                    <div>
                      <div className="collapse-title filters-title">
                        <div className="title">
                          <span className="title">دسته‌بندی‌ها</span>{" "}
                          <div className="toggle-angle">
                            <i className="bi bi-angle-down"></i>
                          </div>
                        </div>{" "}
                        <div className="font-size-sm text-secondary"></div>
                      </div>{" "}
                    </div>
                  </div>{" "}
                  <div className="filter-box collapser">
                    <div className="title-section filters-title collapsable">
                      <div className="title">
                        امتیاز محصول
                        <i className="bi bi-angle-down"></i>
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="filter-box collapser">
                    <div className="title-section filters-title">
                      <div className="title">
                        محدوده قیمت
                        <i className="bi bi-angle-up"></i>
                      </div>{" "}
                    </div>{" "}
                    <div className="w-100 is-active">
                      <div className="filter-wrapper pb-3">
                        <div className="row tiny-gutters align-items-center mb-3 price-filter">
                          <span className="col col-auto">از</span>{" "}
                          <div className="col">
                            <span className="form-control input-gray px-1 text-center">
                              2,000
                            </span>
                          </div>{" "}
                          <span className="col-auto">تا</span>{" "}
                          <div className="col">
                            <span className="form-control input-gray px-1 text-center">
                              155,000,000
                            </span>
                          </div>{" "}
                          <span className="col-auto">تومان</span>
                        </div>{" "}
                        <div className="price-filter">
                          <vue-slider
                            tooltip="none"
                            direction="rtl"
                            silent="true"
                            min="20000"
                            max="1550000000"
                            interval="10000"
                            height="3"
                            value="20000,1550000000"
                            className="ev-search-filter-price-slider ev-price-filter px-3 vue-slider vue-slider-rtl"
                            style={{
                              padding: "7px 0px",
                              width: "auto",
                              height: "3px",
                            }}
                          >
                            <div className="vue-slider-rail">
                              <div
                                className="vue-slider-process"
                                style={{
                                  height: "100%",
                                  top: "0px",
                                  right: "0%",
                                  width: "100%",
                                  transitionProperty: "width, right",
                                  transitionDuration: "0.5s",
                                }}
                              ></div>
                              <div
                                aria-valuetext="20000"
                                className="vue-slider-dot"
                                role="slider"
                                aria-valuenow="20000"
                                aria-valuemin="20000"
                                aria-valuemax="1550000000"
                                aria-orientation="horizontal"
                                tabindex="0"
                                style={{
                                  width: "14px",
                                  height: "14px",
                                  transform: "translate(50%, -50%)",
                                  top: "50%",
                                  right: "0%",
                                  transition: "right 0.5s ease 0s",
                                }}
                              >
                                <div className="vue-slider-dot-handle"></div>
                              </div>
                              <div
                                aria-valuetext="1550000000"
                                className="vue-slider-dot"
                                role="slider"
                                aria-valuenow="1550000000"
                                aria-valuemin="20000"
                                aria-valuemax="1550000000"
                                aria-orientation="horizontal"
                                tabindex="0"
                                style={{
                                  width: "14px",
                                  height: "14px",
                                  transform: "translate(50%, -50%)",
                                  top: " 50%",
                                  right: "100%",
                                  transition: "right 0.5s ease 0s",
                                }}
                              >
                                <div className="vue-slider-dot-handle"></div>
                              </div>
                            </div>
                          </vue-slider>{" "}
                          <div className="btn-section">
                            <button
                              className="btn btn-transparent"
                              style={{
                                padding: "0 !important",
                                marginLeft: "0.5rem",
                              }}
                            >
                              حالت پیش‌فرض
                            </button>{" "}
                            <button className="btn btn-outline-silver submit-filter">
                              اعمال محدوده قیمت
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="facet-filter-item">
                    <div>
                      <div className="collapse-title filters-title">
                        <div className="title">
                          <span className="title">استان و شهر غرفه‌دار</span>{" "}
                          <div className="toggle-angle">
                            <i className="bi bi-angle-down"></i>
                          </div>
                        </div>{" "}
                        <div className="font-size-sm text-secondary"></div>
                      </div>{" "}
                    </div>
                  </div>{" "}
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
                <div className="search-sorts mb-0">
                  <div className="title">
                    <i className="bi bi-sort"></i>{" "}
                    <span className="d-none d-lg-block">
                      {" "}
                      مرتب‌سازی براساس:{" "}
                    </span>
                  </div>{" "}
                  <ul>
                    <li className="sort-item active">
                      <a>مرتبط‌ترین</a>
                    </li>
                    <li className="sort-item">
                      <a>ارزان‌تر</a>
                    </li>
                    <li className="sort-item">
                      <a>گران‌تر</a>
                    </li>
                    <li className="sort-item">
                      <a>پرفروش‌ها</a>
                    </li>
                    <li className="sort-item">
                      <a>تازه‌ها</a>
                    </li>
                  </ul>
                </div>{" "}
                <div className="v-portal" style={{ display: "none" }}></div>{" "}
                <div className="v-portal" style={{ display: "none" }}></div>
              </div>{" "}
            </div>{" "}
            <div className="mx-auto row">
              {productForList.map((oneProduct) => (
                <ProductCard
                  padding={1}
                  product={{
                    imageUrl: oneProduct.image_link,
                    url: oneProduct.page_url,
                    title: oneProduct.title,
                    chamberTitle: "گالری سنگ و نقره شاپرک",
                    chamberUrl: "/azizzadeh",
                    rate: 10,
                    commentCount: 102,
                    discount: 25,
                    price: oneProduct.current_price,
                    discountNumber: oneProduct.old_price,
                    sales: 52,
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
