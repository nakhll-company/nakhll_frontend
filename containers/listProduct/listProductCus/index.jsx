import React, { useEffect, useState } from "react";
import Head from "next/head";
import ContextListProductPage from "./Context/context";
import Link from "next/link";

import CheckboxTree from "react-checkbox-tree";

import MultiRangeSlider from "../../../components/custom/customMultiRangeSlider/MultiRangeSlider";
import { allCites } from "../../../components/custom/data/data";
import CustomSwitch from "../../../components/custom/customSwitch";
import { TopBar } from "../TopBar";
import InfiniteScroll from "react-infinite-scroll-component";
import MenuMobile from "../../../components/layout/MenuMobile";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
import { WoLoading } from "../../../components/custom/Loading/woLoading/WoLoading";
import ProductCard from "../../../components/ProductCart/ProductCard";

import Assistent from "zaravand-assistent-number";
import CustomAccordion from "../../../components/custom/customAccordion";
import router from "next/router";
import Search from "../../../components/search/Search";
import { ApiReference } from "../../../Api";
import styles from "./listProductCus.module.scss";
const _asist = new Assistent();
function ListProductCus({
  data,
  dataFirst,

  shop_products = "",
  categoryIn = "",
}) {
  console.log("data.search :>> ", data.search);
  const [listProducts, setlistProducts] = useState([]);

  const [hojreh, setHojreh] = useState(data.shop ? data.shop : "");
  const [searchWord, setSearchWord] = useState(data.search ? data.search : "");

  const [listWithFilter, setListWithFilter] = useState([]);
  // state for  show Ordering Modal in mobile
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenOrderingModal, setIsOpenOrderingModal] = useState(false);
  const [totalcount, setTotalcount] = useState("");
  // state for show loading
  const [isLoading, setIsLoading] = useState(false);

  // state for ordering
  const [whichOrdering, setWhichOrdering] = useState(
    data.ordering ? data.ordering : ""
  );

  // state for on filter
  const [isDiscountPercentage, setIsDiscountPercentage] = useState(
    data.discounted == "true" ? true : false
  );
  const [isReadyForSend, setIsReadyForSend] = useState(
    data.ready == "true" ? true : false
  );
  const [isAvailableGoods, setIsAvailableGoods] = useState(
    data.available == "true" ? true : false
  );

  // Array for cateGory
  const [categories, setCategories] = useState([]);
  const [wantCategories, setWantCategories] = useState([]);

  const [checkedCity, setCheckedCity] = useState([
    ...(data.city ? data.city.split(",").map((el) => parseInt(el)) : []),
  ]);

  const [expandCity, setExpandCity] = useState([]);

  // state for handel pagination in api
  const [pageApi, setPageApi] = useState(2);
  const [hasMore, setHasMore] = useState(false);

  // stat for Range
  const [minPrice, setMinPrice] = useState(
    data.min_price ? parseInt(data.min_price) : 0
  );
  const [maxPrice, setMaxPrice] = useState(
    data.max_price ? parseInt(data.max_price) : 10000
  );
  const [clickOnRange, setClickOnRange] = useState(1);
  // save all shopsName
  const [shopsName, setShopsName] = useState([]);
  const [searchShops, setSearchShops] = useState([]);
  // state for change page
  const [changePage, setChangePage] = useState(1);

  const _handel_category = async () => {
    try {
      let response = await ApiRegister().apiRequest(
        null,
        "get",
        `/api/v1/sub_markets/?q=${searchWord}`,
        true,
        {}
      );
      if (response.status === 200) {
        setCategories(response.data);
      }
    } catch (e) {}
  };

  const _handel_Add_category = (id) => {
    let copyArray = [...wantCategories];

    let newArray = copyArray.filter((element) => element != id);

    if (copyArray.length == newArray.length) {
      setWantCategories([...newArray, id]);
    } else {
      setWantCategories(newArray);
    }
  };

  const _handel_filters = async (witchFilter) => {
    setHasMore(true);
    setIsLoading(true);

    let params = {
      ...(witchFilter ? witchFilter : null),
      search: searchWord,
      ordering: whichOrdering,
      ready: isReadyForSend,
      available: isAvailableGoods,
      discounted: isDiscountPercentage,
      city: checkedCity.toString(),
      ...(categoryIn.length !== 0 && { category: categoryIn }),
      ...(wantCategories.length > 0 && { category: wantCategories.toString() }),
      // "5f239daf-9984-477a-aacd-fc3a2f8b76cb"
      page_size: 50,
      min_price: minPrice * 10000,
      max_price: maxPrice * 10000,
      shop: `${hojreh}`,
    };

    try {
      let response = await ApiRegister().apiRequest(
        null,
        "get",
        `/api/v1/products/`,
        true,
        params
      );
      if (response.status === 200) {
        setListWithFilter(response.data.results);

        if (
          response.data.results.length === 0 ||
          response.data.results.length < 50
        ) {
          setHasMore(false);
        }

        setTotalcount(response.data.total_count);

        setIsLoading(false);
      }
    } catch (e) {
      setIsLoading(false);
    }
  };

  const _handel_call_another_page_api = async (witchFilter) => {
    try {
      let response = await ApiRegister().apiRequest(
        null,
        "get",
        `/api/v1/products/`,
        true,
        {
          ...(witchFilter ? witchFilter : null),
          search: searchWord,
          ordering: whichOrdering,
          page: pageApi,
          ready: isReadyForSend,
          available: isAvailableGoods,
          discounted: isDiscountPercentage,
          city: checkedCity.toString(),
          ...(categoryIn !== "" && { category: categoryIn }),
          ...(wantCategories.length > 0 && {
            category: wantCategories.toString(),
          }),
          page_size: 50,
          min_price: minPrice * 10000,
          max_price: maxPrice * 100000,
          shop: `${hojreh}`,
        }
      );
      if (response.status === 200) {
        const ContinueList = response.data.results;

        setListWithFilter([...listWithFilter, ...ContinueList]);

        if (ContinueList.length === 0 || ContinueList.length < 50) {
          setHasMore(false);
        }

        setPageApi(pageApi + 1);
      }
    } catch (e) {}
  };

  // Get all shops
  const _get_all_shops = async () => {
    let shops = await ApiRegister().apiRequest(
      null,
      "GET",
      ApiReference.allShops,
      true,
      ""
    );

    if (shops.status === 200) {
      setShopsName(shops.data);
      console.log("shops.response :>> ", shops.data);
    }
  };
  // Function for search
  const _handel_search = (word) => {
    let copy_Array = [...shopsName];
    let filterArray = [];
    if (word != "") {
      filterArray = copy_Array.filter((el) => el.title.includes(word));
    }
    setSearchShops(filterArray);

    console.log("word :>> ", word);
  };

  // START
  // for filters in sidebar
  useEffect(async () => {
    await _handel_filters();
    await _handel_category();
  }, [
    isAvailableGoods,
    isReadyForSend,
    isDiscountPercentage,
    checkedCity,
    wantCategories,
    whichOrdering,
    clickOnRange,
    categoryIn,
    changePage,
    hojreh,
  ]);
  useEffect(async () => {
    await _get_all_shops();
  }, []);

  useEffect(() => {
    // let url = `
    // ?search=${searchWord}&ordering=${whichOrdering}&ready=${isReadyForSend}&available=${isAvailableGoods}&

    // discounted=${isDiscountPercentage}&city=${checkedCity.toString()}&page_size=50&min_price=
    // ${parseInt(minPrice)}&max_price=${parseInt(
    //   maxPrice
    // )}&shop=${hojreh}&category: ${wantCategories.toString()}`;

    // router.push(url);
    router.push(
      {
        pathname: router.pathname,
        query: {
          search: searchWord,
          ordering: whichOrdering,
          ready: isReadyForSend,
          available: isAvailableGoods,
          discounted: isDiscountPercentage,
          city: checkedCity.toString(),
          page_size: 50,
          min_price: parseInt(minPrice),
          max_price: parseInt(maxPrice),
          shop: hojreh,
          category: wantCategories.toString(),
        },
      },
      undefined,
      { scroll: false }
    );
  }, [
    isAvailableGoods,
    isReadyForSend,
    isDiscountPercentage,
    checkedCity,
    wantCategories,
    whichOrdering,
    clickOnRange,
    categoryIn,
    hojreh,
  ]);

  // for filters in sidebar
  // END

  const handel_filterModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  // function for open OrderingModal in mobile
  const handel_OrderingModal = () => {
    setIsOpenOrderingModal(!isOpenOrderingModal);
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
        <div className="container_N">
          <div className="row sidebar-parent">
            <div className="d-none d-lg-block col-lg-3">
              <div id="sidebar">
                {categories.length > 0 && (
                  <CustomAccordion title="دسته بندی" item="one">
                    {categories.map((ele, index) => (
                      <div
                        key={`one${index}`}
                        style={{ marginBottom: "10px", paddingRight: "10px" }}
                      >
                        <input
                          onChange={(e) => {
                            _handel_Add_category(e.target.value);
                          }}
                          className="form-check-input"
                          type="checkbox"
                          value={ele.id}
                          id={`checkbox${index}`}
                        />
                        <label
                          style={{ marginRight: "5px", fontSize: "15px" }}
                          className="form-check-label"
                          htmlFor={`checkbox${index}`}
                        >
                          {ele.title} ({_asist.number(ele.product_count)})
                        </label>
                      </div>
                    ))}
                  </CustomAccordion>
                )}

                <CustomAccordion title="محدوده قیمت" item="two" close={true}>
                  <div style={{ direction: "ltr", zIndex: "1000" }}>
                    <MultiRangeSlider
                      min={data.min_price ? data.min_price : 0}
                      max={data.max_price ? data.max_price : 10000}
                      onChange={({ min, max }) => {
                        setMinPrice(min);
                        setMaxPrice(max);
                      }}
                    />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <button
                        className="btn btn-dark "
                        onClick={() => setClickOnRange(clickOnRange + 1)}
                      >
                        {" "}
                        اعمال فیلتر
                      </button>
                    </div>
                  </div>
                </CustomAccordion>

                <CustomAccordion
                  title="جستجو بر اساس حجره"
                  item="searchHoj"
                  close={true}
                >
                  <Search onChange={(e) => _handel_search(e.target.value)} />
                  {searchShops.length > 0 && (
                    <div className={styles.numBag}>
                      <span> {_asist.PSeparator(searchShops.length)}</span>
                      حجره
                    </div>
                  )}
                  {searchShops.map((el, index) => (
                    <div
                      key={index}
                      className={styles.itemHojreh}
                      onClick={() => {
                        setHojreh(el.slug);
                        setSearchWord("");
                      }}
                    >
                      {el.title}
                    </div>
                  ))}
                </CustomAccordion>
                {hojreh == "" && (
                  <CustomAccordion
                    title="استان و شهر حجره دار"
                    item="three"
                    close={true}
                  >
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
                )}

                <div className="search-body-filter">
                  <div className="modal-body" style={{ msOverflowX: "hidden" }}>
                    <CustomSwitch
                      defaultChecked={data.available == "true" ? true : false}
                      title="فقط کالاهای موجود"
                      id="Available_goods"
                      onChange={(e) => {
                        setIsAvailableGoods(e.target.checked);
                      }}
                    />
                    <CustomSwitch
                      defaultChecked={data.ready == "true" ? true : false}
                      title="آماده ارسال"
                      id="Ready_to_send"
                      onChange={(e) => {
                        setIsReadyForSend(e.target.checked);
                      }}
                    />
                    <CustomSwitch
                      defaultChecked={data.discounted == "true" ? true : false}
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
              <TopBar
                totalcount={totalcount}
                data={data.ordering}
                whichOrdering={whichOrdering}
                handel_filterModal={handel_filterModal}
                setWhichOrdering={setWhichOrdering}
                handel_OrderingModal={handel_OrderingModal}
              />
              <div className="mx-auto row">
                {isLoading ? (
                  // <Loading />
                  // <BeautyLoading />
                  <WoLoading />
                ) : (
                  // isLoading
                  // <WoLoading />
                  <InfiniteScroll
                    className="mx-auto row"
                    dataLength={listWithFilter.length} //This is important field to render the next data
                    next={_handel_call_another_page_api}
                    hasMore={hasMore}
                    loader={<h4>کمی صبر...</h4>}
                    endMessage={
                      <p style={{ textAlign: "center" }}>
                        <b>به پایان رسیدیم...</b>
                      </p>
                    }
                  >
                    {listWithFilter.map((oneProduct, index) => (
                      <ProductCard
                        key={index}
                        padding={1}
                        product={{
                          id: oneProduct.id,
                          imageUrl: oneProduct.image_thumbnail_url,
                          url: `/product/${oneProduct.slug}/`,
                          title: oneProduct.title,
                          chamberTitle: oneProduct.shop
                            ? oneProduct.shop.title
                            : "",
                          chamberUrl: oneProduct.shop
                            ? `/hojreh?shop=${oneProduct.shop.slug} `
                            : "",

                          discount: oneProduct.discount,
                          price: oneProduct.price / 10,
                          discountNumber: oneProduct.old_price / 10,
                          city: oneProduct.shop && oneProduct.shop.state,
                          is_advertisement: oneProduct.is_advertisement,
                        }}
                      />
                    ))}
                  </InfiniteScroll>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* modalFilter start*/}
        {isOpenModal && (
          <div className="modal_filter_products d-none d-lg-block ">
            <div
              style={{
                position: "fixed",
                top: "10px",
                left: "10px",
                zIndex: "10000",
              }}
            >
              <i
                onClick={handel_filterModal}
                className="far fa-times-circle"
                style={{
                  fontSize: "25px",
                  marginTop: "5px",
                  marginLeft: "10px",
                }}
              ></i>
            </div>
            <div id="sidebar">
              <div className="search-body-filter">
                <div className="modal-body" style={{ msOverflowX: "hidden" }}>
                  <CustomSwitch
                    title="فقط کالاهای موجود"
                    id="Available_goods_mobile"
                    onChange={(e) => {
                      setIsAvailableGoods(e.target.checked);
                    }}
                  />
                  <CustomSwitch
                    title="آماده ارسال"
                    id="Ready_to_send_mobile"
                    onChange={(e) => {
                      setIsReadyForSend(e.target.checked);
                    }}
                  />
                  <CustomSwitch
                    title="تخفیف دارها"
                    id="discounted_mobile"
                    onChange={(e) => {
                      setIsDiscountPercentage(e.target.checked);
                    }}
                  />
                </div>
              </div>
              <CustomAccordion title="محدوده قیمت" item="2mobile">
                <div style={{ direction: "ltr" }}>
                  <MultiRangeSlider
                    min={0}
                    max={10000}
                    onChange={({ min, max }) => {
                      setMinPrice(min * 10000);
                      setMaxPrice(max * 10000);
                    }}
                  />
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                      className="btn btn-dark "
                      onClick={() => setClickOnRange(clickOnRange + 1)}
                    >
                      {" "}
                      اعمال فیلتر
                    </button>
                  </div>
                </div>
              </CustomAccordion>
              {categories.length > 0 && (
                <CustomAccordion title="دسته بندی" item="1mobile">
                  {categories.map((ele, index) => (
                    <div
                      key={`one${index}`}
                      style={{ marginBottom: "10px", paddingRight: "10px" }}
                    >
                      <input
                        onChange={(e) => {
                          _handel_Add_category(e.target.value);
                        }}
                        className="form-check-input"
                        type="checkbox"
                        value={ele.id}
                        id={`checkbox${index}`}
                      />
                      <label
                        style={{ marginRight: "5px", fontSize: "15px" }}
                        className="form-check-label"
                        htmlFor={`checkbox${index}`}
                      >
                        {ele.title} ({_asist.number(ele.product_count)})
                      </label>
                    </div>
                  ))}
                </CustomAccordion>
              )}
              {hojreh == "" && (
                <CustomAccordion title="استان و شهر حجره دار" item="3mobile">
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
              )}
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

        {/* ModalOrdering Strat */}
        {isOpenOrderingModal && (
          <div className="modal_filter_products d-none d-lg-block ">
            <div
              style={{
                position: "fixed",
                top: "10px",
                left: "10px",
                zIndex: "10000",
              }}
            >
              <i
                onClick={handel_OrderingModal}
                className="far fa-times-circle"
                style={{
                  fontSize: "25px",
                  marginTop: "5px",
                  marginLeft: "10px",
                }}
              ></i>
            </div>
            <div id="sidebar">
              <div className="search-body-filter">
                <div className="modal-body" style={{ msOverflowX: "hidden" }}>
                  <div
                    style={{
                      padding: "5px",
                      paddingBottom: "10px",
                      paddingTop: "20px",
                      borderBottom: "1px solid gray",
                    }}
                    onClick={() => {
                      setWhichOrdering("");
                      setIsOpenOrderingModal(false);
                    }}
                  >
                    <span>مرتبط ترین</span>
                  </div>
                  <div
                    style={{
                      padding: "5px",
                      paddingBottom: "10px",
                      paddingTop: "20px",
                      borderBottom: "1px solid gray",
                    }}
                    onClick={() => {
                      setWhichOrdering("Price");
                      setIsOpenOrderingModal(false);
                    }}
                  >
                    <span>ارزانتر</span>
                  </div>
                  <div
                    style={{
                      padding: "5px",
                      paddingBottom: "10px",
                      paddingTop: "20px",
                      borderBottom: "1px solid gray",
                    }}
                    onClick={() => {
                      setWhichOrdering("-Price");
                      setIsOpenOrderingModal(false);
                    }}
                  >
                    <span>گرانتر</span>
                  </div>
                  <div
                    style={{
                      padding: "5px",
                      paddingBottom: "10px",
                      paddingTop: "20px",
                      borderBottom: "1px solid gray",
                    }}
                    onClick={() => {
                      setWhichOrdering("-DiscountPrecentage");
                      setIsOpenOrderingModal(false);
                    }}
                  >
                    <span>بیشترین تخفیف</span>
                  </div>
                  <div
                    style={{
                      padding: "5px",
                      paddingBottom: "10px",
                      paddingTop: "20px",
                      borderBottom: "1px solid gray",
                    }}
                    onClick={() => {
                      setWhichOrdering("-DateCreate");
                      setIsOpenOrderingModal(false);
                    }}
                  >
                    <span>تازه ها</span>
                  </div>
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

        {/* ModalOrdering End */}

        {/* END MODAL */}

        {/* MenuMobile */}
        <MenuMobile />
        {/* MenuMobile */}
      </ContextListProductPage.Provider>
    </>
  );
}

export default ListProductCus;
