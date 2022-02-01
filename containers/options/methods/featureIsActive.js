import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

export async function featureIsActive(id, activeShop, setLandingList) {
    let response = await ApiRegister().apiRequest(
        null,
        "get",
        `/api/v1/shop_feature_invoice/${activeShop}/history/?feature=${id}`,
        localStorage.getItem("accessToken"), {}
    );

    if (response.status === 200) {
        let result = await ApiRegister().apiRequest(
            null,
            "get",
            `/api/v1/shop_landing/${activeShop}/`,
            localStorage.getItem("accessToken"), {}
        );

        if (result.status === 200) {
            setLandingList(await result.data);
            return response.data;
        }
    } else {

    }
}