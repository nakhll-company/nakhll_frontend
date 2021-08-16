// node libraries
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
// components
import CustomLabel from '../../components/custom/customLabel';
// methods
import { ApiRegister } from '../../services/apiRegister/ApiRegister';
// styles
import styles from '../../styles/pages/productDetail/productDetail.module.scss';
/**
 * component detail 
 */
const fetchData = async (id) => {

    let response = await ApiRegister().apiRequest(
        null,
        "get",
        `/api/v1/product-page/details/${id}/`,
        true,
        ""
    );
    if (response.status === 200) {
        return response.data;
    } else {
        return false;
    }
};

const ProductDetail = ({ data }) => {
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
                                        <i className="fa fa-angle-left pl-3 pr-2" aria-hidden="true"></i>
                                    </a>
                                </Link>
                            )
                        })}
                </nav>
                {/* product detail right */}
                <div className="row">
                    <div className="col-lg-4">
                        <div className={styles.images_product}>
                            <Image src={data.image} alt="product" width="400" height="400" />
                        </div>
                        <div>
                            oioioji
                        </div>
                    </div>
                    {/* product detail left */}
                    <div className="col-lg-8 pr-lg-4">
                        <h1 className={styles.title_product}>{data.title}</h1>
                        <div className={styles.product_detail}>
                            <span className="ml-5">
                                <i className="fas fa-clipboard-list pl-3"></i>
                                تعداد فروش
                            </span>
                            <span className="ml-5">
                                <i className="far fa-clock pl-3"></i>
                                {data.status}
                            </span>
                            <span>
                                <i className="fas fa-map-marker-alt pl-3"></i>
                                {data.shop.state}
                            </span>
                        </div>
                        <div className="row py-5">
                            <div className={`col-4 ${styles.product_price}`}>
                                <del className={styles.old_price}>{data.old_price && data.price / 10}</del>
                                <b className="pb-1">{data.old_price ? data.old_price / 10 : data.price / 10} تومان</b>
                                <span className={styles.inventory}>فقط 5 عدد باقی مانده</span>
                            </div>
                            <div className={`col-3 ${styles.wrappper_button_buy}`}>
                                <button className={styles.button_buy}>خرید</button>
                            </div>
                        </div>
                        <div className="row pb-3">
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
                        <div className="row pt-5">
                            <h2>ویژگی های محصول</h2>
                            <CustomLabel type="normal" value={data.attributes[0].value} label="رنگ" />
                            <CustomLabel type="normal" value={data.attributes[1].value} label="نوع اتصال" />
                            <CustomLabel type="normal" value={`${data.length_with_packing} * ${data.height_with_packaging}`} label="سایز" />
                            <CustomLabel type="normal" value={data.net_weight} label="وزن خالص" />
                            <CustomLabel type="normal" value={data.weight_with_packing} label="وزن خالص با بسته بندی" />
                            <CustomLabel type="normal" value={data.attributes[2].value} label="مدت زمان اسندبای" />
                            <CustomLabel type="normal" value={data.attributes[3].value} label="مدت زمان شارژ" />
                            <CustomLabel type="normal" value={data.story} label="توضیحات" />
                        </div>
                        <div className="row py-5">
                            <div className={`col-12 ${styles.other_product}`}>
                                <h2>محصولات دیگر حجره {data.shop.title}</h2>
                                <Link href="/">
                                    <a>همه ی محصولات</a>
                                </Link>
                            </div>
                        </div>
                        <hr className="" />
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