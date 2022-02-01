import { ApiRegister } from "../../services/apiRegister/ApiRegister";

export async function forgetPassword() {
    try {
        let mobile = sessionStorage.getItem("mobile");
        let response = await ApiRegister().apiRequest({ mobile: mobile },
            "POST",
            "/api/v1/auth/begin/forgot_password/",
            false, {}
        );
        if (response.status === 201) {
            sessionStorage.setItem("login", JSON.stringify(response.data));
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}