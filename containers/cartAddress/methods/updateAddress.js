import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

import { errorMessage, successMessage } from "../../utils/message";
// get address of user
export async function updateAddress(id, data) {
    let response = await ApiRegister().apiRequest(
        data,
        "PUT",
        `/logistic/api/address/${id}/`,
        true,
        ""
    );
    if (response.status === 200) {
        successMessage("آدرس مورد نظر حذف شد");
    } else {
        errorMessage("خطایی در دریافت داده ها پیش آمده است");
    }
}