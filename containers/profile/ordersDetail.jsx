// node libraries
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
                            <span>{detailData.address}</span>
                        </div>
                        <div className={`${styles.detail} p-3`}>
                            <span className="text-secondary mb-2"> شماره موبایل :</span>
                            <span> 09137053171 </span>
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
                                <span>کرمان</span>
                            </div>
                            <div className={`${styles.right} p-3`}>
                                <span className="text-secondary d-block mb-2">مبلغ کل سفارش</span>
                                <span>{_asist.PSeparator(value.final_price)}</span>
                            </div>
                            <div className={`${styles.price} p-3`}>
                                <span className="text-secondary d-block mb-2">هزینه ارسال سفارش</span>
                                <span>{_asist.PSeparator(value.logistic_price)}</span>
                            </div>
                            <div className={`${styles.images} p-3`}>
                                <span className="text-secondary mb-2"> کد رهگیری سفارش :</span>
                                <span>{_asist.number(value)}</span>
                            </div>
                            <div className={`${styles.detail} p-3`}>
                                {/* <span className="text-secondary mb-2"> شماره موبایل :</span>
                            <span> 09137053171 </span> */}

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