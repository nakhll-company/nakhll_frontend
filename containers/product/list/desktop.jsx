// node libraries
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
// components
import CustomBadge from "../../../components/custom/customBadge";
// scss
import styles from "../../../styles/pages/product/desktopList.module.scss";
//functions
import { groupProductResponse } from "../groupProduct/methods/groupProductResponse";
import { groupProductResponseEdit } from "../groupProduct/methods/groupProductResponseEdit";

export default function Desktop({
  loading,
  productList,
  activeHojreh,
  getProduct,
  userInfo,
}) {
  const router = useRouter();
  const productStatus = [
    { value: "", label: "" },
    { value: 1, label: "آماده در انبار" },
    { value: 2, label: "تولید بعد از سفارش" },
    { value: 3, label: "سفارشی سازی فروش" },
    { value: 4, label: "موجود نیست" },
  ];
  return (
    <div className={styles.wrapper}>
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
      <div className={styles.product_list}>
        <div className={styles.product_title}>
          <span>محصولات</span>
          <Link href="/fp/product/create">
            <a className={styles.button_add}>
              <i className="fa fa-plus" style={{ marginLeft: "10px" }}></i>
              ایجاد کالا جدید
            </a>
          </Link>
          <button
            className={styles.button_add_group}
            onClick={() => groupProductResponse(userInfo, activeHojreh, router)}
          >
            <a className="d-flex align-items-center">
              <i className="fa fa-plus" style={{ marginLeft: "10px" }}></i>
              ایجاد کالای گروهی
            </a>
          </button>

          <button
            className={styles.button_add_group}
            onClick={() =>
              groupProductResponseEdit(userInfo, activeHojreh, router)
            }
          >
            <a className="d-flex align-items-center">
              <i
                className="far fa-edit"
                style={{ marginLeft: "10px", fontWeight: "bold" }}
              ></i>
              ویرایش کالای گروهی
            </a>
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
            {loading ? (
              <tr>
                <td colSpan={7} className={styles.one_colmne}>
                  <Image
                    src="/loading.svg"
                    alt="loding"
                    // layout="responsive"
                    width="40px"
                    height="40px"
                  />
                </td>
              </tr>
            ) : productList.length > 0 ? (
              productList.map((value, index) => {
                return (
                  <Link
                    href={`/fp/product/update/product/${value.ID}`}
                    key={index}
                  >
                    <tr>
                      <td>{index + 1}</td>
                      <td style={{ display: "flex" }}>
                        <Image
                          src={value.image_thumbnail_url}
                          alt="product"
                          layout="responsive"
                          width={45}
                          height={45}
                        />
                        <div style={{ margin: "0px 20px" }}>
                          {value.Title}
                          <br />
                          <span className={styles.icons}>
                            <i className="fas fa-shopping-basket"></i>
                            &nbsp;&nbsp;
                            {value.total_sell}
                          </span>
                          <span className={styles.icons}>
                            <i className="far fa-star"></i>&nbsp;&nbsp;
                            {value.star}({value.comments_count} نظر)
                          </span>
                        </div>
                      </td>
                      <td>{value.PreparationDays}</td>
                      <td>{value.Inventory}</td>
                      <td>
                        {value.OldPrice === 0 && (
                          <b>{value.Price / 10} تومان</b>
                        )}
                        {value.OldPrice !== 0 && (
                          <>
                            <del>{value.OldPrice / 10}</del>
                            <br />
                            <b>{value.Price / 10}تومان</b>
                          </>
                        )}
                      </td>
                      <td>
                        <CustomBadge
                          title={value.status}
                          color="#089319"
                          backgroundColor="rgba(8, 147, 25, 0.15)"
                          customBadgeStyle={{
                            borderRadius: "3px",
                            padding: "2px 6px",
                            fontSize: "12px",
                          }}
                        />
                      </td>
                      <td>
                        <div className={styles.wrapper_copy}>
                          <li className="fa fa-clone"></li>
                        </div>
                      </td>
                    </tr>
                  </Link>
                );
              })
            ) : (
              <tr>
                <td colSpan={7} className={styles.one_colmne}>
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
