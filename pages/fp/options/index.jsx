// node libraries
import Head from 'next/head';
import Link from 'next/link';
// scss
import styles from './options.module.scss';
const Options = () => {
    return (
        <>
            <Head>
                <title>قابلیت ها</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={styles.wrapper}>
                <h1 className={styles.title_page}>قابلیت ها</h1>
                <dl>
                    <dt className={styles.list_title}> - ایجاد صفحه فرود اختصاصی</dt>
                    <dd className={styles.list_description}>
                        با استفاده از این قابلیت می توانید این امکان را داشته باشید که یک صفحه فرود براساس نیازهای خود طراحی کنید و محصولات حجره خود را در آن به نمایش بگذارید. برای افزودن این ویژگی می توانید روی لینک زیر کلیک کنید و از این ویژگی به مدت یک ماه رایگان استفده نمایید.
                        <div className={styles.wrapper_link}>
                            <Link href="/fp/options/landing">
                                <a className={styles.link}>استفاده از این ویژگی</a>
                            </Link>
                        </div>
                    </dd>
                </dl>
            </div>
        </>
    );
}
// export
export default Options;