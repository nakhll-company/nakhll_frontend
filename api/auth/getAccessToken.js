import {
    http
} from "../../services/callApi/api";
import {
    setToken
} from "../../utils/setToken";

export async function getAccessToken(data) {
    try {
        const response = await http.post("/api/v1/auth/token/", {
            data,
        });
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