// node
import Image from 'next/image';
import Head from "next/head";
import Link from 'next/link';
import { useState, useEffect } from 'react';
// components
import CustomLabel from '../../../components/custom/customLabel';
import CustomBadge from '../../../components/custom/customBadge';
// methods
import { getOpenOrders } from './methods/getOpenOrders';
import { getCloseOrders } from './methods/getCloseOrders';
// scss
import styles from '../../../styles/pages/order/ordersCard.module.scss';


const OrdersCard = ({ type }) => {

    let [openOrdersList, setOpenOrdersList] = useState([]);

    useEffect(async () => {
        type === "open" && setOpenOrdersList(await getOpenOrders());
        type === "close" && setOpenOrdersList(await getCloseOrders());
    }, []);

    return (
        <div className={styles.wrapper}>
            <Head>
                <title>سفارشات</title>
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
                />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div className={styles.header}>
                <Link href={`/fp/product/list/filter`}>
                    <a className={styles.header_link}>
                        <Image src="/image/product/filter.svg" alt="filter" className={styles.header_link_icon} width="15" height="15" />
                        فیلترها
                    </a>
                </Link>
                <span className={styles.header_link}>
                    <Image src="/image/product/sort.svg" alt="sort" className={styles.header_link_icon} width="15" height="15" />
                    ترتیب نمایش</span>
            </div>
            {openOrdersList.length > 0 ? openOrdersList.map((value, index) => {
                return (
                    <div key={index} className={styles.card}>
                        <div className={styles.card_header}>
                            <CustomLabel value={value.factor_number} label="شماره سفارش" />
                            <CustomBadge title={`${value.factor_status}`} />
                        </div>
                        <CustomLabel value={value.user} label="خریدار" customLabelDiv="wrapper_custom_label" />
                        <CustomLabel value={`${value.order_date}`} label="ثبت" customLabelDiv="wrapper_custom_label" />
                        <CustomLabel value={`${value.delivery_date}`} label="مهلت" customLabelDiv="wrapper_custom_label" />
                        <div className={styles.card_details}>
                            <li className="fas fa-shopping-basket"></li>
                            <span className={styles.card_details_span}>
                                {value.factor_posts_count} کالا
                            </span>
                            <li className="fas fa-map-marker"></li>
                            <span className={styles.card_details_span}>
                                {value.state}-{value.big_city}
                            </span>
                        </div>
                        <div className={styles.card_image_wrapper}>
                            {value.factor_posts_summary.length > 0 && value.factor_posts_summary.map((value, index) => {
                                return (
                                    <div key={index} className={styles.card_image}>
                                        <Image src="/image/product/sort.svg" alt="sort" width="45" height="45" />
                                    </div>
                                );
                            })}
                        </div>
                        {value.order_status === "3" && <button type="button" className={styles.button_ready}>به موقع ارسال میکنم</button>}
                    </div>
                )
            }) : <h3 style={{ textAlign: "center" }}>موردی برای نمایش وجود ندارد</h3>}
        </div>
    );
}
// export
export default OrdersCard;