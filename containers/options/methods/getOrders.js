import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

export async function getOrders(id, activeShop) {
    let response = await ApiRegister().apiRequest(
        null,
        "GET",
        `/api/v1/shop/feature-invoices/${activeShop}/history/?feature=${id}`,
        true, {}
    );

    if (response.status === 200) {
        return response.data;
    }
}