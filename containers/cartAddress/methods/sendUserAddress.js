import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
import { toast } from "react-toastify";
import { errorMessage } from "../../utils/message";
// get address of user
export async function sendUserAddress(data) {
    let response = await ApiRegister().apiRequest(
        data,
        "PATCH",
        "/accounting_new/api/invoice/set_address/",
        true,
        ""
    );
    if (response.status === 200) {
        return true;
    } else {
        errorMessage("خطایی در دریافت داده ها پیش آمده است");
    }
}