import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

export async function activeListItemLanding(
    id,
    activeHojreh,
    router,
    setLandingList
) {
    let response = await ApiRegister().apiRequest(
        null,
        "GET",
        `/api/v1/shop_landing/${activeHojreh}/${id}/activate_landing/`,
        localStorage.getItem("accessToken"), {}
    );

    if (response.status === 200) {
        let result = await ApiRegister().apiRequest(
            null,
            "get",
            `/api/v1/shop_landing/${activeHojreh}/`,
            localStorage.getItem("accessToken"), {}
        );

        if (result.status === 200) {
            await setLandingList(result.data);
        }
    }
}