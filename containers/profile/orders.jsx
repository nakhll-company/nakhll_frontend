// node libraries
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Assistent from "zaravand-assistent-number";
// components
import MobileOrders from './mobileOrders';
import useViewport from '../../components/viewPort';
// methods
import { getUserOrders } from './methods/getUserOrders';
import { checkTimeOrder } from './methods/checkTimeOrder';
// scss
import styles from './scss/orders.module.scss';
/**
 * orders in profile
 */
const _asist = new Assistent();

const Orders = ({ setProfilePages, setInvoiceId }) => {

    const [loading, setLoading] = useState(true);
    const [ordersList, setOrdersList] = useState([]);
    const { width } = useViewport();
    const breakpoint = 900;
    const router = useRouter();

    useEffect(async () => {
        await getUserOrders(setOrdersList, setLoading);
    }, []);

    return (
        <>
            {width < breakpoint ?
                <MobileOrders loading={loading} ordersList={ordersList} setProfilePages={setProfilePages} setInvoiceId={setInvoiceId} /> :
                <div className={styles.main_wrapper}>
                    <h1>لیست سفارشات</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>ردیف</th>
                                <th>شماره سفارش</th>
                                <th>تاریخ ثبت</th>
                                <th>مبلغ پرداخت شده</th>
                                <th>لیست محصولات</th>
                                <th>وضعیت</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ?
                                <tr>
                                    <td colSpan={7} className={styles.one_colmne}>
                                        <Image src="/loading.svg" alt="loding" width="40" height="40" />
                                    </td>
                                </tr>
                                :
                                ordersList.length > 0 ? ordersList.map((value, index) => {
                                    let statusOrder = checkTimeOrder(value.created_time_jalali);
                                    return (
                                        <tr>
                                            <td>{_asist.number(index + 1)}</td>
                                            <td>{_asist.number(value.id)}</td>
                                            <td>{_asist.number(value.created_date_jalali)}</td>
                                            <td>{value.status !== "awaiting_paying" && value.status !== "canceled" &&
                                                _asist.PSeparator(`${value.final_price / 10} تومان`)}</td>
                                            <td>
                                                {value.items.length > 0 && value.items.map((value, index) => (
                                                    <Link href={`productDetail/${value.slug}`}>
                                                        <a target="_blank" key={index}>
                                                            {value.image_thumbnail && <Image src={value.image_thumbnail}
                                                                alt={value.name} key={index} className={styles.image_product}
                                                                width="35" height="35" />}
                                                        </a>
                                                    </Link>
                                                ))}
                                            </td>
                                            <td>
                                                <span class="d-block px-3 py-2" style={{ backgroundColor: "#ddd", borderRadius: "50rem" }}>
                                                    <span style={{ color: "red", cursor: "pointer" }} onClick={() => {
                                                        router.push(`/cart/payment?id=${value.id}`);
                                                    }}>{value.status === "awaiting_paying" && statusOrder === "haveTime" && "در انتظار پرداخت"}</span>
                                                    <span style={{ color: "#006060", cursor: "pointer" }} onClick={async () => {
                                                        await setInvoiceId(value.id);
                                                        await setProfilePages((pre) => {
                                                            return {
                                                                editProfile: false,
                                                                ordersPage: false,
                                                                shoppingExperiences: false,
                                                                favoritesList: false,
                                                                orderDetail: true
                                                            }
                                                        });
                                                    }}>{(value.status === "completed" || value.status === "wait_store_checkout") && "تکمیل شده"}</span>
                                                    <span style={{ color: "#006060", cursor: "pointer" }} onClick={async () => {
                                                        await setInvoiceId(value.id);
                                                        await setProfilePages((pre) => {
                                                            return {
                                                                editProfile: false,
                                                                ordersPage: false,
                                                                shoppingExperiences: false,
                                                                favoritesList: false,
                                                                orderDetail: true
                                                            }
                                                        });
                                                    }}>{value.status === "wait_store_approv" && "در انتظار تأیید فروشگاه"}</span>
                                                    <span style={{ color: "#006060", cursor: "pointer" }} onClick={async () => {
                                                        await setInvoiceId(value.id);
                                                        await setProfilePages((pre) => {
                                                            return {
                                                                editProfile: false,
                                                                ordersPage: false,
                                                                shoppingExperiences: false,
                                                                favoritesList: false,
                                                                orderDetail: true
                                                            }
                                                        });
                                                    }}>{value.status === "preparing_product" && "در حال آماده سازی"}</span>
                                                    <span style={{ color: "#006060", cursor: "pointer" }} onClick={async () => {
                                                        await setInvoiceId(value.id);
                                                        await setProfilePages((pre) => {
                                                            return {
                                                                editProfile: false,
                                                                ordersPage: false,
                                                                shoppingExperiences: false,
                                                                favoritesList: false,
                                                                orderDetail: true
                                                            }
                                                        });
                                                    }}>{value.status === "wait_customer_approv" && "در انتظار تأیید مشتری"}</span>
                                                    <span style={{ color: "gray", cursor: "pointer" }}>{value.status === "canceled" && "لغو شده"}</span>
                                                </span>
                                            </td>
                                        </tr>
                                    )
                                }) :
                                    <tr>
                                        <td colSpan={7}>سفارشی موجود نیست</td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>
            }
        </>
    );
}
// export
export default Orders;