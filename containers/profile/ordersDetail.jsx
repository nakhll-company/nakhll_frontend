// node libraries
import Assistent from "zaravand-assistent-number";
// scss
import styles from './scss/ordersDetail.module.scss';

const _asist = new Assistent();

const OrdersDetail = () => {
    return (
        <div className={styles.main_wrapper}>
            <h6>جزئیات سفارش</h6>
            <div className={`${styles.list_items} my-3`}>
                <div className={`${styles.right} p-3`}>
                    <span className="d-block text-secondary mb-2">شماره سفارش</span>
                    <span className="text-dark font-weight-bold">11</span>
                </div>
                <div className={`${styles.price} p-3`}>
                    <span className="text-secondary d-block mb-2">تاریخ ثبت سفارش</span>
                    <span>1400-02-04</span>
                </div>
                <div className={`${styles.right} p-3`}>
                    <span className="text-secondary d-block mb-2">مبلغ پرداخت شده</span>
                    <span>{_asist.PSeparator(3000)}</span>
                </div>
                <div className={`${styles.price} p-3`}>
                    <span className="text-secondary d-block mb-2">گیرنده</span>
                    <span>سحر شفیعی</span>
                </div>
                <div className={`${styles.images} p-3`}>
                    <span className="text-secondary mb-2"> آدرس :</span>
                    <span> خیابان اول - کوچه آخر </span>
                </div>
                <div className={`${styles.detail} p-3`}>
                    <span className="text-secondary mb-2"> شماره موبایل :</span>
                    <span> 09137053171 </span>
                </div>
            </div>
            <div className={styles.list_items}>
                <div style={{ flexBasis: "100%", padding: "10px", borderBottom: "1px solid #dfdfdf" }}>
                    <h6>سفارش شماره یک</h6>
                </div>
                <div className={`${styles.right} p-3`}>
                    <span className="d-block text-secondary mb-2">نام حجره</span>
                    <span className="text-dark font-weight-bold">گلیم</span>
                </div>
                <div className={`${styles.price} p-3`}>
                    <span className="text-secondary d-block mb-2">استان</span>
                    <span>کرمان</span>
                </div>
                <div className={`${styles.right} p-3`}>
                    <span className="text-secondary d-block mb-2">مبلغ کل سفارش</span>
                    <span>{_asist.PSeparator(3000)}</span>
                </div>
                <div className={`${styles.price} p-3`}>
                    <span className="text-secondary d-block mb-2">هزینه ارسال سفارش</span>
                    <span>60000</span>
                </div>
                <div className={`${styles.images} p-3`}>
                    <span className="text-secondary mb-2"> کد رهگیری سفارش :</span>
                    <span>429711</span>
                </div>
                <div className={`${styles.detail} p-3`}>
                    <span className="text-secondary mb-2"> شماره موبایل :</span>
                    <span> 09137053171 </span>
                </div>
            </div>
        </div>
    );
}
// export
export default OrdersDetail;