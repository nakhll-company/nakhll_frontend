// node libraries
import _ from "lodash";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fragment, useEffect, useState } from "react";
import SwiperCore, { Navigation, Pagination, Thumbs } from "swiper";
import InfiniteScroll from "react-infinite-scroll-component";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
// components
import AddFavorites from "../../components/AddFavorites";
import CustomLabel from "../../components/custom/customLabel";
import CustomSlider from "../../components/custom/customSlider";
import ProductCard from "../../components/productCart/ProductCard";
// methods
import { gtag } from "../../utils/googleAnalytics";
import { diviedNumber } from "../../utils/diviedNumber";
import { _addProduct } from "../../redux/actions/cart/_addProduct";
import { fetchProductShop, getMoreProduct } from "../../api/product/detail";
// styles
import styles from "./productDetail.module.scss";

SwiperCore.use([Navigation, Thumbs, Pagination]);

const ProductDetailDesktop = ({ data }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const detail = data.detail;
  const comments = data.comments;
  const { productSlug } = router.query;
  const [posts, setPosts] = useState([]);
  const [pageApi, setPageApi] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [productShop, setProductShop] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const userData = useSelector((state) => state.User.userInfo);

  const thumblineImage = [{ image: detail.image }, ...detail.banners];

  useEffect(() => {
    function fetchData() {
      getMoreProduct(productSlug, pageApi, setHasMore, setPageApi, setPosts);
      fetchProductShop(detail, setProductShop);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {!_.isEmpty(userData) && <AddFavorites />}

      <div>
        <div className="product-page-breadcrumb">
          <nav>
            <div className="container">
              <ol className={styles.bread_crumb}>
                {[
                  { title: "خانه", url: "/" },
                  {
                    title:
                      detail.category && detail.category.parents.length > 0
                        ? detail.category.parents[0].name
                        : "",
                    url:
                      detail.category &&
                      detail.category.parents.length > 0 &&
                      `/search?q=&category=${detail?.category?.parents[0].id}`,
                  },
                  {
                    title:
                      detail.category && detail.category.name
                        ? detail.category.name
                        : "",
                    url: `/search?q=&category=${detail?.category?.id}`,
                  },
                ].map((value, index) => {
                  return (
                    <li className={styles.breadcrumb_item} key={index}>
                      <Link href={`${value.url}`}>
                        <a>
                          {value.title}
                          {index !== 2 && (
                            <i
                              className="fa fa-angle-left px-3"
                              aria-hidden="true"
                            ></i>
                          )}
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </div>
          </nav>
        </div>

        <div className="container d-lg-flex px-0 mb-5">
          <div className="col-lg-4">
            <section className="mb-4">
              <div className="slider_product mt-0">
                <div className={styles.image_slider}>
                  <div style={{ height: "500px" }}>
                    <Swiper
                      navigation
                      pagination={{ clickable: true }}
                      style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                        height: "400px",
                        width: "400px",
                      }}
                      spaceBetween={10}
                      thumbs={{ swiper: thumbsSwiper }}
                      className="mySwiper2"
                    >
                      {thumblineImage.map((value, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <Image
                              src={value.image}
                              width="390"
                              height="390"
                              alt={detail.title}
                            />
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                    <Swiper
                      style={{ height: "100px", width: "400px" }}
                      onSwiper={setThumbsSwiper}
                      spaceBetween={10}
                      slidesPerView={4}
                      freeMode={true}
                      watchSlidesProgress={true}
                      className="mySwiper"
                    >
                      {thumblineImage.map((value, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <Image
                              src={value.image}
                              width="100"
                              height="100"
                              alt={detail.title}
                            />
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                </div>
              </div>
            </section>

            <div className={styles.store_wrapper}>
              <div className="d-none d-lg-block">
                <hr className="d-lg-none mb-4 mt-4"></hr>
                <section>
                  <h2 className={styles.product_section_title}>
                    <span className="d-none d-lg-block">فروشنده این محصول</span>
                    <Link href={`/shop/${detail.shop.slug}`}>
                      <a
                        className={`${styles.product_section_title__link} d-lg-none d-block`}
                      >
                        {detail.shop.title}
                      </a>
                    </Link>
                  </h2>
                  <div
                    className={`${styles.avatar_box}  align-items-start mb-2`}
                  >
                    <div className={` ${styles.avatar} mx-auto mb-2`}>
                      <Link href={`/shop/${detail.shop.slug}`}>
                        <a>
                          <Image
                            src={detail.shop.image_thumbnail_url}
                            className={styles.shop_image}
                            alt={detail.shop.title}
                            width="100%"
                            height="100%"
                          />
                        </a>
                      </Link>
                    </div>
                    <div
                      className={`${styles.avatar_box_content} align-self-center`}
                    >
                      <div>
                        <Link href={`/shop/${detail.shop.slug}`}>
                          <a
                            style={{ fontSize: ".9rem", color: "#3e3e3e" }}
                            className="mb-0"
                          >
                            {" "}
                            {detail.shop.title}
                          </a>
                        </Link>
                      </div>
                      <div>
                        <Link href={`/shop/${detail.shop.slug}`}>
                          <a
                            style={{ fontSize: ".8rem", color: "#3e3e3e" }}
                            className="mb-0"
                          >
                            {parseInt(detail.shop.registered_months) > 1
                              ? diviedNumber(detail.shop.registered_months)
                              : 1}{" "}
                            ماه در نخل &nbsp;&nbsp;&nbsp;&nbsp;
                            {diviedNumber(
                              detail.shop.products_count
                            )} محصول{" "}
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="col-lg-8 pe-lg-4 mx-5">
            <h1 className={styles.product_detail_title}>{detail.title}</h1>
            <div
              className="mb-4"
              style={{ display: "flex", alignItems: "center" }}
            >
              {detail.salable && detail.salable === true && (
                <div
                  className="ms-lg-5 mb-3 mb-lg-0"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <BiTimeFive
                    size={19}
                    color="#000"
                    style={{ marginLeft: "5px" }}
                  />
                  <span style={{ fontSize: ".85rem" }}>{detail.status}</span>
                </div>
              )}
              <div
                className="ms-lg-5 mb-3 mb-lg-0"
                style={{ display: "flex", alignItems: "center" }}
              >
                <FaMapMarkedAlt
                  size={19}
                  color="#000"
                  style={{ margin: "0 10px" }}
                />
                <span style={{ fontSize: ".85rem" }}>
                  <span className="ltr"> از </span>
                  {detail?.shop?.state?.name}، {detail?.shop?.big_city?.name}
                </span>
              </div>
            </div>
            <div style={{ marginTop: "50px" }}>
              <div
                style={{ width: "33.33rem", maxWidth: "100%" }}
                className="d-flex align-items-center my-4 "
              >
                <div style={{ flexBasis: "50%" }} className="ms-5 ps-4">
                  <div className={styles.primary_price}>
                    <span
                      style={{ fontSize: "1.25rem" }}
                      className={styles.discount_badge}
                    >
                      {detail.old_price !== 0 && detail.discount}
                      <span>%</span>
                    </span>
                    <del
                      style={{ fontSize: "1.25rem" }}
                      className={styles.old_price}
                    >
                      {detail.old_price !== 0 &&
                        diviedNumber(detail.old_price / 10)}
                    </del>
                  </div>
                  <div className={`${styles.price} d-inline-block  ms-2 `}>
                    <span>
                      {detail.price && diviedNumber(detail.price / 10)}
                    </span>
                    <span> تومان </span>
                  </div>
                  <div style={{ fontSize: ".7rem" }}>
                    {detail.inventory > 0 &&
                      detail.inventory < 10 &&
                      `فقط ${diviedNumber(detail.inventory)} عدد باقی مانده`}
                  </div>
                </div>
                {detail.salable && detail.salable === true && (
                  <div
                    style={{ flex: "0 0 44%" }}
                    className="d-flex flex-column"
                  >
                    <button
                      className={`product-btn btn rounded-pill font-size1-5  p-1  ${styles.btn_tprimary}`}
                      onClick={async () => {
                        await dispatch(_addProduct(detail.id));
                        gtag("event", "دکمه خرید", {
                          event_category: `‍‍‍‍${detail.title}`,
                          event_label: "زدن روی دکمه خرید",
                        });
                      }}
                    >
                      خرید
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="d-none d-lg-block mb-4">
              <div
                className={`${styles.product_guide} ${styles.product_guide__deaktop} mt-4  mb-5 `}
              >
                <Link href="/">
                  <a className={styles.product_guide__element}>
                    <Image
                      className="mb-2"
                      src="/Values/7_roz_zemanat.svg"
                      width={90}
                      height={150}
                      alt="۷ روز ضمانت بازگشت پول"
                    />
                    <span
                      style={{ fontSize: ".875rem" }}
                      className="d-block font-size-sm"
                    >
                      {" "}
                      ۷ روز ضمانت بازگشت وجه{" "}
                    </span>
                  </a>
                </Link>
                <Link href="/">
                  <a className={styles.product_guide__element}>
                    <Image
                      className="mb-2"
                      src="/Values/ertebat_mostaghim.svg"
                      width={85}
                      height={145}
                      alt="ارتباط مستقیم با حجره دار"
                    />
                    <span
                      style={{ fontSize: ".875rem" }}
                      className="d-block font-size-sm"
                    >
                      {" "}
                      ارتباط مستقیم با حجره دار{" "}
                    </span>
                  </a>
                </Link>
                <Link href="/">
                  <a className={styles.product_guide__element}>
                    <Image
                      className="mb-2"
                      src="/Values/sedaghat.svg"
                      width={90}
                      height={150}
                      alt=" صداقت در فروش"
                    />
                    <span
                      style={{ fontSize: ".875rem" }}
                      className="d-block font-size-sm"
                    >
                      {" "}
                      صداقت در فروش{" "}
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            <section className="mb-4">
              <h2 className={styles.product_section_title}>ویژگی‌های محصول</h2>
              <div className={styles.product_attributes}>
                <CustomLabel
                  type="normal"
                  value={diviedNumber(detail.net_weight)}
                  label="وزن خالص"
                />

                <CustomLabel
                  type="normal"
                  value={diviedNumber(detail.weight_with_packing)}
                  label="وزن خالص با بسته بندی"
                />

                {detail.length_with_packing !== "0" && (
                  <CustomLabel
                    type="normal"
                    value={`${diviedNumber(
                      detail.length_with_packing
                    )} * ${diviedNumber(detail.height_with_packaging)}`}
                    label="سایز"
                  />
                )}
              </div>
            </section>
            <div>
              <div>
                <h2 className={styles.product_section_title}>درباره محصول</h2>
                {detail.story || detail.description ? (
                  <CustomLabel
                    type="normal"
                    value={
                      detail.description ? detail.description : detail.story
                    }
                    label=""
                  />
                ) : (
                  <span>ندارد</span>
                )}
              </div>
            </div>
            <hr className="my-5" />
            <div className={`col-12 ${styles.other_product}`}>
              <h2>محصولات دیگر {detail.shop.title}</h2>
              <Link href={`/shop/${detail.shop.slug}`}>
                <a>همه ی محصولات</a>
              </Link>
            </div>
            <div className="row">
              {productShop.length > 0 && (
                <CustomSlider
                  slides1200={4}
                  data={productShop.map((oneProduct, index) => {
                    return (
                      oneProduct.FK_Shop !== undefined &&
                      oneProduct.FK_Shop !== null && (
                        <ProductCard
                          col="12"
                          dataProduct={oneProduct}
                          key={index}
                        />
                      )
                    );
                  })}
                />
              )}
            </div>
            <hr className="my-5" />
            {/* comments */}
            <section className="col-12">
              <div className={styles.comments_header}>
                <h3>نظر مشتریان({comments.length} نظر)</h3>
              </div>
              {comments.length > 0 &&
                comments.map((value, index) => {
                  return (
                    <Fragment key={index}>
                      <div className={styles.comments_wrapper}>
                        <div className={styles.avatar_wrapper}>
                          <Image
                            src="/productDetail/avatar.png"
                            alt="avatar"
                            width="60"
                            height="60"
                          />
                        </div>
                        <div className={styles.comments_detail}>
                          <span>
                            {value.user.first_name} {value.user.last_name}
                          </span>
                          <div className={styles.rating_wrapper}>
                            <span
                              className="text-muted"
                              style={{ fontSize: "13px" }}
                            >
                              {value.date_create}
                            </span>
                          </div>
                          <span>{value.description}</span>
                        </div>
                      </div>
                      {value.comment_replies.length > 0 &&
                        value.comment_replies.map((value, index) => {
                          return (
                            <div
                              className={`${styles.comments_wrapper} me-5`}
                              key={index}
                            >
                              <div className={`${styles.avatar_wrapper} pt-3`}>
                                <Image
                                  src="/productDetail/avatar.png"
                                  alt="avatar"
                                  width="60"
                                  height="60"
                                />
                              </div>
                              <div className={styles.comments_detail}>
                                <span>
                                  {value.user.first_name} {value.user.last_name}
                                </span>
                                <div
                                  className={styles.rating_wrapper}
                                  style={{ width: "550px" }}
                                >
                                  <span
                                    className="text-muted"
                                    style={{ fontSize: "13px" }}
                                  >
                                    {value.date_create}
                                  </span>
                                </div>
                                <span>{value.description}</span>
                              </div>
                            </div>
                          );
                        })}
                    </Fragment>
                  );
                })}
            </section>
            <hr className="my-5" />
            <section>
              <h2
                className="my-5"
                style={{
                  fontSize: "1rem",
                  fontWeight: "700",
                }}
              >
                سایر محصولات مشابه
              </h2>
              <InfiniteScroll
                dataLength={posts.length}
                next={() => {
                  getMoreProduct(
                    productSlug,
                    pageApi,
                    setHasMore,
                    setPageApi,
                    setPosts
                  );
                }}
                hasMore={hasMore}
                loader={<h3> منتظر بمانید...</h3>}
                endMessage={<h4>به پایان رسیدیم...</h4>}
                style={{ overflow: "hidden", padding: "10px" }}
              >
                <div className="row">
                  {posts.length > 0 &&
                    posts.map((value, index) => {
                      return (
                        value.FK_Shop !== undefined &&
                        value.FK_Shop !== null && (
                          <ProductCard
                            col="3"
                            padding={1}
                            dataProduct={value}
                            key={index}
                          />
                        )
                      );
                    })}
                </div>
              </InfiniteScroll>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
// export
export default ProductDetailDesktop;
