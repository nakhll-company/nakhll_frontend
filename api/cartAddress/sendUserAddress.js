import { ApiRegister } from "../../services/apiRegister/ApiRegister";
// get address of user
export async function sendUserAddress(data) {
    try {
        let response = await ApiRegister().apiRequest(
            data,
            "PATCH",
            `/api/v1/cart/set_address/`,
            true,
            ""
        );
        if (response.status === 200) {
            return true;
        }
    } catch (error) {
        return false;
    }
}