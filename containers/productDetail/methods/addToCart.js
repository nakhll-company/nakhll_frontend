import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
import { successMessage } from "../../utils/message";
// big city
export const addToCart = async (productId) => {
    let token = localStorage.getItem("accessToken");
    try {
        let response = await ApiRegister().apiRequest(
            {
                "product": productId,
                "count": 1
            },
            "post",
            `/api/v1/cart/items/`,
            token ? true : false, {}
        );
        if (response.status === 201) {
            successMessage("محصول با موفقیت به سبد خرید شما اضافه شد");
        }
    } catch (error) {
        return false;
    }
};