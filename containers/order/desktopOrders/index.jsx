// node libraries
import Link from "next/link";
import Image from "next/image";
import Assistent from "zaravand-assistent-number";
// components
import CustomBadge from "../../../components/custom/customBadge";
// scss
import styles from "../../../styles/pages/order/desktopOrders.module.scss";

const _asist = new Assistent();

export default function DesktopOrders({
  loading,
  ordersList,
  type
}) {
  const statusCompleted = [
    { value: "", label: "" },
    { value: "wait_store_checkout", label: "در انتظار تسویه با فروشگاه" },
    { value: "completed", label: "تکمیل شده" },
    { value: "canceled", label: "لغو شده" },
  ];

  const statusUncompleted = [
    { value: "", label: "" },
    { value: "awaiting_paying", label: "در انتظار پرداخت" },
    { value: "wait_store_approv", label: "در انتظار تأیید فروشگاه" },
    { value: "preparing_product", label: "در حال آماده سازی" },
    { value: "wait_customer_approv", label: "در انتظار تأیید مشتری" },
  ];

  return (
    <div className={styles.wrapper}>
      <form
        id="ordersFilter"
        className={styles.form_filter}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h3 className={styles.form_title}>فیلترها</h3>
        <div className={styles.filds_wrapper}>
          <label className={styles.filds_label}>
            جستجو در سفارش
            <br />
            <input
              className={styles.filds_input}
              type="text"
              placeholder="نام سفارش را وارد کنید"
            />
          </label>
          <label className={styles.filds_label}>
            وضعیت سفارش
            <br />
            <select name="status" className={styles.filds_input}>
              {type === "completed" &&
                statusCompleted.map((value, index) => {
                  return (
                    <option key={index} value={value.label}>
                      {value.label}
                    </option>
                  );
                })}
              {type === "uncompleted" &&
                statusUncompleted.map((value, index) => {
                  return (
                    <option key={index} value={value.label}>
                      {value.label}
                    </option>
                  );
                })}
            </select>
          </label>
          <label className={styles.filds_label}>
            تاریخ
            <br />
            <input
              className={`${styles.filds_input} ${styles.filds_input_half}`}
              type="text"
              placeholder="از   -   تاریخ"
            />
            &nbsp;
            <input
              className={`${styles.filds_input} ${styles.filds_input_half}`}
              type="text"
              placeholder="تا   -   تاریخ"
            />
          </label>
        </div>
        <div className={styles.filds_wrapper}>
          <button className={styles.button_submit} type="submit">
            جستجو
          </button>
          <button
            className={styles.button_reset}
            type="reset"
            onClick={() => {
              document.getElementById("ordersFilter").reset();
            }}
          >
            حذف همه فیلترها
          </button>
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
              <th>وضعیت</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={7}
                  style={{ textAlign: "center", margin: "20px 0px" }}
                >
                  <Image
                    src="/loading.svg"
                    alt="loding"
                    width="40"
                    height="40"
                  />
                </td>
              </tr>
            ) : ordersList.length > 0 ? (
              ordersList.map((value, index) => {
                return (
                  <tr key={index}>
                    <Link href={`/fp/order/orderdetail/${value.id}`}>
                      <td>{_asist.number(index + 1)}</td>
                    </Link>
                    <Link href={`/fp/order/orderdetail/${value.id}`}>
                      <td>{_asist.number(value.id)}</td>
                    </Link>
                    <Link href={`/fp/order/orderdetail/${value.id}`}>
                      <td>{value.items[0].buyer}</td>
                    </Link>
                    <Link href={`/fp/order/orderdetail/${value.id}`}>
                      <td>{_asist.number(value.created_date_jalali)}</td>
                    </Link>
                    <Link href={`/fp/order/orderdetail/${value.id}`}>
                      <td>
                        {value.status === "awaiting_paying" && <CustomBadge
                          title="در انتظار پرداخت"
                          color="#089319"
                          backgroundColor="rgba(8, 147, 25, 0.15)"
                          customBadgeStyle={{
                            borderRadius: "3px",
                            padding: "2px 6px",
                            fontSize: "12px",
                          }}
                        />}
                        {value.status === "wait_store_approv" && <CustomBadge
                          title="در انتظار تایید فروشگاه"
                          color="#089319"
                          backgroundColor="rgba(8, 147, 25, 0.15)"
                          customBadgeStyle={{
                            borderRadius: "3px",
                            padding: "2px 6px",
                            fontSize: "12px",
                          }}
                        />}
                        {value.status === "preparing_product" && <CustomBadge
                          title="در حال آماده سازی"
                          color="#089319"
                          backgroundColor="rgba(8, 147, 25, 0.15)"
                          customBadgeStyle={{
                            borderRadius: "3px",
                            padding: "2px 6px",
                            fontSize: "12px",
                          }}
                        />}
                        {value.status === "wait_customer_approv" && <CustomBadge
                          title="در انتظار تایید مشتری"
                          color="#089319"
                          backgroundColor="rgba(8, 147, 25, 0.15)"
                          customBadgeStyle={{
                            borderRadius: "3px",
                            padding: "2px 6px",
                            fontSize: "12px",
                          }}
                        />}
                      </td>
                    </Link>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={7} style={{ textAlign: "center" }}>
                  موردی برای نمایش موجود نیست
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
