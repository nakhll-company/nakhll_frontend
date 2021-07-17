// components
import CustomBadge from '../../../components/custom/customBadge';
// scss
import styles from '../../../styles/pages/product/desktopList.module.scss';

export default function Desktop({ productList }) {
    const productStatus = [
        { value: "", label: "" },
        { value: "", label: "آماده در انبار" },
        { value: "", label: "تولید بعد از سفارش" },
        { value: "", label: "سفارشی سازی فروش" },
        { value: "", label: "موجود نیست" },
    ];
    return (
        <div className={styles.wrapper}>
            <form className={styles.form_filter} onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.target);
                console.log(Object.fromEntries(data.entries()));
            }}>
                <h3 className={styles.form_title}>فیلترها</h3>
                <div className={styles.filds_wrapper}>
                    <label className={styles.filds_label}>جستجو در نام محصول<br />
                        <input className={styles.filds_input} type="text" placeholder="نام محصول را وارد کنید" />
                    </label>
                    <label className={styles.filds_label}>وضعیت محصول<br />
                        <select name="status" className={styles.filds_input}>
                            {productStatus.map((value, index) => {
                                return <option key={index} value={value.value}>{value.label}</option>
                            })}
                        </select>
                    </label>
                    <label className={styles.filds_label}>قیمت<br />
                        <input className={`${styles.filds_input} ${styles.filds_input_half}`} type="text" placeholder="از   -   تومان" />&nbsp;
                        <input className={`${styles.filds_input} ${styles.filds_input_half}`} type="text" placeholder="تا   -   تومان" />
                    </label>
                </div>
                <div className={styles.filds_wrapper}>
                    <label className={styles.filds_label}>زمان آماده سازی<br />
                        <input className={`${styles.filds_input} ${styles.filds_input_half}`} type="text" placeholder="از   -   روز" />&nbsp;
                        <input className={`${styles.filds_input} ${styles.filds_input_half}`} type="text" placeholder="تا   -   روز" />
                    </label>
                    <label className={styles.filds_label}>موجودی<br />
                        <input className={`${styles.filds_input} ${styles.filds_input_half}`} type="text" placeholder="از   -   عدد" />&nbsp;
                        <input className={`${styles.filds_input} ${styles.filds_input_half}`} type="text" placeholder="تا   -   عدد" />
                    </label>
                    <button className={styles.button_submit} type="submit">جستجو</button>
                    <button className={styles.button_reset} type="reset">حذف همه فیلترها</button>
                </div>
            </form>
            <div className={styles.product_list}>
                <div className={styles.product_title}>
                    <span>محصولات</span>
                    <button className={styles.button_add}>
                        <i className="fa fa-plus" style={{ marginLeft: "10px" }}></i>
                        ایجاد کالا جدید
                    </button>
                </div>
                <table className={styles.product_tabel}>
                    <thead>
                        <tr>
                            <th>ردیف</th>
                            <th>نام محصول</th>
                            <th>آماده سازی</th>
                            <th>موجودی</th>
                            <th>قیمت</th>
                            <th>وضعیت</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList.length > 0 && productList.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{value.title}</td>
                                    <td>{value.preparation_days}</td>
                                    <td>{value.inventory}</td>
                                    <td>{`${value.price}تومان`}</td>
                                    <td><CustomBadge
                                        title={value.status}
                                        color="#089319"
                                        backgroundColor="rgba(8, 147, 25, 0.15)"
                                        customBadgeStyle={{
                                            borderRadius: "3px",
                                            padding: "2px 6px",
                                            fontSize: "12px"
                                        }}
                                    /></td>
                                    <td>
                                        <div className={styles.wrapper_copy}>
                                            <li className="fa fa-clone"></li>
                                        </div>
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