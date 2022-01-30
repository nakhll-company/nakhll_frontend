import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

export async function deActiveListItemLanding(id, activeHojreh, router) {
    let response = await ApiRegister().apiRequest(
        null,
        "GET",
        `/api/v1/shop_landing/${activeHojreh}/${id}/deactivate_landing/`,
        true, {}
    );

    if (response.status === 200) {
        router.reload(window.location.pathname);
        // let result = await ApiRegister().apiRequest(
        //     null, "get",
        //     `/api/v1/shop_landing/${activeHojreh}`,
        //     true, {}
        // );

        // if (result.status === 200) {
        //     await setLandingList(result.data);
        // } else {
        //     errorMessage("خطایی رخ داده است");
        // }
    }
}