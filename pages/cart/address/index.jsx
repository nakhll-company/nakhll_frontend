// node libraries
import Head from "next/head";
import Link from 'next/link';
// styles
import styles from '../../../styles/pages/cart/address.module.scss';
/**
 * component address cart
 * @param {}  => 
 */
const Address = () => {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
                    integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
                    crossorigin="anonymous"
                ></link>
            </Head>
            <div className={`col-12 col-lg-5 ${styles.wrapper}`}>
                <div className="">
                    <h1>milad</h1>
                </div>
                <header className={styles.header}>
                    <Link href="/cart">
                        <a className={styles.header_back_link}>
                            <i className="fas fa-arrow-right px-2"></i>
                            بازگشت
                        </a>
                    </Link>
                    <h2 className={styles.header_title}>انتخاب نشانی</h2>
                </header>
                <section className={styles.body_address}>
                    <div className={styles.address_head}>
                        <span>می خواهید سفارش شما به کدام نشانی ارسال شود :</span>
                        <Link href="/cart/address/new">
                            <a className={styles.address_head_link}>
                                <i class="fas fa-plus px-2"></i>
                                یک نشانی جدید اضافه کنید
                            </a>
                        </Link>
                    </div>
                    <form>
                        <label>

                        </label>
                    </form>
                </section>
            </div>
        </>
    );
}
// export
export default Address;