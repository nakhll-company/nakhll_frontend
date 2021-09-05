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
import CustomSwitch from "../../components/custom/customSwitch";
import { CustomCard } from "../../components/custom/customCard";

import ContextListProductPage from "../../containers/listProduct/Context/context";
import { Bigger } from "../../components/custom/kh/biggerProduct/Bigger";
import { TopBar } from "../../containers/listProduct/TopBar";

const index = () => {
  const [isFree, setIsFree] = useState(false);
  const [isFellowCitizen, setIsFellowCitizen] = useState(false);
  const _ = require("lodash");

  const [listProducts, setlistProducts] = useState(productForList);
  const [filtersListProducts, setFiltersListProducts] = useState([]);
  const [listFilters, setListFilters] = useState({});

  // FIlters NEW ################################################3

  const [listWithFilter, setListWithFilter] = useState(productForList);

  useEffect(() => {
    let copyList = [...listProducts];
    debugger;

    if (isFree) {
      copyList = _.filter(copyList, { discount: 0 });
      // setListWithFilter(_.filter(listWithFilter, { discount: 0 }));
    }

    if (isFellowCitizen) {
      copyList = _.filter(copyList, { city: "کرمان" });
      // setListWithFilter(_.filter(listProducts, { city: "کرمان" }))
    }

    setListWithFilter(copyList);
  }, [isFree, isFellowCitizen]);

  const handel_free_filter = (e) => {
    setIsFree(!isFree);

    handel_all_filter(e.target.checked);
  };

  const sortProductDes = () => {
    setListWithFilter(orderBy(listWithFilter, "current_price", "desc"));
  };

  const sortProductAsc = () => {
    setListWithFilter(orderBy(listWithFilter, "current_price", "asc"));
  };
  const sortBestsellingProduct = () => {
    setListWithFilter(orderBy(listWithFilter, "discount", "desc"));
  };

  // const filterListProduct=([{},{},{},{},{}])=>{
  //   e.map()=>{
  //     if(e.status){
  //     _filter()
  //     }
  //   }
  // }

  return (
    <>
      <ContextListProductPage.Provider
        value={{
          listFilters: listFilters,
          setListFilters: setListFilters,
          listProducts: listProducts,
          setlistProducts: setlistProducts,
          filtersListProducts: filtersListProducts,
          sortBestsellingProduct: sortBestsellingProduct,
          sortProductAsc: sortProductAsc,
          sortProductDes: sortProductDes,

          listWithFilter: listWithFilter,
        }}
      >
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
                  <div className="modal-body" style={{ msOverflowX: "hidden" }}>
                    <div className="filter-box pb">
                      <div className="custom-switch d-flex align-items-center ev-yekase-filter">
                        <input
                          type="checkbox"
                          id="switch__discount"
                          className="custom-switch__input"
                          onChange={(e) => {
                            setIsFree(e.target.checked);
                          }}
                        />{" "}
                        <label
                          htmlFor="switch__discount"
                          className="custom-switch__label"
                        >
                          <span className="circle"></span>
                        </label>
                      </div>{" "}
                      <label
                        htmlFor="switch__discount"
                        className="filter-box-title"
                      >
                        <span className="d-block font-size-9 m-0">
                          ارسال رایگان
                        </span>
                      </label>
                    </div>

                    <div className="filter-box pb">
                      <div className="custom-switch d-flex align-items-center ev-yekase-filter">
                        <input
                          type="checkbox"
                          id="switch__fellowCitizen"
                          className="custom-switch__input"
                          onChange={(e) => {
                            setIsFellowCitizen(e.target.checked);
                          }}
                        />{" "}
                        <label
                          htmlFor="switch__fellowCitizen"
                          className="custom-switch__label"
                        >
                          <span className="circle"></span>
                        </label>
                      </div>{" "}
                      <label
                        htmlFor="switch__fellowCitizen"
                        className="filter-box-title"
                      >
                        <span className="d-block font-size-9 m-0">همشهری</span>
                      </label>
                    </div>

                    {/* <CustomSwitch
                      title="ارسال رایگان"
                      id="discount"
                      valueFilter="0"
                      checked={isFree}
                      onChange={async()=>{await setIsFree(!isFree);
                       await handel_all_filter ()}}
                    />
                    <CustomSwitch
                      title="همشهری"
                      id="fellowCitizen"
                      valueFilter="کرمان"
                      checked={isfellowCitizen}
                      onChange={async()=>{
                       await  setIsfellowCitizen(!isfellowCitizen);
                       await handel_all_filter ()}}
                    /> */}
                    {/* <CustomSwitch
                      title="فقط کالاهای موجود"
                      id="Available_goods"
                    />
                    <CustomSwitch title="آماده ارسال" id="Ready_to_send" />
                    <CustomSwitch
                      title="تخفیف دارها"
                      id="discounted"
                      valueFilter="0"
                    /> */}
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="col-12 col-lg-9">
              <TopBar />
              <div className="mx-auto row">
                {listWithFilter.map((oneProduct, index) => (
                  <ProductCard
                    key={index}
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

          <div
            className="more-filters-modal modal-xs modal-mask modal-full-mobile"
            switch-shift-element-right="119"
            switch-adjust-element-width="120"
          >
            <div
              className="modal-container"
              switch-left-popup-id="46"
              switch-shift-element-right="121"
              switch-adjust-element-width="122"
            >
              {" "}
              <div className="search-body-filter">
                <div className="d-lg-none more-fliters-header ev-cancel-filter">
                  <h3 className="font-size1-1 m-0">فیلترها</h3>{" "}
                  <div className="d-flex">
                    {" "}
                    <i className="bi bi-close pointer font-size2"></i>
                  </div>
                </div>{" "}
                <div className="modal-body" style={{ overflowX: "hidden" }}>
                  {" "}
                  <div className="facet-filter-item mt-0">
                    <div>
                      <div className="collapse-title filters-title open">
                        <div className="title">
                          <span className="title">جستجوی دقیق‌تر</span>{" "}
                          <div className="toggle-angle">
                            <i className="bi bi-angle-up"></i>
                          </div>
                        </div>{" "}
                        <div className="font-size-sm text-secondary"></div>
                      </div>{" "}
                      <div
                        data-old-padding-top=""
                        data-old-padding-bottom=""
                        className="is-active"
                        data-old-overflow=""
                        style={{
                          animationFillMode: "both",
                          animationTimingFunction: "ease-out",
                        }}
                      >
                        <div className="checklist-wrapper filter-wrapper">
                          {" "}
                          <div className="checklist">
                            {" "}
                            <div className="checklist-item">
                              <div className="d-flex">
                                <label className="b-checkbox b-checkbox--teal pointer">
                                  <input
                                    name="namedTags-facet"
                                    type="checkbox"
                                    className="b-checkbox-input"
                                    value="73139"
                                  />{" "}
                                  <div className="b-checkbox-element b-checkbox-element--md align-middle ml-2"></div>{" "}
                                  <div className="title-section">
                                    {" "}
                                    <span className="title">پسته</span>{" "}
                                    <span className="count">(1602)</span>
                                  </div>
                                </label>
                              </div>{" "}
                            </div>
                            <div className="checklist-item">
                              <div className="d-flex">
                                <label className="b-checkbox b-checkbox--teal pointer">
                                  <input
                                    name="namedTags-facet"
                                    type="checkbox"
                                    className="b-checkbox-input"
                                    value="73141"
                                  />{" "}
                                  <div className="b-checkbox-element b-checkbox-element--md align-middle ml-2"></div>{" "}
                                  <div className="title-section">
                                    {" "}
                                    <span className="title">
                                      پسته اکبری
                                    </span>{" "}
                                    <span className="count">(470)</span>
                                  </div>
                                </label>
                              </div>{" "}
                            </div>
                            <div className="checklist-item">
                              <div className="d-flex">
                                <label className="b-checkbox b-checkbox--teal pointer">
                                  <input
                                    name="namedTags-facet"
                                    type="checkbox"
                                    className="b-checkbox-input"
                                    value="74355"
                                  />{" "}
                                  <div className="b-checkbox-element b-checkbox-element--md align-middle ml-2"></div>{" "}
                                  <div className="title-section">
                                    {" "}
                                    <span className="title">
                                      پسته احمد آقایی
                                    </span>{" "}
                                    <span className="count">(370)</span>
                                  </div>
                                </label>
                              </div>{" "}
                            </div>
                            <div className="checklist-item">
                              <div className="d-flex">
                                <label className="b-checkbox b-checkbox--teal pointer">
                                  <input
                                    name="namedTags-facet"
                                    type="checkbox"
                                    className="b-checkbox-input"
                                    value="73538"
                                  />{" "}
                                  <div className="b-checkbox-element b-checkbox-element--md align-middle ml-2"></div>{" "}
                                  <div className="title-section">
                                    {" "}
                                    <span className="title">گز</span>{" "}
                                    <span className="count">(335)</span>
                                  </div>
                                </label>
                              </div>{" "}
                            </div>
                            <div className="checklist-item">
                              <div className="d-flex">
                                <label className="b-checkbox b-checkbox--teal pointer">
                                  <input
                                    name="namedTags-facet"
                                    type="checkbox"
                                    className="b-checkbox-input"
                                    value="75082"
                                  />{" "}
                                  <div className="b-checkbox-element b-checkbox-element--md align-middle ml-2"></div>{" "}
                                  <div className="title-section">
                                    {" "}
                                    <span className="title">مغز پسته</span>{" "}
                                    <span className="count">(279)</span>
                                  </div>
                                </label>
                              </div>{" "}
                            </div>{" "}
                            <span className="show-more-btn">بیشتر</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
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
                          <div
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
                                  top: "50%",
                                  right: "100%",
                                  transition: "right 0.5s ease 0s",
                                }}
                              >
                                <div className="vue-slider-dot-handle"></div>
                              </div>
                            </div>
                          </div>{" "}
                          <div className="btn-section">
                            <button
                              className="btn btn-transparent"
                              style={{
                                padding: "0px !important",
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
                  <div className="filter-box pb">
                    <div className="custom-switch d-flex align-items-center ev-groupBuy-filter">
                      <input
                        type="checkbox"
                        id="groupBuy-filter"
                        className="custom-switch__input"
                      />{" "}
                      <label
                        for="groupBuy-filter"
                        className="custom-switch__label"
                      >
                        <span className="circle"></span>
                      </label>
                    </div>{" "}
                    <label
                      for="groupBuy-filter"
                      className="filter-box-title w-100 d-flex align-item-center justify-content-between"
                    >
                      <span className="d-block font-size-9 m-0">
                        خرید گروهی
                      </span>{" "}
                      <span className="d-block font-size-7 font-lg-size-9 m-0 text-danger">
                        با ارسال رایگان + تا ۷۵٪ تخفیف
                      </span>
                    </label>
                  </div>{" "}
                  <div className="filter-box pb mb-10 mb-lg-0">
                    <div className="custom-switch d-flex align-items-center ev-discount-filter">
                      <input
                        type="checkbox"
                        id="delivery-filter"
                        className="custom-switch__input"
                      />{" "}
                      <label
                        for="delivery-filter"
                        className="custom-switch__label"
                      >
                        <span className="circle"></span>
                      </label>
                    </div>{" "}
                    <label for="delivery-filter" className="filter-box-title">
                      <span className="d-block font-size-9 m-0">
                        ارسال با پیک
                      </span>
                    </label>
                  </div>{" "}
                  <div
                    className="product-count d-block d-lg-none fixed-bottom"
                    switch-shift-element-right="123"
                    switch-adjust-element-width="124"
                  >
                    <span>مشاهده 3642 محصول</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContextListProductPage.Provider>
    </>
  );
};

export default index;
