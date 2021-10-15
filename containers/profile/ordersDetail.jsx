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

    useEffect(async () => {
        await getOrderDetail(invoiceId, setDetailData, setLoading);
    }, []);

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
                            <span>{_asist.PSeparator(detailData.final_price / 10)} تومان</span>
                        </div>
                        <div className={`${styles.price} p-3`}>
                            <span className="text-secondary d-block mb-2">گیرنده</span>
                            <span>{`${detailData.user.first_name} ${detailData.user.last_name}`}</span>
                        </div>
                        <div className={`${styles.images} p-3`}>
                            <span className="text-secondary mb-2"> آدرس :</span>
                            <span>{detailData.address && detailData.address.address}</span>
                        </div>
                        <div className={`${styles.detail} p-3`}>
                            <span className="text-secondary mb-2"> شماره موبایل :</span>
                            <span>{detailData.address && _asist.number(detailData.address.receiver_mobile_number)}</span>
                        </div>
                    </div>
                    {detailData.items.length > 0 && detailData.items.map((value, index) => (
                        <div className={styles.list_items} key={index}>
                            <div style={{ flexBasis: "100%", padding: "10px", borderBottom: "1px solid #dfdfdf" }}>
                                <h6>سفارش شماره {_asist.number(index + 1)}</h6>
                            </div>
                            <div className={`${styles.right} p-3`}>
                                <span className="d-block text-secondary mb-2">نام حجره</span>
                                <span className="text-dark font-weight-bold">{value.shop_name}</span>
                            </div>
                            <div className={`${styles.price} p-3`}>
                                <span className="text-secondary d-block mb-2">استان</span>
                                <span>{detailData.address && `${detailData.address.big_city} / ${detailData.address.city}`}</span>
                            </div>
                            <div className={`${styles.right} p-3`}>
                                <span className="text-secondary d-block mb-2">مبلغ کل سفارش</span>
                                <span>{_asist.PSeparator(detailData.final_price / 10)} تومان</span>
                            </div>
                            <div className={`${styles.price} p-3`}>
                                <span className="text-secondary d-block mb-2">هزینه ارسال سفارش</span>
                                <span>{_asist.PSeparator(detailData.logistic_price / 10)} تومان</span>
                            </div>
                            <div className={`${styles.images} p-3`}>
                                <span className="text-secondary mb-2"> محصولات :</span>
                                <div className="d-flex align-items-center">
                                    <Link href={`productDetail/${value.id}`}>
                                        <a>
                                            {value.image_thumbnail && <img src={value.image_thumbnail} alt="" style={{ width: "3.2rem", borderRadius: "1.5rem", marginLeft: "1rem" }} />}
                                        </a>
                                    </Link>
                                    <div className="d-flex flex-column flex-md-row align-items-center">
                                        <Link href={`productDetail/${value.id}`}>
                                            <a className="mx-3">
                                                <span>{value.name}</span>
                                            </a>
                                        </Link>
                                        <div className="">
                                            <span className="mx-4">{_asist.PSeparator(value.price_with_discount / 10)} تومان</span>
                                            <span>{_asist.number(value.count)} عدد</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr style={{ borderBottom: "1px solid rgb(119, 119, 119)", width: "100%" }} />
                            <div className={`${styles.detail} p-3`}>
                                <div className="d-flex justify-content-center">
                                    <div className="d-flex flex-column">
                                        <Image src="/orderDetial/tik.svg" alt="" width="30" height="30" />
                                        <span className="mt-2">تایید حجره دار</span>
                                    </div>
                                    <div className="d-flex align-items-start">
                                        <hr />
                                        <Image src="/orderDetial/box.svg" alt="" width="35" height="35" />
                                        <hr />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <Image src="/orderDetial/tik.svg" alt="" width="30" height="30" />
                                        <span className="mt-2">آماده سازی سفارش</span>
                                    </div>
                                    <div className="d-flex align-items-start">
                                        <hr />
                                        <Image src="/orderDetial/car.svg" alt="" width="35" height="35" />
                                        <hr />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <Image src="/orderDetial/tik.svg" alt="" width="30" height="30" />
                                        <span className="mt-2">تایید مشتری</span>
                                    </div>
                                </div>
                                <div className="d-flex flex-column align-items-center mt-4">
                                    کد رهگیری سفارش شما : {_asist.number(detailData.payment_request_datetime)}<br />
                                    <Link href={`https://tracking.post.ir/?id=${detailData.payment_request_datetime}`}>
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