// node libraries
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import Rating from 'react-rating';
import InfiniteScroll from 'react-infinite-scroll-component';
// components
import CustomSlider from '../../components/custom/customSlider';
import ProductCard from '../../components/ProductCart/ProductCard';
import CustomLabel from '../../components/custom/customLabel';
import ProductImages from '../../containers/productDetail/productImages';
// methods
import { ApiRegister } from '../../services/apiRegister/ApiRegister';
// styles
import styles from '../../styles/pages/productDetail/productDetail.module.scss';

// fetch data
const fetchData = async (id) => {
    let response = await ApiRegister().apiRequest(
        null, "get",
        `/api/v1/product-page/details/${id}/`,
        true, "");
    if (response.status === 200) {
        return response.data;
    } else {
        return false;
    }
};
/**
 * component detail 
*/
const ProductDetail = ({ data }) => {

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
            <div className="container-fluid px-5">
                {/* bread crumb */}
                <nav className={`${styles.bread_crumb} col-12 mb-3`}>
                    {
                        [
                            { title: "خانه", url: "/" },
                            { title: data.sub_market.market.title, url: data.sub_market.market.url },
                            { title: data.sub_market.title, url: data.sub_market.url }
                        ].map((value, index) => {
                            return (
                                <Link key={index} href={`${value.url}`}>
                                    <a>
                                        {value.title}
                                        <i className="fa fa-angle-left px-3" aria-hidden="true"></i>
                                    </a>
                                </Link>
                            )
                        })}
                </nav>
                {/* product detail right */}
                <div className="row">
                    <div className="col-lg-4">
                        <div className={styles.images_product}>
                            <ProductImages productTitle={data.title} originalPhoto={data.image} thumbnailImages={data.banners} />
                        </div>
                        <div className={styles.store_wrapper}>
                            <div className={styles.report_wrapper}>
                                <Rating
                                    emptySymbol="fa fa-star-o"
                                    fullSymbol="fa fa-star"
                                    initialRating={5}
                                    readonly={true}
                                />
                                <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                            </div>
                            <div className={styles.store_section}>
                                <h2 className="text-muted">فروشنده این محصول</h2>
                                <div className={`col-12 ${styles.store_detail}`}>
                                    <div className={`col-2 ${styles.store_image}`}>
                                        <Image src={data.shop.image_thumbnail_url} alt="store image" width="100%" height="100%" />
                                    </div>
                                    <div className="mx-3">
                                        <span>{data.shop.title}</span><br />
                                        <span className="text-muted">{data.shop.state}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* product detail left */}
                    <div className="col-lg-8 pr-lg-4">
                        <h1 className={styles.title_product}>{data.title}</h1>
                        <div className={styles.product_detail}>
                            <span>
                                <i className="fas fa-clipboard-list px-3"></i>
                                تعداد فروش
                            </span>
                            <span className="mx-5">
                                <i className="far fa-clock px-3"></i>
                                {data.status}
                            </span>
                            <span>
                                <i className="fas fa-map-marker-alt px-3"></i>
                                {data.shop.state}
                            </span>
                        </div>
                        <div className="row py-5 px-2">
                            <div className={`col-5 ${styles.product_price}`}>
                                <del className={styles.old_price}>{data.old_price && data.price / 10}</del>
                                <b className="pb-1">{data.old_price ? data.old_price / 10 : data.price / 10} تومان</b>
                                <span className={styles.inventory}>فقط 5 عدد باقی مانده</span>
                            </div>
                            <div className={`col-3 ${styles.wrappper_button_buy}`}>
                                <button className={styles.button_buy}>خرید</button>
                            </div>
                        </div>
                        <div className="row pb-3 px-5">
                            <Link href="/">
                                <div className={`col-1 ${styles.product_links}`}>
                                    <Image src="/bascket.svg" alt="banners" width="45" height="45" />
                                    <a style={{ width: "100px", textAlign: "center" }}>هفت روز ضمانت بازگشت پول</a>
                                </div>
                            </Link>
                            <Link href="/">
                                <div className={`col-1 ${styles.product_links}`}>
                                    <Image src="/bascket.svg" alt="banners" width="45" height="45" />
                                    <a style={{ width: "120px", textAlign: "center" }}>محصولات با کیفیت خانگی و محلی</a>
                                </div>
                            </Link>
                            <Link href="/">
                                <div className={`col-1 ${styles.product_links}`}>
                                    <Image src="/bascket.svg" alt="banners" width="45" height="45" />
                                    <a style={{ width: "100px", textAlign: "center" }}>ارتباط مستقیم با غرفه دارها</a>
                                </div>
                            </Link>
                        </div>
                        <div className={`row pt-5 ${styles.wrapper_product_property}`}>
                            <h2>ویژگی های محصول</h2>
                            {data.attributes.length > 0 && <CustomLabel type="normal" value={data.attributes[0].value} label="رنگ" />}
                            {data.attributes.length > 0 && <CustomLabel type="normal" value={data.attributes[1].value} label="نوع اتصال" />}
                            <CustomLabel type="normal" value={`${data.length_with_packing} * ${data.height_with_packaging}`} label="سایز" />
                            <CustomLabel type="normal" value={data.net_weight} label="وزن خالص" />
                            <CustomLabel type="normal" value={data.weight_with_packing} label="وزن خالص با بسته بندی" />
                            {data.attributes.length > 0 && <CustomLabel type="normal" value={data.attributes[2].value} label="مدت زمان اسندبای" />}
                            {data.attributes.length > 0 && <CustomLabel type="normal" value={data.attributes[3].value} label="مدت زمان شارژ" />}
                            <CustomLabel type="normal" value={data.story} label="توضیحات" />
                        </div>
                        <div className="row py-5">
                            <div className={`col-12 ${styles.other_product}`}>
                                <h2>محصولات دیگر حجره {data.shop.title}</h2>
                                <Link href="/">
                                    <a>همه ی محصولات</a>
                                </Link>
                            </div>
                            <div className="col-12">
                                <CustomSlider
                                    slides1200={4}
                                    data={data.related_products.map((value, index) => {
                                        return (<ProductCard key={index} col="12" product={{
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
                                        }} />)
                                    })
                                    }
                                />
                            </div>

                        </div>
                        <hr className="" />
                        {/* comments */}
                        <section className="col-12">
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
                        </section>
                        {/* related product */}
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

export default ProductDetail;


// function server side
export async function getServerSideProps(context) {
    const data = await fetchData(context.params.id);
    return {
        props: { data },
    };
}
