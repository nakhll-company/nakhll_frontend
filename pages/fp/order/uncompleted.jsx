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
import { getUncompleted } from "../../../redux/actions/orders/getUncompleted";
import { authhttp } from "../../../services/callApi/api";

function Uncompleted() {
  const activeHojreh = useSelector((state) => state.User.activeHojreh);
  const [loading, setLoading] = useState(false);
  const [ordersList, setOrdersList] = useState([]);
  const { width } = useViewport();
  const breakpoint = 620;

  useEffect(() => {
    async function fetchData() {
      await setLoading(true);
      const _handleRequestApi = async () => {
        const dataUrl = `/api/v1/shop/${activeHojreh}/invoices/?is_completed=false`;
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
          <MobileHeader title="سفارشات تکمیل نشده" type="back" />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Link href="/fp/order/completed">
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
                سفارشات تکمیل شده
              </a>
            </Link>
          </div>
          <MobileOrders ordersList={ordersList} loading={loading} />
        </div>
      ) : (
        <DesktopOrders
          loading={loading}
          activeHojreh={activeHojreh}
          ordersList={ordersList}
          getUncompleted={getUncompleted}
          type="uncompleted"
        />
      )}
    </>
  );
}
// export

export default Uncompleted;
Uncompleted.Layout = MyLayout;
