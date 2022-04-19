import { ApiRegister } from "../../services/apiRegister/ApiRegister";
import { http } from "../../services/callApi/api";

export async function resendCode(data) {
    try {
        let response = await http.patch(
            "/api/v1/auth/begin/resend_sms_code/",
            data
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