// node libraries
import Link from "next/link";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// components
import useViewport from "../viewPort/index";
import MenuMobile from "./MenuMobile";
// methods
import { mapState } from "./methods/mapState";
import { getUserInfo } from "../../redux/actions/user/getUserInfo";
// styles
import styles from "../../styles/components/layout/layout.module.scss";

function MyLayout({ children, getUserInfo, userInfo }) {
  const router = useRouter();
  const { width } = useViewport();
  const breakpoint = 620;
  const firstShop = userInfo.shops[0].slug;

  useEffect(() => {
    getUserInfo();
  }, []);
  console.log("user :>> ", userInfo);
  const [selectShop, setselectShop] = useState(firstShop);
  console.log("selectShop :>> ", selectShop);

  router.replace(`/?shop=${selectShop}`);
  return (
    <>
      {router.pathname == "/" && (
        <header>
          <div className={styles.hedtop}>
            <span>
              {/* <Image
              src={nakhll}
              alt="Picture of the author"
            /> */}
            </span>

            <h1> داشبور مدیریت نخل</h1>
          </div>

          <div className={styles.hedtop_mobile}>
            <h1>پیشخوان</h1>
            <span>
              {/* <Image
              // src={nakhll}
              alt="Picture of the author"
            /> */}
            </span>
          </div>
        </header>
      )}
      <div
        className={`${
          width < breakpoint && router.pathname !== "/"
            ? styles.wrapperProduct
            : styles.wrapper
        }`}
      >
        {/* <!-- Right  SideBar--> */}
        {!(width < breakpoint && router.pathname !== "/") && (
          <div className={styles.Right}>
            <section className={styles.info_card}>
              <div className={styles.info_card_pic}>
                <div className={styles.info_card_pic_person}></div>
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
                <select
                  onChange={(a) => {
                    setselectShop(a.target.value);
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
                  <h4 style={{ textAlign: "center" }}>پیام ها</h4>
                </div>
                <div className={styles.info_card_btn_one}>
                  <i className="fas fa-user-cog fa-2x"></i>
                  <h4 style={{ textAlign: "center" }}>تنظیمات</h4>
                </div>
                <div className={styles.info_card_btn_one}>
                  <i className="fas fa-sign-out-alt fa-2x"></i>
                  <h4 style={{ textAlign: "center" }}>خروج</h4>
                </div>
              </div>
            </section>
            <section className={styles.menu_card}>
              <Link href={`/?shop=${selectShop}`}>
                <span
                  className={`${styles.menu_card_item}   ${
                    router.pathname == "/" ? styles.selectNav : ""
                  }`}
                >
                  <span
                    style={{ marginLeft: "18px" }}
                    className="fas fa-home fa-2x "
                  ></span>
                  <h2>داشبورد</h2>
                </span>
              </Link>
              <Link
                // activeClassName="selectNav"
                href={`/fp/order/?shop=${selectShop}`}
              >
                <span
                  className={`${styles.menu_card_item}   ${
                    router.pathname == "/fp/order" ? styles.selectNav : ""
                  }`}
                >
                  <span
                    style={{ marginLeft: "18px" }}
                    className={`fas fa-shopping-basket fa-2x`}
                  ></span>
                  <h2>سفارشات</h2>
                </span>
              </Link>
              <Link activeClassName="selectNav" href="/fp/product/list">
                <span
                  className={`${styles.menu_card_item}   ${
                    router.pathname == "/fp/product/list"
                      ? styles.selectNav
                      : ""
                  }`}
                >
                  <span
                    style={{ marginLeft: "18px" }}
                    className={`fas fa-box-open fa-2x `}
                  ></span>
                  <h2>محصولات</h2>
                </span>
              </Link>
              <Link activeClassName="selectNav" href="/fp/customer">
                <span
                  className={`${styles.menu_card_item}   ${
                    router.pathname == "/fp/customer" ? styles.selectNav : ""
                  }`}
                >
                  <span
                    style={{ marginLeft: "18px" }}
                    className="fas fa-users fa-2x"
                  ></span>
                  <h2>لیست مشتریان</h2>
                </span>
              </Link>
              <Link activeClassName="selectNav" href="/fp/comments">
                <span
                  className={`${styles.menu_card_item}   ${
                    router.pathname == "/fp/comments" ? styles.selectNav : ""
                  }`}
                >
                  <span
                    style={{ marginLeft: "18px" }}
                    className="far fa-comment-dots fa-2x"
                  ></span>
                  <h2>دیدگاه ها</h2>
                </span>
              </Link>
              <Link activeClassName="selectNav" href="/fp/financial">
                <span
                  className={`${styles.menu_card_item}   ${
                    router.pathname == "/fp/financial" ? styles.selectNav : ""
                  }`}
                >
                  <span
                    style={{ marginLeft: "25px" }}
                    className="fas fa-dollar-sign fa-pestehkerman"
                  ></span>
                </span>
              </Link>
              <Link activeClassName="selectNav" href="/fp/discount">
                <span
                  className={`${styles.menu_card_item}   ${
                    router.pathname == "/fp/discount" ? styles.selectNav : ""
                  }`}
                >
                  <span
                    style={{ marginLeft: "18px" }}
                    className="fas fa-percent fa-2x"
                  ></span>
                  pestehkerman
                </span>
              </Link>
              <Link activeClassName="selectNav" href="/fp/support">
                <span
                  className={`${styles.menu_card_item}   ${
                    router.pathname == "/fp/support" ? styles.selectNav : ""
                  }`}
                >
                  <span
                    style={{ marginLeft: "18px" }}
                    className="fas fa-life-ring fa-2x"
                  ></span>
                  <h2>پشتیبانی</h2>
                </span>
              </Link>
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
        <MenuMobile />
      </div>
    </>
  );
}
// export
const connector = connect(mapState, { getUserInfo });
export default connector(MyLayout);
