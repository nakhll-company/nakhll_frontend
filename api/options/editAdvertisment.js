import {
    successMessage
} from "../../utils/toastifyMessage";
import {
    authhttp
} from "../../services/callApi/api";
// get advertisment
export const editAdvertisment = async(shop_slug, data) => {
    try {
        const response = await authhttp.patch(
            `/api/v1/shop/advertisements/${shop_slug}/`,
            data
        );
        if (response.status === 200) {
            successMessage("با موفقیت ثبت شد");
            return response.data;
        }
    } catch (error) {
        return false;
    }
};