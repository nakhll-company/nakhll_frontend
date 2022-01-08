import { errorMessage } from "../../containers/utils/message";
import { ApiRegister } from "../../services/apiRegister/ApiRegister";
// get advertisment
export const editAdvertisment = async (shop_slug, data) => {

    let response = await ApiRegister().apiRequest(
        data, "PATCH",
        `/api/v1/shop_advertisement/${shop_slug}/`,
        true, {}
    );
    if (response.status === 200) {
        return response.data;
    } else if (response.response?.status === 400) {
        Object.values(response.response.data).map((errors) => {
            errors.map((error) => {
                errorMessage(error);
            })
        });
    } else {
        errorMessage("خطایی در دریافت دادها پیش آمده است");
    }
};