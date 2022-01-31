import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
// city
export const getUserOrders = async (setOrdersList, setLoading) => {
    let response = await ApiRegister().apiRequest(
        null,
        "get",
        `/accounting_new/api/invoice/`,
        localStorage.getItem("accessToken"), {}
    );
    if (response.status === 200) {
        setOrdersList(response.data);
        setLoading(false);
    } else {
        setLoading(false);
    }
};