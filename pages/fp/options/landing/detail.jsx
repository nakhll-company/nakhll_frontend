// node libraries
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
// methods
import { activeDemo } from '../../../../containers/options/methods/activeDemo';
import { buyOptions } from '../../../../containers/options/methods/buyOptions';
import { landingDetal } from '../../../../containers/options/methods/landingDetail';
// scss
import styles from '../../../../containers/options/scss/landingDetail.module.scss';

const LandingDetail = () => {

    const router = useRouter();
    const { id } = router.query;
    const [detailData, setDetailData] = useState({});
    const activeHojreh = useSelector((state) => state.User.activeHojreh);

    useEffect(async () => {
        setDetailData(await landingDetal(id));
    }, [id]);

    return (
        <>
            <Head>
                <title>قابلیت ها</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={styles.wrapper}>
                <h1 className={styles.title_page}>قابلیت ها</h1>
                {Object.keys(detailData).length > 0 &&
                    <dl>
                        <dt className={styles.list_title}> - {detailData.name}</dt>
                        <dd className={styles.list_description}>
                            {detailData.description}
                        </dd>
                        <div className={styles.wrapper_link}>
                            {Object.keys(detailData).length > 0 ?
                                <Link href={`/fp/options/landing/${id}`}>
                                    <a className={styles.link}>
                                        لیست صفحات فرود اختصاصی
                                    </a>
                                </Link> :
                                <span className={styles.link} onClick={() => {
                                    activeDemo(id, activeHojreh, router);
                                }}>فعال سازی دمو</span>
                            }
                            {/* <span className={styles.link} onClick={() => {
                                buyOptions(id, activeHojreh);
                            }}>خرید</span>
                            <Link href={`/fp/options/landing/orders?id=${id}`}>
                                <a className={styles.link}>
                                    سفارشات
                                </a>
                            </Link> */}
                        </div>
                    </dl>
                }
            </div>
        </>
    );
}
// export
export default LandingDetail;