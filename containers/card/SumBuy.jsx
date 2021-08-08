import Link from "next/link";
import React from "react";

export default function SumBuy() {
  return (
    <div className="col-12 col-md-12 col-lg-4 order-0 order-md-0 order-lg-1">
      <div className="cart-invoice">
        <div className="cart-invoice-primary-price">
          <span>قیمت محصولات:</span>{" "}
          <span>
            449,000
            <i className="bi bi-toman font-size1-5 font-weight-500"></i>
          </span>
        </div>
        <div className="cart-invoice-discount-price">
          <span>تخفیف محصولات:</span>{" "}
          <span>
            120,000
            <i className="bi bi-toman font-size1-5 font-weight-500"></i>
          </span>
        </div>
        <div className="cart-invoice-shipping-price">
          <div>هزینه ارسال (از 2 غرفه)</div>
          <div> وابسته به آدرس </div>
        </div>
        <div className="cart-invoice-total-price">
          <span>مبلغ قابل پرداخت</span>{" "}
          <span className="font-weight-500">
            329,000
            <i className="bi bi-toman font-size1-5 font-weight-500"></i>
          </span>
        </div>
        <div>
          <Link href="/cart/address">
            <button className="btn btn-tprimary p-2 rounded-pill w-100">
              ادامه خرید از 2 غرفه
            </button>
          </Link>
        </div>
        <div className="cart-invoice-subtitle">
          <i className="bi bi-tick-circle"></i>
          تضمین رضایت: بازگشت کالا و پول شما تا 7 روز
        </div>
      </div>
    </div>
  );
}
