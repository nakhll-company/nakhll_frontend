// node libraries
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
// components
import DesktopFilter from "./desktopFilter";
import DesktopFooter from "./desktopFooter";
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

  return (
    <div className={styles.wrapper}>
      <DesktopFilter getProduct={getProduct} activeHojreh={activeHojreh} />
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
            <a className="d-flex align-items-center">ایجاد کالای گروهی</a>
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
                    width="40px"
                    height="40px"
                  />
                </td>
              </tr>
            ) : productList.results && productList.results.length > 0 ? (
              productList.results.map((value, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <Link href={`/fp/product/update/product/${value.ID}`} passHref >
                        <a>
                          {index + 1}
                        </a>
                      </Link>
                    </td>
                    <td>
                      <Link href={`/fp/product/update/product/${value.ID}`} passHref>
                        <div style={{ display: "flex" }}>
                          <div>
                            <Image
                              src={value.image_thumbnail_url}
                              alt="product"
                              layout="responsive"
                              width={45}
                              height={45}
                            />
                          </div>
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
                        </div>
                      </Link>
                    </td>
                    <td>
                      <Link href={`/fp/product/update/product/${value.ID}`} passHref>
                        <a>
                          {value.PreparationDays}
                        </a>
                      </Link>
                    </td>
                    <td>
                      <Link href={`/fp/product/update/product/${value.ID}`} passHref>
                        <a>
                          {value.Inventory}
                        </a>
                      </Link>
                    </td>
                    <td>
                      <Link href={`/fp/product/update/product/${value.ID}`} passHref>
                        <a>
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
                        </a>
                      </Link>
                    </td>
                    <td>
                      <Link href={`/fp/product/update/product/${value.ID}`} passHref>
                        <a>
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
                        </a>
                      </Link>
                    </td>
                    <td>
                      <Link href={`/fp/product/update/product/${value.ID}`} passHref>
                        <div className={styles.wrapper_copy}>
                          <li className="fa fa-clone"></li>
                        </div>
                      </Link>
                    </td>
                  </tr>
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
          <tfoot>
            <DesktopFooter
              productList={productList}
              getProduct={getProduct}
              activeHojreh={activeHojreh}
            />
          </tfoot>
        </table>
      </div>
    </div>
  );
}