import { ApiRegister } from "../../services/apiRegister/ApiRegister";

export async function setPassword(data) {
    try {
        let response = await ApiRegister().apiRequest(
            data,
            "POST",
            "/api/v1/profile/set_password/",
            false, {}
        );
        if (response.status === 200) {
            sessionStorage.setItem("accessToken", response.data.access);
            sessionStorage.setItem("refreshToken", response.data.refresh);
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}