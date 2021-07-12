// node
import Image from 'next/image';
import Link from 'next/link';
// scss
import styles from '../../../styles/pages/product/editModal.module.scss';

const Edit = () => {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>ویرایش گروهی</header>
            <div className={styles.sort_item_wrapper}>
                <Link href={`/fp/product/update/price`}>
                    <a className={styles.product_header_link}>
                        <Image src="/image/product/tik.svg" alt="tik" width="15" height="15" />
                        قیمت و تخفیف
                    </a>
                </Link>
                <Link href={`/fp/product/update/inventory`}>
                    <a className={styles.product_header_link}>
                        <Image src="/image/product/tik.svg" alt="tik" width="15" height="15" />
                        موجودی
                    </a>
                </Link>
            </div>
        </div>
    );
}
// export
export default Edit;