import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

export async function featureIsActive(id, activeShop, setLandingList) {
    let response = await ApiRegister().apiRequest(
        null,
        "get",
        `/api/v1/shop/feature-invoices/${activeShop}/history/?feature=${id}`,
        true, {}
    );

    if (response.status === 200) {
        let result = await ApiRegister().apiRequest(
            null,
            "get",
            `/api/v1/shop/landings/${activeShop}/`,
            true, {}
        );

        if (result.status === 200) {
            setLandingList(await result.data);
            return response.data;
        }
    } else {
        return false;
    }
}