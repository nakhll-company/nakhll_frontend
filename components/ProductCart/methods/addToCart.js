import { ApiRegister } from '../../../services/apiRegister/ApiRegister';
import { errorMessage, successMessage } from '../../../containers/utils/message';
// api favorites list
export const addToCart = async (idProduct) => {
    let token = localStorage.getItem("accessToken");
    let response = await ApiRegister().apiRequest(
        null,
        "GET",
        `/cart2/api/cart_items/${idProduct}/add/`,
        token ? true : false,
        {}
    );
    if (response.status === 200) {
        successMessage("محصول با موفقیت به سبد خرید شما اضافه شد");
    } else if (response.response.status === 403 || response.response.status === 401) {
        errorMessage("لطفا ابتدا وارد شوید");
    } else if (response.response.status === 400) {
        errorMessage(`${response.response.data[0]}`);
    } else {
        errorMessage("خطایی رخ داده است");
    }
};