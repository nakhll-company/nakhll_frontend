function MiniCardBuy() {
  return (
    <div className="col-12 mx-auto " style={{ maxWidth: "72rem" }}>
      <div className="pt-4"></div>
      <div>
        <div className="py-2 px-3 mt-4 border rounded bg-gray-100 d-flex flex-wrap align-items-center">
          <span className="mr-3">سبد خرید</span>{" "}
          <span className="mr-lg-auto text-teal-dark font-size-sm  w-lg-auto my-2">
            <i className="bi bi-info"></i>
          </span>{" "}
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
// export
export default MiniCardBuy;
