// node libraries
// components
import CustomBadge from '../../../components/custom/customBadge';
// scss
import styles from '../../../styles/pages/order/desktopOrders.module.scss';

export default function DesktopOrders({ ordersList, type }) {
    const statusCompleted = [
        { value: "", label: "" },
        { value: "", label: "لغو شده" },
        { value: "", label: "تحویل داده شده" },
    ];

    const statusUncompleted = [
        { value: "", label: "" },
        { value: "", label: "سفارش آماده" },
        { value: "", label: "ارسال شده" },
        { value: "", label: "سفارش در حال آماده سازی" },
        { value: "", label: "منتظر بررسی" },
    ];
    return (
        <div className={styles.wrapper}>
            <form className={styles.form_filter}>
                <h3 className={styles.form_title}>فیلترها</h3>
                <div className={styles.filds_wrapper}>
                    <label className={styles.filds_label}>جستجو در سفارش<br />
                        <input className={styles.filds_input} type="text" placeholder="نام سفارش را وارد کنید" />
                    </label>
                    <label className={styles.filds_label}>وضعیت سفارش<br />
                        <select name="status" className={styles.filds_input}>
                            {type === "completed" && statusCompleted.map((value, index) => {
                                return <option key={index} value={value.label}>{value.label}</option>
                            })}
                            {type === "uncompleted" && statusUncompleted.map((value, index) => {
                                return <option key={index} value={value.label}>{value.label}</option>
                            })}
                        </select>
                    </label>
                    <label className={styles.filds_label}>تاریخ<br />
                        <input className={`${styles.filds_input} ${styles.filds_input_half}`} type="text" placeholder="از   -   تاریخ" />&nbsp;
                        <input className={`${styles.filds_input} ${styles.filds_input_half}`} type="text" placeholder="تا   -   تاریخ" />
                    </label>
                </div>
                <div className={styles.filds_wrapper}>
                    <button className={styles.button_submit} type="submit">جستجو</button>
                    <button className={styles.button_reset} type="reset">حذف همه فیلترها</button>
                </div>
            </form>
            <div className={styles.orders_list}>
                <div className={styles.orders_title}>
                    <span>سفارشات</span>
                </div>
                <table className={styles.orders_tabel}>
                    <thead>
                        <tr>
                            <th>ردیف</th>
                            <th>شماره سفارش</th>
                            <th>نام مشتری</th>
                            <th>تاریخ ثبت</th>
                            <th>مهلت ارسال</th>
                            <th>وضعیت</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersList.length > 0 && ordersList.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{value.factor_number}</td>
                                    <td>{value.user}</td>
                                    <td>{new Date(value.order_date).toLocaleDateString('fa-IR')}</td>
                                    <td></td>
                                    <td><CustomBadge
                                        title={value.factor_status}
                                        color="#089319"
                                        backgroundColor="rgba(8, 147, 25, 0.15)"
                                        customBadgeStyle={{
                                            borderRadius: "3px",
                                            padding: "2px 6px",
                                            fontSize: "12px"
                                        }}
                                    /></td>
                                    <td>
                                        {value.order_status === "3" && <button type="button" className={styles.button_ready}>به موقع ارسال میکنم</button>}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
