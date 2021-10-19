// node libraries
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Assistent from "zaravand-assistent-number";
// methods
import { checkTimeOrder } from './methods/checkTimeOrder';
// scss
import styles from './scss/mobileOrders.module.scss';

const _asist = new Assistent();

const MobileOrders = ({ ordersList, setProfilePages, setInvoiceId, loading }) => {
    const router = useRouter();
    return (
        <div className={styles.main_wrapper}>
            {loading ? <div className="d-flex flex-column">
                <Image src="/loading.svg" alt="loding" width="40" height="40" />
            </div> :
                ordersList.length > 0 ? ordersList.map((value, index) => {
                    let statusOrder = checkTimeOrder(value.created_time_jalali);
                    return (
                        <div className={styles.list_items} key={index}>
                            <div className={`${styles.right} p-3`}>
                                <span className="d-block text-secondary mb-2 d-lg-none">شماره سفارش</span>
                                <span className="text-dark font-weight-bold">{_asist.number(value.id)}</span>
                            </div>
                            <div className={`${styles.left} p-3 d-flex align-items-center`}>
                                <span className="d-block text-success px-3 py-2 rounded-pill" style={{ backgroundColor: "rgb(238, 238, 238)" }}>
                                    <span style={{ color: "red" }} onClick={() => {
                                        statusOrder === "haveTime" && router.push(`/cart/payment?invoice_id=${value.id}`);
                                    }}>
                                        {value.status === "awaiting_paying" && statusOrder === "haveTime" && "در انتظار پرداخت"}
                                        {value.status === "awaiting_paying" && statusOrder === "canceled" && "مهلت پرداخت گذشته است"}
                                    </span>
                                    <span style={{ color: "#006060" }}>{(value.status === "completed" || value.status === "wait_store_checkout") && "تکمیل شده"}</span>
                                    <span style={{ color: "#006060" }}>{(value.status === "wait_store_approv") && "در انتظار تأیید فروشگاه"}</span>
                                    <span style={{ color: "#006060" }}>{(value.status === "preparing_product") && "در حال آماده سازی"}</span>
                                    <span style={{ color: "#006060" }}>{(value.status === "wait_customer_approv") && "در انتظار تأیید مشتری"}</span>
                                    <span style={{ color: "gray" }}>{value.status === "canceled" && "لغو شده"}</span>
                                </span>
                            </div>
                            <div className={`${styles.right} p-3`}>
                                <span className="text-secondary d-block mb-2 d-lg-none">تاریخ ثبت سفارش</span>
                                <span>{_asist.number(value.created_date_jalali)}</span>
                            </div>
                            <div className={`${styles.price} p-3`}>
                                <span className="text-secondary d-block mb-2 d-lg-none">مبلغ پرداخت شده</span>
                                <span>{value.status !== "awaiting_paying" && value.status !== "canceled" &&
                                    _asist.PSeparator(`${value.final_price / 10} تومان`)}</span>
                            </div>
                            <div className={`${styles.images} p-3`}>
                                <span className="text-secondary d-block mb-2 d-lg-none">لیست محصولات</span>
                                <div className="d-flex">
                                    {value.items.length > 0 && value.items.map((value, index) => (
                                        <Link href={`/product/${value.slug}`} key={index}>
                                            <a target="_blank" key={index}>
                                                {value.image && <img src={value.image} alt={value.title} className="rounded-lg ml-2" width="35" height="35" />}
                                            </a>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            {(value.status === "completed" ||
                                value.status === "wait_customer_approv" ||
                                value.status === "wait_store_approv" ||
                                value.status === "preparing_product" ||
                                value.status === "wait_customer_approv"
                            ) &&
                                <div className={`${styles.detail} p-3`}>
                                    <span className={`btn ${styles.btn_gray} btn-sm font-size-sm flex-grow-1 d-flex`} onClick={async () => {
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
                                    }}>
                                        <span>جزییات</span>
                                        <i className="bi bi-angle-left mr-auto"></i>
                                    </span>
                                </div>}
                        </div>
                    )
                }) : <h1>سفارشی موجود نیست</h1>
            }
        </div>
    );
}
// export
export default MobileOrders;