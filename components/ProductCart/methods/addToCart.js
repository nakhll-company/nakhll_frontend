import { successMessage } from "../../../utils/toastifyMessage";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
// api favorites list
export const addToCart = async (idProduct) => {
    let token = localStorage.getItem("accessToken");
    let response = await ApiRegister().apiRequest(
        {
            "product": idProduct,
            "count": 1
        },
        "post",
        `/api/v1/cart/items/`,
        token ? true : false, {}
    );
    if (response.status === 201) {
        successMessage("محصول با موفقیت به سبد خرید شما اضافه شد");
    }
};