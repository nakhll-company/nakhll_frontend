// node
import Link from "next/link";
// scss
import styles from "../../../styles/pages/product/editModal.module.scss";

const Edit = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>ویرایش گروهی</header>
      <div className={styles.sort_item_wrapper}>
        <Link href={`/fp/product/update/price`} passHref>
          <button className={styles.product_header_link}>قیمت و تخفیف</button>
        </Link>
        <Link href={`/fp/product/update/inventory`} passHref>
          <button className={styles.product_header_link}>موجودی</button>
        </Link>
      </div>
    </div>
  );
};
// export
export default Edit;
