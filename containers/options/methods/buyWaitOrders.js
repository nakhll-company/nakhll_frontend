import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

export async function buyWaitOrders(id) {
    let response = await ApiRegister().apiRequest(
        null,
        "GET",
        `/api/v1/shop/feature-invoices/${id}/pay/`,
        true, {}
    );

    if (response.status === 200) {
        location.replace(`${response.data.url}`);
    }
}