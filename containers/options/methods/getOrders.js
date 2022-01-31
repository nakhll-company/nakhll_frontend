import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

export async function getOrders(id, activeShop) {
    let response = await ApiRegister().apiRequest(
        null,
        "GET",
        `/api/v1/shop_feature_invoice/${activeShop}/history/?feature=${id}`,
        localStorage.getItem("accessToken"), {}
    );

    if (response.status === 200) {
        return response.data;
    }
}