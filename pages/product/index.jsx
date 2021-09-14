import React, { useEffect, useState } from "react";
import Head from "next/head";
import ProductCard from "../../components/ProductCart/ProductCard";
import styles from "../../styles/pages/testProduct/product.module.scss";
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

const product = () => {
  const wordSearch = "ل";

  const [listProducts, setlistProducts] = useState([]);
  const [listWithFilter, setListWithFilter] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [totalcount, setTotalcount] = useState("");
  // state for show loading
  const [isLoading, setIsLoading] = useState(true);
  // state for ordering
  const [whichOrdering, setWhichOrdering] = useState("");

  // state for on filter
  const [isDiscountPercentage, setIsDiscountPercentage] = useState(false);
  const [isReadyForSend, setIsReadyForSend] = useState(false);
  const [isAvailableGoods, setIsAvailableGoods] = useState(false);

  // state for save all of filters
  const [listActiveFilters, setListActiveFilters] = useState({});

  // for checkbox tree
  const [checkedCategory, setCheckedCategory] = useState([]);
  const [expandCategory, setExpandCategory] = useState([]);

  const [checkedCity, setCheckedCity] = useState([]);
  const [expandCity, setExpandCity] = useState([]);

  // state for handel pagination in api
  const [pageApi, setPageApi] = useState(2);
  const [hasMore, setHasMore] = useState(true);

  // stat for Range
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const _handel_filters = async (witchFilter) => {
    setHasMore(true);
    setIsLoading(true);
    try {
      let response = await ApiRegister().apiRequest(
        null,
        "get",
        `/api/v1/products/`,
        true,
        {
          ...(witchFilter ? witchFilter : null),
          search: wordSearch,
          ordering: whichOrdering,
          ready: isReadyForSend,
          available: isAvailableGoods,
          discounted: isDiscountPercentage,
          city: checkedCity.toString(),
          category: checkedCategory.toString(),
          page_size: 50,
        }
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
    } catch (e) {}
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
          search: wordSearch,
          ordering: whichOrdering,
          page: pageApi,
          ready: isReadyForSend,
          available: isAvailableGoods,
          discounted: isDiscountPercentage,
          city: checkedCity.toString(),
          category: checkedCategory.toString(),
          page_size: 50,
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

  useEffect(async () => {
    _handel_filters();
  }, []);

  // START
  // for filters in sidebar

  useEffect(async () => {
    _handel_filters();
    console.log("checkedCity :>> ", checkedCity.toString());
  }, [
    isAvailableGoods,
    isReadyForSend,
    isDiscountPercentage,
    checkedCity,
    checkedCategory,
    whichOrdering,
  ]);

  // for filters in sidebar
  // END

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
        <div className="container_N">
          <div className="row sidebar-parent">
            <div className="d-none d-lg-block col-lg-3">
              <div id="sidebar">
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
                <CustomAccordion title="دسته بندی" item="1">
                  <CheckboxTree
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
                    checked={checkedCategory}
                    expanded={expandCategory}
                    onCheck={(e) => setCheckedCategory(e)}
                    onExpand={(e) => setExpandCategory(e)}
                  />
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
              </div>
            </div>{" "}
            <div className="col-12 col-lg-9">
              <TopBar
                handel_filterModal={handel_filterModal}
                setWhichOrdering={setWhichOrdering}
              />
              <div className="mx-auto row">
                {isLoading ? (
                  // <Loading />
                  // isLoading
                  <WoLoading />
                ) : (
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
                          imageUrl: oneProduct.image_thumbnail_url,
                          url: oneProduct.image_thumbnail_url,
                          title: oneProduct.title,
                          chamberTitle:
                            oneProduct.shop && oneProduct.shop.title,
                          // chamberUrl: oneProduct.page_url,
                          discount: oneProduct.discount,
                          price: oneProduct.price / 10,
                          discountNumber: oneProduct.old_price / 10,
                          city: oneProduct.shop && oneProduct.shop.state,
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
              <CustomAccordion title="دسته بندی" item="1mobile">
                <CheckboxTree
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
                  checked={checkedCategory}
                  expanded={expandCategory}
                  onCheck={(e) => setCheckedCategory(e)}
                  onExpand={(e) => setExpandCategory(e)}
                />
              </CustomAccordion>

              <CustomAccordion title="استان و شهر غرفه دار" item="3mobile">
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

        {/* END MODAL */}

        {/* MenuMobile */}
        <MenuMobile />
        {/* MenuMobile */}
      </ContextListProductPage.Provider>
    </>
  );
};

export default product;
