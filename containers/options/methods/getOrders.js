import { ApiRegister } from '../../../services/apiRegister/ApiRegister';
import { errorMessage } from '../../../containers/utils/message';

export async function getOrders(id, activeShop) {

    let response = await ApiRegister().apiRequest(
        null, "GET",
        `/api/v1/shop_feature_invoice/${activeShop}/history/?feature=${id}`,
        true, {}
    );

    if (response.status === 200) {
        return response.data;
    } else {
        errorMessage(response.response.data.error);
    }
}