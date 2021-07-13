// node
import Image from 'next/image';
import { connect } from 'react-redux';
// methods
import { getProduct } from '../../../redux/actions/product/getProduct';
// scss
import styles from '../../../styles/pages/product/sortModal.module.scss';

const Sort = ({ getProduct, setShowModalSort }) => {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>ترتیب نمایش</header>
            <div className={styles.sort_item_wrapper}>
                <span className={styles.sort_item} onClick={() => {
                    getProduct("", "", "", "", "", "total_sell");
                    setShowModalSort(pre => !pre);
                }}>
                    <Image src="/image/product/tik.svg" alt="tik" width="15" height="15" />
                    تعداد فروش
                </span>
                <span className={styles.sort_item} onClick={() => {
                    getProduct("", "", "", "", "", "title");
                    setShowModalSort(pre => !pre);
                }}>
                    <Image src="/image/product/tik.svg" alt="tik" width="15" height="15" />
                    نام محصول
                </span>
            </div>
        </div>
    );
}
// export
const connector = connect(null, { getProduct });
export default connector(Sort);