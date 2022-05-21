import {
    authhttp
} from "../../../services/callApi/api";

export async function activeListItemLanding(
    id,
    activeHojreh,
    router,
    setLandingList
) {
    const response = await authhttp.get(
        `/api/v1/shop/landings/${activeHojreh}/${id}/activate_landing/`
    );

    if (response.status === 200) {
        const result = await authhttp.get(`/api/v1/shop/landings/${activeHojreh}/`);

        if (result.status === 200) {
            await setLandingList(result.data);
        }
    }
}