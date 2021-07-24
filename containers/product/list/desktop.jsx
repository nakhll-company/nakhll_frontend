// node libraries
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
// components
import CustomBadge from '../../../components/custom/customBadge';
// scss
import styles from '../../../styles/pages/product/desktopList.module.scss';

export default function Desktop({ loading, productList, activeHojreh, getProduct }) {

    const productStatus = [
        { value: "", label: "" },
        { value: 1, label: "آماده در انبار" },
        { value: 2, label: "تولید بعد از سفارش" },
        { value: 3, label: "سفارشی سازی فروش" },
        { value: 4, label: "موجود نیست" },
    ];
    return (
        <div className={styles.wrapper}>
            <form className={styles.form_filter} onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.target);
                let result = Object.fromEntries(data.entries());
                getProduct(activeHojreh, result.product_status, result.price_from, result.price_to, result.inventory_from, result.inventory_to, "");

            }}>
                <h3 className={styles.form_title}>فیلترها</h3>
                <div className={styles.filds_wrapper}>
                    <label className={styles.filds_label}>جستجو در نام محصول<br />
                        <input className={styles.filds_input} type="text" placeholder="نام محصول را وارد کنید" />
                    </label>
                    <label className={styles.filds_label}>وضعیت محصول<br />
                        <select name="product_status" className={styles.filds_input}>
                            {productStatus.map((value, index) => {
                                return <option key={index} value={value.value}>{value.label}</option>
                            })}
                        </select>
                    </label>
                    <label className={styles.filds_label}>قیمت<br />
                        <input name="price_from" className={`${styles.filds_input} ${styles.filds_input_half}`} type="text" placeholder="از   -   تومان" />&nbsp;
                        <input name="price_to" className={`${styles.filds_input} ${styles.filds_input_half}`} type="text" placeholder="تا   -   تومان" />
                    </label>
                </div>
                <div className={styles.filds_wrapper}>
                    <label className={styles.filds_label}>زمان آماده سازی<br />
                        <input className={`${styles.filds_input} ${styles.filds_input_half}`} type="text" placeholder="از   -   روز" />&nbsp;
                        <input className={`${styles.filds_input} ${styles.filds_input_half}`} type="text" placeholder="تا   -   روز" />
                    </label>
                    <label className={styles.filds_label}>موجودی<br />
                        <input name="inventory_from" className={`${styles.filds_input} ${styles.filds_input_half}`} type="text" placeholder="از   -   عدد" />&nbsp;
                        <input name="inventory_to" className={`${styles.filds_input} ${styles.filds_input_half}`} type="text" placeholder="تا   -   عدد" />
                    </label>
                    <button className={styles.button_submit} type="submit">جستجو</button>
                    <button className={styles.button_reset} type="reset">حذف همه فیلترها</button>
                </div>
            </form>
            <div className={styles.product_list}>
                <div className={styles.product_title}>
                    <span>محصولات</span>
                    <Link href="/fp/product/create">
                        <a className={styles.button_add}>
                            <i className="fa fa-plus" style={{ marginLeft: "10px" }}></i>
                            ایجاد کالا جدید
                        </a>
                    </Link>
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
                        {loading ?
                            <tr>
                                <td colSpan={7} className={styles.one_colmne}>
                                    <Image src="/loading.svg" alt="loding" width="40" height="40" />
                                </td>
                            </tr>
                            :
                            productList.length > 0 ? productList.map((value, index) => {
                                return (
                                    <Link href={`/fp/product/create/updateProduct${value.id}`} key={index}>
                                        <tr>
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
                                    </Link>
                                )
                            }) : <tr><td colSpan={7} className={styles.one_colmne}>موردی برای نمایش موجود نیست</td></tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}