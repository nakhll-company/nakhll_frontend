// node libraries
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
// components
import useViewport from "../../components/viewPort";
import Oredrs from "../../containers/profile/orders";
import ShopLayout from "../../components/shopLayout";
import EditProfile from "../../containers/profile/editProfile";
import OrderDetail from "../../containers/profile/ordersDetail";
import FavoritesList from "../../containers/profile/favoritesList";
// methods
import { getUserData } from "../../containers/profile/methods/getUserData";
// scss
import styles from "./profile.module.scss";
/**
 * component profile
 */
const Profile = () => {
  const breakpoint = 767;
  const router = useRouter();
  const { width } = useViewport();
  const [profilePages, setProfilePages] = useState({
    editProfile: false,
    ordersPage: true,
    favoritesList: false,
    shoppingExperiences: false,
    orderDetail: false,
  });
  const userData = useSelector((state) => state.User.userInfo);
  const [invoiceId, setInvoiceId] = useState(0);
  const [dataProfile, setDataProfile] = useState({});

  function activeLink(event) {
    let elementsActive = document.querySelectorAll("li");
    elementsActive.forEach((value) =>
      value.classList.remove(`${styles.active_link}`)
    );
    event.currentTarget.classList.add(`${styles.active_link}`);
  }

  useEffect(() => {
    getUserData(setDataProfile);
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossOrigin="anonymous"
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

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
              <hr />
              <li
                className="d-flex align-items-center mb-3"
                onClick={(event) => {
                  activeLink(event);
                  setProfilePages(() => {
                    return {
                      ordersPage: false,
                      favoritesList: false,
                      shoppingExperiences: false,
                      editProfile: true,
                      orderDetail: false,
                    };
                  });
                }}
              >
                <i className="fas fa-user-cog ms-2"></i>
                ویرایش پروفایل
              </li>
              <li
                className="mb-3"
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
                  <a className="d-flex align-items-center">
                    <i className="fas fa-store ms-2"></i>
                    مدیریت حجره
                  </a>
                </Link>
              </li>
              <li
                className="d-flex align-items-center mb-3"
                onClick={(event) => {
                  activeLink(event);
                  setProfilePages(() => {
                    return {
                      editProfile: false,
                      favoritesList: false,
                      shoppingExperiences: false,
                      ordersPage: true,
                      orderDetail: false,
                    };
                  });
                }}
                onLoad={(event) => {
                  activeLink(event);
                }}
              >
                <i className="fas fa-box-open ms-2"></i>
                پیگیری سفارشات
              </li>
              <li
                className="d-flex align-items-center mb-3"
                onClick={(event) => {
                  activeLink(event);
                  setProfilePages(() => {
                    return {
                      editProfile: false,
                      ordersPage: false,
                      shoppingExperiences: false,
                      favoritesList: true,
                      orderDetail: false,
                    };
                  });
                }}
              >
                <i className="far fa-bookmark ms-2"></i>
                لیست علاقمندی ها
              </li>
            </ul>
          </div>
          {width < breakpoint && (
            <div className={styles.menu_mobile}>
              <ul className="d-flex justify-content-between align-items-center">
                <hr />
                <li
                  className="d-flex flex-column align-items-center"
                  onClick={(event) => {
                    activeLink(event);
                    setProfilePages(() => {
                      return {
                        ordersPage: false,
                        favoritesList: false,
                        shoppingExperiences: false,
                        editProfile: true,
                        orderDetail: false,
                      };
                    });
                  }}
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
                  onClick={(event) => {
                    activeLink(event);
                    setProfilePages(() => {
                      return {
                        editProfile: false,
                        favoritesList: false,
                        shoppingExperiences: false,
                        ordersPage: true,
                        orderDetail: false,
                      };
                    });
                  }}
                >
                  <i
                    className="fas fa-box-open"
                    style={{ fontSize: "18px" }}
                  ></i>

                  <span>سفارشات</span>
                </li>
                <li
                  className="d-flex flex-column align-items-center "
                  onClick={(event) => {
                    activeLink(event);
                    setProfilePages(() => {
                      return {
                        editProfile: false,
                        ordersPage: false,
                        shoppingExperiences: false,
                        favoritesList: true,
                        orderDetail: false,
                      };
                    });
                  }}
                >
                  <i
                    className="far fa-bookmark"
                    style={{ fontSize: "18px" }}
                  ></i>

                  <span>علاقمندی ها</span>
                </li>
                <li
                  className="d-flex flex-column align-items-center ms-4"
                  onClick={() => {
                    sessionStorage.removeItem("refreshToken");
                    sessionStorage.removeItem("accessToken");
                    router.push("/");
                    router.reload(window.location.pathname);
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
          <div className={`col-md-8 col-lg-9 col-12`}>
            {profilePages.editProfile && (
              <EditProfile
                dataProfile={dataProfile}
                setDataProfile={setDataProfile}
              />
            )}
            {profilePages.ordersPage && (
              <Oredrs
                setProfilePages={setProfilePages}
                setInvoiceId={setInvoiceId}
              />
            )}
            {profilePages.favoritesList && <FavoritesList />}
            {profilePages.orderDetail && <OrderDetail invoiceId={invoiceId} />}
          </div>
        </div>
      </div>
    </>
  );
};
// export
export default Profile;

Profile.Layout = ShopLayout;
