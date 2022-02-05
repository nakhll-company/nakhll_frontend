import { ApiRegister } from "../../services/apiRegister/ApiRegister";
// get address of user
export async function getAddress(setAddress) {
    try {
        let response = await ApiRegister().apiRequest(
            null,
            "GET",
            "/logistic/api/address/",
            true,
            ""
        );
        if (response.status === 200) {
            setAddress(response.data);
        }
    } catch (error) { }
}