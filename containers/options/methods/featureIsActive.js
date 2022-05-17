import {
    authhttp
} from "../../../services/callApi/api";

export async function featureIsActive(id, activeShop, setLandingList) {
    const response = await authhttp.get(
        `/api/v1/shop/feature-invoices/${activeShop}/history/?feature=${id}`
    );

    if (response.status === 200) {
        const result = await authhttp.get(`/api/v1/shop/landings/${activeShop}/`);
        if (result.status === 200) {
            setLandingList(await result.data);
            return response.data;
        }
    } else {
        return false;
    }
}