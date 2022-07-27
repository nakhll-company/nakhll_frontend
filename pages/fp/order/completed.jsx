import React from "react";
// node libraries
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// components
import MyLayout from "../../../components/layout/Layout";
import useViewport from "../../../components/viewPort";
import MobileHeader from "../../../components/mobileHeader";
import MobileOrders from "../../../containers/order/mobileOrders";
import DesktopOrders from "../../../containers/order/desktopOrders";
// methods
import { authhttp } from "../../../services/callApi/api";

function Completed() {
  const activeHojreh = useSelector((state) => state.User.activeHojreh);
  const [ordersList, setOrdersList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { width } = useViewport();
  const breakpoint = 620;

  useEffect(() => {
    async function fetchData() {
      await setLoading(true);
      const _handleRequestApi = async () => {
        const dataUrl = `/api/v1/shop/${activeHojreh}/invoices/?is_completed=true`;
        const response = await authhttp.get(dataUrl);
        // check status code
        if (response.status === 200) {
          setOrdersList(response.data.results);
        }
        await setLoading(false);
      };
      activeHojreh.length > 0 && _handleRequestApi();
    }
    if (activeHojreh) {
      fetchData();
    }
  }, [activeHojreh]);

  return (
    <>
      {width < breakpoint ? (
        <div>
          <MobileHeader title="سفارشات تکمیل شده" type="back" />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Link href="/fp/order/uncompleted">
              <a
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "3.5vw",
                  border: "1px solid #0054dc",
                  marginTop: "20px",
                  backgroundColor: "#ffffff",
                  padding: "10px",
                  width: "40%",
                  borderRadius: "0px 50px 50px 0px",
                }}
              >
                سفارشات تکمیل نشده
              </a>
            </Link>
          </div>
          <MobileOrders loading={loading} ordersList={ordersList} />
        </div>
      ) : (
        <DesktopOrders
          loading={loading}
          ordersList={ordersList}
          type="completed"
        />
      )}
    </>
  );
}
// export

export default Completed;
Completed.Layout = MyLayout;
