import React from "react";
// node libraries
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
// components
import MenuMobile from "./MenuMobile";
import useViewport from "../viewPort/index";
// methods
import { mapState } from "./methods/mapState";
import { allOptions } from "./methods/allOptions";
import { getUserInfo } from "../../redux/actions/user/getUserInfo";
import { getActiveHojreh } from "../../redux/actions/user/getActiveHojreh";
// styles
import styles from "./layout.module.scss";
import HeaderDesktop from "./fpLayout/headerDesktop";
import HeaderMobile from "./fpLayout/headerMobile";

function MyLayout({ children, getUserInfo, userInfo, getActiveHojreh }) {
  const breakpoint = 620;
  const router = useRouter();
  const { width } = useViewport();
  const [Title, setTitle] = useState("");
  const [slugHojreh, setSlugHojreh] = useState("");
  const [selectShop, setselectShop] = useState("");
  const [isShowOrder, setisShowOrder] = useState(false);
  const [activeOptions, setActiveOptions] = useState([]);

  const exitDash = () => {
    router.push("/");
  };

  useEffect(() => {
    async function fetchData() {
      Object.keys(userInfo).length === 0 && getUserInfo();
      if (
        selectShop.length === 0 &&
        Object.keys(userInfo).length > 0 &&
        userInfo.shops.length > 0
      ) {
        getActiveHojreh(userInfo.shops[0].slug);
        setSlugHojreh(userInfo.shops[0].slug);
      }
      setActiveOptions(await allOptions());
    }
    fetchData();
  }, [userInfo.shops]);

  const forHeader = (option) => {
    setTitle(option.target[option.target.selectedIndex].text);
  };

  return (
    <>
      <ToastContainer />
      <Head>
        <title>{Title ? `حجره ${Title}` : "داشبورد مدیریت"}</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossOrigin="anonymous"
        />
      </Head>

      {width > breakpoint ? (
        <HeaderDesktop slugHojreh={slugHojreh} />
      ) : (
        <HeaderMobile slugHojreh={slugHojreh} />
      )}

      <div
        className={`${
          width < breakpoint && router.pathname !== "/"
            ? styles.wrapperProduct
            : styles.wrapper
        }`}
      >
        {/* <!-- Right  SideBar--> */}
        {!(width < breakpoint && router.pathname !== "/fp") && (
          <div className={styles.Right}>
            <section className={styles.info_card}>
              <div className={styles.info_card_pic}>
                <div className={styles.info_card_pic_person}>
                  {!!slugHojreh &&
                  userInfo &&
                  userInfo?.shops &&
                  userInfo.shops.length > 0 &&
                  userInfo.shops[0].image_thumbnail_url ? (
                    <Image
                      src={
                        userInfo.shops.filter((el) => el.slug === slugHojreh)[0]
                          .image_thumbnail_url
                      }
                      layout="fill"
                      alt=""
                    />
                  ) : (
                    <Image src="/image/picprofile.png" layout="fill" alt="" />
                  )}
                </div>
              </div>
              <div className={styles.info_cardH}>
                <label htmlFor="select-shop" style={{ fontSize: "15px" }}>
                  {" "}
                  حجره های شما:
                  {"     "}‌
                </label>
                <select
                  id="select-shop"
                  onChange={(a) => {
                    setselectShop(a.target.value);
                    setSlugHojreh(a.target.value);
                    getActiveHojreh(a.target.value);
                    forHeader(a);
                  }}
                >
                  {userInfo.shops &&
                    userInfo.shops.map((e) => {
                      return (
                        <option key={e.id} value={e.slug}>
                          {e.title}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className={styles.info_card_btn}>
                <Link href="/fp/store/create">
                  <a>
                    <div className={styles.info_card_btn_one}>
                      <i className="fas fa-store fa-2x"></i>
                      <h4
                        style={{
                          textAlign: "center",
                          fontSize: "14px",
                          color: "#a4aebb",
                          margin: "0px",
                        }}
                      >
                        ایجاد حجره
                      </h4>
                    </div>
                  </a>
                </Link>
                <Link href="/fp/setting">
                  <a>
                    <div
                      className={`${
                        router.pathname == "/fp/setting"
                          ? styles.ActiveMenuBarBig
                          : ""
                      }   ${styles.info_card_btn_one} ${styles.forhover}`}
                    >
                      <i
                        style={{ fontSize: "20px" }}
                        className="fas fa-user-cog fa-2x"
                      ></i>
                      <h4
                        style={{
                          textAlign: "center",
                          fontSize: "14px",
                          color: "#a4aebb",
                          margin: "0px",
                        }}
                      >
                        تنظیمات
                      </h4>
                    </div>
                  </a>
                </Link>

                <button
                  className={styles.info_card_btn_one}
                  onClick={() => exitDash()}
                >
                  <i
                    style={{ fontSize: "20px" }}
                    className="fas fa-sign-out-alt "
                  ></i>
                  <h4
                    style={{
                      textAlign: "center",
                      fontSize: "14px",
                      color: "#a4aebb",
                      margin: "0px",
                    }}
                  >
                    خروج
                  </h4>
                </button>
              </div>
            </section>
            <section className={styles.menu_card}>
              <Link href={`/fp`}>
                <a>
                  <span
                    className={`${styles.menu_card_item} ${
                      router.pathname == "/fp" && styles.selectNav
                    } mt-5 mb-4`}
                  >
                    <i
                      style={{
                        marginLeft: "12px",
                        fontSize: "18px",
                      }}
                      className="fas fa-home"
                    ></i>
                    <h2
                      style={{
                        fontSize: "15px",
                        margin: "0px",
                      }}
                    >
                      داشبورد
                    </h2>
                  </span>
                </a>
              </Link>
              <button
                style={{ cursor: "pointer", marginBottom: "20px" }}
                className={styles.btnOrder}
                onClick={() => {
                  setisShowOrder(!isShowOrder);
                }}
              >
                {isShowOrder ? (
                  <>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <i
                          style={{
                            marginLeft: "15px",
                            fontSize: "18px",
                            color: "#1b3e68",
                          }}
                          className="fas fa-shopping-basket"
                        ></i>
                        <h2
                          style={{
                            color: "#1b3e68",
                            fontSize: "15px",
                            margin: "0px",
                          }}
                        >
                          سفارش ها
                        </h2>
                      </div>{" "}
                      <i
                        style={{
                          fontSize: "15px",
                          marginLeft: "15px",
                          color: "#1b3e68",
                        }}
                        className="fas fa-chevron-up"
                      ></i>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <i
                          style={{
                            marginLeft: "15px",
                            fontSize: "18px",
                            color: "#1b3e68",
                          }}
                          className="fas fa-shopping-basket"
                        ></i>
                        <h2
                          style={{
                            color: "#1b3e68",
                            margin: "0px",
                            fontSize: "15px",
                          }}
                        >
                          سفارش ها
                        </h2>
                      </div>{" "}
                      <i
                        style={{
                          color: "#1b3e68",
                          fontSize: "15px",
                          marginLeft: "15px",
                        }}
                        className="fas fa-chevron-down"
                      ></i>
                    </div>
                  </>
                )}
              </button>
              {isShowOrder && (
                <>
                  <Link
                    style={{ cursor: "pointer" }}
                    href="/fp/order/completed"
                  >
                    <a>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                        className={`${styles.subTitleOrder}   ${
                          router.pathname === "/fp/order/completed" &&
                          styles.selectNav
                        }`}
                      >
                        {/* <span
                        style={{ marginLeft: "18px" }}
                        className={`${styles.dot} ${router.pathname == "/fp/order/completed"
                          && styles.selectdot}`}
                      ></span> */}
                        <h2
                          style={{
                            fontSize: "15px",
                            marginRight: "20px",
                          }}
                        >
                          تکمیل شده
                        </h2>
                      </span>
                    </a>
                  </Link>
                  <Link href="/fp/order/uncompleted">
                    <a>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "15px",
                          marginBottom: "15px",
                          cursor: "pointer",
                        }}
                        className={`${styles.subTitleOrder} ${
                          router.pathname == "/fp/order/uncompleted" &&
                          styles.selectNav
                        }`}
                      >
                        {/* <span
                        style={{ marginLeft: "18px" }}
                        className={`${styles.dot} ${router.pathname == "/fp/order/uncompleted"
                          && styles.selectdot}`}
                      ></span> */}
                        <h2
                          style={{
                            fontSize: "15px",
                            marginRight: "20px",
                          }}
                        >
                          تکمیل نشده
                        </h2>
                      </span>
                    </a>
                  </Link>
                </>
              )}

              <Link href="/fp/product">
                <a>
                  <span
                    className={`${styles.menu_card_item} ${
                      router.pathname == "/fp/product" && styles.selectNav
                    }`}
                  >
                    <i
                      style={{
                        marginLeft: "12px",
                        fontSize: "18px",
                      }}
                      className="fas fa-box-open"
                    ></i>
                    <h2
                      style={{
                        fontSize: "15px",
                        margin: "0px",
                      }}
                    >
                      {" "}
                      محصولات
                    </h2>
                  </span>
                </a>
              </Link>
              <span
                className={`mt-3 ${styles.menu_card_item} ${
                  router.pathname == "/fp/options" && styles.selectNav
                }`}
                onClick={() => {
                  if (
                    document.querySelector("#options").style.display === "block"
                  ) {
                    document.querySelector("#options").style.display = "none";
                  } else {
                    document.querySelector("#options").style.display = "block";
                  }
                }}
              >
                <i
                  style={{
                    marginLeft: "12px",
                    fontSize: "20px",
                  }}
                  className="fas fa-cubes"
                ></i>
                <h2
                  style={{
                    fontSize: "15px",
                    margin: "0px",
                  }}
                >
                  {" "}
                  قابلیت ها
                </h2>
                <i
                  style={{
                    color: "#1b3e68",
                    fontSize: "15px",
                    marginRight: "145px",
                  }}
                  className="fas fa-chevron-down"
                ></i>
              </span>
              <ul id="options" className={styles.optionsList}>
                {activeOptions && activeOptions.length > 0 ? (
                  activeOptions.map((value, index) => {
                    return (
                      <li key={index}>
                        <Link
                          href={
                            value.name === "صفحه فرود"
                              ? `/fp/options/landing/detail?id=${value.id}`
                              : "/fp/options/ads"
                          }
                        >
                          <a>{value.name}</a>
                        </Link>
                      </li>
                    );
                  })
                ) : (
                  <li>قابلیتی وجود ندارد</li>
                )}
              </ul>
            </section>
          </div>
        )}
        {/* <!-- Left --> */}
        <div
          className={`${
            router.pathname == "/" ? styles.left : styles.leftProduct
          }`}
        >
          {children}
        </div>
        <MenuMobile activeOptions={activeOptions} />
      </div>
    </>
  );
}
// export
const connector = connect(mapState, { getUserInfo, getActiveHojreh });
export default connector(MyLayout);
