// node libraries
import { useRouter } from 'next/router';
import Assistent from "zaravand-assistent-number";
// scss
import styles from './scss/mobileOrders.module.scss';

const _asist = new Assistent();

const MobileOrders = ({ ordersList, setProfilePages, setInvoiceId }) => {
    const router = useRouter();
    return (
        <div className={styles.main_wrapper}>
            {ordersList.length > 0 && ordersList.map((value, index) => (
                <div className={styles.list_items} key={index}>
                    <div className={`${styles.right} p-3`}>
                        <span className="d-block text-secondary mb-2 d-lg-none">شماره سفارش</span>
                        <span className="text-dark font-weight-bold">{_asist.number(value.id)}</span>
                    </div>
                    <div className={`${styles.left} p-3 d-flex align-items-center`}>
                        <span className="d-block text-success px-3 py-2 rounded-pill" style={{ backgroundColor: "rgb(238, 238, 238)" }}>
                            <span style={{ color: "red" }} onClick={() => {
                                router.push(`/cart/payment?id=${value.id}`);
                            }}>{value.status === "awaiting_paying" && "در انتظار پرداخت"}</span>
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
                            _asist.PSeparator(value.final_price)}</span>
                    </div>
                    <div className={`${styles.images} p-3`}>
                        <span className="text-secondary d-block mb-2 d-lg-none">لیست محصولات</span>
                        <div className="d-flex">
                            {value.items.length > 0 && value.items.map((value, index) => (
                                <a href={`/productDetail/${value.slug}`} target="_blank" key={index}>
                                    {value.image_thumbnail && <img src={value.image_thumbnail} alt={value.title} className="rounded-lg ml-2" width="35" height="35" />}
                                </a>
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
            ))}
        </div>
    );
}
// export
export default MobileOrders;