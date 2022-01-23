// node libraries
import Link from 'next/link';
import Assistent from "zaravand-assistent-number";
// components
import MobileHeader from '../../components/mobileHeader';
import CustomLabel from '../../components/custom/customLabel';
// methods
import { buyWaitOrders } from './methods/buyWaitOrders';
// scss
import styles from './scss/mobileLanding.module.scss';

const _asist = new Assistent();

const OrdersLandingMobile = ({ id, ordersData }) => {
    return (
        <div>
            <MobileHeader type="back" title="فرودها" />
            <div className={styles.wrapper_cart}>
                <div className={styles.wrapper_links}>
                    <Link href={`/fp/options/landing/${id}`}>
                        <a className={styles.link_add}>
                            جزئیات قابلیت
                        </a>
                    </Link>
                    <Link href={`/fp/options/landing/${id}`}>
                        <a className={styles.link_add}>
                            لیست قابلیت
                        </a>
                    </Link>
                </div>
                {(ordersData && ordersData.length > 0) ? ordersData.map((value, index) => {
                    return (
                        <div className={styles.cart_item} key={index}>
                            <div className="d-flex justify-content-between align-items-center">
                                <CustomLabel type="normal" value={_asist.number(index + 1)} label="شماره" />
                                <CustomLabel type="normal" value={`${_asist.number(value.bought_price_per_unit)} / در ${value.bought_unit === "month" && "یک ماه"}`} label="مبلغ" />
                            </div>
                            <CustomLabel type="normal" value={_asist.number(value.start_datetime)} label="تاریخ شروع" />
                            <CustomLabel type="normal" value={_asist.number(value.expire_datetime)} label="تاریخ انقضا" />
                            <CustomLabel type="normal" value={value.is_demo === true ? "فعال" : "غیرفعال"} label="دمو" />
                            <div className="d-flex justify-content-end align-items-center">
                                {value.status === "completed" ?
                                    "تکمیل شده" :
                                    <span>
                                        در انتظار پرداخت
                                        <button className={`${styles.button_buy} mx-3`} onClick={() => {
                                            buyWaitOrders(value.id);
                                        }}>خرید</button>
                                    </span>
                                }
                            </div>
                        </div>
                    )
                }) :
                    <tr>
                        <td colSpan="7">
                            داده ای موجود نیست
                        </td>
                    </tr>
                }
            </div>
        </div>
    );
}
// export
export default OrdersLandingMobile;