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
import { errorMessage, successMessage } from "../../containers/utils/message";
import { ApiRegister } from "../../services/apiRegister/ApiRegister";
import { Loading } from "../../components/custom/Loading/Loading";
import CheckboxTree from "react-checkbox-tree";
import { BeautyLoading } from "../../components/custom/Loading/beautyLoading/BeautyLoading";
import { allCites } from "../../components/custom/data/data";
import { market } from "../../components/custom/data/market";

//Search:
//  1- Add search phrase to search params

//Filter:
//  1- min_price= [Number]
//  2- max_price= [Number]
//  3- ready= [Boolean]
//  4- available= [Boolean]
//  5- category= [ID]
//  6- city= [ID]

//Ordering:
//  1- Title or -Title
//  2- Price or -Price
//  3- DiscountPercentage or -DiscountPercentage
//  4- DateCreate or -DateCreate

const index = () => {
  const [listProducts, setlistProducts] = useState([]);
  const [listWithFilter, setListWithFilter] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [totalcount, setTotalcount] = useState("");
  // state for show loading
  const [isLoading, setIsLoading] = useState(true);

  // state for on filter
  const [isDiscountPercentage, setIsDiscountPercentage] = useState(false);
  const [isReadyForSend, setIsReadyForSend] = useState(false);
  const [isAvailableGoods, setIsAvailableGoods] = useState(false);

  // state for save all of filters
  const [listActiveFilters, setListActiveFilters] = useState({});

  // for checkbox tree
  const [checked, setChecked] = useState([]);
  const [expand, setExpand] = useState([]);

  const [checkedCity, setCheckedCity] = useState([]);
  const [expandCity, setExpandCity] = useState([]);

  // checkedddddd

  // stat for Range
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const _handel_filters = async (witchFilter) => {
    setIsLoading(true);
    try {
      let response = await ApiRegister().apiRequest(
        null,
        "get",
        `/api/v1/products/`,
        true,
        {
          ...witchFilter,
          search: "لباس",
          city: checkedCity,
          ready: isReadyForSend,
          available: isAvailableGoods,
          discounted: isDiscountPercentage,
        }
      );
      if (response.status === 200) {
        setListWithFilter(response.data.results);
        setTotalcount(response.data.results.length);

        setIsLoading(false);
      }
    } catch (e) {}
  };

  useEffect(() => {
    _handel_filters({ city: checkedCity });
  }, [checkedCity]);

  useEffect(async () => {
    try {
      // , page_size: 2
      let params = { search: "لباس", page_size: 10 };
      let loadData = null;
      let dataUrl = `/api/v1/products/`;
      let response = await ApiRegister().apiRequest(
        loadData,
        "get",
        dataUrl,
        true,
        params
      );

      if (response.status === 200) {
        successMessage("داده ها با موفقیت ثبت شده اند");

        setlistProducts(response.data.results);
        setListWithFilter(response.data.results);
        setTotalcount(response.data.total_count);
        setIsLoading(false);
      } else {
        errorMessage("موجودی کافی نمی باشد.");
      }
    } catch (e) {
      // const error = e.response.data[0];
      errorMessage("error");
    }
  }, []);

  // START
  // for filters in sidebar

  useEffect(async () => {
    setListActiveFilters({
      search: "لباس",
      ready: isReadyForSend,
      available: isAvailableGoods,
      discounted: isDiscountPercentage,
    });
  }, [isAvailableGoods, isReadyForSend, isDiscountPercentage]);

  // for filters in sidebar
  // END

  useEffect(() => {
    _handel_filters(listActiveFilters);
  }, [listActiveFilters]);

  const handel_filterModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      <ContextListProductPage.Provider
        value={{
          listProducts: listProducts,

          totalcount: totalcount,

          handel_filterModal: handel_filterModal,
          _handel_filters: _handel_filters,

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
                  <CheckboxTree
                    // direction="rtl"
                    icons={{
                      expandClose: (
                        <span
                          className="fas fa-angle-left"
                          style={{ fontSize: "15px" }}
                        />
                      ),
                      parentClose: <span />,
                    }}
                    nodes={market}
                    checked={checked}
                    expanded={expand}
                    onCheck={(e) => setChecked(e)}
                    onExpand={(e) => setExpand(e)}
                  />
                </CustomAccordion>

                <CustomAccordion title="محدوده قیمت" item="2">
                  <div style={{ direction: "ltr" }}>
                    <MultiRangeSlider
                      min={0}
                      max={10000}
                      onChange={({ min, max }) => {
                        setMinPrice(min);
                        setMaxPrice(max);
                      }}
                    />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <button
                        className="btn btn-dark "
                        onClick={() =>
                          _handel_filters({
                            min_price: minPrice / 100,
                            max_price: maxPrice / 100,
                          })
                        }
                      >
                        {" "}
                        اعمال فیلتر
                      </button>
                    </div>
                  </div>
                </CustomAccordion>
                <CustomAccordion title="استان و شهر غرفه دار" item="3">
                  <CheckboxTree
                    // direction="rtl"
                    icons={{
                      expandClose: (
                        <span
                          className="fas fa-angle-left"
                          style={{ fontSize: "15px" }}
                        />
                      ),
                      parentClose: <span />,
                    }}
                    nodes={allCites}
                    checked={checkedCity}
                    expanded={expandCity}
                    onCheck={(e) => setCheckedCity(e)}
                    onExpand={(e) => setExpandCity(e)}
                  />
                </CustomAccordion>

                <div className="search-body-filter">
                  <div className="modal-body" style={{ msOverflowX: "hidden" }}>
                    {/* <CustomSwitch
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
                    /> */}

                    <CustomSwitch
                      title="فقط کالاهای موجود"
                      id="Available_goods"
                      onChange={(e) => {
                        setIsAvailableGoods(e.target.checked);
                      }}
                    />
                    <CustomSwitch
                      title="آماده ارسال"
                      id="Ready_to_send"
                      onChange={(e) => {
                        setIsReadyForSend(e.target.checked);
                      }}
                    />
                    <CustomSwitch
                      title="تخفیف دارها"
                      id="discounted"
                      onChange={(e) => {
                        setIsDiscountPercentage(e.target.checked);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="col-12 col-lg-9">
              <TopBar handel_filterModal={handel_filterModal} />
              <div className="mx-auto row">
                {isLoading ? (
                  // <Loading />
                  <BeautyLoading />
                ) : (
                  listWithFilter.map((oneProduct, index) => (
                    <ProductCard
                      key={index}
                      padding={1}
                      product={{
                        imageUrl: oneProduct.image_thumbnail_url,
                        url: oneProduct.image_thumbnail_url,
                        title: oneProduct.title,
                        chamberTitle: oneProduct.shop.title,
                        // chamberUrl: oneProduct.page_url,

                        discount: oneProduct.discount,
                        price: oneProduct.price / 10,
                        discountNumber: oneProduct.old_price / 10,

                        city: oneProduct.shop.state,
                      }}
                    />
                  ))
                )}
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
                  onChange={({ min, max }) => null}
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
