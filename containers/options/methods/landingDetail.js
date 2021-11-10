import { ApiRegister } from '../../../services/apiRegister/ApiRegister';
import { errorMessage } from '../../../containers/utils/message';

export async function landingDetal(id) {

    let response = await ApiRegister().apiRequest(
        null, "get",
        `/api/v1/shop_feature/${id}/`,
        true, {}
    );

    if (response.status === 200) {
        return response.data;
    } else {
        errorMessage("خطایی رخ داده است");
    }
}