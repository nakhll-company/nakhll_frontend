import { ApiRegister } from '../../../services/apiRegister/ApiRegister';
import { errorMessage, successMessage } from '../../../containers/utils/message';
// api favorites list
export const addToCart = async (idProduct) => {
    let response = await ApiRegister().apiRequest(
        null,
        "GET",
        `/cart2/api/cart_items/${idProduct}/add/`,
        true,
        {}
    );
    if (response.status === 201) {
        successMessage("محصول با موفقیت به سبد خرید شما اضافه شد");
    } else if (response.response.status === 403) {
        errorMessage("لطفا ابتدا لاگین کنید");
    } else {
        errorMessage("خطایی رخ داده است");
    }
};