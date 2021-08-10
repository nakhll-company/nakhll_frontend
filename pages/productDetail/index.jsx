// node libraries
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
// styles
import styles from '../../styles/pages/productDetail/productDetail.module.scss';
/**
 * component detail 
 */
const ProductDetail = () => {
    return (
        <div className={styles.wrapper}>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
                />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="container d-lg-flex">
                {/* bread crumb */}
                <nav className={`${styles.bread_crumb} col-12`}>
                    {["خانه", "کالای دیجیتال", "هدفون"].map((value, index) => {
                        return (
                            <Link key={index} href="/">
                                <a>
                                    {value}
                                    <i className="fa fa-angle-left pl-3 pr-2" aria-hidden="true"></i>
                                </a>
                            </Link>
                        )
                    })}
                </nav>
                {/* product detail right */}
                <div className="col-lg-4">
                    {/* <Image src="" alt="" /> */}
                </div>
                {/* product detail left */}
                <div className="col-lg-8">
                    <h1>هدفون تکسو مدل</h1>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
