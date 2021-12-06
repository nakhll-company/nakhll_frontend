import { errorMessage } from "../../../containers/utils";
import { ApiRegister } from "../../services/apiRegister/ApiRegister";
// get address of user
export async function sendUserAddress(data, invoiceId) {
    let response = await ApiRegister().apiRequest(
        data,
        "PATCH",
        `/accounting_new/api/invoice/${invoiceId}/set_address/`,
        true,
        ""
    );
    if (response.status === 200) {
        return true;
    } else {
        errorMessage("خطایی در دریافت داده ها پیش آمده است");
    }
}