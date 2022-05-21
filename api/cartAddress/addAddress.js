import {
    authhttp
} from "../../services/callApi/api";
// get address of user
export async function addAddress(data) {
    try {
        const response = await authhttp.post("/api/v1/logistic/addresses/", data);
        if (response.status === 201) {
            return true;
        }
    } catch (error) {
        return false;
    }
}