// node libraries
import Link from "next/link";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
// components
import MyLayout from "../../../../components/layout/Layout";
import useViewport from "../../../../components/viewPort";
import MobileHeader from "../../../../components/mobileHeader";
import MobileOrders from "../../../../containers/order/mobileOrders";
import DesktopOrders from "../../../../containers/order/desktopOrders";
// methods
import { getCompleted } from "../../../../redux/actions/orders/getCompleted";
import { mapState } from "../../../../containers/order/methods/mapState";

function Completed({ ordersList, activeHojreh, getCompleted }) {
  let [loading, setLoading] = useState(false);
  const { width } = useViewport();
  const breakpoint = 620;

  useEffect(() => {
    async function getData() {
      await setLoading(true);
      if (activeHojreh.length > 0) {
        await getCompleted(activeHojreh);
      }
      await setLoading(false);
    }
    getData();
  }, [getCompleted, activeHojreh]);

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
const connector = connect(mapState, { getCompleted });
export default connector(Completed);
Completed.Layout = MyLayout;
