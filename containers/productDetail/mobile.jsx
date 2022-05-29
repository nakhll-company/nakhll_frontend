// node libraries
import _ from "lodash";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch,useSelector } from "react-redux";
import { Fragment, useState, useEffect } from "react";
import SwiperCore, { EffectCube, Pagination } from "swiper";
import InfiniteScroll from "react-infinite-scroll-component";
// components
import AddFavorites from "../../components/AddFavorites";
import CustomLabel from "../../components/custom/customLabel";
import CustomSlider from "../../components/custom/customSlider";
import ProductCard from "../../components/ProductCart/ProductCard";
// methods
import { gtag } from "../../utils/googleAnalytics";
import diviedNumber from "../../utils/diviedNumber";
import { _addProduct } from "../../redux/actions/cart/_addProduct";
import { fetchProductShop, getMoreProduct } from "../../api/product/detail";
// styles
import styles from "./productDetail.module.scss";

SwiperCore.use([EffectCube, Pagination]);

const ProductDetailMobile = ({ data }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const detail = data.detail;
  const comments = data.comments;
  const { productSlug } = router.query;
  const relatedProduct = data.relatedProduct;
  const [pageApi, setPageApi] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [productShop, setProductShop] = useState([]);
  const userData = useSelector((state) => state.User.userInfo);
  const [posts, setPosts] = useState([]);

  const thumblineImage = [{ image: detail.image }, ...detail.banners];

  useEffect(() => {
    async function fetchData() {
      await getMoreProduct(
        productSlug,
        pageApi,
        setHasMore,
        setPageApi,
        setPosts
      );
      await fetchProductShop(detail, setProductShop);
    }
    fetchData();
    
    relatedProduct.length > 0 ? setPosts(...relatedProduct.results) : [];
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
        {/* bread_crumb */}
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
                      <Link href={`${value.url}`} passHref>
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
            {/* image_slider */}
            <section className="mb-4">
              <h1 className={`${styles.product_detail_title} px-3`}>
                {detail.title}
              </h1>
              <div className="px-2">
                <Swiper grabCursor={true} pagination={true}>
                  {thumblineImage.map((value, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <Image
                          src={value.image}
                          alt="thumbline"
                          width="350"
                          height="350"
                          className={styles.image_slider}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </section>
          </div>
          <div className="col-lg-8 pe-lg-4 px-3">
            <div className="mb-4">
              {detail.salable && detail.salable === true && (
                <div
                  className="ms-lg-5 mb-3 mb-lg-0"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Image
                    src="/productDetail/time.png"
                    alt="iran icon"
                    width="20"
                    height="23"
                  />
                  <span style={{ fontSize: ".85rem" }} className="me-3">
                    {detail.status}
                  </span>
                </div>
              )}
              <div
                className="ms-lg-5 mb-3 mb-lg-0"
                style={{ display: "flex", alignItems: "center" }}
              >
                {/* <i style={{ fontSize: "1.5rem", color: "#7d7d7d" }} className="fas fa-map-marker-alt ms-3"></i> */}
                <Image
                  src="/productDetail/map.png"
                  alt="iran icon"
                  width="19"
                  height="19"
                />
                <span style={{ fontSize: ".85rem" }} className="me-3">
                  <span className="ltr"> از </span>
                  {detail?.shop?.state?.name}، {detail?.shop?.big_city?.name}
                </span>
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
                <h2 className={`${styles.product_section_title} mt-4`}>
                  درباره محصول
                </h2>
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
            <div className="mb-1">
              <div
                className={`${styles.product_guide} ${styles.product_guide__deaktop} mt-4  mb-3`}
              >
                <Link href="/" passHref>
                  <a className={styles.product_guide__element}>
                    <Image
                      src="/Values/7_roz_zemanat.svg"
                      width={70}
                      height={90}
                      alt="۷ روز ضمانت بازگشت پول"
                    />
                    <span
                      style={{ fontSize: ".875rem" }}
                      className="d-block font-size-sm"
                    >
                      {" "}
                      ۷ روز ضمانت <br />
                      بازگشت وجه{" "}
                    </span>
                  </a>
                </Link>
                <Link href="/" passHref>
                  <a className={styles.product_guide__element}>
                    <Image
                      src="/Values/ertebat_mostaghim.svg"
                      width={70}
                      height={90}
                      alt="ارتباط مستقیم با حجره دار"
                    />
                    <span
                      style={{ fontSize: ".875rem" }}
                      className="d-block font-size-sm"
                    >
                      {" "}
                      ارتباط مستقیم <br />
                      با حجره دار{" "}
                    </span>
                  </a>
                </Link>
                <Link href="/" passHref>
                  <a className={styles.product_guide__element}>
                    <Image
                      src="/Values/sedaghat.svg"
                      width={70}
                      height={90}
                      alt=" صداقت در فروش"
                    />
                    <span
                      style={{ fontSize: ".875rem" }}
                      className="d-block font-size-sm"
                    >
                      {" "}
                      صداقت <br />
                      در فروش{" "}
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            <div>
              <div>
                <hr className="d-lg-none mb-4 mt-1" />
                <section>
                  <h2 className={styles.product_section_title}>
                    <span className="d-none d-lg-block">فروشنده این محصول</span>
                    <Link href={`/shop/${detail.shop.slug}`} passHref>
                      <a
                        className={`${styles.product_section_title__link} d-lg-none d-block`}
                      >
                        فروشنده این محصول
                      </a>
                    </Link>
                  </h2>
                  <div
                    className={`${styles.avatar_box}  align-items-start mb-2`}
                  >
                    <div className={` ${styles.avatar} mx-auto mb-2`}>
                      <Link href={`/shop/${detail.shop.slug}`} passHref>
                        <a>
                          <Image
                            src={detail.shop.image_thumbnail_url}
                            className={styles.shop_image}
                            alt="store image"
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
                              : diviedNumber(1)}{" "}
                            ماه در نخل &nbsp;&nbsp;&nbsp;&nbsp;
                            {diviedNumber(
                              detail.shop.total_products
                            )} محصول{" "}
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            {/* <hr /> */}
            <div className={`col-12 ${styles.other_product} mt-5`}>
              <h2>محصولات دیگر {detail.shop.title}</h2>
              <Link href={`/shop/${detail.shop.slug}`}>
                <a>همه ی محصولات</a>
              </Link>
            </div>
            <div className="row">
              {productShop.length > 0 && (
                <CustomSlider
                  slides1200={4}
                  data={productShop.map((value, index) => {
                    return (
                      value.FK_Shop !== undefined && (
                        <ProductCard col="12" dataProduct={value} key={index} />
                      )
                    );
                  })}
                />
              )}
            </div>
            <hr />
            {/* comments */}
            <section className="col-12">
              <div className={styles.comments_header}>
                <h3>نظر مشتریان ({comments.length} نظر)</h3>
              </div>
              {comments.length > 0 &&
                comments.map((value, index) => {
                  return (
                    <Fragment key={index}>
                      <div className={`${styles.comments_wrapper} mt-2 `}>
                        <div className={`${styles.avatar_wrapper} pt-2`}>
                          <Image
                            src="/productDetail/avatar.png"
                            alt="avatar"
                            width="50"
                            height="50"
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
                              className={`${styles.comments_wrapper} me-5 mb-3 mt-2`}
                              key={index}
                            >
                              <div className={`${styles.avatar_wrapper} pt-3`}>
                                <Image
                                  src="/productDetail/avatar.png"
                                  alt="avatar"
                                  width="50"
                                  height="50"
                                />
                              </div>
                              <div className={`${styles.comments_detail}`}>
                                <span>
                                  {value.user.first_name} {value.user.last_name}
                                </span>
                                <div
                                  className={styles.rating_wrapper}
                                  style={{ width: "200px" }}
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
                loader={<h3> منتظر بمانید ....</h3>}
                endMessage={<h4>پایان</h4>}
                style={{ overflow: "hidden" }}
              >
                <div className="row d-flex">
                  {posts.length > 0 &&
                    posts.map((oneProduct, index) => {
                      return (
                        oneProduct.FK_Shop !== undefined &&
                        oneProduct.FK_Shop !== null && (
                          <ProductCard
                            col="6"
                            dataProduct={oneProduct}
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
      <div className={`${styles.product_purchase} container py-3`}>
        <div className="ml-2">
          <div className={styles.price_mobile_decoration}>
            <span style={{ fontSize: "1.25rem" }}>
              {detail.old_price !== 0 && diviedNumber(detail.old_price)}
            </span>
          </div>
          <div className={styles.price_mobile}>
            <span>{diviedNumber(detail.price / 10)}</span>
            <span> تومان </span>
          </div>
        </div>
        {detail.salable && detail.salable === true && (
          <button
            className={`${styles.product_btn_mobile} btn btn-tprimary rounded-pill font-weight-bold font-size1-5 px-6 py-2 ev-add-to-cart`}
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
        )}
      </div>
    </div>
  );
};

export default ProductDetailMobile;
