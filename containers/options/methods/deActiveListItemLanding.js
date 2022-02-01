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
    }
}