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
import MenuMobile from "../../components/layout/MenuMobile";
import { modalFilter } from "../../containers/productLis/modalFilter";
import MultiRangeSlider from "../../components/custom/customMultiRangeSlider/MultiRangeSlider";

const index = () => {
  const _ = require("lodash");
  const [isFree, setIsFree] = useState(false);
  const [isFellowCitizen, setIsFellowCitizen] = useState(false);
  const [listProducts, setlistProducts] = useState(productForList);
  const [listWithFilter, setListWithFilter] = useState(productForList);
  const [isOpenModal, setIsOpenModal] = useState(false);
  useEffect(() => {
    let copyList = [...listProducts];

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

  const sortProductDes = () => {
    setListWithFilter(orderBy(listWithFilter, "current_price", "desc"));
  };

  const sortProductAsc = () => {
    setListWithFilter(orderBy(listWithFilter, "current_price", "asc"));
  };
  const sortBestsellingProduct = () => {
    setListWithFilter(orderBy(listWithFilter, "discount", "desc"));
  };

  const handel_filterModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      <ContextListProductPage.Provider
        value={{
          listProducts: listProducts,
          setIsFree: setIsFree,
          setIsFellowCitizen: setIsFellowCitizen,

          sortBestsellingProduct: sortBestsellingProduct,
          sortProductAsc: sortProductAsc,
          sortProductDes: sortProductDes,
          handel_filterModal: handel_filterModal,

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
                  <div style={{ direction: "ltr" }}>
                    <MultiRangeSlider
                      min={100}
                      max={1000}
                      onChange={({ min, max }) =>
                        console.log(`min = ${min}, max = ${max}`)
                      }
                    />
                  </div>
                </CustomAccordion>
                <CustomAccordion title="استان و شهر غرفه دار" item="4">
                  <div>اینجا اطلاعات قرار می گیره</div>
                </CustomAccordion>

                <div className="search-body-filter">
                  <div className="modal-body" style={{ msOverflowX: "hidden" }}>
                    <CustomSwitch
                      title="ارسال رایگان"
                      id="discount"
                      onChange={(e) => {
                        setIsFree(e.target.checked);
                      }}
                    />
                    <CustomSwitch
                      title="همشهری"
                      id="fellowCitizen"
                      onChange={(e) => {
                        setIsFellowCitizen(e.target.checked);
                      }}
                    />

                    <CustomSwitch
                      title="فقط کالاهای موجود"
                      id="Available_goods"
                    />
                    <CustomSwitch title="آماده ارسال" id="Ready_to_send" />
                    <CustomSwitch title="تخفیف دارها" id="discounted" />
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="col-12 col-lg-9">
              <TopBar handel_filterModal={handel_filterModal} />
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
        </div>

        {/* modalFilter start*/}
        {isOpenModal && (
          <div className="modal_filter_products d-none d-lg-block ">
            <div id="sidebar">
              <CustomAccordion title="دسته بندی" item="1">
                <div>اینجا اطلاعات قرار می گیره</div>
              </CustomAccordion>
              <CustomAccordion title="امتیاز محصول" item="2">
                <div>اینجا اطلاعات قرار می گیره</div>
              </CustomAccordion>

              <CustomAccordion title="محدوده قیمت" item="3">
                <MultiRangeSlider
                  min={100}
                  max={1000}
                  onChange={({ min, max }) =>
                    console.log(`min = ${min}, max = ${max}`)
                  }
                />
              </CustomAccordion>
              <CustomAccordion title="استان و شهر غرفه دار" item="4">
                <div>اینجا اطلاعات قرار می گیره</div>
              </CustomAccordion>

              <div className="search-body-filter">
                <div className="modal-body" style={{ msOverflowX: "hidden" }}>
                  <CustomSwitch
                    title="ارسال رایگان"
                    id="discount_mobile"
                    onChange={(e) => {
                      setIsFree(e.target.checked);
                    }}
                  />
                  <CustomSwitch
                    title="همشهری"
                    id="fellowCitizen_mobile"
                    onChange={(e) => {
                      setIsFellowCitizen(e.target.checked);
                    }}
                  />

                  <CustomSwitch
                    title="فقط کالاهای موجود"
                    id="Available_goods_mobile"
                  />
                  <CustomSwitch title="آماده ارسال" id="Ready_to_send_mobile" />
                  <CustomSwitch title="تخفیف دارها" id="discounted_mobile" />
                </div>
              </div>
            </div>
            <div
              style={{
                position: "fixed",
                bottom: "0",
                left: "0",
                right: "0",
                textAlign: "center",
                marginTop: "20px",
                zIndex: "99999",
                backgroundColor: "#fff",
                padding: "5px",
              }}
            >
              <button
                onClick={handel_filterModal}
                className="btn btn-dark"
                style={{ width: "90vw", fontSize: "14px" }}
              >
                {" "}
                تایید
              </button>
            </div>
            <div style={{ paddingBottom: "80px" }}></div>
          </div>
        )}
        {/* modalFilter end*/}

        {/* END MODAL */}

        {/* MenuMobile */}
        <MenuMobile />
      </ContextListProductPage.Provider>
    </>
  );
};

export default index;
