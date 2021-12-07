import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Assistent from "zaravand-assistent-number";
import React, { useState, useEffect } from "react";
// component
import MegaMenuDesktop from "../../../containers/LandingPage/MegaMenuDesktop";
import MegaMenuMobile from "../../../containers/LandingPage/MegaMenuMobile";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../../redux/actions/user/getUserInfo";
import { errorMessage } from "../../../containers/utils/message";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
// style
import styles from "./header.module.scss";
import BoxSearch from "./boxSearch";
import { ApiReference } from "../../../Api";

const _asist = new Assistent();

function Header() {
  const router = useRouter();
  const [category, setCategory] = useState([]);
  const [shopsName, setShopsName] = useState([]);
  const [searchShops, setSearchShops] = useState([]);
  const _call_Category = async () => {
    try {
      let response = await ApiRegister().apiRequest(
        null,
        "get",
        `/api/v1/categories/?max_depth=2`,
        false,
        {}
      );
      if (response.status === 200) {
        setCategory(response.data);
      }
    } catch (e) { }
  };

  // Get all shops
  const _get_all_shops = async () => {
    if (shopsName.length == 0) {
      let shops = await ApiRegister().apiRequest(
        null,
        "GET",
        ApiReference.allShops,
        false,
        ""
      );

      if (shops.status === 200) {
        setShopsName(shops.data);
      }
    }
  };

  // Function for search
  const _handel_search = (word) => {
    setInputSearch(word);
    let copy_Array = [...shopsName];
    let filterArray = [];
    if (word != "") {
      filterArray = copy_Array.filter((el) => el.title.includes(word));
    }
    setSearchShops(filterArray);
  };

  const dispatch = useDispatch();
  const userLog = useSelector((state) => state.User.userInfo);
  const [inputSearch, setInputSearch] = useState("");
  useEffect(() => {
    dispatch(getUserInfo());
    _call_Category();
  }, []);
  return (
    <>
      <header className={`${styles.header}`}>
        <div className={styles.topBanner}>
          <Link
            href={
              Object.keys(userLog).length > 0
                ? "/fp/store/create"
                : "https://nakhll.com/accounts/get-phone/"
            }
          >
            <a>
              <Image
                layout="responsive"
                height={100}
                width={3000}
                src="/image/topBanner/topImg.jpg"
                alt="در نخل حجره دار شوید."
              />
            </a>
          </Link>
        </div>
        <div className="container">
          <div className={styles.top_header}>
            <div className={styles.top_header_rightside}>
              <div className={styles.h_logo}>
                <Link href="/">
                  <a
                    style={{
                      display: "flex",
                      alignItems: " center",
                      justifyContent: "space-between",
                      display: "block",
                    }}
                  >
                    <Image
                      layout="responsive"
                      height={100}
                      width={300}
                      src="/icons/logo_Nakhl.svg"
                      alt="فروشگاه اینترنتی نخل"
                      style={{ cursor: "pointer", maxHeight: "42px" }}
                    />
                  </a>
                </Link>
              </div>
              <div className={styles.h_search}>
                <div className={styles.search_box}>
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      location.replace(`/search?q=${inputSearch}`);
                    }}
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="جستجو در نخل ..."
                      onClick={() => _get_all_shops()}
                      onChange={(e) => _handel_search(e.target.value)}
                      value={inputSearch}
                    />
                    {searchShops.length > 0 && (
                      <BoxSearch list={searchShops} word={inputSearch} />
                    )}

                    <Link href={`/search?q=${inputSearch}`}>
                      <a>
                        <i className="fas fa-search"></i>
                      </a>
                    </Link>
                  </form>
                  <div className="result_search">
                    <div className="search_history"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.top_header_leftside}>
              {Object.keys(userLog).length > 0 ? (
                <>
                  <Link href="/profile">
                    <a className={styles.nav_item_link_login}>
                      <i
                        style={{ fontSize: "30px", marginLeft: "20px" }}
                        className="fas fa-user-circle"
                      ></i>
                    </a>
                  </Link>
                  <div className={styles.modalProfile}>
                    <Link href="/profile">
                      <a>
                        <div style={{ marginTop: "10px" }} className="flex-row">
                          <i className="fas fa-user-circle"></i>
                          <span>پروفایل</span>
                        </div>
                      </a>
                    </Link>
                    <div onClick={() => {
                      localStorage.removeItem("refreshToken");
                      localStorage.removeItem("accessToken");
                      router.reload(window.location.pathname);
                    }}>
                      <i className="fas fa-sign-out-alt "></i>
                      <span>خروج از حساب کاربری</span>
                    </div>
                  </div>
                </>
              ) : (
                <Link href="/login">
                  <a
                    style={{ margin: "0px 20px " }}
                    className={styles.nav_item_link_login}
                  >
                    ورود/ثبت نام
                  </a>
                </Link>
              )}
              <div
                onClick={() => { router.push("/cart") }}
              >
                <div className={styles.bascket_btn}>
                  <i>
                    <img
                      style={{ width: "24px" }}
                      src="/icons/sabad.svg"
                      alt=""
                    />
                  </i>
                  {Object.keys(userLog).length > 0 &&
                    userLog.cart_items_count !== 0 && (
                      <span className={styles.counter_cart}>
                        {_asist.number(userLog.cart_items_count)}
                      </span>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav>
          <div className="container">
            <div className={styles.nav_row}>
              <div className={styles.menu_collaps}>
                <span className="fas fa-bars"></span>
              </div>
              <MegaMenuDesktop category={category} />
            </div>
          </div>
        </nav>
      </header>

      <header className={`${styles.mobile_header} `}>
        <div className={styles.topBanner}>
          <Link
            href={
              Object.keys(userLog).length > 0
                ? "/fp/store/create"
                : "https://nakhll.com/accounts/get-phone/"
            }
          >
            <a>
              <Image
                layout="responsive"
                height={100}
                width={1200}
                src="/image/topBanner/topImg_mobile.jpg"
                alt="در نخل حجره دار شوید."
              />
            </a>
          </Link>
        </div>
        <div className={styles.header_holder}>
          <div className="container">
            <div className={styles.inner_header}>
              <div
                className={styles.menu_Hamburger}
                onClick={() => {
                  document.getElementById("SlideMenu").style.right = "0px";
                }}
              >
                <i className="fas fa-bars"></i>
                <Link href="/">
                  <a>
                    <Image
                      layout="responsive"
                      height={26}
                      width={26}
                      src="/icons/Nakhll.png"
                      alt="فروشگاه اینترنتی نخل"
                      style={{ cursor: "pointer", marginRight: "10px" }}
                    />
                  </a>
                </Link>
              </div>
              <div className={styles.logo_name}>
                <Link href="/">
                  <a>
                    <Image
                      layout="responsive"
                      height={100}
                      width={350}
                      src="/icons/Name_Nakhl.png"
                      alt="فروشگاه اینترنتی نخل"
                      style={{ cursor: "pointer", width: "130%" }}
                    />
                  </a>
                </Link>
              </div>
              <div className={styles.left_side}>
                {Object.keys(userLog).length > 0 ? (
                  <Link className={styles.profile_btn} href="/profile">
                    <i
                      style={{ fontSize: "25px", marginLeft: "9px" }}
                      className="fas fa-user-circle"
                    ></i>
                  </Link>
                ) : (
                  <Link
                    style={{
                      margin: "0px 2px ",
                      fontSize: "10px",
                      fontWeight: "500",
                    }}
                    href="/login"
                  >
                    ورود/ثبت نام
                  </Link>
                )}
                <div
                  onClick={() => { router.push("/cart") }}
                >
                  <div className={styles.bascket_btn}>
                    <i>
                      <img
                        style={{ width: "24px", marginLeft: "12px" }}
                        src="/icons/sabad.svg"
                        alt=""
                      />
                    </i>
                    {Object.keys(userLog).length > 0 &&
                      userLog.cart_items_count !== 0 && (
                        <span className={styles.counter_cart}>
                          {_asist.number(userLog.cart_items_count)}
                        </span>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.search_header}>
          <div className="container">
            <div className={styles.search_box}>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  location.replace(`/search?q=${inputSearch}`);
                }}
              >
                <input
                  type="text"
                  className="form-control"
                  onClick={() => _get_all_shops()}
                  onChange={(e) => _handel_search(e.target.value)}
                  value={inputSearch}
                  placeholder="جستجو در نخل ..."
                />

                {searchShops.length > 0 && (
                  <BoxSearch list={searchShops} word={inputSearch} />
                )}
                <Link href={`/search?q=${inputSearch}`}>
                  <a>
                    <i className="fas fa-search"></i>
                  </a>
                </Link>
              </form>
            </div>
          </div>
        </div>
        <nav
          className={styles.menu_holder}
          switch-shift-element-right="29"
          switch-adjust-element-width="30"
          switch-left-popup-id="31"
        >
          <div className={styles.mobile_menu} id="SlideMenu">
            <div className={styles.head_menu}>
              <Link href="/">
                <a className={styles.menu_logo}>
                  <img
                    style={{ maxHeight: "50px" }}
                    src="/icons/logo_Nakhl.svg"
                    alt=""
                  />
                </a>
              </Link>
              <span
                className={styles.close_menu}
                onClick={() => {
                  document.getElementById("SlideMenu").style.right = "-100%";
                }}
              >
                <i className="fas fa-times"></i>
              </span>
            </div>
            <div className={styles.top_menu}>
              <h2 className={styles.title_menu}>دسته بندی محصولات</h2>
            </div>
            <MegaMenuMobile category={category} />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
