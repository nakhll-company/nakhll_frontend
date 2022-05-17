import {
    authhttp
} from "../../../services/callApi/api";

export async function deActiveListItemLanding(id, activeHojreh, router) {
    const response = await authhttp.get(
        `/api/v1/shop/landings/${activeHojreh}/${id}/deactivate_landing/`
    );
    if (response.status === 200) {
        router.reload(window.location.pathname);
    }
}