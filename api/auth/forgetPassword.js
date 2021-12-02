import { errorMessage } from '../../containers/utils/message';
import { ApiRegister } from '../../services/apiRegister/ApiRegister';

export async function forgetPassword() {
    try {
        let mobile = sessionStorage.getItem("mobile");
        let response = await ApiRegister().apiRequest(
            { mobile: mobile }, "POST", "/api/v1/auth/begin/forgot_password/", true, {}
        );
        if (response.status === 201) {
            sessionStorage.setItem("login", JSON.stringify(response.data));
            return true;
        } else {
            errorMessage("خطایی رخ داده است");
            return false;
        }

    } catch (error) {
        errorMessage("خطایی رخ داده است");
        return false;
    }
}