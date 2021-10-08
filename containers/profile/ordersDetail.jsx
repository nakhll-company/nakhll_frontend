// node libraries
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Assistent from "zaravand-assistent-number";
// methods
import { getOrderDetail } from './methods/getOrderDetail';
// scss
import styles from './scss/ordersDetail.module.scss';

const _asist = new Assistent();

const OrdersDetail = ({ invoiceId }) => {

    const [detailData, setDetailData] = useState({});

    useEffect(async () => {
        await getOrderDetail(invoiceId, setDetailData);
    }, []);

    return (
        <div className={styles.main_wrapper}>
            <h6>جزئیات سفارش</h6>
            {Object.keys(detailData).length > 0 &&
                <>
                    <div className={`${styles.list_items} my-3`}>
                        <div className={`${styles.right} p-3`}>
                            <span className="d-block text-secondary mb-2">شماره سفارش</span>
                            <span className="text-dark font-weight-bold">{detailData.id}</span>
                        </div>
                        <div className={`${styles.price} p-3`}>
                            <span className="text-secondary d-block mb-2">تاریخ ثبت سفارش</span>
                            <span>{new Date(detailData.created_datetime).toLocaleDateString('fa-IR')}</span>
                        </div>
                        <div className={`${styles.right} p-3`}>
                            <span className="text-secondary d-block mb-2">مبلغ پرداخت شده</span>
                            <span>{_asist.PSeparator(detailData.final_price)}</span>
                        </div>
                        <div className={`${styles.price} p-3`}>
                            <span className="text-secondary d-block mb-2">گیرنده</span>
                            <span>{`${detailData.user.first_name} ${detailData.user.last_name}`}</span>
                        </div>
                        <div className={`${styles.images} p-3`}>
                            <span className="text-secondary mb-2"> آدرس :</span>
                            <span>{detailData.address.address}</span>
                        </div>
                        <div className={`${styles.detail} p-3`}>
                            <span className="text-secondary mb-2"> شماره موبایل :</span>
                            <span>{_asist.number(detailData.address.receiver_mobile_number)}</span>
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
                                <span>{`${detailData.address.big_city} / ${detailData.address.city}`}</span>
                            </div>
                            <div className={`${styles.right} p-3`}>
                                <span className="text-secondary d-block mb-2">مبلغ کل سفارش</span>
                                <span>{_asist.PSeparator(detailData.final_price)}</span>
                            </div>
                            <div className={`${styles.price} p-3`}>
                                <span className="text-secondary d-block mb-2">هزینه ارسال سفارش</span>
                                <span>{_asist.PSeparator(detailData.logistic_price)}</span>
                            </div>
                            <div className={`${styles.images} p-3`}>
                                <span className="text-secondary mb-2"> محصولات :</span>
                                <div className="d-flex align-items-center">
                                    <a href={`productDetail/${value.id}`}>
                                        <img src="https://statics.basalam.com/public/users/3lYjO/1910/CsP6MQHQZrJfG6oym2PlFNNyE2Sd6RqxVA47PxEp.jpeg_256X256X70.jpeg" alt="" style={{ width: "3.2rem", borderRadius: "1.5rem", marginLeft: "1rem" }} />
                                    </a>
                                    <div className="d-flex flex-column flex-md-row align-items-center">
                                        <a href={`productDetail/${value.id}`} className="mx-3">
                                            <span>{value.name}</span>
                                        </a>
                                        <div className="">
                                            <span className="mx-4">{_asist.PSeparator(value.price_with_discount)} تومان</span>
                                            <span>{_asist.number(value.count)} عدد</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr style={{ borderBottom: "1px solid rgb(119, 119, 119)", width: "100%" }} />
                            <div className={`${styles.detail} p-3`}>
                                <div className="d-flex justify-content-center">
                                    <Image src="/orderDetial/tik.svg" alt="" width="30" height="30" />
                                    <hr style={{ width: "50px", borderTop: "2px solid green" }} />
                                    <Image src="/orderDetial/box.svg" alt="" width="35" height="35" />
                                    <hr style={{ width: "50px", borderTop: "2px solid green" }} />
                                    <Image src="/orderDetial/tik.svg" alt="" width="30" height="30" />
                                    <hr style={{ width: "50px", borderTop: "2px solid green" }} />
                                    <Image src="/orderDetial/car.svg" alt="" width="35" height="35" />
                                    <hr style={{ width: "50px", borderTop: "2px solid green" }} />
                                    <Image src="/orderDetial/tik.svg" alt="" width="30" height="30" />
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