import styles from "./orderingModalMobile.module.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import CustomList from "./customList";

function OrderingModalMobile({
  handel_OrderingModal,
  onChangeFilter,
  setIsOpenOrderingModal,
  data,
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
          <AiFillCloseCircle size={30} onClick={handel_OrderingModal} />
        </div>
        <div id="sidebar">
          <div className={styles.search_body_filter}>
            <div
              className={styles.modal_body}
              style={{ msOverflowX: "hidden" }}
            >
              <CustomList
                className={data == undefined}
                title="مرتبط ترین"
                onClick={() => {
                  onChangeFilter("ordering", "");
                  setIsOpenOrderingModal(false);
                }}
              />
              <CustomList
                className={data == "Price"}
                title="ارزانتر"
                onClick={() => {
                  onChangeFilter("ordering", "Price");
                  setIsOpenOrderingModal(false);
                }}
              />

              <CustomList
                className={data == "-Price"}
                title="گرانتر"
                onClick={() => {
                  onChangeFilter("ordering", "-Price");
                  setIsOpenOrderingModal(false);
                }}
              />

              <CustomList
                className={data == "-DiscountPrecentage"}
                title="بیشترین تخفیف"
                onClick={() => {
                  onChangeFilter("ordering", "-DiscountPrecentage");
                  setIsOpenOrderingModal(false);
                }}
              />

              <CustomList
                className={data == "-DateCreate"}
                title="تازه ها"
                onClick={() => {
                  onChangeFilter("ordering", "-DateCreate");
                  setIsOpenOrderingModal(false);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderingModalMobile;
