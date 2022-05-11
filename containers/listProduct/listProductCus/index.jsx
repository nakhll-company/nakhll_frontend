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
// methods
import { ApiReference } from "../../../api/Api";
// styles
import styles from "./listProductCus.module.scss";
import OrderingModalMobile from "./components/OrderingModalMobile";
import SearchProduct from "./components/searchProduct";
import { useSelector } from "react-redux";
import Grouping from "../../searchPage/Grouping";
import { http } from "../../../services/callApi/api";

import FilterPrice from "./components/filterPrice";
import { ParsUrlToArr } from "../../../utils/general";
import FiltersPart from "../../searchPage/filtersPart";

const _asist = new Assistent();

function ListProductCus({ data }) {
  console.log("data :>> ", data);
  const [pageApi, setPageApi] = useState(2);
  const [hasMore, setHasMore] = useState(false);
  const [shopsName, setShopsName] = useState([]);
  const [NameHojreh, setNameHojreh] = useState("");
  const [totalcount, setTotalcount] = useState("");
  const [expandCity, setExpandCity] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchShops, setSearchShops] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [listWithFilter, setListWithFilter] = useState([]);
  const userData = useSelector((state) => state.User.userInfo);
  const [hojreh, setHojreh] = useState(data.shop ? data.shop : "");
  const [isOpenOrderingModal, setIsOpenOrderingModal] = useState(false);
  const [ragnePrice, setRagnePrice] = useState({});
  // states for shops
  const [shopesTag, setShopesTag] = useState(userData ? userData.shops : []);
  const [tags, setTags] = useState([]);
  const [activeHojreh, setActiveHojreh] = useState();

  const [wantTags, setWantTags] = useState([
    ...(data.tags ? ParsUrlToArr(data.tags) : []),
  ]);

  const [categories, setCategories] = useState([
    ...(data.category ? ParsUrlToArr(data.category) : []),
  ]);

  const onChangeFilter = (name, value, alone = false) => {
    if (alone) {
      let filter = [];
      filter[name] = value;
      router.push(
        {
          pathname: router.pathname,
          query: filter,
        },
        undefined,
        {}
      );
      return;
    }
    let filters = data;
    if(value=='' || !value){
      delete filters[name]
    }else{

      filters[name] = value;
    }
    router.push(
      {
        pathname: router.pathname,
        query: filters,
      },
      undefined,
      {}
    );
  };

  const removeFilter = (name) => {
    let filters = data;
    delete filters[name];
    router.push(
      {
        pathname: router.pathname,
        query: filters,
      },
      undefined,
      {}
    );
  };

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
    let copyArray = [...(data.category ? ParsUrlToArr(data.category) : [])];

    let newArray = copyArray.filter((element) => element != id);

    if (copyArray.length == newArray.length) {
      onChangeFilter("category", [...newArray, id].toString());
    } else {
      onChangeFilter("category", newArray.toString());
    }
  };

  const _handel_Add_tags = (id) => {
    let copyArray = [...wantTags];

    let newArray = copyArray.filter((element) => element != id);

    if (copyArray.length == newArray.length) {
      setWantTags([...newArray, id]);
    } else {
      setWantTags(newArray);
    }
  };

  const _handel_call_another_page_api = async () => {
    try {
      let response = await http.get(`/api/v1/products/`, {
        params: { ...data, page: pageApi, page_size: 50 },
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
    async function fetchData() {
      const _handel_filters = async () => {
        setHasMore(true);
        setIsLoading(true);
        try {
          let response = await http.get(`/api/v1/products/`, {
            params: { ...data, page_size: 50 },
          });

          if (response.status === 200) {
            setListWithFilter(response.data.results);
            setRagnePrice({
              max_price: response?.data?.max_price,
              min_price: response?.data?.min_price,
            });
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
  }, [data, hojreh]);

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
        <div style={{justifyContent:'center'}} className="row ">
          <div className="d-none d-lg-block col-lg-3">
            <div id="sidebar">
              <FiltersPart filters={data} removeFilter={removeFilter} />
              <Grouping
                searchWord={data.q}
                setCategories={setCategories}
                categories={categories}
                _handel_Add_category={_handel_Add_category}
              />

              <CustomAccordion title="محدوده قیمت" item="two" close={true}>
                <div style={{ direction: "ltr", zIndex: "1000" }}>
                  <FilterPrice
                    ragnePrice={ragnePrice}
                    onChangeFilter={onChangeFilter}
                  />
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
                      onChangeFilter("shop", el.slug, true);
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
                    checked={data.city ? ParsUrlToArr(data.city) : []}
                    expanded={expandCity}
                    onCheck={(e) => {
                      onChangeFilter("city", e.toString());
                    }}
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
                      onChangeFilter("available", e.target.checked);
                    }}
                  />
                  <CustomSwitch
                    defaultChecked={data.ready == "true" ? true : false}
                    title="آماده ارسال"
                    id="Ready_to_send"
                    onChange={(e) => {
                      onChangeFilter("ready", e.target.checked);
                    }}
                  />
                  <CustomSwitch
                    defaultChecked={data.discounted == "true" ? true : false}
                    title="تخفیف دارها"
                    id="discounted"
                    onChange={(e) => {
                      onChangeFilter("discounted", e.target.checked);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>{" "}
          <div style={{ position: "relative" }} className="col-12 col-lg-9">
            <div style={{ position: "sticky", top: "0", zIndex: "2" }}>
              <TopBar
                onChangeFilter={onChangeFilter}
                totalcount={totalcount}
                data={data.ordering}
                handel_filterModal={handel_filterModal}
                handel_OrderingModal={handel_OrderingModal}
              />
            </div>
            {/* inja */}
            <div>
              {data.shop && (
                <SearchProduct
                  onChangeFilter={onChangeFilter}
                  searchWord={data.q}
                  NameHojreh={NameHojreh}
                />
              )}
            </div>
            <div style={{justifyContent:'center'}} className="mx-auto row">
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
                    onChangeFilter("available", e.target.checked);
                  }}
                />

                <CustomSwitch
                  defaultChecked={data.ready == "true" ? true : false}
                  title="آماده ارسال"
                  id="Ready_to_send_mobile"
                  onChange={(e) => {
                    onChangeFilter("ready", e.target.checked);
                  }}
                />
                <CustomSwitch
                  defaultChecked={data.discounted == "true" ? true : false}
                  title="تخفیف دارها"
                  id="discounted_mobile"
                  onChange={(e) => {
                    onChangeFilter("discounted", e.target.checked);
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
                    onChangeFilter("shop", el.slug, true);
                  }}
                >
                  {el.title}
                </div>
              ))}
            </CustomAccordion>
            <CustomAccordion title="محدوده قیمت" item="2mobile">
              <div style={{ direction: "ltr" }}>
                <FilterPrice
                  ragnePrice={ragnePrice}
                  onChangeFilter={onChangeFilter}
                />
              </div>
            </CustomAccordion>
            {categories.length > 0 && (
              <Grouping
                item="1mobile"
                searchWord={data.q}
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
                  checked={data.city ? ParsUrlToArr(data.city) : []}
                  expanded={expandCity}
                  onCheck={(e) => {
                    onChangeFilter("city", e.toString());
                  }}
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
          onChangeFilter={onChangeFilter}
          setIsOpenOrderingModal={setIsOpenOrderingModal}
        />
      )}
      {!_.isEmpty(userData) && <AddFavorites />}
    </>
  );
}

export default ListProductCus;
