import { errorMessage } from "../../containers/utils/message";
import { ApiRegister } from "../../services/apiRegister/ApiRegister";

export async function resendCode(data) {
    try {
        let response = await ApiRegister().apiRequest(
            data,
            "PATCH",
            "/api/v1/auth/begin/resend_sms_code/",
            false, {}
        );
        if (response.status === 200) {
            return response.data;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}