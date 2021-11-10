import { ApiRegister } from '../../../services/apiRegister/ApiRegister';
import { errorMessage } from '../../../containers/utils/message';

export async function buyWaitOrders(id) {

    let response = await ApiRegister().apiRequest(
        null, "GET",
        `/api/v1/shop_feature_invoice/${id}/pay/`,
        true, {}
    );

    if (response.status === 200) {
    } else {
        errorMessage(response.response.data[0]);
    }
}