// component
import MyLayout from "../../../components/layout/Layout";
import CustomTab from '../../../components/custom/customTab';
import MobileHeader from '../../../components/mobileHeader';
import useViewport from '../../../components/viewPort';
import OrdersCard from '../../../containers/order/ordersCard';
// scss
import styles from '../../../styles/pages/order/listOrder.module.scss';

function Order() {

  const { width } = useViewport();
  const breakpoint = 620;

  return (
    <>
      {width < breakpoint &&
        <div className={styles.wrapper}>
          <MobileHeader title="سفارشات" type="search" />
          <CustomTab tab={[{
            title: "سفارشات باز",
            content: <OrdersCard type="open" />
          },
          {
            title: "سفارشات بسته",
            content: <OrdersCard type="close" />
          }]} />
        </div>
      }
    </>
  )
}

export default Order;

Order.Layout = MyLayout;