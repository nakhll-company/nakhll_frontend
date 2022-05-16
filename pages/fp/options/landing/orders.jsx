// node libraries
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Assistent from "zaravand-assistent-number";
// components
import useViewport from "../../../../components/viewPort";
import OrdersLandingMobile from "../../../../containers/options/ordersLandingMobile";
// methods
import { getOrders } from "../../../../containers/options/methods/getOrders";
import { buyWaitOrders } from "../../../../containers/options/methods/buyWaitOrders";
// scss
import styles from "../../../../containers/options/scss/desktopLanding.module.scss";

const _asist = new Assistent();

const Orders = () => {
  const breakpoint = 620;
  const router = useRouter();
  const { id } = router.query;
  const { width } = useViewport();
  const [ordersData, setOrdersData] = useState([]);
  const activeHojreh = useSelector((state) => state.User.activeHojreh);

  useEffect(() => {
    async function fetchData() {
      setOrdersData(await getOrders(id, activeHojreh));
    }
    fetchData();
  }, [id, activeHojreh]);

  return (
    <>
      <Head>
        <title>سفارشات</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {width > breakpoint ? (
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              سفارشات قابلیت{" "}
              {ordersData.length > 0 && ordersData[0].feature.name}
            </h1>
            <Link href={`/fp/options/landing/detail?id=${id}`}>
              <a className={styles.link_add}>جزئیات قابلیت</a>
            </Link>
            <Link href={`/fp/options/landing/${id}`}>
              <a className={styles.link_add}>لیست قابلیت</a>
            </Link>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ردیف</th>
                <th>مبلغ (تومان)</th>
                <th>تاریخ شروع</th>
                <th>تاریخ انقضا</th>
                <th>دمو</th>
                <th>وضعیت</th>
              </tr>
            </thead>
            <tbody>
              {ordersData && ordersData.length > 0 ? (
                ordersData.map((value, index) => {
                  return (
                    <tr key={index}>
                      <td>{_asist.number(index + 1)}</td>
                      <td>
                        {`${_asist.number(value.bought_price_per_unit)} / `}
                        {`در ${value.bought_unit === "month" && "یک ماه"}`}
                      </td>
                      <td>{_asist.number(value.start_datetime)}</td>
                      <td>{_asist.number(value.expire_datetime)}</td>
                      <td>{value.is_demo === true ? "فعال" : "غیرفعال"}</td>
                      <td>
                        {value.status === "completed" ? (
                          "تکمیل شده"
                        ) : (
                          <span>
                            در انتظار پرداخت
                            <button
                              className={`${styles.button_buy} mx-3`}
                              onClick={() => {
                                buyWaitOrders(value.id);
                              }}
                            >
                              خرید
                            </button>
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="7">داده ای موجود نیست</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <OrdersLandingMobile ordersData={ordersData} id={id} />
      )}
    </>
  );
};
// export
export default Orders;
