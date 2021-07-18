// node libraries
import Head from "next/head";
// components
import Layout from "../components/layout/Layout";
// styles
import styles from "../styles/pages/dashboard/dashboard.module.scss";

// Hook
import { useEffect, useState } from "react";
import { ApiRegister } from "../services/apiRegister/ApiRegister";
/**
 * component dashboard
 * @returns
 */
export default function Home() {
  const [api, setApi] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const _handleRequestApi = async () => {
      let params = {};
      let loadData = null;
      let dataUrl = "/app/api/v1/dashboard/pestehkerman/";
      let response = await ApiRegister().apiRequest(
        loadData,
        "get",
        dataUrl,
        true,
        params
      );

      setApi(await response);
    };

    _handleRequestApi();

    //   // toastSuccessMessage('success');
  }, []);

  console.log("api :>> ", api);
  // console.log("userInfo :>> ", userInfo);

  return (
    <>
      {api && (
        <>
          <div dir="rtl" className={styles.left_one}>
            <div className={styles.left_one_1}>
              <i
                className="fas fa-cart-plus fa-3x"
                style={{ color: "#007aff" }}
              ></i>
              <h1>{api.uncompleted_fators}</h1>

              <h4>سفارش ها تکمیل نشده</h4>
            </div>
            <div className={styles.left_one_1}>
              <i
                className="fas fa-user-clock fa-3x"
                style={{ color: "#007aff" }}
              ></i>
              <h1>{api.uncomfirmed_factors}</h1>
              <h4>سفارش های تاییده نشده</h4>
            </div>
            <div className={styles.left_one_1}>
              <i
                className="far fa-comment-alt fa-3x"
                style={{ color: "#007aff" }}
              ></i>
              <h1>{api.unread_comments_count}</h1>
              <h4>دیدگاه های تازه</h4>
            </div>
            <div className={styles.left_one_1}>
              <i
                className="fas fa-wallet fa-3x"
                style={{ color: "#007aff" }}
              ></i>
              <h1>
                {api.balance} <span>تومان</span>
              </h1>
              <h4>موجودی حساب </h4>
            </div>
          </div>
          <div dir="rtl" className={styles.left_two}>
            {/* <Swiper
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              // spaceBetween={50}
              slidesPerView={1}
              navigation
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div style={{ background: "red", height: "269px" }}></div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ background: "blue", height: "269px" }}></div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ background: "gold", height: "269px" }}></div>
              </SwiperSlide>
            </Swiper> */}
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
                  {api.active_products}
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
                  {api.nearly_outofstock_products}
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
                  {api.inactive_products}
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
                  {api.outofstock_products}
                </h1>
                <h3 style={{ display: " inline-block", color: "black" }}>
                  عدد
                </h3>
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
                  {api.current_week_total_sell &&
                    api.current_week_total_sell.amont &&
                    "0"}
                </h1>
                <h3 style={{ display: "inline-block", color: "black" }}>
                  تومان
                </h3>
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
                  {api.last_month_total_sell && api.last_month_total_sell.amont}
                </h1>
                <h3 style={{ display: "inline-block", color: "black" }}>
                  تومان
                </h3>
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
                  {(api.last_week_total_sell &&
                    api.last_week_total_sell.amont) ||
                    0}
                </h1>
                <h3 style={{ display: "inline-block", color: "black" }}>عدد</h3>
                <h4 style={{ marginTop: "1rem" }}>فروش هفته گذشته</h4>
              </div>
            </div>
          </div>
          <div dir="rtl" className={styles.left_five}>
            A5
          </div>
        </>
      )}
    </>
  );
}
Home.Layout = Layout;
