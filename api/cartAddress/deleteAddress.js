import { ApiRegister } from "../../services/apiRegister/ApiRegister";
import { successMessage } from "../../containers/utils/message";
// get address of user
export async function deleteAddress(id) {
    try {
        let response = await ApiRegister().apiRequest(
            null,
            "DELETE",
            `/api/v1/logistic/addresses/${id}/`,
            true,
            ""
        );
        if (response.status === 204) {
            successMessage("آدرس مورد نظر حذف شد");
        }
    } catch (error) {
        return false;
    }
}