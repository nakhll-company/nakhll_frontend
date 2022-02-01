import { ApiRegister } from "../../services/apiRegister/ApiRegister";

export async function completeAuth(data) {
    try {
        let response = await ApiRegister().apiRequest(
            data,
            "POST",
            "/api/v1/auth/complete/",
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