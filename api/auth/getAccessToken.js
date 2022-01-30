import { ApiRegister } from "../../services/apiRegister/ApiRegister";

export async function getAccessToken(data) {
    try {
        let response = await ApiRegister().apiRequest(
            data,
            "POST",
            "/api/v1/auth/token/",
            false, {}
        );
        if (response.status === 200) {
            localStorage.setItem("accessToken", response.data.access);
            localStorage.setItem("refreshToken", response.data.refresh);
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}