import { errorMessage } from '../../containers/utils/message';
import { ApiRegister } from '../../services/apiRegister/ApiRegister';

export async function completeAuth(data) {
    try {
        let response = await ApiRegister().apiRequest(
            data, "POST", "/api/v1/auth/complete/", true, {}
        );
        if (response.status === 200) {
            return response.data;
        } else {
            errorMessage("خطایی رخ داده است");
            return false;
        }
    } catch (error) {
        errorMessage("خطایی رخ داده است");
        return false;
    }
}