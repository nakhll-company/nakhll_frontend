import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
import { errorMessage, successMessage } from "../../utils/message";
// big city
export const addToCart = async (productId) => {
    let response = await ApiRegister().apiRequest(
        null,
        "get",
        `/cart2/api/cart_items/${productId}/add/`,
        true,
        {}
    );
    if (response.status === 200) {
        successMessage("با موفقیت به سبد خرید شما اضافه شد");
    } else {
        errorMessage("خطایی پیش آماده");
    }
};