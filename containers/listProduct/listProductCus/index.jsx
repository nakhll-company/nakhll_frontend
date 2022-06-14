// node libraries
import _ from "lodash";
import router from "next/router";
import { useSelector } from "react-redux";
import CheckboxTree from "react-checkbox-tree";
import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import InfiniteScroll from "react-infinite-scroll-component";
// components
import TopBar from "../TopBar";
import Grouping from "../../searchPage/Grouping";
import FilterPrice from "./components/filterPrice";
import FiltersPart from "../../searchPage/filtersPart";
import Search from "../../../components/search/Search";
import SearchProduct from "./components/searchProduct";
import AddFavorites from "../../../components/AddFavorites";
import CustomSwitch from "../../../components/custom/customSwitch";
import OrderingModalMobile from "./components/OrderingModalMobile";
import ProductCard from "../../../components/productCart/ProductCard";
import CustomAccordion from "../../../components/custom/customAccordion";
import { WoLoading } from "../../../components/custom/Loading/woLoading/WoLoading";
// methods
import { ApiReference } from "../../../api/Api";
import { allCites } from "../../../utils/allCities";
import { http, authhttp } from "../../../services/callApi/api";
import { diviedNumber } from "../../../utils/diviedNumber";
import { parsUrlToArr } from "../../../utils/parsUrlToArr";
// styles
import styles from "./listProductCus.module.scss";

