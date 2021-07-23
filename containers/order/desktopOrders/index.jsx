// node libraries
import Link from 'next/link';
import Image from 'next/image';
// components
import CustomBadge from '../../../components/custom/customBadge';
// methods
import { ApiRegister } from '../../../services/apiRegister/ApiRegister';
// scss
import styles from '../../../styles/pages/order/desktopOrders.module.scss';

export default function DesktopOrders({ loading, ordersList, type, activeHojreh, getUncompleted }) {

    const statusCompleted = [
        { value: "", label: "" },
        { value: 4, label: "لغو شده" },
        { value: 0, label: "تحویل داده شده" },
    ];

    const statusUncompleted = [
        { value: "", label: "" },
        { value: 1, label: "سفارش آماده است" },
        { value: 5, label: "ارسال شده" },
        { value: 2, label: "در حال آماده سازی" },
        { value: 3, label: "منتظر بررسی" },
    ];

    const _handleRequestApi = async (id) => {
        let params = {};
        let loadData = null;
        let dataUrl = `/app/api/v1/factor/change-status/confirmed/${id}/`;
        let response = await ApiRegister().apiRequest(
            loadData,
            "PUT",
            dataUrl,
            true,
            params
        );
        if (response.status === 200) {
            getUncompleted(activeHojreh);
        }
    };

    return (
        <div className={styles.wrapper}>
            <form id="ordersFilter" className={styles.form_filter} onSubmit={(e) => {
                e.preventDefault();
            }}>
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
                    <button className={styles.button_reset} type="reset" onClick={() => {
                        document.getElementById("ordersFilter").reset();
                    }}>حذف همه فیلترها</button>
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
                        {loading ?
                            <tr>
                                <td colSpan={7} style={{ textAlign: 'center', margin: '20px 0px' }}>
                                    <Image src="/loading.svg" alt="loding" width="40" height="40" />
                                </td>
                            </tr>
                            :
                            ordersList.length > 0 ? ordersList.map((value, index) => {
                                return (

                                    <tr key={index}>
                                        <Link href={`/fp/order/orderdetail/${value.id}`}>
                                            <td>
                                                {index + 1}
                                            </td>
                                        </Link>
                                        <Link href={`/fp/order/orderdetail/${value.id}`}>
                                            <td>
                                                {value.factor_number}
                                            </td>
                                        </Link>
                                        <Link href={`/fp/order/orderdetail/${value.id}`}>
                                            <td>

                                                {value.user}
                                            </td>
                                        </Link>
                                        <Link href={`/fp/order/orderdetail/${value.id}`}>
                                            <td>
                                                {new Date(value.order_date).toLocaleDateString('fa-IR')}
                                            </td>
                                        </Link>
                                        <Link href={`/fp/order/orderdetail/${value.id}`}>
                                            <td>

                                            </td>
                                        </Link>
                                        <Link href={`/fp/order/orderdetail/${value.id}`}>
                                            <td>
                                                <CustomBadge
                                                    title={value.factor_status}
                                                    color="#089319"
                                                    backgroundColor="rgba(8, 147, 25, 0.15)"
                                                    customBadgeStyle={{
                                                        borderRadius: "3px",
                                                        padding: "2px 6px",
                                                        fontSize: "12px"
                                                    }}
                                                />
                                            </td>
                                        </Link>
                                        <td>
                                            {value.order_status === "3" &&
                                                <button type="button" className={styles.button_ready} onClick={() => {
                                                    _handleRequestApi(value.id);
                                                }}>
                                                    به موقع ارسال میکنم
                                                </button>}
                                        </td>
                                    </tr>
                                )
                            }) :
                                <tr>
                                    <td colSpan={7}>موردی برای نمایش موجود نیست</td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
