import Link from "next/link";

import Assistent from "zaravand-assistent-number";

const _asist = new Assistent();

export default function SumBuy() {
  return (
    <div className="col-12 col-md-12 col-lg-4 order-0 order-md-0 order-lg-1">
      <div className="cart-invoice">
        <div className="cart-invoice-primary-price">
          <span>قیمت محصولات:</span>{" "}
          <span>
            {_asist.PSeparator(449000)}

            <i className="bi bi-toman font-size1-5 font-weight-500"></i>
          </span>
        </div>
        <div className="cart-invoice-discount-price">
          <span>تخفیف محصولات:</span>{" "}
          <span>
            {_asist.PSeparator(120000)}

            <i className="bi bi-toman font-size1-5 font-weight-500"></i>
          </span>
        </div>
        <div className="cart-invoice-shipping-price">
          <div>{_asist.number(`هزینه ارسال (از 2 غرفه)`)}</div>
          <div> وابسته به آدرس </div>
        </div>
        <div className="cart-invoice-total-price">
          <span>مبلغ قابل پرداخت</span>{" "}
          <span className="font-weight-500">
            {_asist.PSeparator(329000)}

            <i className="bi bi-toman font-size1-5 font-weight-500"></i>
          </span>
        </div>
        <div>
          <Link href="/cart/address">
            <button className="btn btn-tprimary p-2 rounded-pill w-100">
              {_asist.number(` ادامه خرید از 2 غرفه`)}
            </button>
          </Link>
        </div>
        <div className="cart-invoice-subtitle">
          <i className="bi bi-tick-circle"></i>
          {_asist.number(`     تضمین رضایت: بازگشت کالا و پول شما تا 7 روز`)}
        </div>
        <div class="border border-danger text-danger p-2 mt-3 rounded">
          محصولی در سبد خرید تغییر کرده است. برای ادامه وضعیت آن را مشخص کنید.
        </div>
      </div>
    </div>
  );
}
