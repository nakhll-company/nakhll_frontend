// node libraries
import CheckboxTree from "react-checkbox-tree";
import Assistent from "zaravand-assistent-number";
import React, { useEffect, useState } from "react";
// components
import { TopBar } from "./TopBar";
import ContextListProductPage from "./Context/context";
import MenuMobile from "../../components/layout/MenuMobile";
import InfiniteScroll from "react-infinite-scroll-component";
import CustomSwitch from "../../components/custom/customSwitch";
import ProductCard from "../../components/ProductCart/ProductCard";
import CustomAccordion from "../../components/custom/customAccordion";
import MultiRangeSlider from "../../components/custom/customMultiRangeSlider/MultiRangeSlider";
// methods
import { allCites } from "../../utils/allCities";
import { WoLoading } from "../../components/custom/Loading/woLoading/WoLoading";
// style
import styles from "./listProduct.module.scss";
import { http } from "../../services/callApi/api";

const _asist = new Assistent();

function ListProduct({ searchWord = "", shop_products = "", categoryIn = "" }) {
  const listProducts = [];
  const [pageApi, setPageApi] = useState(2);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [hasMore, setHasMore] = useState(false);
  const [totalcount, setTotalcount] = useState("");
  const [categories, setCategories] = useState([]);
  const [expandCity, setExpandCity] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [checkedCity, setCheckedCity] = useState([]);
  const [clickOnRange, setClickOnRange] = useState(1);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [whichOrdering, setWhichOrdering] = useState("");
  const [listWithFilter, setListWithFilter] = useState([]);
  const [wantCategories, setWantCategories] = useState([]);
  const [isReadyForSend, setIsReadyForSend] = useState(false);
  const [isAvailableGoods, setIsAvailableGoods] = useState(false);
  const [isOpenOrderingModal, setIsOpenOrderingModal] = useState(false);
  const [isDiscountPercentage, setIsDiscountPercentage] = useState(false);

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
      let response = await http.get(`/api/v1/products/`, params);
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

  const _handel_Add_category = (id) => {
    let copyArray = [...wantCategories];
    let newArray = copyArray.filter((element) => element != id);
    if (copyArray.length == newArray.length) {
      setWantCategories([...newArray, id]);
    } else {
      setWantCategories(newArray);
    }
  };

  const _handel_call_another_page_api = async (witchFilter) => {
    try {
      let response = await http.get(`/api/v1/products/`, {
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
      });
      if (response.status === 200) {
        const ContinueList = response.data.results;
        setListWithFilter([...listWithFilter, ...ContinueList]);
        if (ContinueList.length === 0 || ContinueList.length < 50) {
          setHasMore(false);
        }
        setPageApi(pageApi + 1);
      }
    } catch (e) {
      return false;
    }
  };

  // for filters in sidebar
  useEffect(() => {
    async function fetchData() {
      const _handel_category = async () => {
        try {
          let response = await http.get(`/api/v1/sub_markets/?q=${searchWord}`);
          if (response.status === 200) {
            setCategories(response.data);
          }
        } catch (e) {
          return false;
        }
      };
      await _handel_filters();
      await _handel_category();
    }
    fetchData();
  }, [
    _handel_filters,
    maxPrice,
    minPrice,
    shop_products,
    searchWord,
    isAvailableGoods,
    isReadyForSend,
    isDiscountPercentage,
    checkedCity,
    wantCategories,
    whichOrdering,
    clickOnRange,
    categoryIn,
  ]);

  // for filters in sidebar
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
        <div className={styles.container_N}>
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
                {shop_products == "" && (
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

                <div className={styles.search_body_filter}>
                  <div
                    className={styles.modal_body}
                    style={{ msOverflowX: "hidden" }}
                  >
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
                        dataProduct={oneProduct}
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
          <div className={`${styles.modal_filter_products} d-none d-lg-block`}>
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
              <div className={styles.search_body_filter}>
                <div
                  className={styles.modal_body}
                  style={{ msOverflowX: "hidden" }}
                >
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
              {shop_products == "" && (
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
          <div className={`${styles.modal_filter_products} d-none d-lg-block `}>
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
              <div className={styles.search_body_filter}>
                <div
                  className={styles.modal_body}
                  style={{ msOverflowX: "hidden" }}
                >
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

export default ListProduct;
