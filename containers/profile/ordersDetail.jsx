// node libraries
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Assistent from "zaravand-assistent-number";
// methods
import { getOrderDetail } from './methods/getOrderDetail';
// scss
import styles from './scss/ordersDetail.module.scss';

const _asist = new Assistent();

const OrdersDetail = ({ invoiceId }) => {

    const [loading, setLoading] = useState(true);
    const [detailData, setDetailData] = useState({});

    useEffect(() => {
        async function fetchData() {
            await getOrderDetail(invoiceId, setDetailData, setLoading);
        }
        fetchData();
    }, [invoiceId]);

    let jsonAddress = detailData.address_json || "{}";
    jsonAddress = JSON.parse(jsonAddress);

    return (
        <div className={styles.main_wrapper}>
            <h6>جزئیات سفارش</h6>
            {loading ?
                <div className="d-flex flex-column">
                    <Image src="/loading.svg" alt="loading" width="40" height="40" />
                </div> :
                Object.keys(detailData).length > 0 &&
                <>
                    <div className={`${styles.list_items} my-3`}>
                        <div className={`${styles.right} p-3`}>
                            <span className="d-block text-secondary mb-2">شماره سفارش</span>
                            <span className="text-dark font-weight-bold">{_asist.number(detailData.id)}</span>
                        </div>
                        <div className={`${styles.price} p-3`}>
                            <span className="text-secondary d-block mb-2">تاریخ ثبت سفارش</span>
                            <span>{`${_asist.number(detailData.created_date_jalali)} - ${_asist.number(detailData.created_time_jalali)}`}</span>
                        </div>
                        <div className={`${styles.right} p-3`}>
                            <span className="text-secondary d-block mb-2">مبلغ پرداخت شده</span>
                            <span>{_asist.PSeparator(`${detailData.final_price / 10} تومان`)}</span>
                        </div>
                        <div className={`${styles.price} p-3`}>
                            <span className="text-secondary d-block mb-2">کوپن اعمال شده</span>
                            <span>{_asist.PSeparator(`${detailData.coupons_total_price} تومان`)}</span>
                        </div>
                        <div className={`${styles.right} p-3`}>
                            <span className="text-secondary d-block mb-2">هزینه ارسال</span>
                            <span>{_asist.PSeparator(`${detailData.logistic_price / 10} تومان`)}</span>
                        </div>
                        <div className={`${styles.price} p-3`}>
                            <span className="text-secondary d-block mb-2">گیرنده</span>
                            <span>{`${detailData.items[0].buyer}`}</span>
                        </div>
                        <div className={`${styles.images} p-3`}>
                            <span className="text-secondary mb-2"> آدرس گیرنده :</span>
                            <span>{jsonAddress.state && `${jsonAddress.state} | ${jsonAddress.big_city} | ${jsonAddress.city} | ${jsonAddress.address}`}</span>
                        </div>
                        <div className={`${styles.detail} p-3`}>
                            <span className="text-secondary mb-2"> شماره موبایل :</span>
                            <span>{jsonAddress && _asist.number(jsonAddress.receiver_mobile_number)}</span>
                        </div>
                    </div>
                    {detailData.items.length > 0 && detailData.items.map((value, index) => (
                        <div className={styles.list_items} key={index}>
                            <div style={{ flexBasis: "100%", padding: "10px", borderBottom: "1px solid #dfdfdf" }}>
                                <h6>محصول شماره {_asist.number(index + 1)}</h6>
                            </div>
                            <div className={`${styles.right} p-3`}>
                                <span className="d-block text-secondary mb-2">نام حجره</span>
                                <span className="text-dark font-weight-bold">{value.shop_name}</span>
                            </div>
                            <div className={`${styles.price} p-3`}>
                                <span className="text-secondary d-block mb-2">وزن محصول</span>
                                <span>{_asist.number(value.weight)}</span>
                            </div>
                            <div className={`${styles.right} p-3`}>
                                <span className="text-secondary d-block mb-2">مبلغ</span>
                                <span>{_asist.PSeparator(`${value.price_without_discount / 10} تومان`)}</span>
                            </div>
                            <div className={`${styles.price} p-3`}>
                                <span className="text-secondary d-block mb-2">مبلغ با تخفیف</span>
                                <span>{_asist.PSeparator(`${value.price_with_discount / 10} تومان`)}</span>
                            </div>
                            <div className={`${styles.images} p-3`}>
                                <span className="text-secondary mb-2"> محصول :</span>
                                <div className="d-flex align-items-center">
                                    <Link href={`/shop/${value.shop_slug}/product/${value.slug}`}>
                                        <a>
                                            {value.image && <Image src={value.image} alt="" width={50} height={50} style={{ borderRadius: "1.5rem", marginLeft: "1rem" }} />}
                                        </a>
                                    </Link>
                                    <div className="d-flex flex-column flex-md-row align-items-center">
                                        <Link href={`/shop/${value.shop_slug}/product/${value.slug}`}>
                                            <a className="mx-3">
                                                <span>{value.name}</span>
                                            </a>
                                        </Link>
                                        <div className="">
                                            {/* <span className="mx-4">{_asist.PSeparator(`${value.price_with_discount / 10} تومان`)}</span> */}
                                            <span>{_asist.number(value.count)} عدد</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr style={{ borderBottom: "1px solid rgb(119, 119, 119)", width: "100%" }} />
                            <div className={`${styles.detail} p-3`}>
                                <div className="d-flex justify-content-center">
                                    <div className="d-flex flex-column">
                                        <Image src={detailData.status === "wait_store_approv" ? "/orderDetial/tik_black.svg" : "/orderDetial/tik.svg"} alt="" width="30" height="30" />
                                        <span className="mt-2">تایید حجره دار</span>
                                    </div>
                                    <div className="d-flex align-items-start">
                                        <hr />
                                        <Image src={detailData.status === "wait_store_approv" ? "/orderDetial/box_black.svg" : "/orderDetial/box.svg"} alt="" width="35" height="35" />
                                        <hr />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <Image src={(detailData.status === "wait_store_checkout" || detailData.status === "completed" || detailData.status === "wait_customer_approv") ? "/orderDetial/tik.svg" : "/orderDetial/tik_black.svg"} alt="" width="30" height="30" />
                                        <span className="mt-2">آماده سازی سفارش</span>
                                    </div>
                                    <div className="d-flex align-items-start">
                                        <hr />
                                        <Image src={(detailData.status === "wait_store_checkout" || detailData.status === "completed" || detailData.status === "wait_customer_approv") ? "/orderDetial/car.svg" : "/orderDetial/truke_black.svg"} alt="" width="35" height="35" />
                                        <hr />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <Image src={(detailData.status === "wait_store_checkout" || detailData.status === "completed") ? "/orderDetial/tik.svg" : "/orderDetial/tik_black.svg"} alt="" width="30" height="30" />
                                        <span className="mt-2">تایید مشتری</span>
                                    </div>
                                </div>
                                <div className="d-flex flex-column align-items-center mt-4">
                                    <span style={{ textAlign: "center" }}>
                                        کد رهگیری سفارش شما : {_asist.number(value.barcode)}
                                    </span><br />
                                    <Link href={`https://tracking.post.ir/?id=${value.barcode}`}>
                                        <a target="_blank" style={{ border: "1px solid gray", borderRadius: "25px", padding: "5px 10px" }}>پیگیری سفارش در سامانه پست</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </>
            }
        </div>
    );
}
// export
export default OrdersDetail;