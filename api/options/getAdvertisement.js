import { authhttp } from "../../services/callApi/api";
// get advertisment
export const getAdvertisement = async(shop_slug) => {
    try {
        let response = await authhttp.get(
            `/api/v1/shop/advertisements/${shop_slug}/`
        );
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        return false;
    }
};