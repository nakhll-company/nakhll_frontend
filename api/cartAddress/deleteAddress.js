import { ApiRegister } from "../../services/apiRegister/ApiRegister";
import { errorMessage, successMessage } from "../../containers/utils/message";
// get address of user
export async function deleteAddress(id) {
    let response = await ApiRegister().apiRequest(
        null,
        "DELETE",
        `/logistic/api/address/${id}/`,
        true,
        ""
    );
    if (response.status === 204) {
        successMessage("آدرس مورد نظر حذف شد");
    } else {
        errorMessage("خطایی در دریافت داده ها پیش آمده است");
    }
}