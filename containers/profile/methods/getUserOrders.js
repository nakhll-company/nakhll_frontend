import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
import { errorMessage } from "../../utils/message";
// city
export const getUserOrders = async (setOrdersList, setLoading) => {
    let response = await ApiRegister().apiRequest(
        null,
        "get",
        `/accounting_new/api/invoice/`,
        true,
        {}
    );
    if (response.status === 200) {
        setOrdersList(response.data);
        setLoading(false);
    } else {
        errorMessage("خطایی در دریافت دادها پیش آمده است");
        setLoading(false);
    }
};