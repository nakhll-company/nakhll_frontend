// node libraries
import Image from 'next/image';
import Link from 'next/link';
// components
import MobileHeader from '../../../components/mobileHeader';
// styles
import styles from '../../../styles/pages/store/successPage.module.scss';

export default function SuccessPage() {
    return (
        <div className={styles.wrapper}>
            <Image src="/image/store/success.svg" alt="success" width="51" height="51" />
            <h4 className={styles.message_success}>حجره شما با موفقیت ثبت شد.</h4>
            <p className={styles.suggesstion_text}>برای بهتر دیده شدن حجره تان می توانید از طریق<br />دکمه زیر محصول خود را ثبت دهید.</p>
            <div className={styles.wrapper_links}>
                <Link href={`/fp/product/create`}>
                    <a className={styles.link_create_product}>
                        ثبت محصول
                    </a>
                </Link>
                <Link href={`/`}>
                    <a className={styles.link_dashboard}>
                        مشاهده داشبورد
                    </a>
                </Link>
            </div>
        </div>
    );
}