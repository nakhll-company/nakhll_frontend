import { ApiRegister } from '../../../services/apiRegister/ApiRegister';
import { errorMessage } from '../../../containers/utils/message';

export async function buyOptions(id, activeShop) {

    let response = await ApiRegister().apiRequest(
        {
            feature: id,
            shop: activeShop
        }, "POST",
        `/api/v1/shop_feature_invoice/`,
        true, {}
    );

    if (response.status === 201) {

        let result = await ApiRegister().apiRequest(
            null, "GET",
            `/api/v1/shop_feature_invoice/${response.data.id}/pay/`,
            true, {}
        );

        if (result.status === 400) {
            errorMessage("خطایی رخ داده است");
        }

    } else {
        errorMessage("خطایی رخ داده است");
    }
}