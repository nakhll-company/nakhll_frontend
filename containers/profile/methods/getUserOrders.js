import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
import { errorMessage } from "../../utils/message";
// city
export const getUserOrders = async (setOrdersList) => {
    let response = await ApiRegister().apiRequest(
        null,
        "get",
        `/api/v1/profile/orders/`,
        true,
        {}
    );
    if (response.status === 200) {
        setOrdersList(response.data);
    } else {
        errorMessage("خطایی در دریافت دادها پیش آمده است");
    }
};