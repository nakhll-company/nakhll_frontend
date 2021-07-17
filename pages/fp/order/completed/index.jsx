// node libraries
import { useEffect } from 'react';
import { connect } from 'react-redux';
// components
import MyLayout from '../../../../components/layout/Layout';
import useViewport from '../../../../components/viewPort';
import CustomTab from '../../../../components/custom/customTab';
import MobileHeader from '../../../../components/mobileHeader';
import MobileOrders from '../../../../containers/order/mobileOrders';
import DesktopOrders from '../../../../containers/order/desktopOrders';
// methods
import { getCompleted } from '../../../../redux/actions/orders/getCompleted';
import { mapState } from '../../../../containers/order/methods/mapState';

function Completed({ ordersList, getCompleted }) {

    const { width } = useViewport();
    const breakpoint = 620;

    useEffect(() => {
        getCompleted();
    }, []);

    return (
        <div>
            {width < breakpoint ?
                <div>
                    <MobileHeader title="سفارشات" type="search" />
                    <CustomTab tab={[{
                        title: "سفارشات باز",
                        content: <MobileOrders type="uncompleted" />
                    },
                    {
                        title: "سفارشات بسته",
                        content: <MobileOrders type="completed" />
                    }]} />
                </div> :
                <DesktopOrders ordersList={ordersList} type="completed" />
            }
        </div>
    );
}
// export
const connector = connect(mapState, { getCompleted });
export default connector(Completed);
Completed.Layout = MyLayout;