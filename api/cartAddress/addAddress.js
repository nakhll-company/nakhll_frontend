import { ApiRegister } from "../../services/apiRegister/ApiRegister";
// get address of user
export async function addAddress(data) {
    try {
        let response = await ApiRegister().apiRequest(
            data,
            "POST",
            "/api/v1/logistic/addresses/",
            true,
            ""
        );
        if (response.status === 201) {
            return true;
        }
    } catch (error) {
        return false;
    }
}