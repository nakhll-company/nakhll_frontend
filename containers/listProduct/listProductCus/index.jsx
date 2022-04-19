// node libraries
import router from "next/router";
import CheckboxTree from "react-checkbox-tree";
import Assistent from "zaravand-assistent-number";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import _ from "lodash";
// components
import { TopBar } from "../TopBar";
import { allCites } from "../../../utils/allCities";
import Search from "../../../components/search/Search";
import AddFavorites from "../../../components/AddFavorites";
import CustomSwitch from "../../../components/custom/customSwitch";
import ProductCard from "../../../components/ProductCart/ProductCard";
import CustomAccordion from "../../../components/custom/customAccordion";
import { WoLoading } from "../../../components/custom/Loading/woLoading/WoLoading";
import MultiRangeSlider from "../../../components/custom/customMultiRangeSlider/MultiRangeSlider";
// methods
import { ApiReference } from "../../../api/Api";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
// styles
import styles from "./listProductCus.module.scss";
import OrderingModalMobile from "./components/OrderingModalMobile";
import SearchProduct from "./components/searchProduct";
import { useSelector } from "react-redux";
import Grouping from "../../searchPage/Grouping";
import { http } from "../../../services/callApi/api";

const _asist = new Assistent();

function ListProductCus({ data }) {
  const [pageApi, setPageApi] = useState(2);
  const [hasMore, setHasMore] = useState(false);
  const [shopsName, setShopsName] = useState([]);
  const [NameHojreh, setNameHojreh] = useState("");
  const [totalcount, setTotalcount] = useState("");
  const [expandCity, setExpandCity] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchShops, setSearchShops] = useState([]);
  const [clickOnRange, setClickOnRange] = useState(1);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [listWithFilter, setListWithFilter] = useState([]);
  const userData = useSelector((state) => state.User.userInfo);
  const [hojreh, setHojreh] = useState(data.shop ? data.shop : "");
  const [searchWord, setSearchWord] = useState(data.q ? data.q : "");
  const [isOpenOrderingModal, setIsOpenOrderingModal] = useState(false);
  // states for shops
  const [shopesTag, setShopesTag] = useState(userData ? userData.shops : []);
  const [tags, setTags] = useState([]);
  const [activeHojreh, setActiveHojreh] = useState();
  const [whichOrdering, setWhichOrdering] = useState(
    data.ordering ? data.ordering : ""
  );

  const [wantTags, setWantTags] = useState([
    ...(data.tags ? data.tags.split(",").map((el) => parseInt(el)) : []),
  ]);

  const [minPrice, setMinPrice] = useState(
    data.min_price ? parseInt(data.min_price) : 0
  );
  const [isReadyForSend, setIsReadyForSend] = useState(
    data.ready == "true" ? true : false
  );
  const [maxPrice, setMaxPrice] = useState(
    data.max_price ? parseInt(data.max_price) : 10000
  );
  const [isAvailableGoods, setIsAvailableGoods] = useState(
    data.available == "true" ? true : false
  );
  const [isDiscountPercentage, setIsDiscountPercentage] = useState(
    data.discounted == "true" ? true : false
  );
  const [checkedCity, setCheckedCity] = useState([
    ...(data.city ? data.city.split(",").map((el) => parseInt(el)) : []),
  ]);
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

  const call_tags = async (activeHojreh) => {
    try {
      let dataUrl = `/api/v1/shop/${activeHojreh}/tags/`;

      let response = await http.get(dataUrl);
      if (response.status < 300) {
        setTags(response.data);
      }
    } catch (e) {
      return false;
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

  const _handel_Add_tags = (id) => {
    let copyArray = [...wantTags];

    let newArray = copyArray.filter((element) => element != id);

    if (copyArray.length == newArray.length) {
      setWantTags([...newArray, id]);
      setSearchWord("");
    } else {
      setWantTags(newArray);
      setSearchWord("");
    }
  };

  const _handel_call_another_page_api = async (witchFilter) => {
    try {
      let response = await ApiRegister().apiRequest(
        null,
        "get",
        `/api/v1/products/`,
        false,
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
            category: wantCategories.toString(),
          }),
          ...(wantTags.length > 0 && {
            tags: wantTags.toString(),
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
    } catch (e) {
      return false;
    }
  };
  // Get all shops
  const _get_all_shops = async () => {
    if (shopsName.length == 0) {
      let shops = await http.get(ApiReference.allShops);

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
  useEffect(() => {
    setSearchWord(data.q);
  }, [data.q]);

  // data,
  //   changePage,
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
          ...(wantTags.length > 0 && {
            tags: wantTags.toString(),
          }),
        },
      },
      undefined,
      { scroll: false }
    );
    async function fetchData() {
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
            category: wantCategories.toString(),
          }),
          ...(wantTags.length > 0 && {
            tags: wantTags.toString(),
          }),

          page_size: 50,
          ...(minPrice !== 0 && { min_price: parseInt(minPrice) }),
          ...(maxPrice !== 10000 && { max_price: parseInt(maxPrice) }),
          ...(hojreh !== "" && { shop: hojreh }),
        };

        try {
          let response = await http.get(`/api/v1/products/`, params);
          if (response.status === 200) {
            setListWithFilter(response.data.results);
            setNameHojreh(response.data.results[0].FK_Shop.title);

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
      await _handel_filters();
    }
    fetchData();
  }, [
    isAvailableGoods,
    isReadyForSend,
    isDiscountPercentage,
    checkedCity,
    wantCategories,
    wantTags,
    whichOrdering,
    clickOnRange,

    hojreh,
    searchWord,
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

  useEffect(() => {
    if (activeHojreh) {
      call_tags(activeHojreh);
    }
  }, [activeHojreh]);

  return (
    <>
      <div className={styles.container_N}>
        <div className="row ">
          <div className="d-none d-lg-block col-lg-3">
            <div id="sidebar">
              <Grouping
                searchWord={searchWord}
                setCategories={setCategories}
                categories={categories}
                _handel_Add_category={_handel_Add_category}
              />

              <CustomAccordion title="محدوده قیمت" item="two" close={true}>
                <div style={{ direction: "ltr", zIndex: "1000" }}>
                  <MultiRangeSlider
                    min={0}
                    max={data.max_price <= 10000 ? data.max_price : 10000}
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
              {shopesTag?.length > 0 && (
                <CustomAccordion title="تگ ها" item="four" close={true}>
                  <div className={styles.info_cardH}>
                    <label htmlFor="select-shop" style={{ fontSize: "15px" }}>
                      {" "}
                      حجره های شما:
                      {"     "}‌
                    </label>
                    <select
                      id="select-shop"
                      onChange={(a) => {
                        setActiveHojreh(a.target.value);
                      }}
                    >
                      <option value="0">انتخاب نمایید</option>
                      {shopesTag &&
                        shopesTag.map((e) => {
                          return (
                            <option key={e.id} value={e.slug}>
                              {e.title}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  {tags.map((ele, index) => (
                    <div
                      key={`tages${index}`}
                      style={{ marginBottom: "10px", paddingRight: "10px" }}
                    >
                      <input
                        onChange={(e) => {
                          _handel_Add_tags(e.target.value);
                        }}
                        className="form-check-input"
                        type="checkbox"
                        value={ele.id}
                        id={`checkboxTags${index}`}
                      />
                      <label
                        style={{ marginRight: "5px", fontSize: "15px" }}
                        className="form-check-label"
                        htmlFor={`checkboxTags${index}`}
                      >
                        {ele.text}
                      </label>
                    </div>
                  ))}
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
            {/* inja */}
            <div>
              {hojreh !== "" && (
                <SearchProduct
                  setSearchWord={setSearchWord}
                  searchWord={searchWord}
                  NameHojreh={NameHojreh}
                  hojreh={hojreh}
                />
              )}
            </div>
            <div className="mx-auto row">
              {isLoading ? (
                <WoLoading />
              ) : listWithFilter.length == 0 ? (
                <span className="h5">محصولی یافت نشد...</span>
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
                  defaultChecked={data.available == "true" ? true : false}
                  title="فقط کالاهای موجود"
                  id="Available_goods_mobile"
                  onChange={(e) => {
                    setIsAvailableGoods(e.target.checked);
                  }}
                />

                <CustomSwitch
                  defaultChecked={data.ready == "true" ? true : false}
                  title="آماده ارسال"
                  id="Ready_to_send_mobile"
                  onChange={(e) => {
                    setIsReadyForSend(e.target.checked);
                  }}
                />
                <CustomSwitch
                  defaultChecked={data.discounted == "true" ? true : false}
                  title="تخفیف دارها"
                  id="discounted_mobile"
                  onChange={(e) => {
                    setIsDiscountPercentage(e.target.checked);
                  }}
                />
              </div>
            </div>
            <CustomAccordion title="جست و جو براساس حجره" item="searchShop">
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
              <Grouping
                item="1mobile"
                searchWord={searchWord}
                setCategories={setCategories}
                categories={categories}
                _handel_Add_category={_handel_Add_category}
              />
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
      {!_.isEmpty(userData) && <AddFavorites />}
    </>
  );
}

export default ListProductCus;
