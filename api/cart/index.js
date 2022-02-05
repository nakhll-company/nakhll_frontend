import { ApiRegister } from "../../services/apiRegister/ApiRegister";

export const _getListInvoice = async (setMsgCoupon, setListInvoice, setLogisticPrice, setTotalPrice, setFinalPrice, setAddressReceiver, setResultCoupon, setLogisticErrors, setIsLoadInvoice, invoice_id) => {
    let response = await ApiRegister().apiRequest(
        null,
        "GET",
        `/accounting_new/api/invoice/${invoice_id}/`,
        true,
        {}
    );
    let data = await response.data;
    if (response.status === 200) {
        setListInvoice(data.items);
        setLogisticPrice(data.logistic_price);
        setTotalPrice(data.invoice_price_with_discount);
        setFinalPrice(data.final_price);
        setAddressReceiver(data.address);
        setResultCoupon(data.coupons_total_price);
        setMsgCoupon(data.coupon_usages);
        setLogisticErrors(data.logistic_errors);
        setIsLoadInvoice(false);
    }
};