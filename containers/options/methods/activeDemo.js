import { ApiRegister } from '../../../services/apiRegister/ApiRegister';
import { errorMessage } from '../../../containers/utils/message';

export async function activeDemo(id, activeShop) {

    let response = await ApiRegister().apiRequest(
        {
            feature: id,
            shop: activeShop
        }, "POST",
        `/api/v1/shop_feature_invoice/activate_demo/`,
        true, {}
    );

    if (response.status === 200) {
        location.replace("/fp/options/landing/orders");
    } else {
        errorMessage(response.response.data.error);
    }
}