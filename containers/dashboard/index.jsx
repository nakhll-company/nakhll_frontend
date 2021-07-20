// node libraries
import { useEffect, useState } from "react";
import { connect } from "react-redux";
// methods
import { ApiRegister } from "../../services/apiRegister/ApiRegister";
import { mapState } from "./methods/mapState";

// import Swiper core and required modules
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper modules
SwiperCore.use([EffectFade, Autoplay, Navigation, Pagination, Scrollbar, A11y]);

// image
import Image from "next/image";
// styles
import styles from "../../styles/pages/dashboard/dashboard.module.scss";

function Dashboard({ activeHojreh }) {
  const [api, setApi] = useState({});

  useEffect(() => {
    const _handleRequestApi = async () => {
      let params = {};
      let loadData = null;
      let dataUrl = `/app/api/v1/dashboard/${activeHojreh}/`;
      let response = await ApiRegister().apiRequest(
        loadData,
        "get",
        dataUrl,
        true,
        params
      );

      setApi(await response);
    };

    activeHojreh.length > 0 && _handleRequestApi();
  }, [activeHojreh]);

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
// export
const connector = connect(mapState);
export default connector(Dashboard);
