// node libraries
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
import Assistent from "zaravand-assistent-number";

const _asist = new Assistent();
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
// methods
import { ApiRegister } from "../../services/apiRegister/ApiRegister";
import { mapState } from "./methods/mapState";
// components
import Loading from "../../components/loading";
// styles
import styles from "../../styles/pages/dashboard/dashboard.module.scss";
// import Swiper core and required modules
SwiperCore.use([EffectFade, Autoplay, Navigation, Pagination, Scrollbar, A11y]);
/**
 * component for dashboard page
 * @param {string} activeHojreh
 */
function Dashboard({ activeHojreh }) {
  const router = useRouter();
  //  state
  const [api, setApi] = useState({});
  let [loading, setLoading] = useState(false);
  // useeffect
  useEffect(async () => {
    await setLoading(true);
    // api dashboard data
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
      // check status code
      if (response.status === 200) {
        setApi(await response.data);
      } else {
        toast.error(" خطایی رخ داده است.", {
          position: "top-right",
          closeOnClick: true,
        });
      }
      await setLoading(false);
    };

    activeHojreh.length > 0 && _handleRequestApi();
  }, [activeHojreh]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div dir="rtl" className={styles.left_one}>
            <Link href="fp/order/uncompleted">
              <div className={styles.left_one_1}>
                <i
                  className="fas fa-cart-plus fa-3x"
                  style={{ color: "#1b3e68" }}
                ></i>
                <h1>{_asist.number(api.uncompleted_fators)}</h1>
                <h4>سفارش ها تکمیل نشده</h4>
              </div>
            </Link>
            <Link href="/fp/order/completed">
              <div className={styles.left_one_1}>
                <i
                  className="fas fa-user-clock fa-3x"
                  style={{ color: "#1b3e68" }}
                ></i>
                <h1>{_asist.number(api.uncomfirmed_factors)}</h1>
                <h4>سفارش های تکمیل شده</h4>
              </div>
            </Link>
            <div className={styles.left_one_1}>
              <i
                className="far fa-comment-alt fa-3x"
                style={{ color: "#1b3e68" }}
              ></i>
              <h1>{_asist.number(api.unread_comments_count)}</h1>
              <h4>دیدگاه های تازه</h4>
            </div>
            <div className={styles.left_one_1}>
              <i
                className="fas fa-wallet fa-3x"
                style={{ color: "#1b3e68" }}
              ></i>
              <h1>
                {_asist.number(api.balance)}
                <span style={{ marginRight: "5px" }}>تومان</span>
              </h1>
              <h4>موجودی حساب </h4>
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
              <h3 style={{ margin: "1.5rem", color: "#91a6c1" }}>
                وضعیت محصول
              </h3>
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
                  {_asist.number(api.active_products)}
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
                  {_asist.number(api.nearly_outofstock_products)}
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
                  {_asist.number(api.inactive_products)}
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
                  {_asist.number(api.outofstock_products)}
                </h1>
                <h3 style={{ display: " inline-block", color: "black" }}>
                  عدد
                </h3>
                <h4 style={{ marginTop: "1rem" }}>کالاهای ناموجود</h4>
              </div>
            </div>
          </div>
          {/* sell status */}
          <div dir="rtl" className={styles.left_three}>
            <div className={styles.left_three_head}>
              <h3 style={{ margin: "1.5rem", color: "#91a6c1" }}>وضعیت فروش</h3>
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
                    _asist.number(
                      api.current_week_total_sell.amont === null
                        ? "0"
                        : api.current_week_total_sell.amont
                    )}
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
                  {api.last_month_total_sell &&
                    _asist.number(
                      api.last_month_total_sell.amont == null
                        ? "0"
                        : api.last_month_total_sell.amont
                    )}
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
                  {_asist.number(
                    (api.last_week_total_sell &&
                      api.last_week_total_sell.amont) ||
                      0
                  )}
                </h1>
                <h3 style={{ display: "inline-block", color: "black" }}>عدد</h3>
                <h4 style={{ marginTop: "1rem" }}>فروش هفته گذشته</h4>
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
