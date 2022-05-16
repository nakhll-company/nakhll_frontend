import Assistent from "zaravand-assistent-number";

const _asist = new Assistent();
export default function MiniCardBuy() {
  return (
    <div className="col-12 mx-auto " style={{ maxWidth: "72rem" }}>
      <div className="pt-4"></div>
      <div>
        <div className="py-2 px-3 mt-4 border rounded bg-gray-100 d-flex flex-wrap align-items-center">
          {/* <span className="text-secondary font-size-sm">
            {_asist.number(736810)}
          </span>{" "} */}
          <span className="mr-3">سبد خرید</span>{" "}
          {/* <span className="mr-2">
            {_asist.PSeparator(690000)} <small>تومان</small>
          </span>{" "} */}
          <span className="mr-lg-auto text-teal-dark font-size-sm  w-lg-auto my-2">
            <i className="bi bi-info"></i>
            {/* قابل پرداخت تا 4 ساعت و 44 دقیقه دیگر */}
          </span>{" "}
          {/* <a
            href="/account/invoices/d43PO"
            onClick={() => {}}
            className="btn btn-outline-teal mr-auto mr-lg-3 order-lg-1"
          >
            جزئیات
          </a>{" "} */}
          <a
            onClick={() => {}}
            style={{ backgroundColor: "1b3e68" }}
            className="btn btn-buy mr-3 order-lg-1"
          >
            ادامه خرید
          </a>
        </div>
      </div>
    </div>
  );
}
