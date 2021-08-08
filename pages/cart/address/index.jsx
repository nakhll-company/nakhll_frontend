// node libraries
import Head from "next/head";
import Link from 'next/link';
import Assistent from "zaravand-assistent-number";
// componentes
import Steps from '../../../components/CheckOutSteps/CheckOutSteps';
// styles
import styles from '../../../styles/pages/cart/address.module.scss';
/**
 * component address cart 
 * @param {}  => 
 */
const _asist = new Assistent();
const Address = () => {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
                    integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
                    crossOrigin="anonymous"
                ></link>
            </Head>
            <Steps step="2" />
            <div className={`col-12 col-lg-5 ${styles.wrapper}`}>

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
                                <i className="fas fa-plus px-2"></i>
                                یک نشانی جدید اضافه کنید
                            </a>
                        </Link>
                    </div>
                    <form className={styles.address_items_form}>
                        <label htmlFor="addressId" className={styles.address_items_label}>
                            <div className={styles.address_item_circle}></div>
                            <div className={styles.address_item_detail}>
                                <b>پسته خندون</b> <span>موبایل:</span> <b>{_asist.number('09137552590')}</b>
                                <br />
                                <b>زرند</b><span>/{_asist.number('خیابان فردوس کوچه 1 پلاک 87')}</span>
                            </div>
                            <div className={styles.address_item_icons}>
                                <i className="far fa-edit mx-3"></i>
                                <i className="far fa-trash-alt"></i>
                            </div>
                            <input id="addressId" type="radio" name="addressId" value="1" />
                        </label>
                        <label htmlFor="addressId" className={styles.address_items_label}>
                            <div className={styles.address_item_circle}></div>
                            <div className={styles.address_item_detail}>
                                <b>پسته خندون</b> <span>موبایل:</span> <b>{_asist.number('09137552590')}</b>
                                <br />
                                <b>زرند</b><span>/{_asist.number('خیابان فردوس کوچه 1 پلاک 87')}</span>
                            </div>
                            <div className={styles.address_item_icons}>
                                <i className="far fa-edit mx-3"></i>
                                <i className="far fa-trash-alt"></i>
                            </div>
                            <input id="addressId" type="radio" name="addressId" value="1" />
                        </label>
                        <button type="submit" className={`${styles.button_submit} w-100`}>ادامه و تایید نشانی</button>
                    </form>
                </section>
            </div>
        </>
    );
}
// export
export default Address;