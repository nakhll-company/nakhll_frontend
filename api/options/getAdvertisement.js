import { ApiRegister } from "../../services/apiRegister/ApiRegister";
// get advertisment
export const getAdvertisement = async (shop_slug) => {
    try {
        let response = await ApiRegister().apiRequest(
            null,
            "get",
            `/api/v1/shop/advertisements/${shop_slug}/`,
            true, {}
        );
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        return false;
    }
};