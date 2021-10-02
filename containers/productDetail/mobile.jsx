// node libraries
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';
import Assistent from "zaravand-assistent-number";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fragment, useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
// components
import CustomLabel from "../../components/custom/customLabel";
import ProductCard from "../../components/ProductCart/ProductCard";
import CustomSlider from '../../components/custom/customSlider';
// methods
import { ApiRegister } from '../../services/apiRegister/ApiRegister';
// styles
import styles from './productDetail.module.scss';
/**
 * component detail 
*/
// import Swiper core and required modules
import SwiperCore, {
    EffectCube, Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCube, Pagination]);
const _asist = new Assistent();
const ProductDetailMobile = ({ data }) => {

    const router = useRouter();
    const { id } = router.query;

    const detail = data.detail;
    const comments = data.comments;
    const relatedProduct = data.relatedProduct;
    const [hasMore, setHasMore] = useState(true);
    const [pageApi, setPageApi] = useState(1);
    const [posts, setPosts] = useState([...relatedProduct.results]);
    const [productShop, setProductShop] = useState([]);
    let thumblineImage = [{ image: detail.shop.image_thumbnail_url, id: 0 }, ...detail.banners];


    async function fetchProductShop() {
        let response = await ApiRegister().apiRequest(
            null, "GET", `/api/v1/landing/shop_products/${detail.shop.slug}/`, true, ""
        );
        if (response.status === 200) {
            setProductShop(response.data);
        } else {
            return false;
        }
    }

    const getMoreProduct = async () => {
        let moreProduct = await ApiRegister().apiRequest(
            null, "GET", `/api/v1/product-page/related_products/${id}/`, true, {
            page: pageApi,
            page_size: 10,
        }
        );
        if (moreProduct.data.next === null) {
            setHasMore(false);
        } else {
            setHasMore(true);
            setPageApi(pageApi + 1)
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
            <div>
                {/* bread_crumb */}
                <div className="product-page-breadcrumb">
                    <nav>
                        <div className="container">
                            <ol className={styles.bread_crumb}>
                                {
                                    [
                                        { title: "خانه", url: "/" },
                                        { title: detail.sub_market.market.title, url: detail.sub_market.market.url },
                                        { title: detail.sub_market.title, url: detail.sub_market.url }
                                    ].map((value, index) => {
                                        return (
                                            <li className={styles.breadcrumb_item} key={index}>
                                                <Link href={`${value.url}`} passHref>
                                                    <a>
                                                        {value.title}
                                                        {index !== 2 && <i className="fa fa-angle-left px-3" aria-hidden="true"></i>}
                                                    </a>
                                                </Link>
                                            </li>
                                        )
                                    })}
                            </ol>
                        </div>
                    </nav>
                </div>
                <div className="container d-lg-flex px-0 mb-5">
                    <div className="col-lg-4">
                        {/* image_slider */}
                        <section className="mb-4">
                            <h1 className={`${styles.product_detail_title} px-3`}>{detail.title}</h1>
                            <div>
                                <Swiper grabCursor={true} pagination={true}>
                                    {thumblineImage.map((value, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <Image src={value.image} alt="thumbline" width="400" height="400" />
                                            </SwiperSlide>
                                        )

                                    })}
                                </Swiper>
                            </div>
                        </section>
                    </div>
                    <div className="col-lg-8 pe-lg-4 px-3">
                        <div className="mb-4">
                            {/* <div className="ms-lg-5 mb-3 mb-lg-0" style={{ display: "flex", alignItems: "center" }}>
                                <i style={{ fontSize: "1.5rem", color: "#7d7d7d" }} className="fas fa-clipboard-list ms-3"></i>
                                <span style={{ fontSize: ".85rem" }}>
                                    <span className="ltr">  تعداد  </span>
                                    فروش
                                </span>
                            </div> */}
                            <div className="ms-lg-5 mb-3 mb-lg-0" style={{ display: "flex", alignItems: "center" }}>
                                {/* <i style={{ fontSize: "1.5rem", color: "#7d7d7d" }} className="far fa-clock ms-3"></i> */}
                                <Image src="/productDetail/map.png" alt="iran icon" width="20" height="23" />
                                <span style={{ fontSize: ".85rem" }} className="me-3">
                                    {detail.status}
                                </span>
                            </div>
                            <div className="ms-lg-5 mb-3 mb-lg-0" style={{ display: "flex", alignItems: "center" }}>
                                {/* <i style={{ fontSize: "1.5rem", color: "#7d7d7d" }} className="fas fa-map-marker-alt ms-3"></i> */}
                                <Image src="/productDetail/time.png" alt="iran icon" width="19" height="19" />
                                <span style={{ fontSize: ".85rem" }} className="me-3">
                                    <span className="ltr">  از  </span>
                                    {detail.shop.state}، {detail.shop.big_city}
                                </span>
                            </div>
                            {/* <div className="ms-lg-5 mb-3 mb-lg-0" style={{ display: "flex", alignItems: "center" }}>
                                <Image src="/productDetail/iran.png" alt="iran icon" width="20" height="19" />
                                <span style={{ fontSize: ".85rem" }} className="me-3">
                                    <span className="ltr">  به  </span>
                                    محدوده ارسال
                                </span>
                            </div> */}
                        </div>
                        <section className="mb-4">
                            <h2 className={styles.product_section_title}>ویژگی‌های محصول</h2>
                            <div className={styles.product_attributes}>
                                <CustomLabel type="normal" value={_asist.PSeparator(detail.net_weight)} label="وزن خالص" />
                                <CustomLabel type="normal" value={_asist.PSeparator(detail.weight_with_packing)} label="وزن خالص با بسته بندی" />
                                {detail.length_with_packing && <CustomLabel type="normal" value={`${_asist.PSeparator(detail.length_with_packing)} * ${_asist.PSeparator(detail.height_with_packaging)}`} label="سایز" />}
                                {detail.attributes.length > 0 && detail.attributes.map((value, index) => {
                                    return (
                                        <div key={index}>
                                            <CustomLabel type="normal" value={_asist.PSeparator(value.value)} label={value.FK_Attribute.title} />
                                        </div>
                                    )
                                })}
                            </div>
                        </section>
                        <div className="mt-4">
                            <h2 className={styles.product_section_title}>قیمت محصول</h2>
                            <div className="d-flex align-items-center">
                                <h4 className="ms-4" style={{ color: "#224D82" }}>{_asist.PSeparator(detail.price / 10)} تومان</h4>
                                <del style={{ fontSize: "1.25rem" }} >{_asist.PSeparator(detail.old_price / 10)} تومان</del>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h2 className={`${styles.product_section_title} mt-4`}>درباره محصول</h2>
                                <CustomLabel type="normal" value={detail.story} label="" />
                            </div>
                        </div>
                        <div className=" mb-4">
                            <div className={`${styles.product_guide} ${styles.product_guide__deaktop} mt-4  mb-5 `}>
                                <Link href="/" passHref>
                                    <a className={styles.product_guide__element}>
                                        <Image className="mb-2" src={detail.shop.image_thumbnail_url} width="100%" height="100%" alt="7 روز ضمانت بازگشت پول" />
                                        <span style={{ fontSize: ".875rem" }} className="d-block font-size-sm"> 7 روز ضمانت بازگشت پول </span>
                                    </a>
                                </Link>
                                <Link href="/" passHref>
                                    <a className={styles.product_guide__element}>
                                        <Image className="mb-2" src={detail.shop.image_thumbnail_url} width="100%" height="100%" alt="7 روز ضمانت بازگشت پول" />
                                        <span style={{ fontSize: ".875rem" }} className="d-block font-size-sm"> محصولات باکیفیت خانگی و محلی </span>
                                    </a>
                                </Link>
                                <Link href="/" passHref>
                                    <a className={styles.product_guide__element}>
                                        <Image className="mb-2" src={detail.shop.image_thumbnail_url} width="100%" height="100%" alt="7 روز ضمانت بازگشت پول" />
                                        <span style={{ fontSize: ".875rem" }} className="d-block font-size-sm"> ارتباط مستقیم با غرفه‌دارها </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div >
                                <hr className="d-lg-none mb-2 mt-2" />
                                <section>
                                    <h2 className={styles.product_section_title}>
                                        <span className="d-none d-lg-block">فروشنده این محصول</span>
                                        <Link href={detail.shop.url} passHref>
                                            <a className={`${styles.product_section_title__link} d-lg-none d-block`}>فروشنده این محصول</a>
                                        </Link>
                                    </h2>
                                    <div className={`${styles.avatar_box}  align-items-start mb-2`}>
                                        <div className={` ${styles.avatar} mx-auto mb-2`}>
                                            <Link href={detail.shop.url} passHref>
                                                <a>
                                                    <Image src={detail.shop.image_thumbnail_url} className={styles.shop_image} alt="store image" width="100%" height="100%" />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className={`${styles.avatar_box_content} align-self-center`}>
                                            <div>
                                                <Link href={detail.shop.url} passHref>
                                                    <span style={{ fontSize: ".9rem", color: "#3e3e3e" }} className="mb-0"> {detail.shop.title}</span>
                                                </Link>
                                            </div>
                                            <div>
                                                <Link href={detail.shop.url}>
                                                    <span style={{ fontSize: ".8rem", color: "#3e3e3e" }} className="mb-0">{parseInt(detail.shop.registered_months) > 1 ? _asist.PSeparator(detail.shop.registered_months) : _asist.PSeparator(1)} ماه در نخل &nbsp;&nbsp;&nbsp;&nbsp;{_asist.PSeparator(detail.shop.total_products)} محصول </span>
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
                            <Link href={`${detail.shop.url}`}>
                                <a>همه ی محصولات</a>
                            </Link>
                        </div>
                        <div className="row">
                            <CustomSlider
                                slides1200={4}
                                data={productShop.map((value, index) => (<ProductCard col="12" product={{
                                    imageUrl: value.image_thumbnail_url,
                                    url: `/productDetail/${value.slug}`,
                                    title: value.title,
                                    // chamberTitle: value.shop.title,
                                    // chamberUrl: value.shop.url,
                                    discount: value.discount !== 0 ? _asist.PSeparator(value.discount) : "",
                                    price: _asist.PSeparator(value.price),
                                    discountNumber: value.discount !== 0 ? _asist.PSeparator(value.old_price) : "",
                                    // city: value.shop.city,
                                }} key={index} />))
                                } />
                        </div>
                        <hr />
                        {/* comments */}
                        <section className="col-12">
                            <div className={styles.comments_header}>
                                <h3>نظر مشتریان({comments.length} نظر)</h3>
                                {/* <Link href="/">
                                    <a>مشاهده همه</a>
                                </Link> */}
                            </div>
                            {comments.length > 0 && comments.map((value, index) => {
                                return (
                                    <Fragment key={index}>
                                        <div className={`${styles.comments_wrapper} mt-2 `}>
                                            <div className={`${styles.avatar_wrapper} pt-2`}>
                                                <Image src="/productDetail/avatar.png" alt="avatar" width="50" height="50" />
                                            </div>
                                            <div className={styles.comments_detail}>
                                                <span>{value.user.first_name} {value.user.last_name}</span>
                                                <div className={styles.rating_wrapper}>
                                                    <span className="text-muted" style={{ fontSize: "13px" }}>{value.date_create}</span>
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
                                        {value.comment_replies.length > 0 && value.comment_replies.map((value, index) => {
                                            return (
                                                <div className={`${styles.comments_wrapper} me-5 mb-3 mt-2`} key={index}>
                                                    <div className={`${styles.avatar_wrapper} pt-3`}>
                                                        <Image src="/productDetail/avatar.png" alt="avatar" width="50" height="50" />
                                                    </div>
                                                    <div className={`${styles.comments_detail}`}>
                                                        <span>{value.user.first_name} {value.user.last_name}</span>
                                                        <div className={styles.rating_wrapper} style={{ width: "200px" }}>
                                                            <span className="text-muted" style={{ fontSize: "13px" }}>{value.date_create}</span>
                                                        </div>
                                                        <span>{value.description}</span>
                                                    </div>
                                                </div>)
                                        })}
                                    </Fragment>
                                );
                            })}
                        </section>
                        <hr className="my-5" />
                        <section>
                            <h2 className="my-5" style={{
                                fontSize: "1rem",
                                fontWeight: "700"
                            }}>سایر محصولات مشابه</h2>
                            <InfiniteScroll
                                dataLength={posts.length}
                                next={getMoreProduct}
                                hasMore={hasMore}
                                loader={<h3> منتظر بمانید ....</h3>}
                                endMessage={<h4>پایان</h4>}
                                style={{ overflow: "hidden" }}
                            >
                                <div className="row d-flex">
                                    {posts.map((value, index) => (
                                        <ProductCard col="6" product={{
                                            id: value.id,
                                            imageUrl: value.image_thumbnail_url,
                                            url: `/productDetail/${value.slug}`,
                                            title: value.title,
                                            chamberTitle: value.shop.title,
                                            chamberUrl: value.shop.url,
                                            discount: value.discount !== 0 ? _asist.PSeparator(value.discount) : "",
                                            price: _asist.PSeparator(value.price),
                                            discountNumber: value.discount !== 0 ? _asist.PSeparator(value.old_price) : "",
                                            city: value.shop.city,
                                        }} key={index} />
                                    ))}
                                </div>
                            </InfiniteScroll>
                        </section>
                    </div>
                </div>
            </div>
            <div className={`${styles.product_purchase} container py-3`}>
                <div className="ml-2">
                    <div className={styles.price_mobile}>
                        <span>{_asist.PSeparator(detail.price)}</span>
                        <span>تومان</span>
                    </div>
                    <div className={styles.price_mobile_decoration}>
                        <span style={{ fontSize: "1.25rem" }}>{detail.old_price && _asist.PSeparator(detail.old_price)}</span>
                    </div>
                </div>
                <button className={`${styles.product_btn_mobile} btn btn-tprimary rounded-pill font-weight-bold font-size1-5 px-6 py-2 ev-add-to-cart`}>خرید</button>
            </div>
        </div >
    );
}

export default ProductDetailMobile;