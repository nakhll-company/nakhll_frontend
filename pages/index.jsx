// node libraries
import Head from 'next/head';
// components
import Layout from '../components/layout/Layout';
// styles
import styles from "../styles/pages/dashboard.module.scss";


/**
 * component dashboard
 * @returns 
 */
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div dir="rtl" className={styles.left_one}>
        <div className={styles.left_one_1}>
          <i
            className="fas fa-cart-plus fa-3x"
            style={{ color: "#007aff" }}
          ></i>
          <h1> 8</h1>
          <h4>سفارش ها تکمیل نشده</h4>
        </div>
        <div className={styles.left_one_1}>
          <i
            className="fas fa-user-clock fa-3x"
            style={{ color: "#007aff" }}
          ></i>
          <h1>8</h1>
          <h4>سفارش ها تکمیل نشده</h4>
        </div>
        <div className={styles.left_one_1}>
          <i
            className="far fa-comment-alt fa-3x"
            style={{ color: "#007aff" }}
          ></i>
          <h1>8</h1>
          <h4>سفارش ها تکمیل نشده</h4>
        </div>
        <div className={styles.left_one_1}>
          <i className="fas fa-wallet fa-3x" style={{ color: "#007aff" }}></i>
          <h1>8</h1>
          <h4>سفارش ها تکمیل نشده</h4>
        </div>
      </div>
      <div dir="rtl" className={styles.left_two}>

      </div>
      <div dir="rtl" className={styles.left_three}>
        <div className={styles.left_three_head}>
          <h3 style={{ margin: "1.5rem" }}>وضعیت محصول</h3>
        </div>
        <div className={styles.left_three_content}>
          <div className="">
            <h1
              style={{
                display: "inline-block",
                color: " black",
                marginLeft: "0.5rem",
              }}
            >
              8
            </h1>
            <h3 style={{ display: "inline-block", color: "black" }}>عدد</h3>
            <h4 style={{ marginTop: "1rem" }}>کالاهای فعال</h4>
          </div>
          <div className="">
            <h1
              style={{
                display: "inline-block",
                color: "black",
                marginLeft: "0.5rem",
              }}
            >
              0
            </h1>
            <h3 style={{ display: "inline-block", color: "black" }}>عدد</h3>
            <h4 style={{ marginTop: "1rem" }}>کالا های در حال اتمام</h4>
          </div>
          <div className="">
            <h1
              style={{
                display: "inline-block",
                color: "black",
                marginLeft: "0.5rem",
              }}
            >
              0
            </h1>
            <h3 style={{ display: "inline-block", color: "black" }}>عدد</h3>
            <h4 style={{ marginTop: "1rem" }}>کالاهای غیرفعال</h4>
          </div>
          <div className="">
            <h1
              style={{
                display: "inline-block",
                color: " black",
                marginLeft: "0.5rem",
              }}
            >
              0
            </h1>
            <h3 style={{ display: " inline-block", color: "black" }}>عدد</h3>
            <h4 style={{ marginTop: "1rem" }}>کالاهای ناموجود</h4>
          </div>
        </div>
      </div>
      <div dir="rtl" className={styles.left_three}>
        <div className={styles.left_three_head}>
          <h3 style={{ margin: "1.5rem" }}>وضعیت فروش</h3>
        </div>
        <div className={styles.left_three_content}>
          <div className="">
            <h1
              style={{
                display: "inline-block",
                color: " black",
                marginLeft: "0.5rem",
              }}
            >
              8,000,000
            </h1>
            <h3 style={{ display: "inline-block", color: "black" }}>تومان</h3>
            <h4 style={{ marginTop: "1rem" }}>فروش هفته جاری</h4>
          </div>
          <div className="">
            <h1
              style={{
                display: " inline-block",
                color: "black",
                marginLeft: "0.5rem",
              }}
            >
              8,000,000
            </h1>
            <h3 style={{ display: "inline-block", color: "black" }}>تومان</h3>
            <h4 style={{ marginTop: "1rem" }}>فروش ماه گذشته</h4>
          </div>
          <div className="">
            <h1
              style={{
                display: "inline-block",
                color: "black",
                marginLeft: "0.5rem",
              }}
            >
              8,000,000
            </h1>
            <h3 style={{ display: "inline-block", color: "black" }}>عدد</h3>
            <h4 style={{ marginTop: "1rem" }}>فروش هفته گذشته</h4>
          </div>
        </div>
      </div>
      <div dir="rtl" className={styles.left_five}>
        A5
      </div>
    </div>
  )
}
Home.Layout = Layout;