function ListProductCus({ data }) {
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
  const shopesTag = userData?.shops;
  const [tags, setTags] = useState([]);
  const [activeHojreh, setActiveHojreh] = useState();
  const wantTags = [...(data.tags ? parsUrlToArr(data.tags) : [])];
  const [categories, setCategories] = useState([...(data.category ? parsUrlToArr(data.category) : [])]);

  const onChangeFilter = (name, value, alone = false) => {
    if (alone) {
      const filter = [];
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
    const filters = data;
    if (value == "" || !value) {
      delete filters[name];
    } else {
      filters[name] = value;
    }
    router.push(
      {
        pathname: router.pathname,
        query: filters,
      },
      undefined,
      { shallow: true }
    );
  };

  const removeFilter = (name) => {
    const filters = data;
    delete filters[name];
    router.push(
      {
        pathname: router.pathname,
        query: filters,
      },
      undefined,
      { shallow: true }
    );
  };

  const callTags = async (activeHojreh) => {
    try {
      const dataUrl = `/api/v1/shop/${activeHojreh}/tags/`;
      const response = await authhttp.get(dataUrl);
      if (response.status < 300) {
        setTags(response.data);
      }
    } catch (e) {
      return false;
    }
  };

  const handelAddCategory = (id) => {
    const copyArray = [...(data.category ? parsUrlToArr(data.category) : [])];

    const newArray = copyArray.filter((element) => element != id);

    if (copyArray.length == newArray.length) {
      onChangeFilter("category", [...newArray, id].toString());
    } else {
      onChangeFilter("category", newArray.toString());
    }
  };

  const handelAddTags = (id) => {
    const copyArray = [...wantTags];

    const newArray = copyArray.filter((element) => element != id);

    if (copyArray.length == newArray.length) {
      onChangeFilter("tags", [...newArray, id].toString());
    } else {
      onChangeFilter("tags", [...newArray, id].toString());
    }
  };

  const handelCallAnotherPageApi = async () => {
    try {
      const response = await http.get(`/api/v1/products/`, {
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
  const getAllShops = async () => {
    if (shopsName.length == 0) {
      const shops = await http.get(ApiReference.allShops);

      if (shops.status === 200) {
        setShopsName(shops.data);
      }
    }
  };
  // Function for search
  const handelSearch = (word) => {
    const copyArray = [...shopsName];
    let filterArray = [];
    if (word != "") {
      filterArray = copyArray.filter((el) => el.title.includes(word));
    }
    setSearchShops(filterArray);
  };

  useEffect(() => {
    async function fetchData() {
      const handelFilters = async () => {
        setHasMore(true);
        setIsLoading(true);
        try {
          const response = await http.get(`/api/v1/products/`, {
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
          } else {
            setIsLoading(false);
            setTotalcount(0);
          }
        } catch (e) {
          setIsLoading(false);
          setTotalcount(0);
        }
      };
      await handelFilters();
    }
    fetchData();
  }, []);

  // for filters in sidebar
  // END

  const handelFilterModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  // function for open OrderingModal in mobile
  const handelOrderingModal = () => {
    setIsOpenOrderingModal(!isOpenOrderingModal);
  };

  useEffect(() => {
    if (activeHojreh) {
      callTags(activeHojreh);
    }
  }, [activeHojreh]);

  return (
    <>
      <div className={styles.container_N}>
        <div style={{ justifyContent: "center" }} className="row ">
          <div className="d-none d-lg-block col-lg-3">
            <div id="sidebar">
              <FiltersPart filters={data} removeFilter={removeFilter} />
              <Grouping
                searchWord={data.q}
                setCategories={setCategories}
                categories={categories}
                handelAddCategory={handelAddCategory}
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
                  onClick={getAllShops}
                  onChange={(e) => handelSearch(e.target.value)}
                />
                {searchShops.length > 0 && (
                  <div className={styles.numBag}>
                    <span> {diviedNumber(searchShops.length)}</span>
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
                    checked={data.city ? parsUrlToArr(data.city) : []}
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
                          handelAddTags(e.target.value);
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
                handelFilterModal={handelFilterModal}
                handelOrderingModal={handelOrderingModal}
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
            <div style={{ justifyContent: "center" }} className="mx-auto row">
              {isLoading ? (
                <WoLoading />
              ) : listWithFilter.length == 0 ? (
                <div className={styles.wrap_empty}>
                  <span className="h5">محصولی یافت نشد...</span>
                </div>
              ) : (
                <InfiniteScroll
                  className="mx-auto row"
                  dataLength={listWithFilter.length} // This is important field to render the next data
                  next={handelCallAnotherPageApi}
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
            <AiFillCloseCircle size={30} onClick={handelFilterModal} />
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
                onClick={getAllShops}
                onChange={(e) => handelSearch(e.target.value)}
              />
              {searchShops.length > 0 && (
                <div className={styles.numBag}>
                  <span> {diviedNumber(searchShops.length)}</span>
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
                handelAddCategory={handelAddCategory}
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
                  checked={data.city ? parsUrlToArr(data.city) : []}
                  expanded={expandCity}
                  onCheck={(e) => {
                    onChangeFilter("city", e.toString());
                  }}
                  onExpand={(e) => setExpandCity(e)}
                />
              </CustomAccordion>
            )}
            {shopesTag?.length > 0 && (
              <CustomAccordion title="تگ ها" item="fourModalTag" close={true}>
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
                    key={`tagesMobile${index}`}
                    style={{ marginBottom: "10px", paddingRight: "10px" }}
                  >
                    <input
                      onChange={(e) => {
                        handelAddTags(e.target.value);
                      }}
                      className="form-check-input"
                      type="checkbox"
                      value={ele.id}
                      id={`tagesMobile${index}`}
                    />
                    <label
                      style={{ marginRight: "5px", fontSize: "15px" }}
                      className="form-check-label"
                      htmlFor={`tagesMobile${index}`}
                    >
                      {ele.text}
                    </label>
                  </div>
                ))}
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
              onClick={handelFilterModal}
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
          data={data.ordering}
          handelOrderingModal={handelOrderingModal}
          onChangeFilter={onChangeFilter}
          setIsOpenOrderingModal={setIsOpenOrderingModal}
        />
      )}
      {!_.isEmpty(userData) && <AddFavorites />}
    </>
  );
}

export default ListProductCus;
