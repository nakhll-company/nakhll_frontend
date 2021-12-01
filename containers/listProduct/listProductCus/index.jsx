// node libraries
import router from "next/router";
import CheckboxTree from "react-checkbox-tree";
import Assistent from "zaravand-assistent-number";
import React, { useEffect, useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
// components
import { TopBar } from "../TopBar";
import { errorMessage } from "../../utils/message";
import Search from "../../../components/search/Search";
import AddFavorites from "../../../components/AddFavorites";
import MenuMobile from "../../../components/layout/MenuMobile";
import { allCites } from "../../../components/custom/data/data";
import CustomSwitch from "../../../components/custom/customSwitch";
import ProductCard from "../../../components/ProductCart/ProductCard";
import CustomAccordion from "../../../components/custom/customAccordion";
import { WoLoading } from "../../../components/custom/Loading/woLoading/WoLoading";
import MultiRangeSlider from "../../../components/custom/customMultiRangeSlider/MultiRangeSlider";

// methods
import { ApiReference } from "../../../Api";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
// styles
import styles from "./listProductCus.module.scss";
import OrderingModalMobile from "./components/OrderingModalMobile";
const _asist = new Assistent();

function ListProductCus({ data }) {
  const [hojreh, setHojreh] = useState(data.shop ? data.shop : "");
  const [searchWord, setSearchWord] = useState(data.q ? data.q : "");
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
  // category

  // Array for cateGory
  const [categories, setCategories] = useState([
    ...(data.category
      ? data.category.split(",").map((el) => parseInt(el))
      : []),
  ]);
  const [wantCategories, setWantCategories] = useState([
    ...(data.category
      ? data.category.split(",").map((el) => parseInt(el))
      : []),
  ]);

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
    console.log(`categories`, categories);

    try {
      let response = await ApiRegister().apiRequest(
        null,
        "get",
        `/api/v1/categories/category_product_count/?q=${searchWord}`,
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
      ...(whichOrdering !== "" && { ordering: whichOrdering }),
      ...(isReadyForSend && { ready: isReadyForSend }),
      ...(isAvailableGoods && { available: isAvailableGoods }),
      ...(isDiscountPercentage && { discounted: isDiscountPercentage }),

      ...(checkedCity.length !== 0 && { city: checkedCity.toString() }),

      ...(wantCategories.length > 0 && {
        new_category: wantCategories.toString(),
      }),

      page_size: 50,
      ...(minPrice !== 0 && { min_price: parseInt(minPrice) }),
      ...(maxPrice !== 10000 && { max_price: parseInt(maxPrice) }),
      ...(hojreh !== "" && { shop: hojreh }),
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
        console.log(`response.data`, response.data);

        if (
          response.data.results.length === 0 ||
          response.data.results.length < 50
        ) {
          setHasMore(false);
        }

        setTotalcount(response.data.total_count);

        setIsLoading(false);
      } else {
        errorMessage("خطایی رخ داده است");
      }
    } catch (e) {
      setIsLoading(false);
      errorMessage("خطایی رخ داده است");
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
          ...(whichOrdering !== "" && { ordering: whichOrdering }),
          page: pageApi,
          ...(isReadyForSend && { ready: isReadyForSend }),
          ...(isAvailableGoods && { available: isAvailableGoods }),
          ...(isDiscountPercentage && { discounted: isDiscountPercentage }),
          ...(checkedCity.length !== 0 && { city: checkedCity.toString() }),
          ...(wantCategories.length > 0 && {
            new_category: wantCategories.toString(),
          }),
          page_size: 50,
          ...(minPrice !== 0 && { min_price: parseInt(minPrice) }),
          ...(maxPrice !== 10000 && { max_price: parseInt(maxPrice) }),
          ...(hojreh !== "" && { shop: hojreh }),
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
    if (shopsName.length == 0) {
      let shops = await ApiRegister().apiRequest(
        null,
        "GET",
        ApiReference.allShops,
        true,
        ""
      );

      if (shops.status === 200) {
        setShopsName(shops.data);
      }
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
  };

  // START
  // for filters in sidebar
  useEffect(async () => {
    await _handel_filters();
  }, [
    isAvailableGoods,
    isReadyForSend,
    isDiscountPercentage,
    checkedCity,
    wantCategories,
    whichOrdering,
    clickOnRange,
    changePage,
    hojreh,
  ]);
  // useEffect(async () => {
  //   await _handel_category();
  // }, []);

  useEffect(() => {
    router.push(
      {
        pathname: router.pathname,
        query: {
          q: searchWord,
          ...(whichOrdering !== "" && { ordering: whichOrdering }),
          ...(isReadyForSend && { ready: isReadyForSend }),
          ...(isAvailableGoods && { available: isAvailableGoods }),
          ...(isDiscountPercentage && { discounted: isDiscountPercentage }),
          ...(checkedCity.length !== 0 && { city: checkedCity.toString() }),
          ...(minPrice !== 0 && { min_price: parseInt(minPrice) }),
          ...(maxPrice !== 10000 && { max_price: parseInt(maxPrice) }),
          ...(hojreh !== "" && { shop: hojreh }),
          ...(wantCategories.length !== 0 && {
            category: wantCategories.toString(),
          }),
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
      <div className={styles.container_N}>
        <div className="row ">
          <div className="d-none d-lg-block col-lg-3">
            <div id="sidebar">
              <CustomAccordion
                title="دسته بندی"
                item="one"
                callApi={() => _handel_category()}
              >
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
                      style={{
                        marginRight: "5px",
                        fontSize: "15px",
                        cursor: "pointer",
                      }}
                      className="form-check-label"
                      htmlFor={`checkbox${index}`}
                    >
                      {ele.name} ({_asist.number(ele.product_count)})
                    </label>
                  </div>
                ))}
              </CustomAccordion>

              <CustomAccordion title="محدوده قیمت" item="two" close={true}>
                <div style={{ direction: "ltr", zIndex: "1000" }}>
                  <MultiRangeSlider
                    min={0}
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
                <Search
                  onClick={_get_all_shops}
                  onChange={(e) => _handel_search(e.target.value)}
                />
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

              <div className={styles.search_body_filter}>
                <div
                  className={styles.modal_body}
                  style={{ msOverflowX: "hidden" }}
                >
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
                        id: oneProduct.ID,
                        imageUrl: oneProduct.Image_medium_url,
                        url: `/shop/${oneProduct.FK_Shop.slug}/product/${oneProduct.Slug}/`,
                        title: oneProduct.Title,
                        chamberTitle: oneProduct.FK_Shop
                          ? oneProduct.FK_Shop.title
                          : "",
                        chamberUrl: oneProduct.FK_Shop
                          ? `/shop/${oneProduct.FK_Shop.slug} `
                          : "",

                        discount: oneProduct.discount,
                        price: oneProduct.Price / 10,
                        discountNumber: oneProduct.OldPrice / 10,
                        city: oneProduct.FK_Shop && oneProduct.FK_Shop.state,
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
                      {ele.name} ({_asist.number(ele.product_count)})
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
        <OrderingModalMobile
          handel_OrderingModal={handel_OrderingModal}
          handel_filterModal={handel_filterModal}
          setWhichOrdering={setWhichOrdering}
          setIsOpenOrderingModal={setIsOpenOrderingModal}
        />
      )}
      <AddFavorites />

      {/* ModalOrdering End */}

      {/* END MODAL */}

      {/* MenuMobile */}
      <MenuMobile />
      {/* MenuMobile */}
    </>
  );
}

export default ListProductCus;
