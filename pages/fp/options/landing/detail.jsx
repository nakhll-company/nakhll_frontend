import React from "react";
// node libraries
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
// methods
import { activeDemo } from "../../../../containers/options/methods/activeDemo";
import { landingDetal } from "../../../../containers/options/methods/landingDetail";
// scss
import styles from "../../../../containers/options/scss/landingDetail.module.scss";

const LandingDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [detailData, setDetailData] = useState({});
  const activeHojreh = useSelector((state) => state.User.activeHojreh);

  useEffect(() => {
    async function fetchData() {
      setDetailData(await landingDetal(id));
    }
    fetchData();
  }, [id]);

  return (
    <>
      <Head>
        <title>قابلیت ها</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.wrapper}>
        <h1 className={styles.title_page}>قابلیت ها</h1>
        {Object.keys(detailData).length > 0 && (
          <dl>
            <dt className={styles.list_title}> - {detailData.name}</dt>
            <dd className={styles.list_description}>
              {detailData.description}
            </dd>
            <div className={styles.wrapper_link}>
              <Link href={`/fp/options/landing/${id}`}>
                <a className={styles.link}>لیست صفحات فرود اختصاصی</a>
              </Link>
              <span
                className={styles.link}
                onClick={() => {
                  activeDemo(id, activeHojreh, router);
                }}
              >
                فعال سازی دمو
              </span>
            </div>
          </dl>
        )}
      </div>
    </>
  );
};
// export
export default LandingDetail;
