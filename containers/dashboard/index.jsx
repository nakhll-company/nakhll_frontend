// node libraries
import Link from "next/link";
import Image from "next/image";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
// methods
import { mapState } from "./methods/mapState";
// components
import Loading from "../../components/loading";
// styles
import styles from "../../styles/pages/dashboard/dashboard.module.scss";
import { authhttp } from "../../services/callApi/api";

SwiperCore.use([EffectFade, Autoplay, Navigation, Pagination, Scrollbar, A11y]);

function Dashboard({ activeHojreh }) {
  const [api, setApi] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await setLoading(true);
      const _handleRequestApi = async () => {
        const dataUrl = `/api/v1/dashboard/${activeHojreh}/`;
        const response = await authhttp.get(dataUrl);
        // check status code
        if (response.status === 200) {
          setApi(await response.data);
        }
        await setLoading(false);
      };
      activeHojreh.length > 0 && _handleRequestApi();
    }
    fetchData();
  }, [activeHojreh]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div dir="rtl" className={styles.left_one}>
            <Link href="fp/order/uncompleted" passHref>
              <div className={styles.left_one_1}>
                <i
                  className="fas fa-cart-plus "
                  style={{ color: "#1b3e68", fontSize: "20px" }}
                ></i>
                <h1
                  style={{
                    fontSize: "18px",
                    marginTop: "0px",
                    marginBottom: "0px",
                  }}
                >
                  {api.uncompleted_fators}
                </h1>
                <h4
                  style={{
                    fontSize: "14px",
                    color: "#a4aebb",
                    marginTop: "0px",
                    marginBottom: "0px",
                  }}
                >
                  سفارش ها تکمیل نشده
                </h4>
              </div>
            </Link>
            <Link href="/fp/order/completed" passHref>
              <div className={styles.left_one_1}>
                <i
                  className="fas fa-user-clock "
                  style={{ color: "#1b3e68", fontSize: "20px" }}
                ></i>
                <h1
                  style={{
                    fontSize: "18px",
                    marginTop: "0px",
                    marginBottom: "0px",
                  }}
                >
                  {api.uncomfirmed_factors}
                </h1>
                <h4
                  style={{
                    fontSize: "14px",
                    color: "#a4aebb",
                    marginTop: "0px",
                    marginBottom: "0px",
                  }}
                >
                  سفارش های تکمیل شده
                </h4>
              </div>
            </Link>
            <div className={styles.left_one_1}>
              <i
                className="far fa-comment-alt "
                style={{ color: "#1b3e68", fontSize: "20px" }}
              ></i>
              <h1
                style={{
                  fontSize: "18px",
                  marginTop: "0px",
                  marginBottom: "0px",
                }}
              >
                {api.unread_comments_count}
              </h1>
              <h4
                style={{
                  fontSize: "14px",
                  color: "#a4aebb",
                  marginTop: "0px",
                  marginBottom: "0px",
                }}
              >
                دیدگاه های تازه
              </h4>
            </div>
            <div className={styles.left_one_1}>
              <i
                className="fas fa-wallet "
                style={{ color: "#1b3e68", fontSize: "20px" }}
              ></i>
              <h1
                style={{
                  fontSize: "18px",

                  marginTop: "0px",
                  marginBottom: "0px",
                }}
              >
                {api.balance}
                <span
                  style={{
                    marginRight: "5px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontSize: "14px",
                  }}
                >
                  تومان
                </span>
              </h1>
              <h4
                style={{
                  fontSize: "14px",
                  color: "#a4aebb",
                  marginTop: "0px",
                  marginBottom: "0px",
                }}
              >
                موجودی حساب{" "}
              </h4>
            </div>
          </div>
          {/* slider */}
          <div dir="rtl" className={styles.left_two}>
            <Swiper
              slidesPerView={1}
              navigation
              //   scrollbar={{ draggable: true }}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              effect={"fade"}
            >
              <SwiperSlide>
                <div
                  className={styles.divForSlider}
                  style={{ height: "269px" }}
                >
                  <Image
                    src="/image/pic2.jpg"
                    alt="Picture of the author"
                    layout="fill"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={styles.divForSlider}
                  style={{ height: "269px" }}
                >
                  <Image
                    src="/image/pic1.jpg"
                    alt="Picture of the author"
                    layout="fill"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={styles.divForSlider}
                  style={{ height: "269px" }}
                >
                  <Image
                    src="/image/pic3.jpg"
                    alt="Picture of the author"
                    layout="fill"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* product status */}
          <div dir="rtl" className={styles.left_three}>
            <div className={styles.left_three_head}>
              <h3
                style={{ margin: "15px", color: "#91a6c1", fontSize: "15px" }}
              >
                وضعیت محصول
              </h3>
            </div>
            <div className={styles.left_three_content}>
              <div className="">
                <h1
                  style={{
                    display: "inline-block",
                    color: " black",
                    marginLeft: "5px",
                    fontSize: "18px",
                    marginTop: "0px",
                    marginBottom: "0px",
                  }}
                >
                  {api.active_products}
                </h1>
                <h3
                  style={{
                    display: "inline-block",
                    color: "black",
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontSize: "14px",
                  }}
                >
                  عدد
                </h3>
                <h4
                  style={{
                    marginTop: "10px",
                    fontSize: "14px",
                    color: "#a4aebb",
                  }}
                >
                  کالاهای فعال
                </h4>
              </div>
              <div className="">
                <h1
                  style={{
                    display: "inline-block",
                    color: "black",
                    marginLeft: "5px",
                    fontSize: "18px",
                    marginTop: "0px",
                    marginBottom: "0px",
                  }}
                >
                  {api.nearly_outofstock_products}
                </h1>
                <h3
                  style={{
                    display: "inline-block",
                    color: "black",
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontSize: "14px",
                  }}
                >
                  عدد
                </h3>
                <h4
                  style={{
                    marginTop: "10px",
                    fontSize: "14px",
                    color: "#a4aebb",
                  }}
                >
                  کالا های در حال اتمام
                </h4>
              </div>
              <div className="">
                <h1
                  style={{
                    display: "inline-block",
                    color: "black",
                    marginLeft: "5px",
                    fontSize: "18px",
                    marginTop: "0px",
                    marginBottom: "0px",
                  }}
                >
                  {api.inactive_products}
                </h1>
                <h3
                  style={{
                    display: "inline-block",
                    color: "black",
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontSize: "14px",
                  }}
                >
                  عدد
                </h3>
                <h4
                  style={{
                    marginTop: "10px",
                    fontSize: "14px",
                    color: "#a4aebb",
                  }}
                >
                  کالاهای غیرفعال
                </h4>
              </div>
              <div className="">
                <h1
                  style={{
                    display: "inline-block",
                    color: " black",
                    marginLeft: "5px",
                    fontSize: "18px",
                    marginTop: "0px",
                    marginBottom: "0px",
                  }}
                >
                  {api.outofstock_products}
                </h1>
                <h3
                  style={{
                    display: " inline-block",
                    color: "black",
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontSize: "14px",
                  }}
                >
                  عدد
                </h3>
                <h4
                  style={{
                    marginTop: "10px",
                    fontSize: "14px",
                    color: "#a4aebb",
                  }}
                >
                  کالاهای ناموجود
                </h4>
              </div>
            </div>
          </div>
          {/* sell status */}
          <div dir="rtl" className={styles.left_three}>
            <div className={styles.left_three_head}>
              <h3
                style={{ margin: "15px", color: "#91a6c1", fontSize: "15px" }}
              >
                وضعیت فروش
              </h3>
            </div>
            <div className={styles.left_three_content}>
              <div className="">
                <h1
                  style={{
                    display: "inline-block",
                    color: " black",
                    marginLeft: "5px",
                    fontSize: "18px",
                    marginTop: "0px",
                    marginBottom: "0px",
                  }}
                >
                  {api.current_week_total_sell &&
                  api.current_week_total_sell.amont === null
                    ? "0"
                    : api.current_week_total_sell.amont}
                </h1>
                <h3
                  style={{
                    display: "inline-block",
                    color: "black",
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontSize: "14px",
                  }}
                >
                  تومان
                </h3>
                <h4
                  style={{
                    marginTop: "10px",
                    fontSize: "14px",
                    color: "#a4aebb",
                  }}
                >
                  فروش هفته جاری
                </h4>
              </div>
              <div className="">
                <h1
                  style={{
                    display: " inline-block",
                    color: "black",
                    marginLeft: "5px",
                    fontSize: "18px",
                    marginTop: "0px",
                    marginBottom: "0px",
                  }}
                >
                  {api.last_month_total_sell &&
                  api.last_month_total_sell.amont == null
                    ? "0"
                    : api.last_month_total_sell.amont}
                </h1>
                <h3
                  style={{
                    display: "inline-block",
                    color: "black",
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontSize: "14px",
                  }}
                >
                  تومان
                </h3>
                <h4
                  style={{
                    marginTop: "10px",
                    fontSize: "14px",
                    color: "#a4aebb",
                  }}
                >
                  فروش ماه گذشته
                </h4>
              </div>
              <div className="">
                <h1
                  style={{
                    display: "inline-block",
                    color: "black",
                    marginLeft: "5px",
                    fontSize: "18px",
                    marginTop: "0px",
                    marginBottom: "0px",
                  }}
                >
                  {(api.last_week_total_sell &&
                    api.last_week_total_sell.amont) ||
                    0}
                </h1>
                <h3
                  style={{
                    display: "inline-block",
                    color: "black",
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontSize: "14px",
                  }}
                >
                  عدد
                </h3>
                <h4
                  style={{
                    marginTop: "10px",
                    fontSize: "14px",
                    color: "#a4aebb",
                  }}
                >
                  فروش هفته گذشته
                </h4>
              </div>
            </div>
          </div>
          {/* form MARGINNNNNNNNNNNNNNN----------->    :) */}
          <div style={{ marginTop: "70px" }}></div>
        </>
      )}
    </>
  );
}
// export
const connector = connect(mapState);
export default connector(Dashboard);
