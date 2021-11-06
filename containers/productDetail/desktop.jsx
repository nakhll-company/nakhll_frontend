// node libraries
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Assistent from "zaravand-assistent-number";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fragment, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch } from "react-redux";
// components
import CustomLabel from "../../components/custom/customLabel";
import CustomSlider from "../../components/custom/customSlider";
// methods
import { addToCart } from "./methods/addToCart";
import { getUserInfo } from "../../redux/actions/user/getUserInfo";
import { ApiRegister } from "../../services/apiRegister/ApiRegister";
// styles
import styles from "./productDetail.module.scss";
import ProductCard from "../../components/ProductCart/ProductCard";
// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from "swiper";
import AddFavorites from "../../components/AddFavorites";
// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);
/**
 * component detail
 */
const _asist = new Assistent();
const ProductDetailDesktop = ({ data }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  // State for contorol page

  const detail = data.detail;
  const comments = data.comments;
  const relatedProduct = data.relatedProduct;

  const [posts, setPosts] = useState([]);
  const [pageApi, setPageApi] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [productShop, setProductShop] = useState([]);

  let thumblineImage = [
    // { image: detail.shop.image_thumbnail_url, id: 0 },
    ...detail.banners,
  ];
  async function fetchProductShop() {
    let response = await ApiRegister().apiRequest(
      null,
      "GET",
      `/api/v1/landing/shop_products/${detail.shop.slug}/`,
      true,
      ""
    );
    if (response.status === 200) {
      setProductShop(response.data);
    } else {
      return false;
    }
  }

  const getMoreProduct = async () => {
    let moreProduct = await ApiRegister().apiRequest(
      null,
      "GET",
      `/api/v1/product-page/related_products/${id}/`,
      true,
      {
        page: pageApi,
        page_size: 10,
      }
    );
    if (moreProduct.data.next === null) {
      setHasMore(false);
    } else {
      setHasMore(true);
      setPageApi(pageApi + 1);
    }

    setPosts((post) => [...post, ...moreProduct.data.results]);
  };

  useEffect(async () => {
    getMoreProduct();
    fetchProductShop();
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
      <AddFavorites />
      <div>
        <div className="product-page-breadcrumb">
          <nav>
            <div className="container_N">
              <ol className={styles.bread_crumb}>
                {[
                  { title: "خانه", url: "/" },
                  {
                    title: detail?.new_category?.parents[0].name,
                    url: `/product?cat=${detail?.sub_market?.market.id}`,
                  },
                  {
                    title: detail?.new_category?.name,
                    url: `/product?cat=${detail?.sub_market?.id}`,
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

        <div className="container_N d-lg-flex px-0 mb-5">
          <div className="col-lg-4">
            <section className="mb-4">
              <div className="slider_product mt-0">
                <div className={styles.image_slider}>
                  <div style={{ height: "500px" }}>
                    <Swiper
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
                              width="400"
                              height="400"
                              alt="thumbline"
                              onClick={() => {
                                setShowModal((showModal) => !showModal);
                              }}
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
                              alt="thumbline"
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
                    <Link href={`/hojreh?shop=${detail.shop.slug}`}>
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
                      <Link href={`/hojreh?shop=${detail.shop.slug}`}>
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
                        <Link href={`/hojreh?shop=${detail.shop.slug}`}>
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
                        <Link href={`/hojreh?shop=${detail.shop.slug}`}>
                          <a
                            style={{ fontSize: ".8rem", color: "#3e3e3e" }}
                            className="mb-0"
                          >
                            {parseInt(detail.shop.registered_months) > 1
                              ? _asist.PSeparator(detail.shop.registered_months)
                              : _asist.PSeparator(1)}{" "}
                            ماه در نخل &nbsp;&nbsp;&nbsp;&nbsp;
                            {_asist.PSeparator(detail.shop.total_products)}{" "}
                            محصول{" "}
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="col-lg-8 pe-lg-4">
            <h1 className={styles.product_detail_title}>{detail.title}</h1>
            <div
              className="mb-4"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div
                className="ms-lg-5 mb-3 mb-lg-0"
                style={{ display: "flex", alignItems: "center" }}
              >
                <i
                  style={{ fontSize: "1.5rem", color: "#7d7d7d" }}
                  className="far fa-clock ms-3"
                ></i>
                <span style={{ fontSize: ".85rem" }}>{detail.status}</span>
              </div>
              <div
                className="ms-lg-5 mb-3 mb-lg-0"
                style={{ display: "flex", alignItems: "center" }}
              >
                <i
                  style={{ fontSize: "1.5rem", color: "#7d7d7d" }}
                  className="fas fa-map-marker-alt ms-3"
                ></i>
                <span style={{ fontSize: ".85rem" }}>
                  <span className="ltr"> از </span>
                  {detail.shop.state}، {detail.shop.big_city}
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
                    <del
                      style={{ fontSize: "1.25rem" }}
                      className={styles.old_price}
                    >
                      {detail.old_price &&
                        _asist.PSeparator(detail.old_price / 10)}
                    </del>
                  </div>
                  <div className={`${styles.price} d-inline-block  ms-2 `}>
                    <span>
                      {detail.price && _asist.PSeparator(detail.price / 10)}
                    </span>
                    <span> تومان </span>
                  </div>
                  <div style={{ fontSize: ".7rem" }}>
                    {detail.inventory > 0 &&
                      detail.inventory < 10 &&
                      `فقط ${_asist.PSeparator(
                        detail.inventory
                      )} عدد باقی مانده`}
                  </div>
                </div>
                <div style={{ flex: "0 0 44%" }} className="d-flex flex-column">
                  <button
                    className={`product-btn btn rounded-pill font-size1-5  p-1  ${styles.btn_tprimary}`}
                    onClick={async () => {
                      await addToCart(detail.id);
                      await dispatch(getUserInfo());
                    }}
                  >
                    خرید
                  </button>
                </div>
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
                  value={_asist.PSeparator(detail.net_weight)}
                  label="وزن خالص"
                />
                <CustomLabel
                  type="normal"
                  value={_asist.PSeparator(detail.weight_with_packing)}
                  label="وزن خالص با بسته بندی"
                />
                {detail.length_with_packing && (
                  <CustomLabel
                    type="normal"
                    value={`${_asist.PSeparator(
                      detail.length_with_packing
                    )} * ${_asist.PSeparator(detail.height_with_packaging)}`}
                    label="سایز"
                  />
                )}
                {detail.attributes.length > 0 &&
                  detail.attributes.map((value, index) => {
                    return (
                      <div key={index}>
                        <CustomLabel
                          type="normal"
                          value={_asist.PSeparator(value.value)}
                          label={
                            value.FK_Attribute && value.FK_Attribute.title
                              ? value.FK_Attribute.title
                              : ""
                          }
                        />
                      </div>
                    );
                  })}
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
              <Link href={`/hojreh?shop=${detail.shop.slug}`}>
                <a>همه ی محصولات</a>
              </Link>
            </div>
            <div className="row">
              <CustomSlider
                slides1200={4}
                data={productShop.map((value, index) => (
                  <ProductCard
                    col="12"
                    product={{
                      id: value.id,
                      imageUrl: value.image_thumbnail_url,
                      url: `/product/${value.slug}`,
                      title: value.title,
                      chamberTitle: value.shop.title,
                      chamberUrl: `/hojreh?shop=${value.shop.slug} `,
                      discount: value.discount,
                      price: value.price / 10,
                      discountNumber: value.old_price / 10,
                      is_advertisement: value.is_advertisement,
                      city: value.shop.city,
                    }}
                    key={index}
                  />
                ))}
              />
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
                              {_asist.number(value.date_create)}
                            </span>
                          </div>
                          <span>{value.description}</span>
                          {/* <div className={styles.likes_icons_wrapper}>
                                                    <span>
                                                        <i className="far fa-thumbs-up"></i>
                                                        {value.number_like > 0 && value.number_like}
                                                    </span>
                                                    <span>
                                                        <i className="far fa-thumbs-down fa-flip-horizontal"></i>
                                                    </span>
                                                </div> */}
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
                                    {_asist.number(value.date_create)}
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
                next={getMoreProduct}
                hasMore={hasMore}
                loader={<h3> منتظر بمانید...</h3>}
                endMessage={<h4>پایان</h4>}
                style={{ overflow: "hidden", padding: "10px" }}
              >
                <div className="row">
                  {posts.map((value, index) => (
                    <ProductCard
                      col="3"
                      padding={1}
                      product={{
                        id: value.id,
                        imageUrl: value.image_thumbnail_url,
                        url: `/product/${value.slug}`,
                        title: value.title,
                        chamberTitle: value.shop ? value.shop.title : " ",
                        chamberUrl: value.shop
                          ? `/hojreh?shop=${value.shop.slug} `
                          : " ",
                        discount: value.discount,
                        price: value.price / 10,
                        discountNumber: value.old_price / 10,
                        city: value.shop ? value.shop.city : " ",
                        is_advertisement: value.is_advertisement,
                      }}
                      key={index}
                    />
                  ))}
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
