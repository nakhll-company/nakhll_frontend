import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

export async function buyOptions(id, activeShop) {
    let response = await ApiRegister().apiRequest({
        feature: id,
        shop: activeShop,
    },
        "POST",
        `/api/v1/shop_feature_invoice/`,
        localStorage.getItem("accessToken"), {}
    );

    if (response.status === 201) {
        let result = await ApiRegister().apiRequest(
            null,
            "GET",
            `/api/v1/shop_feature_invoice/${response.data.id}/pay/`,
            localStorage.getItem("accessToken"), {}
        );

        if (result.status === 200) {
            location.replace(`${result.data.url}`);
        }
    }
}