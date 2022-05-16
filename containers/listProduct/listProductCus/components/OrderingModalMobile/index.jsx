import styles from "./orderingModalMobile.module.scss";

function OrderingModalMobile({
  handel_OrderingModal,
  handel_filterModal,
  setWhichOrdering,
  setIsOpenOrderingModal,
}) {
  return (
    <>
      <div className={`${styles.modal_filter_products} d-none d-lg-block `}>
        <div
          style={{
            position: "fixed",
            top: "10px",
            left: "10px",
            zIndex: "10000",
          }}
        >
          <i
            onClick={handel_OrderingModal}
            className="far fa-times-circle"
            style={{
              fontSize: "25px",
              marginTop: "5px",
              marginLeft: "10px",
            }}
          ></i>
        </div>
        <div id="sidebar">
          <div className={styles.search_body_filter}>
            <div
              className={styles.modal_body}
              style={{ msOverflowX: "hidden" }}
            >
              <div
                style={{
                  padding: "5px",
                  paddingBottom: "10px",
                  paddingTop: "20px",
                  borderBottom: "1px solid gray",
                }}
                onClick={() => {
                  setWhichOrdering("");
                  setIsOpenOrderingModal(false);
                }}
              >
                <span>مرتبط ترین</span>
              </div>
              <div
                style={{
                  padding: "5px",
                  paddingBottom: "10px",
                  paddingTop: "20px",
                  borderBottom: "1px solid gray",
                }}
                onClick={() => {
                  setWhichOrdering("Price");
                  setIsOpenOrderingModal(false);
                }}
              >
                <span>ارزانتر</span>
              </div>
              <div
                style={{
                  padding: "5px",
                  paddingBottom: "10px",
                  paddingTop: "20px",
                  borderBottom: "1px solid gray",
                }}
                onClick={() => {
                  setWhichOrdering("-Price");
                  setIsOpenOrderingModal(false);
                }}
              >
                <span>گرانتر</span>
              </div>
              <div
                style={{
                  padding: "5px",
                  paddingBottom: "10px",
                  paddingTop: "20px",
                  borderBottom: "1px solid gray",
                }}
                onClick={() => {
                  setWhichOrdering("-DiscountPrecentage");
                  setIsOpenOrderingModal(false);
                }}
              >
                <span>بیشترین تخفیف</span>
              </div>
              <div
                style={{
                  padding: "5px",
                  paddingBottom: "10px",
                  paddingTop: "20px",
                  borderBottom: "1px solid gray",
                }}
                onClick={() => {
                  setWhichOrdering("-DateCreate");
                  setIsOpenOrderingModal(false);
                }}
              >
                <span>تازه ها</span>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            bottom: "0",
            left: "0",
            right: "0",
            textAlign: "center",
            marginTop: "20px",
            zIndex: "99999",
            backgroundColor: "#fff",
            padding: "5px",
          }}
        >
          <button
            onClick={handel_filterModal}
            className="btn btn-dark"
            style={{ width: "90vw", fontSize: "14px" }}
          >
            {" "}
            تایید
          </button>
        </div>
        <div style={{ paddingBottom: "80px" }}></div>
      </div>
    </>
  );
}

export default OrderingModalMobile;
