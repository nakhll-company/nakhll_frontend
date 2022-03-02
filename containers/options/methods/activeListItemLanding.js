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
        `/api/v1/shop/landing/${activeHojreh}/${id}/activate_landing/`,
        true, {}
    );

    if (response.status === 200) {
        let result = await ApiRegister().apiRequest(
            null,
            "get",
            `/api/v1/shop/landing/${activeHojreh}/`,
            true, {}
        );

        if (result.status === 200) {
            await setLandingList(result.data);
        }
    }
}