import { authhttp } from "../../../services/callApi/api";

export async function buyWaitOrders(id) {
    let response = await authhttp.get(`/api/v1/shop/feature-invoices/${id}/pay/`);

    if (response.status === 200) {
        location.replace(`${response.data.url}`);
    }
}