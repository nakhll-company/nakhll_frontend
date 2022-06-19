import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { RiUserSettingsFill } from "react-icons/ri";
import { BsShopWindow } from "react-icons/bs";
import { getUserData } from "../../containers/profile/methods/getUserData";
import { MdOutlineFollowTheSigns, MdOutlineFavorite } from "react-icons/md";
import { GiTwoCoins } from "react-icons/gi";
import styles from "./profile.module.scss";
import useViewport from "../viewPort";
import { useRouter } from "next/router";
import Header from "../shopLayout/header/header";
import Footer from "../shopLayout/footer";

// Main Component
function ProfileLayout({ children }) {
  const breakpoint = 767;
  const router = useRouter();

  const { width } = useViewport();
  const [dataProfile, setDataProfile] = useState({});
  const userData = useSelector((state) => state.User.userInfo);

  useEffect(() => {
    async function fetchData() {
      const ans = await getUserData();
      setDataProfile(ans);
    }
    fetchData();
  }, []);
  // mini component list
  function Li({ href, title, children }) {
    let styleActive = {};
    if (href == router.pathname) {
      console.log("href :>> ", href);
      console.log("router.pathname :>> ", router.pathname);
      styleActive = {
        backgroundColor: " #A06912",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "8px",
        color: "#FCFCFC",
        fontSize: "16px",
        padding: "16px",
        fontWeight: "bolder",
      };
    }
    return (
      <li className="mb-3" style={styleActive}>
        <Link href={href} scroll={false}>
          <a className="d-flex align-items-center">
            {children}
            {title}
          </a>
        </Link>
      </li>
    );
  }
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Header />

      <div className={`container-fluid ${styles.main_wrapper}`}>
        <div className="row">
          <div
            className={`col-md-4 col-lg-3 d-none d-md-block ${styles.right_menu}`}
          >
            <ul>
              <li className="d-flex flex-column align-items-center mb-3">
                <Image
                  src={
                    Object.keys(dataProfile).length > 0
                      ? dataProfile.image
                      : "/productDetail/avatar.png"
                  }
                  width="90"
                  height="90"
                  className={styles.imageProfile}
                  alt=""
                />
                <h6>
                  {Object.keys(dataProfile).length > 0 &&
                    `${dataProfile.FK_User.first_name} ${dataProfile.FK_User.last_name}`}
                </h6>
              </li>

              <div className={styles.wavy}></div>

              <Li title="ویرایش پروفایل" href="/profile">
                <RiUserSettingsFill size={25} style={{ marginLeft: "10px" }} />
              </Li>

              <Li title="پیگیری سفارش" href="/profile/orderdetail">
                <MdOutlineFollowTheSigns
                  size={25}
                  style={{ marginLeft: "10px" }}
                />
              </Li>

              <Li title="لیست علاقمندی ها" href="/profile/favList">
                <MdOutlineFavorite size={25} style={{ marginLeft: "10px" }} />
              </Li>

              <Li title="انبار سکه" href="/profile/coins">
                <GiTwoCoins size={25} style={{ marginLeft: "10px" }} />
              </Li>

              <Li
                title="مدیریت حجره"
                href={
                  userData && userData.shops && userData.shops.length > 0
                    ? "/fp"
                    : "/fp/store/create"
                }
              >
                <BsShopWindow size={25} style={{ marginLeft: "10px" }} />
              </Li>
            </ul>
          </div>
          {width < breakpoint && (
            <div className={styles.menu_mobile}>
              <ul className="d-flex justify-content-between align-items-center">
                <hr />
                <li
                  className="d-flex flex-column align-items-center"
                  onClick={(event) => {}}
                >
                  <i
                    className="fas fa-user-cog"
                    style={{ fontSize: "18px" }}
                  ></i>

                  <span>پروفایل</span>
                </li>
                <li
                  onClick={(event) => {
                    activeLink(event);
                  }}
                >
                  <Link
                    href={
                      userData && userData.shops && userData.shops.length > 0
                        ? "/fp"
                        : "/fp/store/create"
                    }
                  >
                    <a className="d-flex flex-column align-items-center">
                      <i
                        className="fas fa-store"
                        style={{ fontSize: "18px" }}
                      ></i>

                      <span>حجره</span>
                    </a>
                  </Link>
                </li>
                <li
                  className="d-flex flex-column align-items-center"
                  onClick={(event) => {}}
                >
                  <i
                    className="fas fa-box-open"
                    style={{ fontSize: "18px" }}
                  ></i>

                  <span>سفارشات</span>
                </li>
                <li
                  className="d-flex flex-column align-items-center "
                  onClick={(event) => {}}
                >
                  <i
                    className="far fa-bookmark"
                    style={{ fontSize: "18px" }}
                  ></i>

                  <span>علاقمندی ها</span>
                </li>
                <li
                  className="d-flex flex-column align-items-center ms-4"
                  onClick={async () => {
                    await clearTokenStorage();
                    await router.push("/");
                    await router.reload("/");
                  }}
                >
                  <i
                    className="fas fa-sign-out-alt"
                    style={{ fontSize: "18px" }}
                  ></i>

                  <span>خروج</span>
                </li>
              </ul>
            </div>
          )}
          <div className={`col-md-8 col-lg-9 col-12`}>{children}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProfileLayout;
