import Link from "next/link";
import { useContext } from "react";

import Assistent from "zaravand-assistent-number";
import ContextProduct from "./Context/context";

// STYLE
import styles from "../../styles/pages/cart/cart.module.scss";

const _asist = new Assistent();

// REDUX
import { useSelector } from "react-redux";

export default function SumBuy() {
  const All_product_list_buy = useSelector((state) => state.Cart.allProduct);
  return (
    <>
      {All_product_list_buy.total_old_price && (
        <div className="col-12 col-md-12 col-lg-4 order-0 order-md-0 order-lg-1">
          <div className={styles.cart_invoice}>
            <div className={styles.cart_invoice_primary_price}>
              <span>قیمت محصولات:</span>{" "}
              <span>
                {_asist.PSeparator(All_product_list_buy.total_old_price / 10)}

                <span style={{ marginRight: "5px" }}>تومان</span>
              </span>
            </div>
            <div className={styles.cart_invoice_discount_price}>
              <span>تخفیف محصولات:</span>{" "}
              <span>
                {_asist.PSeparator(
                  (All_product_list_buy.total_old_price -
                    All_product_list_buy.total_price) /
                    10
                )}

                <span style={{ marginRight: "5px" }}>تومان</span>
              </span>
            </div>
            <div className={styles.cart_invoice_shipping_price}>
              <div>{_asist.number(`هزینه ارسال `)}</div>
              <div> وابسته به آدرس </div>
            </div>
            <div className={styles.cart_invoice_total_price}>
              <span>مبلغ قابل پرداخت</span>{" "}
              <span className="font-weight-500">
                {_asist.PSeparator(All_product_list_buy.total_price / 10)}

                <span style={{ marginRight: "5px" }}>تومان</span>
              </span>
            </div>
            <div>
              <Link href="/cart/address">
                <button
                  className={`btn ${styles.btn_Buy} p-2 rounded-pill w-100 `}
                >
                  {_asist.number(`ادامه خرید `)}
                </button>
              </Link>
            </div>
            <div className={styles.cart_invoice_subtitle}>
              <i
                className="fas fa-exchange-alt"
                style={{ marginLeft: "5px" }}
              ></i>
              {_asist.number(
                `     تضمین رضایت: بازگشت کالا و پول شما تا 7 روز`
              )}
            </div>
            {/* <div className="border border-danger text-danger p-2 mt-3 rounded">
              محصولی در سبد خرید تغییر کرده است. برای ادامه وضعیت آن را مشخص
              کنید.
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}
