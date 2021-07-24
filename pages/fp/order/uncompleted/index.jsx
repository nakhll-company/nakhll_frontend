// node libraries
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// components
import MyLayout from '../../../../components/layout/Layout';
import useViewport from '../../../../components/viewPort';
import MobileHeader from '../../../../components/mobileHeader';
import MobileOrders from '../../../../containers/order/mobileOrders';
import DesktopOrders from '../../../../containers/order/desktopOrders';
// methods
import { getUncompleted } from '../../../../redux/actions/orders/getUncompleted';
import { mapState } from '../../../../containers/order/methods/mapState';

function Uncompleted({ ordersList, activeHojreh, getUncompleted }) {

    let [loading, setLoading] = useState(false);
    const { width } = useViewport();
    const breakpoint = 620;

    useEffect(() => {
        async function getData() {
            await setLoading(true);
            if (activeHojreh.length > 0) {
                await getUncompleted(activeHojreh);
            }
            await setLoading(false);
        }
        getData();
    }, [getUncompleted, activeHojreh]);

    return (
        <>
            {width < breakpoint ?
                <div>
                    <MobileHeader title="سفارشات تکمیل نشده" type="search" />
                    <MobileOrders ordersList={ordersList} loading={loading} />
                </div> :
                <DesktopOrders
                    loading={loading}
                    activeHojreh={activeHojreh}
                    ordersList={ordersList}
                    getUncompleted={getUncompleted}
                    type="uncompleted" />
            }
        </>
    );
}
// export
const connector = connect(mapState, { getUncompleted });
export default connector(Uncompleted);
Uncompleted.Layout = MyLayout;