import { authhttp } from "../../../services/callApi/api";

export async function getOrders(id, activeShop) {
    let response = await authhttp.get(
        `/api/v1/shop/feature-invoices/${activeShop}/history/?feature=${id}`
    );
    if (response.status === 200) {
        return response.data;
    }
}