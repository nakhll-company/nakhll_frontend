import { ApiRegister } from "../../services/apiRegister/ApiRegister";

export async function sendPhoneNumber(data) {
    try {
        let response = await ApiRegister().apiRequest(
            data,
            "POST",
            "/api/v1/auth/begin/login_register/",
            false, {}
        );
        if (response.status === 201) {
            sessionStorage.setItem("mobile", data.mobile);
            return response.data;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}