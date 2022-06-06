// node libraries
import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
// components
import AppButton from "../../components/AppButton";
// methods
import {diviedNumber} from "../../utils/diviedNumber";
// style
import styles from "../../styles/pages/cart/cart.module.scss";

export default function SumBuy() {
  const [loaderButton, setLoaderButton] = useState(false);
  const router = useRouter();
  const allProductListBuy = useSelector((state) => state.Cart.allProduct);

  return (
    <>
      {allProductListBuy.cart_old_price ? (
        <div className="col-12 col-md-12 col-lg-4 order-0 order-md-0 order-lg-1">
          <div className={styles.cart_invoice}>
            <div className={styles.cart_invoice_primary_price}>
              <span>قیمت محصولات:</span>{" "}
              <span>
                {diviedNumber(allProductListBuy.cart_old_price / 10)}

                <span style={{ marginRight: "5px" }}>تومان</span>
              </span>
            </div>
            <div className={styles.cart_invoice_discount_price}>
              <span>تخفیف محصولات:</span>{" "}
              <span>
                {diviedNumber(
                  (allProductListBuy.cart_old_price -
                    allProductListBuy.cart_price) /
                    10
                )}

                <span style={{ marginRight: "5px" }}>تومان</span>
              </span>
            </div>
            <div className={styles.cart_invoice_shipping_price}>
              <div>{`هزینه ارسال `}</div>
              <div> وابسته به آدرس </div>
            </div>
            <div className={styles.cart_invoice_total_price}>
              <span>مبلغ قابل پرداخت</span>{" "}
              <span className="font-weight-500">
                {diviedNumber(allProductListBuy.cart_price / 10)}

                <span style={{ marginRight: "5px" }}>تومان</span>
              </span>
            </div>
            <div>
              <AppButton
                loader={loaderButton}
                title="ادامه خرید"
                onClick={() => {
                  setLoaderButton(true);
                  router.push(`/cart/address`);
                }}
              />
            </div>
            <div className={styles.cart_invoice_subtitle}>
              <i
                className="fas fa-exchange-alt"
                style={{ marginLeft: "5px" }}
              ></i>
              {`     تضمین رضایت: بازگشت کالا و پول شما تا 7 روز`}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
