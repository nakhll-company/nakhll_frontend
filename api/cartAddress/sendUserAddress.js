import { ApiRegister } from "../../services/apiRegister/ApiRegister";
// get address of user
export async function sendUserAddress(data, invoiceId) {
    try {
        let response = await ApiRegister().apiRequest(
            data,
            "PATCH",
            `/accounting_new/api/invoice/${invoiceId}/set_address/`,
            localStorage.getItem("accessToken"),
            ""
        );
        if (response.status === 200) {
            return true;
        }
    } catch (error) { }
}