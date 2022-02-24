import { ApiRegister } from "../../services/apiRegister/ApiRegister";

export const _getListInvoice = async (setMsgCoupon, setListInvoice, setLogisticPrice, setTotalPrice, setCartPrice, setAddressReceiver, setResultCoupon, setLogisticErrors, setIsLoadInvoice) => {
    let response = await ApiRegister().apiRequest(
        null,
        "GET",
        `/api/v1/cart/me/`,
        true,
        {}
    );
    let data = await response.data;
    if (response.status === 200) {
        setListInvoice(data.ordered_items);
        setLogisticPrice(data.logistic_details.total_price);
        setTotalPrice(data.total_price);
        setCartPrice(data.cart_price);
        setAddressReceiver(data.address);
        setResultCoupon(0); // data.coupons_total_price
        setMsgCoupon([]); // data.coupon_usages
        setLogisticErrors(data.logistic_details.errors);
        setIsLoadInvoice(false);
    }
};


export const getSendWayList = async (setListItems, setInvoice) => {
    let response = await ApiRegister().apiRequest(
        null,
        "GET",
        `/api/v1/cart/me/`,
        true,
        {}
    );
    if (response.status === 200) {
        setListItems(response.data.logistic_details.logistic_units);
        setInvoice(response.data);
    }
};