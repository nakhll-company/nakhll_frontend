import { ApiRegister } from '../../../services/apiRegister/ApiRegister';
import { errorMessage } from '../../../containers/utils/message';

export async function featureIsActive(id, activeShop, setLandingList) {

    let response = await ApiRegister().apiRequest(
        null, "get",
        `/api/v1/shop_feature_invoice/${activeShop}/history/?feature=${id}`,
        true, {}
    );

    if (response.status === 200) {

        let result = await ApiRegister().apiRequest(
            null, "get",
            `/api/v1/shop_landing/${activeShop}`,
            true, {}
        );

        if (result.status === 200) {
            setLandingList(await result.data);
            return response.data;
        } else {
            errorMessage("خطایی رخ داده است");
        }

    } else {
        errorMessage("خطایی رخ داده است");
    }
}