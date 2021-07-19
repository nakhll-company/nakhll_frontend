// node
import Image from 'next/image';
import Link from 'next/link';
import { connect } from 'react-redux';
import { useEffect } from 'react';
// components
import CustomLabel from '../../../components/custom/customLabel';
import CustomBadge from '../../../components/custom/customBadge';
// methods
import { mapState } from '../methods/mapState';
import { mapDispatch } from '../methods/mapDispatch';
// scss
import styles from '../../../styles/pages/order/mobileOrders.module.scss';


const MobileOrders = ({ type, ordersList, getUncompleted, getCompleted, activeHojreh }) => {


    useEffect(async () => {
        type === "uncompleted" && getUncompleted(activeHojreh);
        type === "completed" && getCompleted(activeHojreh);
    }, []);

    return (
        <div className={styles.wrapper}>

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
            {ordersList.length > 0 ? ordersList.map((value, index) => {
                return (
                    <div key={index} className={styles.card}>
                        <div className={styles.card_header}>
                            <CustomLabel value={value.factor_number} label="شماره سفارش" />
                            <CustomBadge title={`${value.factor_status}`} />
                        </div>
                        <CustomLabel value={value.user} label="خریدار" customLabelDiv="wrapper_custom_label" />
                        <CustomLabel value={`${new Date(value.order_date).toLocaleDateString('fa-IR')}`} label="ثبت" customLabelDiv="wrapper_custom_label" />
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
const connector = connect(mapState, mapDispatch);
export default connector(MobileOrders);