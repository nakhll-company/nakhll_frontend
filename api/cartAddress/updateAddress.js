import { successMessage } from "../../utils/toastifyMessage";
import { authhttp } from "../../services/callApi/api";
// get address of user
export async function updateAddress(id, data) {
    try {
        let response = await authhttp.put(
            `/api/v1/logistic/addresses/${id}/`,
            data
        );
        if (response.status === 200) {
            successMessage("آدرس مورد نظر با موفقیت ویرایش شد");
        }
    } catch (error) {
        return false;
    }
}