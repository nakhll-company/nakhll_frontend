import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
import { errorMessage, successMessage } from "../../utils/message";
// big city
export const addToCart = async (productId) => {
    let token = localStorage.getItem("accessToken");
    try {
        let response = await ApiRegister().apiRequest(
            null,
            "get",
            `/cart2/api/cart_items/${productId}/add/`,
            token ? true : false,
            {}
        );
        if (response.status === 201) {
            successMessage("محصول با موفقیت به سبد خرید شما اضافه شد");
        } else if (response.response.status === 403) {
            errorMessage("لطفا ابتدا وارد شوید");
        } else if (response.response.status === 400) {
            errorMessage(`${response.response.data[0]}`);
        } else {
            errorMessage("خطایی رخ داده است");
        }
    } catch (error) {
        errorMessage("خطایی در افزودن به سبد خرید پیش آمده");
    }
}