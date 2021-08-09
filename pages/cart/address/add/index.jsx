// node libraries
import Head from "next/head";
import Link from 'next/link';
// componentes
import Steps from '../../../../components/CheckOutSteps/CheckOutSteps';
// styles
import styles from '../../../../styles/pages/cart/newAddress.module.scss';
/**
 * component new address 
 * @param {}  => 
 */
const NewAddress = () => {
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
                    <Link href="/cart/address">
                        <a className={styles.header_back_link}>
                            <i className="fas fa-arrow-right px-2"></i>
                            بازگشت
                        </a>
                    </Link>
                    <h2 className={styles.header_title}>افزودن نشانی</h2>
                </header>
                <section className={styles.body_address}>
                    <form className={styles.address_items_form}>
                        <div className={styles.form_group}>
                            <label htmlFor="name">نام و نام‌خانوادگی گیرندۀ سفارش:</label>
                            <input id="name" type="text" name="name" className="form-control" />
                            <small className="form-text text-muted">همخوان با کارت ملی</small>
                        </div>
                        <div className={styles.form_group}>
                            <label htmlFor="state">انتخاب استان:</label>
                            <select id="state" name="state" className="form-control">
                                <option value="" disabled="disabled" />
                            </select>
                        </div>
                        <div className={styles.form_row}>
                            <div className={`${styles.form_group} col-md-6 col-sm-12`}>
                                <label htmlFor="bigCity">انتخاب شهرستان:</label>
                                <select id="bigCity" name="bigCity" className="form-control col-sm-12">
                                    <option value="" disabled="disabled" />
                                </select>
                            </div>
                            <div className={`${styles.form_group} col-md-6 col-sm-12`}>
                                <label htmlFor="city">انتخاب شهر:</label>
                                <select id="city" name="city" className="form-control col-sm-12">
                                    <option value="" disabled="disabled"></option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.form_group}>
                            <label htmlFor="address">نشانی دقیق پستی:</label>
                            <textarea rows="4" cols="30" id="address" name="address" className="form-control"></textarea>
                        </div>
                        <div className={styles.form_row}>
                            <div className={`${styles.form_group} col-md-6 col-sm-12`}>
                                <label htmlFor="postalCode">کد پستی:</label>
                                <input id="postalCode" name="postalCode" type="text" className="form-control input--left-align" />
                            </div>
                            <div className={`${styles.form_group} col-md-6 col-sm-12`}>
                                <label htmlFor="mobile">موبایل گیرندۀ سفارش:</label>
                                <input id="mobile" name="mobile" type="text" className="form-control input--left-align" />
                            </div>
                        </div>
                        <div className={styles.form_row}>
                            <div className="col">
                                <button type="submit" className="btn btn-primary w-100 d-flex justify-content-center align-items-center">تایید</button>
                            </div>
                            &nbsp;
                            <div className="col">
                                <Link href="/cart/address">
                                    <a className="btn btn-secondary w-100 nuxt-link-active"> بازگشت </a>
                                </Link>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </>
    );
}
// export
export default NewAddress;