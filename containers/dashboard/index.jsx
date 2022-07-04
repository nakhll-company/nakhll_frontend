// node libraries
import Link from "next/link";

import { connect } from "react-redux";
import { useEffect, useState } from "react";

// methods
import { mapState } from "./methods/mapState";
// components
import Loading from "../../components/loading";
// styles
import s from "./dashboard.module.scss";
import { authhttp } from "../../services/callApi/api";

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

  // mini component
  const Panel = ({ href = "/", num, title, children }) => {
    return (
      <>
        <Link href={href} passHref>
          <div className={s.left_one_1}>
            {children}

            <h1 className={s.h1}>{num}</h1>
            <h4 className={s.h4}>{title}</h4>
          </div>
        </Link>
      </>
    );
  };
  const PanelStatus = ({ title = "عنوان", data = [] }) => {
    return (
      <>
        <div dir="rtl" className={s.left_three}>
          <div className={s.left_three_head}>
            <h3 style={{ margin: "15px", color: "#91a6c1", fontSize: "15px" }}>
              {title}
            </h3>
          </div>
          <div className={s.left_three_content}>
            {data.map((data, index) => (
              <div key={index}>
                <h1 className={s.h1}>{data.num}</h1>
                <h3 className={s.h3}>{data.unit ?? "عدد"}</h3>
                <h4 className={s.h4}>{data.explain}</h4>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div dir="rtl" className={s.left_one}>
            <Panel
              href="fp/order/uncompleted"
              num={api.uncompleted_fators}
              title="
                  سفارش ها تکمیل نشده
                "
            >
              <i
                className="fas fa-cart-plus "
                style={{ color: "#1b3e68", fontSize: "20px" }}
              ></i>
            </Panel>
            <Panel
              href="/fp/order/completed"
              num={api.uncomfirmed_factors}
              title="
                  سفارش های تکمیل شده
                "
            >
              <i
                className="fas fa-user-clock "
                style={{ color: "#1b3e68", fontSize: "20px" }}
              ></i>
            </Panel>
          </div>
          <div dir="rtl" className={s.left_one}>
            <Panel
              href="/"
              num={api.unread_comments_count}
              title="
                دیدگاه های تازه
             "
            >
              <i
                className="far fa-comment-alt "
                style={{ color: "#1b3e68", fontSize: "20px" }}
              ></i>
            </Panel>
            <Panel href="/" num={api.balance} title="موجودی حساب">
              <i
                className="fas fa-wallet "
                style={{ color: "#1b3e68", fontSize: "20px" }}
              ></i>
            </Panel>
          </div>
          {/* slider */}

          {/* product status */}
          <PanelStatus
            data={[
              {
                num: api.active_products,
                explain: "کالاهای فعال",
              },
              {
                num: api.nearly_outofstock_products,
                explain: "کالا های در حال اتمام",
              },
              {
                num: api.inactive_products,
                explain: " کالاهای غیرفعال",
              },
              {
                num: api.outofstock_products,
                explain: " کالاهای ناموجود",
              },
            ]}
          />

          {/* sell status */}
          <PanelStatus
            title="وضعیت فروش"
            data={[
              {
                num: api?.current_week_total_sell?.amont ?? "0",
                explain: "فروش هفته جاری",
                unit: "تومان",
              },
              {
                num: api?.last_month_total_sell?.amont ?? "0",
                explain: "فروش ماه گذشته",
                unit: "تومان",
              },
              {
                num: api?.last_week_total_sell?.amont ?? "0",
                explain: "فروش هفته گذشته",
                unit: "تومان",
              },
            ]}
          />

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
