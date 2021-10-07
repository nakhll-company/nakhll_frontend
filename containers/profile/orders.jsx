// node libraries
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Assistent from "zaravand-assistent-number";
// components
import MobileOrders from './mobileOrders';
import useViewport from '../../components/viewPort';
// methods
import { getUserOrders } from './methods/getUserOrders';
// scss
import styles from './scss/orders.module.scss';
/**
 * orders in profile
 */
const _asist = new Assistent();

const Orders = ({ setProfilePages }) => {

    const [ordersList, setOrdersList] = useState([]);

    const { width } = useViewport();
    const breakpoint = 900;
    const router = useRouter();

    useEffect(async () => {
        await getUserOrders(setOrdersList);
    }, []);

    return (
        <>
            {width < breakpoint ?
                <MobileOrders ordersList={ordersList} setProfilePages={setProfilePages} /> :
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
                            {ordersList.length > 0 && ordersList.map((value, index) => (
                                <tr>
                                    <td>{_asist.number(index + 1)}</td>
                                    <td>{_asist.number(value.id)}</td>
                                    <td>{new Date(value.created_datetime).toLocaleDateString('fa-IR')}</td>
                                    <td>{_asist.PSeparator(value.final_price)}</td>
                                    <td>
                                        {value.items.length > 0 && value.items.map((value, index) => (
                                            <a href={`productDetail/${value.slug}`} target="_blank" key={index}>
                                                {value.image_thumbnail && <Image src={value.image_thumbnail} alt={value.name} key={index} width="30" height="30" />}
                                            </a>
                                        ))}
                                    </td>
                                    <td>
                                        <span class="d-block px-3 py-2" style={{ backgroundColor: "#ddd", borderRadius: "50rem" }}>
                                            {value.status === "completed" && <i class="fas fa-check mx-3"></i>}
                                            <span style={{ color: "red" }} onClick={() => {
                                                router.push(`/cart/payment?id=${value.id}`);
                                            }}>{value.status === "awaiting_paying" && "در انتظار پرداخت"}</span>
                                            <span style={{ color: "#006060" }} onClick={() => {
                                                setProfilePages((pre) => {
                                                    return {
                                                        editProfile: false,
                                                        ordersPage: false,
                                                        shoppingExperiences: false,
                                                        favoritesList: false,
                                                        orderDetail: true
                                                    }
                                                })
                                            }}>{value.status === "completed" && "تکمیل شده"}</span>
                                            <span style={{ color: "gray" }}>{value.status === "canceled" && "لغو شده"}</span>
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }
        </>
    );
}
// export
export default Orders;