// node
import { connect } from "react-redux";
// methods
import { getProduct } from "../../../redux/actions/product/getProduct";
// scss
import styles from "../../../styles/pages/product/sortModal.module.scss";

const Sort = ({ getProduct, setShowModalSort, activeHojreh }) => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>ترتیب نمایش</header>
      <div className={styles.sort_item_wrapper}>
        <button
          className={styles.sort_item}
          onClick={() => {
            getProduct(activeHojreh, "", "", "", "", "", "total_sell", "");
            setShowModalSort((pre) => !pre);
          }}
        >
          تعداد فروش
        </button>
        <button
          className={styles.sort_item}
          onClick={() => {
            getProduct(activeHojreh, "", "", "", "", "", "title", "");
            setShowModalSort((pre) => !pre);
          }}
        >
          نام محصول
        </button>
      </div>
    </div>
  );
};
// export
const connector = connect(null, { getProduct });
export default connector(Sort);
