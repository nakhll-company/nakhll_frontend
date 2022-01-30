import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
import { successMessage } from "../../utils/message";
// big city
export const addToCart = async(productId) => {
    let token = localStorage.getItem("accessToken");
    try {
        let response = await ApiRegister().apiRequest(
            null,
            "get",
            `/cart2/api/cart_items/${productId}/add/`,
            token ? true : false, {}
        );
        if (response.status === 200) {
            successMessage("محصول با موفقیت به سبد خرید شما اضافه شد");
        }
    } catch (error) {}
};