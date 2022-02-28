import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
// city
export const getUserOrders = async (setOrdersList, setLoading) => {
    let response = await ApiRegister().apiRequest(
        null,
        "get",
        `/api/v1/invoices/`,
        true, {}
    );
    if (response.status === 200) {
        setOrdersList(response.data);
        setLoading(false);
    } else {
        setLoading(false);
    }
};