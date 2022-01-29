import { ApiRegister } from "../../services/apiRegister/ApiRegister";
import { errorMessage, successMessage } from "../../containers/utils/message";
// get address of user
export async function updateAddress(id, data) {
    try {
        let response = await ApiRegister().apiRequest(
            data,
            "PUT",
            `/logistic/api/address/${id}/`,
            true,
            ""
        );
        if (response.status === 200) {
            successMessage("آدرس مورد نظر با موفقیت ویرایش شد");
        } else {
            errorMessage("خطایی در دریافت داده ها پیش آمده است");
        }
    } catch (error) {
        errorMessage("خطایی در دریافت داده ها پیش آمده است");
    }
}