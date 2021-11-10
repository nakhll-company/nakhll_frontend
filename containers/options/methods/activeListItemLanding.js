import { ApiRegister } from '../../../services/apiRegister/ApiRegister';
import { errorMessage } from '../../../containers/utils/message';

export async function activeListItemLanding(id, activeHojreh, setLandingList) {

    let response = await ApiRegister().apiRequest(
        null, "GET",
        `/api/v1/shop_landing/${activeHojreh}/${id}/activate_landing/`,
        true, {}
    );

    if (response.status === 200) {
        let result = await ApiRegister().apiRequest(
            null, "get",
            `/api/v1/shop_landing/${activeHojreh}`,
            true, {}
        );

        if (result.status === 200) {
            setLandingList(await result.data);
        } else {
            errorMessage("خطایی رخ داده است");
        }
    } else {
        errorMessage(response.response.data.error);
    }
}