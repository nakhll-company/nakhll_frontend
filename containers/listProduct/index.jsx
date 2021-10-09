import React, { useEffect, useState } from "react";
import Head from "next/head";
import ContextListProductPage from "./Context/context";
import CustomAccordion from "../../components/custom/customAccordion";
import CheckboxTree from "react-checkbox-tree";
import { market } from "../../components/custom/data/market";
import MultiRangeSlider from "../../components/custom/customMultiRangeSlider/MultiRangeSlider";
import { allCites } from "../../components/custom/data/data";
import CustomSwitch from "../../components/custom/customSwitch";
import { TopBar } from "./TopBar";
import InfiniteScroll from "react-infinite-scroll-component";
import MenuMobile from "../../components/layout/MenuMobile";
import { ApiRegister } from "../../services/apiRegister/ApiRegister";
import { WoLoading } from "../../components/custom/Loading/woLoading/WoLoading";
import ProductCard from "../../components/ProductCart/ProductCard";

import Assistent from "zaravand-assistent-number";
const _asist = new Assistent();
function ListProduct({
  dataFirst,
  searchWord = "",
  shop_products = "",
  categoryIn = "",
}) {
  const [listProducts, setlistProducts] = useState([]);
  const [listWithFilter, setListWithFilter] = useState([]);
  // state for  show Ordering Modal in mobile
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenOrderingModal, setIsOpenOrderingModal] = useState(false);
  const [totalcount, setTotalcount] = useState("");
  // state for show loading
  const [isLoading, setIsLoading] = useState(false);
  // state for ordering
  const [whichOrdering, setWhichOrdering] = useState("");

  // state for on filter
  const [isDiscountPercentage, setIsDiscountPercentage] = useState(false);
  const [isReadyForSend, setIsReadyForSend] = useState(false);
  const [isAvailableGoods, setIsAvailableGoods] = useState(false);

  // Array for cateGory
  const [categories, setCategories] = useState([]);
  const [wantCategories, setWantCategories] = useState([]);

  const [checkedCity, setCheckedCity] = useState([]);
  const [expandCity, setExpandCity] = useState([]);

  // state for handel pagination in api
  const [pageApi, setPageApi] = useState(2);
  const [hasMore, setHasMore] = useState(false);

  // stat for Range
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [clickOnRange, setClickOnRange] = useState(1);

  useEffect(() => {
    console.log("wantCategories :>> ", wantCategories);
  }, [wantCategories]);

  // [
  //   {
  //     title: "عسل ارده و  شيره های گياهی",
  //     url: "/markets/submarkets/rsth-aasl-rdh-o-h-shyrh-yh/",
  //     id: "206b4dee-3b4c-41c5-a20a-ab3689f0096c",
  //     product_count: 26,
  //   },
  //   {
  //     title: "خواروبار",
  //     url: "/markets/submarkets/khorobr/",
  //     id: "b103e502-fd6d-4e92-a1e2-6c6eb4d390c6",
  //     product_count: 10,
  //   },
  //   {
  //     title: "لوازم آرایشی",
  //     url: "/markets/submarkets/lozm-rsh/",
  //     id: "4d4abca7-974c-4ac3-91f4-adfe2e0fd9a6",
  //     product_count: 3,
  //   },
  //   {
  //     title: "کتاب و مجله",
  //     url: "/markets/submarkets/tb-o-mglh/",
  //     id: "cf888a4c-a148-49f4-a43d-0873ecd8188c",
  //     product_count: 2,
  //   },
  //   {
  //     title: "تنقلات",
  //     url: "/markets/submarkets/tnklt/",
  //     id: "96a86f48-2faa-44d8-a759-15353a54e585",
  //     product_count: 2,
  //   },
  //   {
  //     title: "خشکبار",
  //     url: "/markets/submarkets/khshbr/",
  //     id: "5d8c6ddd-2077-4d5b-8287-41e1e97b1f42",
  //     product_count: 2,
  //   },
  //   {
  //     title: "زیور سازان",
  //     url: "/markets/submarkets/zor-szn/",
  //     id: "fb1d0dc0-5265-471a-9a26-34f7da2a3336",
  //     product_count: 1,
  //   },
  //   {
  //     title: "بافندگان",
  //     url: "/markets/submarkets/bfndn/",
  //     id: "5f239daf-9984-477a-aacd-fc3a2f8b76cb",
  //     product_count: 1,
  //   },
  //   {
  //     title: "تزئینات منزل",
  //     url: "/markets/submarkets/sbb-khodmn/",
  //     id: "a2960d7f-c8b2-4f41-ae58-e72b186640b5",
  //     product_count: 1,
  //   },
  //   {
  //     title: "گیاهان دارویی",
  //     url: "/markets/submarkets/hn-dro/",
  //     id: "e82717ef-aff5-47b3-9e88-97bd764b6f8b",
  //     product_count: 1,
  //   },
  // ]
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
      min_price: minPrice,
      max_price: maxPrice,
      shop: shop_products,
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
          min_price: minPrice,
          max_price: maxPrice,
          shop: shop_products,
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

  // START
  // for filters in sidebar

  useEffect(async () => {
    _handel_filters();
  }, [
    isAvailableGoods,
    isReadyForSend,
    isDiscountPercentage,
    checkedCity,
    wantCategories,
    whichOrdering,
    clickOnRange,
  ]);
  useEffect(() => {
    _handel_filters();
    _handel_category();
  }, []);

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
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstramp@5.0.2/dist/css/bootstrap.min.css"
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
        <div className="container_N">
          <div className="row sidebar-parent">
            <div className="d-none d-lg-block col-lg-3">
              <div id="sidebar">
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
                <CustomAccordion title="محدوده قیمت" item="two" close={true}>
                  <div style={{ direction: "ltr", zIndex: "1000" }}>
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

                <div className="search-body-filter">
                  <div className="modal-body" style={{ msOverflowX: "hidden" }}>
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
              <TopBar
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
                          url: `/productDetail/${oneProduct.slug}/`,
                          title: oneProduct.title,
                          chamberTitle:
                            oneProduct.shop && oneProduct.shop.title,
                          chamberUrl: `/hojreh/${oneProduct.shop.slug} `,
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
                      setWhichOrdering("DiscountPrecentage");
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
                  {/* <ul>
                      <li className={`sort-item   `}>
                        <a
                          id={"1"}
                          onClick={() => {
                            setWhichOrdering("");
                            setWitchItem("1");
                          }}
                        >
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
                            setWhichOrdering("Price");
  
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
                            setWhichOrdering("-Price");
  
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
                            setWhichOrdering("DiscountPrecentage");
                            setWitchItem("4");
                          }}
                        >
                          بیشترین تخفیف
                        </a>
                      </li>
                      <li
                        className={`sort-item  ${
                          "5" === witchItem ? " active" : ""
                        } `}
                      >
                        <a
                          onClick={() => {
                            setWhichOrdering("-DateCreate");
                            setWitchItem("5");
                          }}
                        >
                          تازه‌ها
                        </a>
                      </li>
                    </ul> */}
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

export default ListProduct;
