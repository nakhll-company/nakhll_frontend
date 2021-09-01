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
  const [mainList, setmainList] = useState([]);
  const [listProducts, setlistProducts] = useState([]);
  const [filtersListProducts, setFiltersListProducts] = useState([]);
  const [listFilters, setListFilters] = useState({});

  // FILTERS
  const [filterDiscount, setFilterDiscount] = useState({});
  const [filterFellowCitizen, setFilterFellowCitizen] = useState({});
  const structure = [
    { whichFilter: "free", status: true, witchValue: "discount", value: 0 },
    { whichFilter: "fellow-citizen", status: true },
    { whichFilter: "Available_goods", status: true },
    { whichFilter: "Discounted", status: true },
  ];
  useEffect(() => {
    setlistProducts(productForList);
    setmainList(productForList);
    console.log("mainList :>> ", mainList);
  }, []);

  const sortProductDes = () => {
    setlistProducts(orderBy(listProducts, "current_price", "desc"));
  };

  const sortProductAsc = () => {
    setlistProducts(orderBy(listProducts, "current_price", "asc"));
  };
  const sortBestsellingProduct = () => {
    setlistProducts(orderBy(listProducts, "discount", "desc"));
  };

  const setItemInFilterList = (id, checked, valueFilter) => {
    switch (id) {
      case "discount":
        setFilterDiscount({ id, checked, valueFilter });

      case "fellowCitizen":
        setFilterFellowCitizen({ id, checked, valueFilter });
    }

    console.log("iiii :>> ", filterDiscount);
    console.log("iiii :>> ", filterFellowCitizen);
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
          setItemInFilterList: setItemInFilterList,
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
                    <CustomSwitch
                      title="ارسال رایگان"
                      id="discount"
                      valueFilter="0"
                    />
                    <CustomSwitch
                      title="همشهری"
                      id="fellowCitizen"
                      valueFilter="کرمان"
                    />
                    <CustomSwitch
                      title="فقط کالاهای موجود"
                      id="Available_goods"
                    />
                    <CustomSwitch title="آماده ارسال" id="Ready_to_send" />
                    <CustomSwitch
                      title="تخفیف دارها"
                      id="discounted"
                      valueFilter="0"
                    />
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="col-12 col-lg-9">
              <TopBar />
              <div className="mx-auto row">
                {listProducts.map((oneProduct, index) => (
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
      </ContextListProductPage.Provider>
    </>
  );
};

export default index;
