import { errorMessage } from '../../containers/utils/message';
import { ApiRegister } from '../../services/apiRegister/ApiRegister';

export async function refreshToken() {
    if (localStorage.getItem("refreshToken") && localStorage.getItem("accessToken")) {
        let token = {
            refresh: localStorage.getItem("refreshToken")
        }
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        try {
            let response = await ApiRegister().apiRequest(
                token, "POST", "/api/v1/auth/token/refresh/", true, {}
            );
            if (response.status === 200) {
                localStorage.setItem("accessToken", response.data.access);
            } else {
                errorMessage("خطایی رخ داده است");
                location.replace("/login");
            }
        } catch (error) {
            errorMessage("خطایی رخ داده است");
            location.replace("/login");
        }
    }
}