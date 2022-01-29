import { errorMessage } from "../../containers/utils/message";
import { ApiRegister } from "../../services/apiRegister/ApiRegister";
// get advertisment
export const getAdvertisement = async (shop_slug) => {
    try {
        let response = await ApiRegister().apiRequest(
            null, "get",
            `/api/v1/shop_advertisement/${shop_slug}/`,
            true, {}
        );
        if (response.status === 200) {
            return response.data;
        } else if (response.satus === 400) {
            Object.values(response.data).map((err) => {
                if (err) {
                    errorMessage(err);
                }
            });
        } else {
            errorMessage("خطایی در دریافت دادها پیش آمده است");
        }
    } catch (error) {
        errorMessage("خطایی در دریافت دادها پیش آمده است")
    }
};