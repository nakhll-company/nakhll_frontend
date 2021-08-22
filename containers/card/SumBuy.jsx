import Link from "next/link";
import { useContext } from "react";

import Assistent from "zaravand-assistent-number";
import ContextProduct from "./Context/context";

const _asist = new Assistent();

export default function SumBuy() {
  // GET "All_product_list_buy" FROM PARENT COMPONENT
  const { All_product_list_buy } = useContext(ContextProduct);
  return (
    <>
      {All_product_list_buy.total_old_price && (
        <div className="col-12 col-md-12 col-lg-4 order-0 order-md-0 order-lg-1">
          <div className="cart-invoice">
            <div className="cart-invoice-primary-price">
              <span>قیمت محصولات:</span>{" "}
              <span>
                {_asist.PSeparator(All_product_list_buy.total_old_price / 10)}

                <span style={{ marginRight: "5px" }}>تومان</span>
              </span>
            </div>
            <div className="cart-invoice-discount-price">
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
            <div className="cart-invoice-shipping-price">
              <div>{_asist.number(`هزینه ارسال `)}</div>
              <div> وابسته به آدرس </div>
            </div>
            <div className="cart-invoice-total-price">
              <span>مبلغ قابل پرداخت</span>{" "}
              <span className="font-weight-500">
                {_asist.PSeparator(All_product_list_buy.total_price / 10)}

                <span style={{ marginRight: "5px" }}>تومان</span>
              </span>
            </div>
            <div>
              <Link href="/cart/address">
                <button className="btn btn-Buy p-2 rounded-pill w-100 ">
                  {_asist.number(`ادامه خرید `)}
                </button>
              </Link>
            </div>
            <div className="cart-invoice-subtitle">
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
