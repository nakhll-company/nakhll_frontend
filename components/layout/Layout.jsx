// node libraries
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// components
import useViewport from "../viewPort/index";
import MenuMobile from "./MenuMobile";
// methods
import { mapState } from "./methods/mapState";
import { getUserInfo } from "../../redux/actions/user/getUserInfo";
import { getActiveHojreh } from "../../redux/actions/user/getActiveHojreh";
// styles
import styles from "../../styles/components/layout/layout.module.scss";
import { ToastContainer } from "react-toastify";

function MyLayout({ children, getUserInfo, userInfo, getActiveHojreh }) {
  const [selectShop, setselectShop] = useState("");
  const [isShowOrder, setisShowOrder] = useState(false);

  const [Title, setTitle] = useState("");
  const router = useRouter();
  const { width } = useViewport();
  // STATE FOR SET LINK SHOP
  const [slugHojreh, setSlugHojreh] = useState("");
  const breakpoint = 620;
  const ExitDash = () => {
    router.push("/");
  };
  useEffect(() => {
    Object.keys(userInfo).length === 0 && getUserInfo();
    if (
      selectShop.length === 0 &&
      Object.keys(userInfo).length > 0 &&
      userInfo.shops.length > 0
    ) {
      getActiveHojreh(userInfo.shops[0].slug);
      setSlugHojreh(userInfo.shops[0].slug);
    }
  }, [userInfo.shops]);

  const ForHeader = (option) => {
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

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossOrigin="anonymous"
        ></link>
      </Head>

      {width > breakpoint && (
        <header>
          <div className={styles.hedtop}>
            <div style={{ display: "flex" }}>
              <span style={{ marginRight: "102px" }}>
                {/* <Image
                  src="/image/LOGO_500.png"
                  alt="Picture of the author"
                  width={60}
                  height={60}
                /> */}
              </span>
              <h1 style={{ color: "#224d82", fontSize: "18px", margin: "0px" }}>
                داشبورد حجره
              </h1>
            </div>
            <div style={{ display: "flex" }}>
              <span
                className={styles.icons}
                style={{
                  marginRight: "5px",
                  marginLeft: "20px",
                  cursor: "pointer",

                }}
              >
                <Image
                  src="/icons/Hojreh.png"
                  alt="Picture of the author"
                  width={60}
                  height={60}
                  onClick={() => {
                    slugHojreh !== "" &&
                      router.push(`/hojreh/${slugHojreh}/`);
                  }}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="حجره"
                />{" "}
              </span>
              <span
                style={{
                  marginRight: "0",
                  marginLeft: "20px",
                  cursor: "pointer",
                }}
              >
                <Image
                  src="/icons/iconpro.png"
                  alt="Picture of the author"
                  width={60}
                  height={60}
                  onClick={() =>
                    router.push("/profile/")
                  }
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="پروفایل"
                />{" "}
              </span>
              <span
                style={{
                  marginRight: "0",
                  marginLeft: "110px",
                  cursor: "pointer",
                }}
              >
                {" "}
                <Image
                  src="/icons/Nakhll.png"
                  alt="Picture of the author"
                  width={60}
                  height={60}
                  onClick={() => router.push("/")}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="نخل"
                />
              </span>
            </div>
          </div>
        </header>
      )}
      {width < breakpoint && (
        <header>
          <div className={styles.hedtop_mobile}>
            <h1>پیشخوان</h1>
            <span >
              <span
                className={styles.icons}
                style={{

                  cursor: "pointer",
                }}
              >
                <Image
                  src="/icons/Hojreh.png"
                  alt="Picture of the author"
                  width={30}
                  height={30}
                  onClick={() => {
                    slugHojreh !== "" &&
                      router.push(`/hojreh/${slugHojreh}/`);
                  }}
                  title="حجره"
                />{" "}
              </span>
              <span
                style={{

                  cursor: "pointer",
                }}
              >
                <Image
                  src="/icons/iconpro.png"
                  alt="Picture of the author"
                  width={30}
                  height={30}
                  onClick={() =>
                    router.push("/profile/")
                  }
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="پروفایل"
                />{" "}
              </span>
              <span
                style={{

                  cursor: "pointer",
                }}
              >
                {" "}
                <Image
                  src="/icons/Nakhll.png"
                  alt="Picture of the author"
                  width={30}
                  height={30}
                  onClick={() => router.push("/")}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="نخل"
                />
              </span>

            </span>
          </div>
        </header>
      )}

      <div
        className={`${width < breakpoint && router.pathname !== "/"
          ? styles.wrapperProduct
          : styles.wrapper
          }`}
      >
        {/* <!-- Right  SideBar--> */}
        {!(width < breakpoint && router.pathname !== "/fp") && (
          <div className={styles.Right}>
            <section className={styles.info_card}>
              <div className={styles.info_card_pic}>
                {/* <Image src={userInfo.shops.image_thumbnail_url} layout="fill"></Image> */}
                <div className={styles.info_card_pic_person}>
                  <Image src="/image/picprofile.png" layout="fill"></Image>
                </div>
              </div>

              <div className={styles.info_cardH}>
                {/* <h1
                  style={{
                    paddingTop: "1.7rem",
                    textAlign: "center",
                    paddingBottom: "2.9rem",
                  }}
                >
                  حجره طلاسازی
                </h1> */}
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
                    ForHeader(a);
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
                <div className={styles.info_card_btn_one}>
                  <i className="far fa-envelope fa-2x"></i>
                  <h4
                    style={{
                      textAlign: "center",
                      fontSize: "14px",
                      color: "#a4aebb",
                      margin: "0px",
                    }}
                  >
                    پیام ها
                  </h4>
                </div>
                <Link href="/fp/setting">
                  <div
                    className={`${router.pathname == "/fp/setting"
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
                </Link>

                <button
                  className={styles.info_card_btn_one}
                  onClick={() => ExitDash()}
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
                <span
                  className={`${styles.menu_card_item} ${router.pathname == "/" ? styles.selectNav : ""
                    } mt-5 mb-4`}
                >
                  <i
                    style={{
                      marginLeft: "18px",
                      fontSize: "20px",
                    }}
                    className="fas fa-home  "
                  ></i>
                  <h2
                    style={{
                      fontSize: "16px",
                    }}
                  >
                    داشبورد
                  </h2>
                </span>
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
                            marginLeft: "18px",
                            fontSize: "20px",
                            color: "#1b3e68",
                          }}
                          className="fas fa-shopping-basket"
                        ></i>
                        <h2
                          style={{
                            color: "#1b3e68",

                            fontSize: "16px",
                          }}
                        >
                          سفارش ها
                        </h2>
                      </div>{" "}
                      <i
                        style={{
                          fontSize: "20px",
                          marginRight: "10px",
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
                            marginLeft: "18px",
                            fontSize: "20px",
                            color: "#1b3e68",
                          }}
                          className="fas fa-shopping-basket"
                        ></i>
                        <h2
                          style={{
                            color: "#1b3e68",

                            fontSize: "16px",
                          }}
                        >
                          سفارش ها
                        </h2>
                      </div>{" "}
                      <i
                        style={{
                          color: "#1b3e68",
                          fontSize: "20px",
                          marginRight: "10px",
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
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                      className={`${styles.subTitleOrder}   ${router.pathname == "/fp/order/completed"
                        ? styles.selectNav
                        : ""
                        }`}
                    >
                      <span
                        style={{ marginLeft: "18px" }}
                        className={`${styles.dot}   ${router.pathname == "/fp/order/completed"
                          ? styles.selectdot
                          : ""
                          }`}
                      ></span>
                      <h2
                        style={{
                          color: "#1b3e68",

                          fontSize: "16px",
                        }}
                      >
                        تکمیل شده
                      </h2>
                    </span>
                  </Link>
                  <Link href="/fp/order/uncompleted">
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "15px",
                        marginBottom: "25px",
                        cursor: "pointer",
                      }}
                      className={`${styles.subTitleOrder}   ${router.pathname == "/fp/order/uncompleted"
                        ? styles.selectNav
                        : ""
                        }`}
                    >
                      <span
                        style={{ marginLeft: "18px" }}
                        className={`${styles.dot}   ${router.pathname == "/fp/order/uncompleted"
                          ? styles.selectdot
                          : ""
                          }`}
                      ></span>
                      <h2
                        style={{
                          color: "#1b3e68",

                          fontSize: "16px",
                        }}
                      >
                        تکمیل نشده
                      </h2>
                    </span>
                  </Link>
                </>
              )}

              <Link activeClassName="selectNav" href="/fp/product">
                <span
                  className={`${styles.menu_card_item}   ${router.pathname == "/fp/product" ? styles.selectNav : ""
                    }`}
                >
                  <i
                    style={{
                      marginLeft: "18px",
                      fontSize: "20px",
                    }}
                    className="fas fa-box-open"
                  ></i>
                  <h2
                    style={{
                      color: "#1b3e68",

                      fontSize: "16px",
                    }}
                  >
                    {" "}
                    محصولات
                  </h2>
                </span>
              </Link>
            </section>
          </div>
        )}
        {/* <!-- Left --> */}
        <div
          className={`${router.pathname == "/" ? styles.left : styles.leftProduct
            }`}
        >
          {children}
        </div>
        <MenuMobile />
      </div>
    </>
  );
}
// export
const connector = connect(mapState, { getUserInfo, getActiveHojreh });
export default connector(MyLayout);
