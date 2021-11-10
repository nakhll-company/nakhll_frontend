import { ApiRegister } from '../../../services/apiRegister/ApiRegister';
import { errorMessage } from '../../../containers/utils/message';

export async function allOptions() {

    let response = await ApiRegister().apiRequest(
        null, "get",
        "/api/v1/shop_feature/",
        true, {}
    );
    if (response.status === 200) {
        return response.data;
    } else {
        errorMessage("خطایی رخ داده است");
    }
}