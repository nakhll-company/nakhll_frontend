import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

export async function buyWaitOrders(id) {
    let response = await ApiRegister().apiRequest(
        null,
        "GET",
        `/api/v1/shop_feature_invoice/${id}/pay/`,
        localStorage.getItem("accessToken"), {}
    );

    if (response.status === 200) {
        location.replace(`${response.data.url}`);
    }
}