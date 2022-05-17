import {
    ApiRegister
} from "../../services/apiRegister/ApiRegister";
import {
    setToken
} from "../../utils/setToken";

export async function getAccessToken(data) {
    try {
        const response = await ApiRegister().apiRequest(
            data,
            "POST",
            "/api/v1/auth/token/",
            false, {}
        );
        if (response.status === 200) {
            setToken(response.data);

            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}