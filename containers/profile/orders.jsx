// node libraries
import Image from 'next/image';
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
                                    <td>{value.created_datetime}</td>
                                    <td>{_asist.PSeparator(value.final_invoice_price)}</td>
                                    <td>
                                        {value.products.map((value, index) => (
                                            <Image src={value.image_thumbnail_url} alt={value.title} key={index} width="30" height="30" />
                                        ))}
                                    </td>
                                    <td onClick={() => {
                                        setProfilePages((pre) => {
                                            return {
                                                editProfile: false,
                                                ordersPage: false,
                                                shoppingExperiences: false,
                                                favoritesList: false,
                                                orderDetail: true
                                            }
                                        })
                                    }}>{value.status}</td>
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