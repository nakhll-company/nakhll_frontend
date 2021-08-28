import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
import { toast } from "react-toastify";
import { errorMessage } from "../../utils/message";
// get address of user
export async function postAddress(data) {
    let response = await ApiRegister().apiRequest(
        data,
        "POST",
        "/logistic/api/address/",
        true,
        ""
    );
    if (response.status === 201) {
        return true;
    } else {
        errorMessage("خطایی در دریافت داده ها پیش آمده است");
    }
}