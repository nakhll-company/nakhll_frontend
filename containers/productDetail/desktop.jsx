// node libraries
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import Rating from 'react-rating';
import InfiniteScroll from 'react-infinite-scroll-component';
// components
import CustomSlider from '../../components/custom/customSlider';
import ProductCard from "../../components/ProductCart/ProductCard";
import CustomLabel from "../../components/custom/customLabel";
import ProductImages from "./productImages";
// methods
import { ApiRegister } from '../../services/apiRegister/ApiRegister';
// styles
import styles from './productDetail.module.scss';


/**
 * component detail 
*/
const ProductDetailDesktop = ({ data }) => {

    let product = {
        imageUrl: "/image/faile.webp",
        url: "/hamzeh",
        title: "نبات گیاهی متبرک مشهد با نی چوبی 1 کیلویی برکت هشتم",
        chamberTitle: "گالری سنگ و نقره شاپرک",
        chamberUrl: "/azizzadeh",
        rate: 10,
        commentCount: 102,
        discount: 25,
        price: 107000,
        discountNumber: 190000,
        // sales: 52,
        city: "کرمان",
    };
    const [posts, setPosts] = useState(Array.from({ length: 20 }));
    const [hasMore, setHasMore] = useState(true);

    const getMorePost = async () => {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/todos?_start=${posts.length}&_limit=10`
        );
        const newPosts = await res.json();
        setPosts((post) => [...post, ...newPosts]);
    };
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


                <div className="product-page-breadcrumb">
                    <nav>
                        <div className="container">
                            <ol className={styles.bread_crumb}>
                                {
                                    [
                                        { title: "خانه", url: "/" },
                                        { title: data.sub_market.market.title, url: data.sub_market.market.url },
                                        { title: data.sub_market.title, url: data.sub_market.url }
                                    ].map((value, index) => {
                                        return (
                                            <li className={styles.breadcrumb_item}>
                                                <Link key={index} href={`${value.url}`}>
                                                    <a>
                                                        {value.title}
                                                        <i className="fa fa-angle-left px-3" aria-hidden="true"></i>
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
                        <section className="mb-4">
                            <div className="slider_product mt-0">
                                <div className={styles.image_slider}>
                                    <div className={styles.image_slider_default_media_box}>
                                        <ProductImages productTitle={data.title} originalPhoto={data.shop.image_thumbnail_url} thumbnailImages={data.banners} />

                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className={styles.store_wrapper}>
                            <div className="d-none d-lg-block">
                                <hr className="d-lg-none mb-4 mt-4" ></hr>
                                <section>
                                    <h2 className={styles.product_section_title}>
                                        <span className="d-none d-lg-block">فروشنده این محصول</span>
                                        <Link href="/">
                                            <a className={`${styles.product_section_title__link} d-lg-none d-block`} >{data.shop.title}</a>
                                        </Link>

                                    </h2>
                                    <div className={`${styles.avatar_box}  align-items-start mb-2`}>
                                        <div className={` ${styles.avatar} mx-auto mb-2`}>
                                            <Link href="/">
                                                <a>
                                                    <Image src={data.shop.image_thumbnail_url} alt="store image" width="100%" height="100%" />
                                                </a>
                                            </Link>
                                        </div>

                                        <div className={`${styles.avatar_box_content} align-self-center`}>
                                            <div>
                                                <Link href="/">
                                                    <span style={{ fontSize: ".9rem", color: "#3e3e3e" }} className="mb-0"> {data.shop.title}</span>

                                                </Link>
                                            </div>
                                            <div>
                                                <Link href="/">
                                                    <span style={{ fontSize: ".8rem", color: "#3e3e3e" }} className="mb-0"> {data.shop.state}</span>

                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>




                    </div>



                    <div className="col-lg-8 pe-lg-4">
                        <h1 className={styles.product_detail_title}>{data.title}</h1>


                        <div className="mb-4">

                            <div className="d-lg-inline-block ms-lg-5 mb-3 mb-lg-0">
                                <i style={{ fontSize: "1.5rem", color: "#7d7d7d" }} className="fas fa-clipboard-list "></i>
                                <span style={{ fontSize: ".85rem" }}>
                                    <span className="ltr">  تعداد  </span>
                                    فروش
                                </span>
                            </div>


                            <div className="d-lg-inline-block ms-lg-5 mb-3 mb-lg-0">
                                <i style={{ fontSize: "1.5rem", color: "#7d7d7d" }} className="far fa-clock "></i>
                                <span style={{ fontSize: ".85rem" }}>
                                    {data.status}
                                </span>
                            </div>


                            <div className="d-lg-inline-block ms-lg-5 mb-3 mb-lg-0">
                                <i style={{ fontSize: "1.5rem", color: "#7d7d7d" }} className="fas fa-map-marker-alt  "></i>
                                <span style={{ fontSize: ".85rem" }}>
                                    <span className="ltr">  از  </span>
                                    {data.shop.state}
                                </span>
                            </div>

                            {/* <div style={{fontSize:".85rem" , color:"#7d7d7d"}} className="mt-lg-4">
                                        <div>
                                            <div className="d-inline">
                                                <span>
                                                    <i className="fas fa-map-marker-alt  "></i>
                                                    <span style={{fontWeight:"500"}}>ارسال رایگان</span>
                                                </span>
                                            </div>

                                        </div>
                                    </div> */}



                        </div>

                        <div style={{ marginTop: "50px" }}>
                            <div style={{ width: "33.33rem", maxWidth: "100%" }} className="d-flex align-items-center my-4 ">
                                <div style={{ flexBasis: "50%" }} className="ms-5 ps-4">
                                    <div className={styles.primary_price}>
                                        <del style={{ fontSize: "1.25rem" }} className={styles.old_price}>{data.old_price && data.price / 10}</del>

                                    </div>
                                    <div className={`${styles.price} d-inline-block  ms-2 `}>
                                        <span>{data.old_price ? data.old_price / 10 : data.price / 10}</span>
                                        <span>  تومان  </span>
                                    </div>
                                    <div style={{ fontSize: ".7rem" }}>
                                        فقط 5 عدد باقی مانده
                                    </div>

                                </div>
                                <div style={{ flex: "0 0 44%" }} className="d-flex flex-column">
                                    <button className={`product-btn btn rounded-pill font-size1-5  p-1  ${styles.btn_tprimary}`}>خرید</button>

                                </div>


                            </div>

                        </div>

                        <div className="d-none d-lg-block mb-4">
                            <div className={`${styles.product_guide} ${styles.product_guide__deaktop} mt-4  mb-5 `}>
                                <Link href="/" >
                                    <a className={styles.product_guide__element}>
                                        <Image className="mb-2" src={data.shop.image_thumbnail_url} width="100%" height="100%" alt="7 روز ضمانت بازگشت پول" />
                                        <span style={{ fontSize: ".875rem" }} className="d-block font-size-sm"> 7 روز ضمانت بازگشت پول </span>
                                    </a>

                                </Link>
                                <Link href="/" >
                                    <a className={styles.product_guide__element}>
                                        <Image className="mb-2" src={data.shop.image_thumbnail_url} width="100%" height="100%" alt="7 روز ضمانت بازگشت پول" />
                                        <span style={{ fontSize: ".875rem" }} className="d-block font-size-sm"> محصولات باکیفیت خانگی و محلی </span>
                                    </a>

                                </Link>
                                <Link href="/" >
                                    <a className={styles.product_guide__element}>
                                        <Image className="mb-2" src={data.shop.image_thumbnail_url} width="100%" height="100%" alt="7 روز ضمانت بازگشت پول" />
                                        <span style={{ fontSize: ".875rem" }} className="d-block font-size-sm"> ارتباط مستقیم با غرفه‌دارها </span>
                                    </a>

                                </Link>
                            </div>
                        </div>

                        <section className="mb-4">
                            <h2 className={styles.product_section_title}>ویژگی‌های محصول</h2>
                            <div className={styles.product_attributes}>
                                {data.attributes.length > 0 && <CustomLabel type="normal" value={data.attributes[0].value} label="رنگ" />}
                                {data.attributes.length > 0 && <CustomLabel type="normal" value={data.attributes[1].value} label="نوع اتصال" />}
                                <CustomLabel type="normal" value={`${data.length_with_packing} * ${data.height_with_packaging}`} label="سایز" />
                                <CustomLabel type="normal" value={data.net_weight} label="وزن خالص" />
                                <CustomLabel type="normal" value={data.weight_with_packing} label="وزن خالص با بسته بندی" />
                                {data.attributes.length > 0 && <CustomLabel type="normal" value={data.attributes[2].value} label="مدت زمان اسندبای" />}
                                {data.attributes.length > 0 && <CustomLabel type="normal" value={data.attributes[3].value} label="مدت زمان شارژ" />}
                            </div>
                        </section>

                        <div>
                            <div>
                                <h2 className={styles.product_section_title}>درباره محصول</h2>
                                <CustomLabel type="normal" value={data.story} label="توضیحات" />

                            </div>
                        </div>
                        <hr className="my-5" />

                        <div className={`col-12 ${styles.other_product}`}>

                            <h2>محصولات دیگر حجره {data.shop.title}</h2>
                            <Link href="/">
                                <a>همه ی محصولات</a>
                            </Link>
                        </div>

                        <hr className="my-5" />


                        {/* comments */}
                        {/* <section className="col-12">
                            <div className={styles.comments_header}>
                                <h3>نظر مشتریان({data.comments.length} نظر)</h3>
                                <Link href="/">
                                    <a>مشاهده همه</a>
                                </Link>
                            </div>
                            {data.comments.length > 0 && data.comments.map((value, index) => {
                                return (
                                    <div className={styles.comments_wrapper} key={index}>
                                        <div className={styles.avatar_wrapper}>
                                            <Image src="/productDetail/avatar.png" alt="avatar" width="70" height="70" />
                                        </div>
                                        <div className={styles.comments_detail}>
                                            <span>{value.user.first_name} {value.user.last_name}</span>
                                            <div className={styles.rating_wrapper}>
                                                <Rating
                                                    emptySymbol="fa fa-star-o fa-2x"
                                                    fullSymbol="fa fa-star fa-2x"
                                                    initialRating={5}
                                                    readonly={true}
                                                />
                                                <span className="text-muted" style={{ fontSize: "13px" }}>{value.date_create}</span>
                                            </div>
                                            <span>{value.description}</span>
                                            <div className={styles.likes_icons_wrapper}>
                                                <span>
                                                    <i className="far fa-thumbs-up"></i>
                                                    {value.number_like > 0 && value.number_like}
                                                </span>
                                                <span>
                                                    <i className="far fa-thumbs-down fa-flip-horizontal"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </section> */}




                        <hr className="my-5" />

                        <section>
                            <h2 className="my-5" style={{
                                fontSize: "1rem",
                                fontWeight: "700"
                            }}>سایر محصولات مشابه</h2>
                            <InfiniteScroll
                                dataLength={posts.length}
                                next={getMorePost}
                                hasMore={hasMore}
                                loader={<h3> Loading...</h3>}
                                endMessage={<h4>Nothing more to show</h4>}
                            >
                                {posts.map((value, index) => (
                                    <div className="row" key={index}>
                                        <ProductCard product={product} />
                                        <ProductCard product={product} />
                                        <ProductCard product={product} />
                                        <ProductCard product={product} />
                                    </div>
                                ))}
                            </InfiniteScroll>
                            {/* <InfiniteScroll
                                dataLength={fakeData.items.length}
                                next={fetchMoreData}
                                hasMore={fakeData.hasMore}
                                loader={<h4>Loading...</h4>}
                                endMessage={
                                    <p style={{ textAlign: "center" }}>
                                        <b>Yay! You have seen it all</b>
                                    </p>
                                }
                            >
                                {data.related_products.map((value, index) => (
                                    <ProductCard key={index} col="3" xl="3" product={{
                                        imageUrl: value.image_thumbnail_url,
                                        url: value.url,
                                        title: value.title,
                                        chamberTitle: value.shop.title,
                                        chamberUrl: value.shop.url,
                                        rate: 10,
                                        commentCount: 102,
                                        discount: value.discount,
                                        price: value.price,
                                        discountNumber: value.old_price,
                                        city: value.shop.state,
                                    }} />
                                ))}
                            </InfiniteScroll> */}
                        </section>



                    </div>




                </div>


            </div>





        </div>
    );
}

export default ProductDetailDesktop;


