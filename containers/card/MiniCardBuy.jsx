export default function MiniCardBuy() {
  return (
    <div className="col-12 mx-auto" style={{ maxWidth: "72rem" }}>
      <div className="mt-3">شما یک سفارش در انتظار پرداخت دارید:</div>
      <div>
        <div className="py-2 px-3 mt-2 border rounded bg-gray-100 d-flex flex-wrap align-items-center">
          <span className="text-secondary font-size-sm">736810</span>{" "}
          <span className="mr-3">مبلغ کل:</span>{" "}
          <span className="mr-2">
            690,000 <small>تومان</small>
          </span>{" "}
          <span className="mr-lg-auto text-teal-dark font-size-sm  w-lg-auto my-2">
            <i className="bi bi-info"></i>
            قابل پرداخت تا 4 ساعت و 44 دقیقه دیگر
          </span>{" "}
          <a
            href="/account/invoices/d43PO"
            onclick="gtag('event', 'failed-invoice-detail-btn', { 'event_category': 'engagement' })"
            className="btn btn-outline-teal mr-auto mr-lg-3 order-lg-1"
          >
            جزئیات
          </a>{" "}
          <a
            href="https://payment.basalam.com/payment/3362/do/736810?callback=cart/payment/result"
            onclick="gtag('event', 'failed-invoice-pay-btn', { 'event_category': 'engagement' })"
            className="btn btn-teal mr-3 order-lg-1"
          >
            پرداخت
          </a>
        </div>
      </div>
    </div>
  );
}
