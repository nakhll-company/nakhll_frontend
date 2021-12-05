import { errorMessage } from '../../containers/utils/message';
import { ApiRegister } from '../../services/apiRegister/ApiRegister';

export async function sendPhoneNumber(data) {
    try {
        let response = await ApiRegister().apiRequest(
            data, "POST", "/api/v1/auth/begin/login_register/", true, {}
        );
        if (response.status === 201) {
            sessionStorage.setItem("mobile", data.mobile);
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