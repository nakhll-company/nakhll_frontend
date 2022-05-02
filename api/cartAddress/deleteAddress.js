import { successMessage } from "../../utils/toastifyMessage";

import { authhttp } from "../../services/callApi/api";
// get address of user
export async function deleteAddress(id) {
    try {
        let response = await authhttp.delete(`/api/v1/logistic/addresses/${id}/`);
        if (response.status === 204) {
            successMessage("آدرس مورد نظر حذف شد");
        }
    } catch (error) {
        return false;
    }
}