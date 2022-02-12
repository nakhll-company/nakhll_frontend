import { ApiRegister } from "../../services/apiRegister/ApiRegister";
// get address of user
export async function getAddress(setAddress) {
    try {
        let response = await ApiRegister().apiRequest(
            null,
            "GET",
            "/api/v1/logistic/addresses/",
            true,
            ""
        );
        if (response.status === 200) {
            setAddress(response.data);
        }
    } catch (error) {
        return false;
    }
}