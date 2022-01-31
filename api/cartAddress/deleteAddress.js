import { ApiRegister } from "../../services/apiRegister/ApiRegister";
import { errorMessage, successMessage } from "../../containers/utils/message";
// get address of user
export async function deleteAddress(id) {
    try {
        let response = await ApiRegister().apiRequest(
            null,
            "DELETE",
            `/logistic/api/address/${id}/`,
            localStorage.getItem("accessToken"),
            ""
        );
        if (response.status === 204) {
            successMessage("آدرس مورد نظر حذف شد");
        } else { }
    } catch (error) { }
}