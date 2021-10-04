// node libraries
import Assistent from "zaravand-assistent-number";
// scss
import styles from './scss/mobileOrders.module.scss';

const _asist = new Assistent();

const MobileOrders = ({ ordersList, setProfilePages }) => {
    return (
        <div className={styles.main_wrapper}>
            {ordersList.length > 0 && ordersList.map((value, index) => (
                <div className={styles.list_items} key={index}>
                    <div className={`${styles.right} p-3`}>
                        <span className="d-block text-secondary mb-2 d-lg-none">شماره سفارش</span>
                        <span className="text-dark font-weight-bold">{value.id}</span>
                    </div>
                    <div className={`${styles.left} p-3 d-flex align-items-center`}>
                        <span className="d-block text-success px-3 py-2 rounded-pill" style={{ backgroundColor: "rgb(238, 238, 238)" }}>
                            <i className="bi bi-tick"></i>
                            <span>{value.status}</span>
                        </span>
                    </div>
                    <div className={`${styles.right} p-3`}>
                        <span className="text-secondary d-block mb-2 d-lg-none">تاریخ ثبت سفارش</span>
                        <span>{value.created_datetime}</span>
                    </div>
                    <div className={`${styles.price} p-3`}>
                        <span className="text-secondary d-block mb-2 d-lg-none">مبلغ پرداخت شده</span>
                        <span>{_asist.PSeparator(value.final_invoice_price)}</span>
                    </div>
                    <div className={`${styles.images} p-3`}>
                        <span className="text-secondary d-block mb-2 d-lg-none">لیست محصولات</span>
                        <div className="d-flex">
                            {value.products.map((value, index) => (
                                <a href="/bvaasete_shoe/product/169822" target="_blank" key={index}>
                                    <img src={value.image_thumbnail_url} alt={value.title} class="rounded-lg ml-2" width="35" height="35" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className={`${styles.detail} p-3`}>
                        <span className={`btn ${styles.btn_gray} btn-sm font-size-sm flex-grow-1 d-flex`} onClick={() => {
                            setProfilePages((pre) => {
                                return {
                                    editProfile: false,
                                    ordersPage: false,
                                    shoppingExperiences: false,
                                    favoritesList: false,
                                    orderDetail: true
                                }
                            })
                        }}>
                            <span>جزییات</span>
                            <i className="bi bi-angle-left mr-auto"></i>
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}
// export
export default MobileOrders;