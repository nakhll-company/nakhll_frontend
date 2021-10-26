// node libraries
import Head from 'next/head';
import Link from 'next/link';
// scss
import styles from './landing.module.scss';

const Landing = () => {
    return (
        <>
            <Head>
                <title>لیست فرودها</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h1 className={styles.title}>فرودها</h1>
                    <Link href="/">
                        <a className={styles.link_add}>
                            <i className="fa fa-plus ms-2"></i>
                            افزودن فرود
                        </a>
                    </Link>
                </div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ردیف</th>
                            <th>نام</th>
                            <th>تاریخ ثبت</th>
                            <th>وضعیت</th>
                            <th>پیش نمایش</th>
                            <th>حذف</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>تست فرود</td>
                            <td>1400/05/31</td>
                            <td>فعال</td>
                            <td><i class="fas fa-eye"></i></td>
                            <td><i class="far fa-trash-alt"></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
// export
export default Landing;