import { authhttp } from "../../../services/callApi/api";
// get Order Detail
export const getOrderDetail = async(invoiceId, setDetailData, setLoading) => {
    let response = await authhttp.get(`/api/v1/invoices/${invoiceId}/`);
    if (response.status === 200) {
        setDetailData(response.data);
        setLoading(false);
    } else {
        setLoading(false);
    }
};