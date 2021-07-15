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
import { getUncompleted } from '../../../../redux/actions/orders/getUncompleted';
import { mapState } from '../../../../containers/order/methods/mapState';

function Uncompleted({ ordersList, getUncompleted }) {

    const { width } = useViewport();
    const breakpoint = 620;

    useEffect(() => {
        getUncompleted();
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
                <DesktopOrders ordersList={ordersList} />
            }
        </div>
    );
}
// export
const connector = connect(mapState, { getUncompleted });
export default connector(Uncompleted);
Uncompleted.Layout = MyLayout;