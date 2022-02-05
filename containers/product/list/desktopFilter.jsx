// scss
import styles from "../../../styles/pages/product/desktopList.module.scss";

const DesktopFilter = ({ getProduct, activeHojreh }) => {
    const productStatus = [
        { value: "", label: "" },
        { value: 1, label: "آماده در انبار" },
        { value: 2, label: "تولید بعد از سفارش" },
        { value: 3, label: "سفارشی سازی فروش" },
        { value: 4, label: "موجود نیست" },
    ];
    return (
        <form
            className={styles.form_filter}
            onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.target);
                let result = Object.fromEntries(data.entries());
                getProduct(
                    activeHojreh,
                    result.product_status,
                    result.price_from,
                    result.price_to,
                    result.inventory_from,
                    result.inventory_to,
                    "",
                    result.search
                );
            }}
        >
            <h3 className={styles.form_title}>فیلترها</h3>
            <div className={styles.filds_wrapper}>
                <label className={styles.filds_label}>
                    جستجو در نام محصول
                    <br />
                    <input
                        name="search"
                        className={styles.filds_input}
                        type="text"
                        placeholder="نام محصول را وارد کنید"
                    />
                </label>
                <label className={styles.filds_label}>
                    وضعیت محصول
                    <br />
                    <select name="product_status" className={styles.filds_input}>
                        {productStatus.map((value, index) => {
                            return (
                                <option key={index} value={value.value}>
                                    {value.label}
                                </option>
                            );
                        })}
                    </select>
                </label>
                <label className={styles.filds_label}>
                    قیمت
                    <br />
                    <input
                        name="price_from"
                        className={`${styles.filds_input} ${styles.filds_input_half}`}
                        type="text"
                        placeholder="از   -   تومان"
                    />
                    &nbsp;
                    <input
                        name="price_to"
                        className={`${styles.filds_input} ${styles.filds_input_half}`}
                        type="text"
                        placeholder="تا   -   تومان"
                    />
                </label>
            </div>
            <div className={styles.filds_wrapper}>
                <label className={styles.filds_label}>
                    زمان آماده سازی
                    <br />
                    <input
                        className={`${styles.filds_input} ${styles.filds_input_half}`}
                        type="text"
                        placeholder="از   -   روز"
                    />
                    &nbsp;
                    <input
                        className={`${styles.filds_input} ${styles.filds_input_half}`}
                        type="text"
                        placeholder="تا   -   روز"
                    />
                </label>
                <label className={styles.filds_label}>
                    موجودی
                    <br />
                    <input
                        name="inventory_from"
                        className={`${styles.filds_input} ${styles.filds_input_half}`}
                        type="text"
                        placeholder="از   -   عدد"
                    />
                    &nbsp;
                    <input
                        name="inventory_to"
                        className={`${styles.filds_input} ${styles.filds_input_half}`}
                        type="text"
                        placeholder="تا   -   عدد"
                    />
                </label>
                <button className={styles.button_submit} type="submit">
                    جستجو
                </button>
                <button className={styles.button_reset} type="reset">
                    حذف همه فیلترها
                </button>
            </div>
        </form>
    );
}
// export
export default DesktopFilter;