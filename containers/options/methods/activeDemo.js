import { ApiRegister } from '../../../services/apiRegister/ApiRegister';
import { errorMessage } from '../../../containers/utils/message';

export async function activeDemo(id, activeShop, router) {

    let response = await ApiRegister().apiRequest(
        {
            feature: id,
            shop: activeShop
        }, "POST",
        `/api/v1/shop_feature_invoice/activate_demo/`,
        true, {}
    );

    if (response.status === 200) {
        router.push(`/fp/options/landing/orders?id=${id}`);
    } else {
        errorMessage(response.response.data.error);
    }
}