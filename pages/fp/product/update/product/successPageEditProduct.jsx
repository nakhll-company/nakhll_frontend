// node libraries
import Image from "next/image";
import Link from "next/link";
// styles
import styles from "../../../../../styles/pages/product/successPage.module.scss";

export default function SuccessPageEditProduct() {
  return (
    <div className={styles.wrapperProduct}>
      <Image
        src="/image/store/success.svg"
        alt="success"
        width="51"
        height="51"
      />
      <h4 className={styles.message_success}>
        محصول با موفقیت به روز رسانی شد.
      </h4>
      {/* <p className={styles.suggesstion_text}>برای بهتر دیده شدن حجره تان می توانید از طریق<br />دکمه زیر محصول خود را ثبت دهید.</p> */}
      <div className={styles.wrapper_links}>
        <Link href={`/fp/product`}>
          <a className={styles.link_create_product}>لیست محصولات</a>
        </Link>
        <Link href={`/fp`}>
          <a className={styles.link_dashboard}>مشاهده داشبورد</a>
        </Link>
      </div>
    </div>
  );
}
