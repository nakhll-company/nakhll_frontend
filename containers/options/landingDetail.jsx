// node libraries
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
// methods
import { activeDemo } from './methods/activeDemo';
import { buyOptions } from './methods/buyOptions';
import { landingDetal } from './methods/landingDetail';
// scss
import styles from './scss/landingDetail.module.scss';

const LandingDetail = ({ id, activeHojreh }) => {

    const [detailData, setDetailData] = useState({});

    useEffect(async () => {
        setDetailData(await landingDetal(id));
    }, []);

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
                            <div className={styles.wrapper_link}>
                                <span className={styles.link} onClick={() => {
                                    activeDemo(id, activeHojreh);
                                }}>فعال سازی دمو</span>
                                <span className={styles.link} onClick={() => {
                                    buyOptions(id, activeHojreh);
                                }}>خرید</span>
                                <Link href={`/fp/options/landing/orders?id=${id}`}>
                                    <a>
                                        <span className={styles.link}>سفارشات</span>
                                    </a>
                                </Link>
                            </div>
                        </dd>
                    </dl>
                }
            </div>
        </>
    );
}
// export
export default LandingDetail;