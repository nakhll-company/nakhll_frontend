import { ApiRegister } from "../../services/apiRegister/ApiRegister";
import { setToken } from "../../utils/setToken";

export async function setPassword(data) {
    try {
        let response = await ApiRegister().apiRequest(
            data,
            "POST",
            "/api/v1/profile/set_password/",
            false, {}
        );
        if (response.status === 200) {
            setToken(response.data)

            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}